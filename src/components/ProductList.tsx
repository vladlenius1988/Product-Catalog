import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

    type Props = {
  products: Product[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
};


export default function ProductList({
  products,
  favoriteIds,
  onToggleFavorite,
}: Props) {

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: 16
    }}>
      {products.map((p) => (
        <ProductCard
  key={p.id}
  product={p}
  favoriteIds={favoriteIds}
  onToggleFavorite={onToggleFavorite}
  
/>
      ))}
    </div>
  );
}