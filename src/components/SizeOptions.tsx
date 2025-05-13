import { useEffect } from "react";
import type { SizeOptionsProps } from "../types/types";

export function SizeOptions({
  size,
  currentSize,
  setCurrentSize,
  currentProduct,
}: SizeOptionsProps) {
  useEffect(() => {
    const storedProduct = localStorage.getItem("current-product");
    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      setCurrentSize(parsedProduct.currentSize || "");
    }
  }, [setCurrentSize]);

  function handleSelectSize(size: string) {
    setCurrentSize(size);

    const storedProduct = localStorage.getItem("current-product");
    const updatedProduct = {
      ...(storedProduct ? JSON.parse(storedProduct) : {}),
      currentSize: size,
    };

    localStorage.setItem("current-product", JSON.stringify(updatedProduct));
  }

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
        handleSelectSize(size);
      }}
      disabled={!currentProduct.sizes.includes(size)}
    >
      {size}
    </button>
  );
}
