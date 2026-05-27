import type { Product } from "../types/Product";

type Props = {
  products: Product[];
};

export default function ComparisonTable({ products }: Props) {
  return (
    <div className="container">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Field</th>

            {products.map(p => (
              <th key={p.id}>{p.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Price</td>
            {products.map(p => (
              <td key={p.id}>${p.price}</td>
            ))}
          </tr>

          <tr>
            <td>Rating</td>
            {products.map(p => (
              <td key={p.id}>{p.rating}</td>
            ))}
          </tr>

          <tr>
            <td>Stock</td>
            {products.map(p => (
              <td key={p.id}>{p.stock}</td>
            ))}
          </tr>

          <tr>
            <td>Category</td>
            {products.map(p => (
              <td key={p.id}>{p.category}</td>
            ))}
          </tr>

          <tr>
            <td>Discount</td>
            {products.map(p => (
              <td key={p.id}>
                {p.discountPercentage ?? 0}%
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}