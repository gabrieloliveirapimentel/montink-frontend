import type { ImageOptionsProps } from "../types/types";

export function ImageOptions({
  product,
  currentProduct,
  handleFn,
}: ImageOptionsProps) {
  return (
    <button
      key={product.id}
      className={`relative w-10 h-10 rounded-md overflow-hidden flex-shrink-0 border-2 ${
        currentProduct.color === product.color
          ? "border-orange-600"
          : "border-gray-100"
      }`}
      onClick={handleFn}
    >
      <img src={product.images[0]} className="object-cover" />
    </button>
  );
}
