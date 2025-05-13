// Import necessary libraries and components
import { Truck } from "lucide-react";
import toast from "react-hot-toast";

// Import shirts data and types
import { shirts } from "../../data.json";
import { type ProductProps } from "../types/types";

// Import components
import { ImageMiniature } from "../components/ImageMiniature";
import { ImageOptions } from "../components/ImageOptions";
import { SizeOptions } from "../components/SizeOptions";
import { ImageOption } from "../components/ImageOption";
import { AddressContent } from "../components/AddressContent";
import { ProductDetails } from "../components/ProductDetails";

// Import hooks
import { useCep } from "../hooks/useCep";
import { useProduct } from "../hooks/useProduct";

export function ProductPage() {
  const sizes = ["P", "M", "G", "GG"];
  const products: ProductProps[] = shirts;

  const {
    currentProduct,
    currentImage,
    currentSize,
    setCurrentImage,
    setCurrentSize,
    selectProduct,
  } = useProduct();

  const { address, currentCep, showAddress, handleCepChange } = useCep();

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          <ProductDetails currentProduct={currentProduct} />
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
                    selectProduct(product);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">
              Tamanho: {currentSize || "Selecione um tamanho"}
            </h3>
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

              <button
                className="px-4 py-4 rounded-md border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600/10"
                onClick={() =>
                  window.open(
                    "https://buscacepinter.correios.com.br/app/endereco/index.php",
                    "_blank"
                  )
                }
              >
                <span>Não sei meu CEP</span>
              </button>
            </div>
          </div>
          <div>
            {showAddress && address && <AddressContent address={address} />}
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
