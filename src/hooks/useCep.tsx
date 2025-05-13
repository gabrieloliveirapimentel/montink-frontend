import { useEffect, useState } from "react";
import { type AddressProps } from "../types/types";
import { formatCep } from "../utils/format";
import { getCep } from "../utils/api";
import toast from "react-hot-toast";

export function useCep() {
  const [currentCep, setCurrentCep] = useState<string>("");
  const [address, setAddress] = useState<AddressProps>();
  const [showAddress, setShowAddress] = useState<boolean>(false);

  useEffect(() => {
    const savedData = localStorage.getItem("current-cep");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        const timestamp = parsedData.timestamp || 0;
        const now = new Date().getTime();

        if (now - timestamp < 900000) {
          setCurrentCep(parsedData);
        } else {
          localStorage.removeItem("current-cep");
        }
      } catch (error) {
        console.error("Erro ao carregar dados salvos:", error);
      }
    }
  }, []);

  function handleResetCep() {
    setAddress({
      street: "",
      neighborhood: "",
      city: "",
      state: "",
    });
    setShowAddress(false);
    localStorage.removeItem("current-cep");
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
        const formattedAddress = {
          street: logradouro,
          neighborhood: bairro,
          city: localidade,
          state: uf,
        };

        setAddress(formattedAddress);
        setShowAddress(true);
        localStorage.setItem("current-cep", JSON.stringify(formattedAddress));
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
