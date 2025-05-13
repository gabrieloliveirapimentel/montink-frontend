import { useState } from "react";
import { shirts } from "../../data.json";
import type { ProductProps } from "../types/types";

export function useProduct() {
  const [currentProduct, setCurrentProduct] = useState<ProductProps>(shirts[0]);
  const [currentImage, setCurrentImage] = useState<string>(shirts[0].images[0]);
  const [currentSize, setCurrentSize] = useState<string>("");

  function selectProduct(product: ProductProps) {
    setCurrentProduct(product);
    setCurrentImage(product.images[0]);
    setCurrentSize("");
  }

  return {
    currentProduct,
    currentImage,
    currentSize,
    setCurrentImage,
    setCurrentSize,
    selectProduct,
  };
}
