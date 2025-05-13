import { useState } from "react";
import { type AddressProps } from "../types/types";
import { formatCep } from "../utils/format";
import { getCep } from "../utils/api";
import toast from "react-hot-toast";

export function useCep() {
  const [currentCep, setCurrentCep] = useState<string>("");
  const [address, setAddress] = useState<AddressProps>();
  const [showAddress, setShowAddress] = useState<boolean>(false);

  function handleResetCep() {
    setAddress({
      street: "",
      neighborhood: "",
      city: "",
      state: "",
    });
    setShowAddress(false);
  }

  async function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formattedCep = formatCep(e.target.value);
    setCurrentCep(formattedCep);

    if (formattedCep.length === 9) {
      const data = await getCep(e.target.value);

      if (data.data.erro) {
        toast.error("CEP inválido, tente novamente!");
        handleResetCep();

        return;
      }

      try {
        const { logradouro, bairro, localidade, uf } = data.data;
        setAddress({
          street: logradouro,
          neighborhood: bairro,
          city: localidade,
          state: uf,
        });
        setShowAddress(true);
      } catch (error) {
        console.error("Error fetching address data:", error);
        handleResetCep();
      }
    } else {
      handleResetCep();
    }
  }

  return { currentCep, address, showAddress, handleCepChange };
}
