import { Truck } from "lucide-react";
import { shirts } from "../../data.json";
import { useState } from "react";
import { formatCep, formatCurrency } from "../utils/format";
import { getCep } from "../utils/api";
import type { AddressProps, ProductProps } from "../types/types";
import toast from "react-hot-toast";
import { ImageMiniature } from "../components/ImageMiniature";
import { ImageOptions } from "../components/ImageOptions";
import { SizeOptions } from "../components/SizeOptions";
import { ImageOption } from "../components/ImageOption";

export function ProductPage() {
  const sizes = ["P", "M", "G", "GG"];
  const products: ProductProps[] = shirts;
  const [currentProduct, setCurrentProduct] = useState<ProductProps>(shirts[0]);

  const [currentSize, setCurrentSize] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>(
    currentProduct.images[0]
  );

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

  function handleSubmit() {
    if (currentSize === "") {
      toast.error("Selecione um tamanho!");
      return;
    }

    if (currentCep.length < 9) {
      toast.error("Digite um CEP válido!");
      return;
    }

    toast.success("Produto adicionado ao carrinho!");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <ImageOption currentImage={currentImage} />
          <div className="flex gap-2 overflow-x-auto pb-2">
            {currentProduct.images.map((image, index) => (
              <ImageMiniature
                key={index}
                image={image}
                index={index}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                currentProduct={currentProduct}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {currentProduct.name} - {currentProduct.color}
            </h1>
            <span className="text-xl md:text-2xl font-semibold mt-2 text-orange-600">
              {formatCurrency(currentProduct.price)}
            </span>
          </div>
          <span className="text-gray-500">{currentProduct.description}</span>
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">
              Cor: {currentProduct.color}
            </h3>
            <div className="flex flex-wrap gap-3">
              {products.map((product, index) => (
                <ImageOptions
                  key={index}
                  product={product}
                  currentProduct={currentProduct}
                  handleFn={() => {
                    setCurrentSize("");
                    setCurrentProduct(product);
                    setCurrentImage(product.images[0]);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Tamanho: P</h3>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <SizeOptions
                  key={size}
                  size={size}
                  currentSize={currentSize}
                  setCurrentSize={setCurrentSize}
                  currentProduct={currentProduct}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-2">
              <Truck size={18} />
              <span className="text-l font-semibold text-gray-900">
                Calcular frete e prazo de entrega
              </span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="CEP"
                value={currentCep}
                onChange={handleCepChange}
                maxLength={9}
                className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600"
              />

              <button className="px-4 py-4 rounded-md border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600/10">
                <span>Não sei meu CEP</span>
              </button>
            </div>
          </div>
          <div>
            {showAddress && address && (
              <div className="flex flex-col gap-2">
                <span className="text-gray-900 font-semibold">Endereço:</span>
                <input
                  type="text"
                  placeholder="Rua"
                  value={address.street}
                  readOnly
                  className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 "
                />
                <div className="flex flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Bairro"
                    value={address.neighborhood}
                    readOnly
                    className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 w-[80%]"
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    value={address.city}
                    readOnly
                    className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 "
                  />
                  <input
                    type="text"
                    placeholder="Estado"
                    value={address.state}
                    readOnly
                    className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 w-[50%]"
                  />
                </div>
              </div>
            )}
          </div>

          <button
            className="bg-orange-600 hover:bg-orange-700 px-4 py-4 rounded-md border border-primary font-medium text-white"
            onClick={handleSubmit}
          >
            <span>Adicionar ao carrinho</span>
          </button>
        </div>
      </div>
    </div>
  );
}
