import type { ImageOptionProps } from "../types/types";

export function ImageOption({ currentImage }: ImageOptionProps) {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200">
      <img src={currentImage} alt="Produto" className="object-cover" />
    </div>
  );
}
