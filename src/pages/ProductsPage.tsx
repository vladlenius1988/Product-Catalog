import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { useMemo, useState } from "react";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("price-asc");

  const categories = useMemo(() => {
  return Array.from(new Set(products.map(p => p.category)));
}, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    result = result.filter((p) =>
      (p.title ?? "").toLowerCase().includes(search.toLowerCase()) ||
(p.brand ?? "").toLowerCase().includes(search.toLowerCase()) ||
(p.category ?? "").toLowerCase().includes(search.toLowerCase())
    );

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (inStockOnly) {
      result = result.filter(p => p.stock > 0);
    }

    if (discountedOnly) {
      result = result.filter(
  p => p.discountPercentage !== undefined && p.discountPercentage > 0
);
    }

    result.sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "title":
          return (a.title ?? "").localeCompare(b.title ?? "")
        default:
          return 0;
      }
    });

    return result;
  }, [
    products,
    search,
    selectedCategory,
    inStockOnly,
    discountedOnly,
    sortOption
  ]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;


  return (
    <>
      {/* UI controls */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title, brand, category..."
      />

     <select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="">All</option>
  {categories.map(cat => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ))}
</select>

      <label>
        <input
          type="checkbox"
            checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        In stock
      </label>

      <label>
        <input
          type="checkbox"
          checked={discountedOnly}
          onChange={(e) => setDiscountedOnly(e.target.checked)}
        />
        Discounted
      </label>

      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="rating">Rating</option>
        <option value="title">Title</option>
      </select>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 ? (
        <p>No products match current filters</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </>
  );

}