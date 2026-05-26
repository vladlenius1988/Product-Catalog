import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return <ProductList products={products} />;
}