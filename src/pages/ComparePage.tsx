import { useCompareContext } from "../context/CompareContext";
import ComparisonTable from "../components/ComparisonTable";
import { useProducts } from "../hooks/useProducts";

export default function ComparePage() {
  const { products } = useProducts();
  const { compareIds, toggleCompare } = useCompareContext();

  const comparedProducts = products.filter(p =>
    compareIds.includes(p.id)
  );

  const handleRemove = (id: number) => {
    toggleCompare(id);
  };

  return (
    <>
      <h1>Compare</h1>

      {comparedProducts.length === 0 ? (
        <p>No products selected for comparison</p>
      ) : (
        <ComparisonTable
          products={comparedProducts}
          onRemove={handleRemove}
        />
      )}
    </>
  );
}