import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">Products</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/compare">Compare</Link>
    </header>
  );
}