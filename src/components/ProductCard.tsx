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
  const isDisabled = !isCompared && compareIds.length >= 3;

  return (
    <div className="product-card">

      {/* ACTIONS */}
<div className="actions">

  <button
    className="favorite-btn"
    onClick={() => onToggleFavorite(product.id)}
  >
    {isFavorite ? "❤️" : "🤍"}
  </button>

  <div className="compare-wrapper">
    <button
      className={`compare-btn ${isCompared ? "filled" : "outlined"}`}
      onClick={() => onToggleCompare(product.id)}
      disabled={isDisabled}
    >
      {isCompared ? "✓ In compare" : "⚖ Compare"}
    </button>

    {isDisabled && (
      <p className="compare-hint">
        Compare limit: 3 products
      </p>
    )}
  </div>


        
      </div>

      {/* IMAGE */}
      <img src={product.thumbnail} alt={product.title} />

      {/* CONTENT */}
      <h3>{product.title}</h3>

       <p className="brand">
        {product.brand ?? "Unknown brand"}
      </p>
      <span className="category-tag">
  {product.category}
</span>
       <p className="price">${product.price}</p>
      <p className="rating">⭐ {product.rating.toFixed(1)} / 5</p>

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