import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: 16
    }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}