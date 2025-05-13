import { Truck } from "lucide-react";

import productImg from "../assets/product1.png";
import productImg2 from "../assets/product2.png";
import productImg3 from "../assets/product3.png";
import productImg4 from "../assets/product4.png";

export function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-200">
            <img src={productImg} alt="Produto" className="object-cover" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button className="relative w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 border-2 border-[#F24D0D]">
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
            <h1 className="text-2xl md:text-3xl font-bold">Nome do produto</h1>
            <span className="text-xl md:text-2xl font-semibold mt-2 text-primary">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(120.99)}
            </span>
          </div>
          <span className="text-gray-600">Descrição qualquer do produto</span>
          <div className="space-y-3">
            <h3 className="font-medium">Cor: Azul</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-md border-2 border-[#F24D0D] text-[#F24D0D] font-bold">
                Preto
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400">
                Branco
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400">
                Azul
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Tamanho: P</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-md border-2 border-[#F24D0D] text-[#F24D0D] font-bold">
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
            <h3 className="font-medium flex items-center gap-2">
              <Truck size={18} />
              Calcular frete e prazo de entrega
            </h3>

            <div className="flex gap-2">
              <div className="w-40">
                <input
                  type="text"
                  placeholder="CEP"
                  maxLength={9}
                  className="w-full"
                />
              </div>
              <button className="px-4 py-2 rounded-md border-2 border-[#F24D0D] bg-primary text-[#F24D0D] font-bold hover:bg-primary/90">
                Não sei meu CEP
              </button>
            </div>
          </div>

          <button className="bg-[#F24D0D] px-4 py-2 rounded-md border border-primary bg-primary text-white hover:bg-primary/90">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
