import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

type Props = {
  products: Product[];

  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;

  compareIds: number[];
  onToggleCompare: (id: number) => void;
};

export default function ProductList({
  products,
  favoriteIds,
  onToggleFavorite,
  compareIds,
  onToggleCompare,
}: Props) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          favoriteIds={favoriteIds}
          onToggleFavorite={onToggleFavorite}
          compareIds={compareIds}
          onToggleCompare={onToggleCompare}
        />
      ))}
    </div>
  );
}