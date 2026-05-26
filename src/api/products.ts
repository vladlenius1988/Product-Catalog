export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=200");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}