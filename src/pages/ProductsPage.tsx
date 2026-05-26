import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { useFavorites } from "../hooks/useFavorites";
import { useProductFilters } from "../hooks/useProductFilters";
import SortSelect from "../components/SortSelect";
import SearchBar from "../components/SearchBar";
import FiltersPanel from "../components/FiltersPanel";
import { useCompare } from "../hooks/useCompare";
import ComparisonTable from "../components/ComparisonTable";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const { compareIds, toggleCompare } = useCompare();

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

const favoriteProducts = products.filter(p =>
  favoriteIds.includes(p.id)
);

const comparedProducts = products.filter(p =>
  compareIds.includes(p.id)
);

if (loading) return <p>Loading...</p>;
if (error) return <p style={{ color: "red" }}>{error}</p>;

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
  compareIds={compareIds}
  onToggleCompare={toggleCompare}
/>
)}


<h2>Compare</h2>

{comparedProducts.length === 0 ? (
  <p>No products selected for comparison</p>
) : (
  <ComparisonTable products={comparedProducts} />
)}


{filteredProducts.length === 0 ? (
  <p>No products match current filters</p>
) : (
  <ProductList
    products={filteredProducts}
    favoriteIds={favoriteIds}
    onToggleFavorite={toggleFavorite}
    compareIds={compareIds}
    onToggleCompare={toggleCompare}
  />
)}
    </>
  );
}