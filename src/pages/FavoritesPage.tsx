import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useCompareContext } from "../context/CompareContext";

export default function FavoritesPage() {
  const { products, loading, error } = useProducts();

  const { favoriteIds, toggleFavorite } = useFavoritesContext();
  const { compareIds, toggleCompare } = useCompareContext();

  const favoriteProducts = products.filter((p) =>
    favoriteIds.includes(p.id)
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>

      <h1>Favorites</h1>

      {favoriteProducts.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="page-section">
        <ProductList
          products={favoriteProducts}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
          compareIds={compareIds}
          onToggleCompare={toggleCompare}
        />
        </div>
      )}

    </div>
  );
}