type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select
      aria-label="Sort products"
      className="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="price-asc">Sort: Price (Low → High)</option>
      <option value="price-desc">Sort: Price (High → Low)</option>
      <option value="rating">Sort: Rating</option>
      <option value="title">Sort: Name</option>
    </select>
  );
}