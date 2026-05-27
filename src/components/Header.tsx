import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        gap: 16,
        padding: 16,
        borderBottom: "1px solid #ddd",
        marginBottom: 24,
      }}
    >
      <Link to="/">Products</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/compare">Compare</Link>
    </header>
  );
}