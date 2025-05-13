import type { ImageMiniatureProps } from "../types/types";

export function ImageMiniature({
  image,
  index,
  currentImage,
  setCurrentImage,
  currentProduct,
}: ImageMiniatureProps) {
  return (
    <button
      key={index}
      className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
        currentImage === image ? "border-orange-600" : "border-gray-100"
      }`}
      onClick={() => setCurrentImage(currentProduct.images[index])}
    >
      <img src={image} className="object-cover" />
    </button>
  );
}
