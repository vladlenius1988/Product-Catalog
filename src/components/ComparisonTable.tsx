import type { Product } from "../types/Product";

type Props = {
  products: Product[];
};

export default function ComparisonTable({ products }: Props) {
  return (
    <div>
      <table className="compare-table">

        {/* HEADER */}
        <thead>
          <tr>
            <th>Field</th>

            {products.map(p => (
              <th key={p.id}>
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginBottom: 6
                  }}
                />
                <div style={{ fontSize: 13 }}>
                  {p.title}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
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
              <td key={p.id}>
                ⭐ {p.rating.toFixed(1)}
              </td>
            ))}
          </tr>

          <tr>
            <td>Stock</td>
            {products.map(p => (
              <td
                key={p.id}
                style={{ color: p.stock > 0 ? "green" : "red" }}
              >
                {p.stock > 0 ? "In stock" : "Out of stock"}
              </td>
            ))}
          </tr>

          <tr>
            <td>Category</td>
            {products.map(p => (
              <td key={p.id}>
                📦 {p.category}
              </td>
            ))}
          </tr>

          <tr>
            <td>Discount</td>
            {products.map(p => (
              <td key={p.id}>
                {p.discountPercentage
                  ? `-${p.discountPercentage.toFixed(1)}%`
                  : "No discount"}
              </td>
            ))}
          </tr>

        </tbody>
      </table>
    </div>
  );
}