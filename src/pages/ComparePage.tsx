import Header from "../components/Header";
import ComparisonTable from "../components/ComparisonTable";

import { useProducts } from "../hooks/useProducts";
import { useCompare } from "../hooks/useCompare";

export default function ComparePage() {
  const { products, loading, error } = useProducts();

  const { compareIds } = useCompare();

  const comparedProducts = products.filter((p) =>
    compareIds.includes(p.id)
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />

      <h1>Compare</h1>

      {comparedProducts.length === 0 ? (
        <p>No products selected for comparison</p>
      ) : (
        <ComparisonTable products={comparedProducts} />
      )}
    </>
  );
}