import './styles/global.css'
import Layout from "./components/Layout";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <Layout>
      <ProductsPage />
    </Layout>
  );
}