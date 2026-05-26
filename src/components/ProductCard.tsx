import type { Product } from "../types/Product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12 }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        width={100}
      />

      <h3>{product.title}</h3>
      <p>{product.brand || "No brand"}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
 {product.discountPercentage ? (
  <p>Discount: {product.discountPercentage}%</p>
) : (
  <p style={{ opacity: 0.6 }}>No discount</p>
)}
    </div>
  );
}