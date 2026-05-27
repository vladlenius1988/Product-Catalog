import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useProductFilters } from "../hooks/useProductFilters";
import SortSelect from "../components/SortSelect";
import SearchBar from "../components/SearchBar";
import FiltersPanel from "../components/FiltersPanel";
import { useCompareContext } from "../context/CompareContext";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();
  const { favoriteIds, toggleFavorite } = useFavoritesContext();
 const { compareIds, toggleCompare } = useCompareContext();

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

  // ✅ LOADING inside same layout flow (NO shift)
  if (loading) {
    return <p className="page-state">Loading...</p>;
  }

  if (error) {
    return <p className="page-state error">{error}</p>;
  }

  return (
    <>
     <div className="controls">
  <FiltersPanel
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        inStockOnly={inStockOnly}
        onInStockChange={setInStockOnly}
        discountedOnly={discountedOnly}
        onDiscountedChange={setDiscountedOnly}
      />
  <SearchBar value={search} onChange={setSearch} />
  <SortSelect value={sortOption} onChange={setSortOption} />
</div>
      

      

      

      {/* CONTENT */}
      {filteredProducts.length === 0 ? (
        <p className="empty-state">No products match current filters</p>
      ) : (
        <div className="page-section">
        <ProductList
          products={filteredProducts}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
          compareIds={compareIds}
          onToggleCompare={toggleCompare}
        />
        </div>
      )}
    </>
  );
}