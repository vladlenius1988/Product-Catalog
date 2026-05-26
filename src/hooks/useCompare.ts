import { useLocalStorage } from "./useLocalStorage";

export function useCompare() {
  const [compareIds, setCompareIds] = useLocalStorage<number[]>(
    "compare",
    []
  );

  const toggleCompare = (id: number) => {
    const exists = compareIds.includes(id);

    if (exists) {
      setCompareIds(prev => prev.filter(i => i !== id));
      return;
    }

    if (compareIds.length >= 3) {
      alert("You can compare up to 3 products");
      return;
    }

    setCompareIds(prev => [...prev, id]);
  };

  const isCompared = (id: number) => compareIds.includes(id);

  return {
    compareIds,
    toggleCompare,
    isCompared,
  };
}