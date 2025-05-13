import type { ImageMiniatureProps, ProductProps } from "../types/types";

export function ImageMiniature({
  image,
  index,
  currentImage,
  setCurrentImage,
  currentProduct,
}: ImageMiniatureProps) {
  function handleSelectImage(currentProduct: ProductProps) {
    setCurrentImage(currentProduct.images[index]);

    const storedProduct = localStorage.getItem("current-product");
    const updatedProduct = {
      ...(storedProduct ? JSON.parse(storedProduct) : {}),
      currentImage: currentProduct.images[index],
    };

    localStorage.setItem("current-product", JSON.stringify(updatedProduct));
  }

  return (
    <button
      key={index}
      className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
        currentImage === image ? "border-orange-600" : "border-gray-100"
      }`}
      onClick={() => handleSelectImage(currentProduct)}
    >
      <img src={image} className="object-cover" />
    </button>
  );
}
