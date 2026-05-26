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
    <p style={{ color: product.stock > 0 ? "green" : "red" }}>
  {product.stock > 0 ? "In stock" : "Out of stock"}
</p>
<p style={{ color: (product.discountPercentage ?? 0) > 0 ? "green" : "gray" }}>
  {(product.discountPercentage ?? 0) > 0
    ? `Discount: ${product.discountPercentage}%`
    : "No discount"}
</p>
    </div>
  );
}