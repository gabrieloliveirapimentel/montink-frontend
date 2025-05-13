import type { ProductDetailsProps } from "../types/types";
import { formatCurrency } from "../utils/format";

export function ProductDetails({ currentProduct }: ProductDetailsProps) {
  return (
    <>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {currentProduct.name} - {currentProduct.color}
        </h1>
        <span className="text-xl md:text-2xl font-semibold mt-2 text-orange-600">
          {formatCurrency(currentProduct.price)}
        </span>
      </div>
      <span className="text-gray-500">{currentProduct.description}</span>
    </>
  );
}
