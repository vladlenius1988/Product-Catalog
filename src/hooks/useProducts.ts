import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import type { Product } from "../types/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data.products);
      } catch (e) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { products, loading, error };
}