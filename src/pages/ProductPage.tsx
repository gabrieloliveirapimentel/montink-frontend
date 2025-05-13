import { Truck } from "lucide-react";

import productImg from "../assets/PI3-5765-014_zoom1.webp";
import productImg2 from "../assets/PI3-5765-014_zoom2.webp";
import productImg3 from "../assets/PI3-5765-014_zoom3.webp";
import productImg4 from "../assets/PI3-5765-014_zoom4.webp";

export function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200">
            <img src={productImg} alt="Produto" className="object-cover" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button className="relative w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 border-orange-600">
              <img src={productImg} className="object-cover" />
            </button>
            <button className="relative w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 border-gray-100">
              <img src={productImg2} className="object-cover" />
            </button>
            <button className="relative w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 border-gray-100">
              <img src={productImg3} className="object-cover" />
            </button>
            <button className="relative w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 border-gray-100">
              <img src={productImg4} className="object-cover" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Camisa Puma No. 1 - Branca
            </h1>
            <span className="text-xl md:text-2xl font-semibold mt-2 text-orange-600">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(67.99)}
            </span>
          </div>
          <span className="text-gray-500">
            Vista o conforto e estilo da Camiseta Puma! Confeccionada em tecido
            macio, oferece alta respirabilidade e toque agradável à pele,
            garantindo bem-estar em qualquer ocasião. Com modelagem regular,
            proporciona caimento leve e versátil, combina facilmente com jeans e
            tênis para looks casuais. Prática e moderna, é daquelas peças
            indispensáveis no guarda-roupa de quem busca simplicidade com
            estilo. Não perca tempo - peça sua camiseta Puma e aproveite!
          </span>
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Cor: Branco</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-md border-2 border-orange-600 bg-orange-600/10 text-orange-600 font-bold">
                Branco
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400">
                Cinza
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400">
                Preto
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Tamanho: P</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-md border-2 border-orange-600 text-orange-600 bg-orange-600/10 font-bold">
                P
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400">
                M
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400">
                G
              </button>
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
