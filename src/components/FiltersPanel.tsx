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
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        In stock
      </label>

      <label>
        <input
          type="checkbox"
          checked={discountedOnly}
          onChange={(e) => onDiscountedChange(e.target.checked)}
        />
        Discounted
      </label>
    </div>
  );
}