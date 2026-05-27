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
  onToggleCompare,
}: Props) {
  const isFavorite = favoriteIds.includes(product.id);
  const isCompared = compareIds.includes(product.id);

  return (
    <div className="product-card">

      {/* ACTIONS */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <button
          className="favorite-btn"
          onClick={() => onToggleFavorite(product.id)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <button
          className="compare-btn"
          onClick={() => onToggleCompare(product.id)}
          disabled={!isCompared && compareIds.length >= 3}
        >
          {isCompared ? "✓ In compare" : "⚖ Compare"}
        </button>
      </div>

      {/* IMAGE */}
      <img src={product.thumbnail} alt={product.title} />

      {/* CONTENT */}
      <h3>{product.title}</h3>

      <p>{product.brand || "No brand"}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>

      <p>
        <span style={{ color: product.stock > 0 ? "green" : "red" }}>
          {product.stock > 0 ? "In stock" : "Out of stock"}
        </span>
      </p>

      <p>
        <span style={{ color: (product.discountPercentage ?? 0) > 0 ? "green" : "gray" }}>
          {(product.discountPercentage ?? 0) > 0
            ? `Discount: ${product.discountPercentage}%`
            : "No discount"}
        </span>
      </p>

    </div>
  );
}