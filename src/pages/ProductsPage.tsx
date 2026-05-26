import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { useFavorites } from "../hooks/useFavorites";
import { useProductFilters } from "../hooks/useProductFilters";
import SortSelect from "../components/SortSelect";
import SearchBar from "../components/SearchBar";
import FiltersPanel from "../components/FiltersPanel";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();
  const { favoriteIds, toggleFavorite } = useFavorites();

  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    inStockOnly,
    setInStockOnly,
    discountedOnly,
    setDiscountedOnly,
    sortOption,
    setSortOption,
    categories,
    filteredProducts,
  } = useProductFilters(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  const favoriteProducts = filteredProducts.filter(p =>
  favoriteIds.includes(p.id)
);

  return (
    <>
      {/* UI controls */}
     <SearchBar value={search} onChange={setSearch} />

   <FiltersPanel
  categories={categories}
  selectedCategory={selectedCategory}
  onCategoryChange={setSelectedCategory}
  inStockOnly={inStockOnly}
  onInStockChange={setInStockOnly}
  discountedOnly={discountedOnly}
  onDiscountedChange={setDiscountedOnly}
/>

<SortSelect value={sortOption} onChange={setSortOption} />

     <h2>Favorites</h2>

{favoriteProducts.length === 0 ? (
  <p>No favorites yet</p>
) : (
  <ProductList
    products={favoriteProducts}
    favoriteIds={favoriteIds}
    onToggleFavorite={toggleFavorite}
  />
)}

{filteredProducts.length === 0 ? (
  <p>No products match current filters</p>
) : (
  <ProductList
    products={filteredProducts}
    favoriteIds={favoriteIds}
    onToggleFavorite={toggleFavorite}
  />
)}
    </>
  );
}