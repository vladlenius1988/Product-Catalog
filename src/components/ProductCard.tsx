import type { Product } from "../types/Product";

type Props = {
  product: Product;
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
  compareIds: number[];
onToggleCompare: (id: number) => void;
};

export default function ProductCard({
  product,
  favoriteIds,
  onToggleFavorite,
  compareIds,
  onToggleCompare
}: Props) {
  const isFavorite = favoriteIds.includes(product.id);
  const isCompared = compareIds.includes(product.id);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, position: "relative" }}>
      
<div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
  <button
    onClick={() => onToggleFavorite(product.id)}
    style={{
      background: "transparent",
      border: "none",
      fontSize: 18,
      cursor: "pointer",
    }}
  >
    {isFavorite ? "❤️" : "🤍"}
  </button>

  <button onClick={() => onToggleCompare(product.id)} disabled={!isCompared && compareIds.length >= 3}>
    {isCompared ? "✓ In compare" : "⚖ Compare"}
  </button>
</div>

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