type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;

  inStockOnly: boolean;
  onInStockChange: (value: boolean) => void;

  discountedOnly: boolean;
  onDiscountedChange: (value: boolean) => void;
};

export default function FiltersPanel({
  categories,
  selectedCategory,
  onCategoryChange,
  inStockOnly,
  onInStockChange,
  discountedOnly,
  onDiscountedChange,
}: Props) {
  return (
    <>

      <select
        aria-label="Filter by category"
        className="select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
<div className="checkbox-group">
  <label>
    <input
      aria-label="Filter by in-stock"
      type="checkbox"
      checked={inStockOnly}
      onChange={(e) => onInStockChange(e.target.checked)}
    />
    In stock
  </label>

  <label>
    <input  
      aria-label="Filter by discounted"
      type="checkbox"
      checked={discountedOnly}
      onChange={(e) => onDiscountedChange(e.target.checked)}
    />
    Discounted
  </label>
</div>

    </>
  );
}