type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="price-asc">Price ↑</option>
      <option value="price-desc">Price ↓</option>
      <option value="rating">Rating</option>
      <option value="title">Title</option>
    </select>
  );
}