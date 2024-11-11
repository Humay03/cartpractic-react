import { Route, Routes } from "react-router-dom";
import ProductDashbord from "./components/products/ProductDashbord";
import Book from "./components/products/Book";
import Layout from "./components/page/Layout";
import ProductProvider from "./components/providers/context/ProductContext"; 

export default function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductDashbord />} />
          <Route path="books/:id" element={<Book />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}
