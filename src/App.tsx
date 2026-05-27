import "./styles/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import ProductsPage from "./pages/ProductsPage";
import FavoritesPage from "./pages/FavoritesPage";
import ComparePage from "./pages/ComparePage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}