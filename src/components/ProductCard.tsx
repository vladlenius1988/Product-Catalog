import type { Product } from "../types/Product";

type Props = {
  product: Product;
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
};

export default function ProductCard({
  product,
  favoriteIds,
  onToggleFavorite,
}: Props) {
  const isFavorite = favoriteIds.includes(product.id);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, position: "relative" }}>
      
      {/* FAVORITE BUTTON */}
      <button
        onClick={() => onToggleFavorite(product.id)}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          background: "transparent",
          border: "none",
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

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