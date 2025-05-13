import { Truck } from "lucide-react";
import { shirts } from "../../data.json";
import { useState } from "react";

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  color: string;
  sizes: string[];
  price: number;
  images: string[];
}

export function ProductPage() {
  const sizes = ["P", "M", "G", "GG"];
  const products: ProductProps[] = shirts;
  const [currentProduct, setCurrentProduct] = useState<ProductProps>(shirts[0]);

  const [currentImage, setCurrentImage] = useState<string>(
    currentProduct.images[0]
  );
  const [currentColor, setCurrentColor] = useState<string>("");
  const [currentSize, setCurrentSize] = useState<string>("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200">
            <img src={currentImage} alt="Produto" className="object-cover" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {currentProduct.images.map((image, index) => (
              <button
                key={index}
                className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                  currentImage === image
                    ? "border-orange-600"
                    : "border-gray-100"
                }`}
                onClick={() => setCurrentImage(currentProduct.images[index])}
              >
                <img src={image} className="object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {currentProduct.name} - {currentProduct.color}
            </h1>
            <span className="text-xl md:text-2xl font-semibold mt-2 text-orange-600">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(currentProduct.price))}
            </span>
          </div>
          <span className="text-gray-500">{currentProduct.description}</span>
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">
              Cor: {currentProduct.color}
            </h3>
            <div className="flex flex-wrap gap-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  className={`relative w-10 h-10 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                    currentProduct.color === product.color
                      ? "border-orange-600"
                      : "border-gray-100"
                  }`}
                  onClick={() => {
                    setCurrentSize("");
                    setCurrentProduct(product);
                    setCurrentImage(product.images[0]);
                  }}
                >
                  <img src={product.images[0]} className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Tamanho: P</h3>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-md border-2 ${
                    currentSize === size
                      ? "border-orange-600 text-orange-600"
                      : "border-gray-300 text-gray-500"
                  } ${!currentProduct.sizes.includes(size) && "opacity-50"}
                  }`}
                  onClick={() => {
                    setCurrentSize(size);
                  }}
                  disabled={!currentProduct.sizes.includes(size)}
                >
                  {size}
                </button>
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
                maxLength={9}
                className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600"
              />

              <button className="px-4 py-4 rounded-md border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600/10">
                <span>Não sei meu CEP</span>
              </button>
            </div>
          </div>

          <button className="bg-orange-600 hover:bg-orange-700 px-4 py-4 rounded-md border border-primary font-medium text-white">
            <span>Adicionar ao carrinho</span>
          </button>
        </div>
      </div>
    </div>
  );
}
