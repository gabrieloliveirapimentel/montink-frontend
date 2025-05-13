export interface ProductProps {
  id: number;
  name: string;
  description: string;
  color: string;
  sizes: string[];
  price: number;
  images: string[];
}
  
export interface AddressProps {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface ImageMiniatureProps {
  image: string;
  index: number;
  currentImage: string;
  setCurrentImage: (image: string) => void;
  currentProduct: ProductProps;
}

export interface ImageOptionsProps {
  product: ProductProps;
  currentProduct: ProductProps;
  handleFn: () => void;
}

export interface ImageOptionProps {
  currentImage: string;
}
export interface SizeOptionsProps {
  size: string;
  currentSize: string;
  setCurrentSize: (size: string) => void;
  currentProduct: ProductProps;
}