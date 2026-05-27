import { useFavoritesContext } from "../context/FavoritesContext";
import { useCompareContext } from "../context/CompareContext";

export default function Header() {
  const { favoriteIds } = useFavoritesContext();
  const { compareIds } = useCompareContext();

  return (
    <header className="header">
      <div className="container">
        <nav>
          <a className="nav-link" href="/">Products</a>

          <a className="nav-link" href="/favorites">
            Favorites
            {favoriteIds.length > 0 && <span className="dot" />}
          </a>

          <a className="nav-link" href="/compare">
            Compare
            {compareIds.length > 0 && <span className="dot" />}
          </a>
        </nav>
      </div>
    </header>
  );
}