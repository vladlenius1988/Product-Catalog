import { useMemo, useState } from "react";
import type { Product } from "../types/Product";

export function useProductFilters(products: Product[]) {
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

    result = result.filter(p =>
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
      result = result.filter(p => (p.discountPercentage ?? 0) > 0);
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
          return (a.title ?? "").localeCompare(b.title ?? "");
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

  return {
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
  };
}