import { useEffect, useState } from "react";
import { shirts } from "../../data.json";
import type { ProductProps } from "../types/types";

export function useProduct() {
  const [currentProduct, setCurrentProduct] = useState<ProductProps>(shirts[0]);
  const [currentImage, setCurrentImage] = useState<string>(shirts[0].images[0]);
  const [currentSize, setCurrentSize] = useState<string>("");

  useEffect(() => {
    const savedData = localStorage.getItem("current-product");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        const timestamp = parsedData.currentTime || 0;
        const now = new Date().getTime();

        if (now - timestamp < 900000) {
          setCurrentImage(parsedData.currentImage);
          setCurrentSize(parsedData.currentSize);
          setCurrentProduct(parsedData.currentProduct);
        } else {
          localStorage.removeItem("current-product");
        }
      } catch (error) {
        console.error("Erro ao carregar dados salvos:", error);
      }
    }
  }, []);

  function selectProduct(product: ProductProps) {
    setCurrentProduct(product);
    setCurrentImage(product.images[0]);
    setCurrentSize("");

    const formattedProduct = {
      currentProduct: product,
      currentImage: product.images[0],
      currentSize: "",
      currentTime: new Date().getTime(),
    };

    localStorage.setItem("current-product", JSON.stringify(formattedProduct));
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
