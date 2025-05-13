import type { SizeOptionsProps } from "../types/types";

export function SizeOptions({
  size,
  currentSize,
  setCurrentSize,
  currentProduct,
}: SizeOptionsProps) {
  return (
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
  );
}
