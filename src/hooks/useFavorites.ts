import { useLocalStorage } from "./useLocalStorage";

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<number[]>(
    "favorites",
    []
  );

  const toggleFavorite = (id: number) => {
    setFavoriteIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const isFavorite = (id: number) => favoriteIds.includes(id);

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
  };
}