export type Product = {
  id: number;
  title: string;
  brand?: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  discountPercentage?: number;
};