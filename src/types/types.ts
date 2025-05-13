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