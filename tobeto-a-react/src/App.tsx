import { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import ProductAdd from "./pages/ProductAdd/ProductAdd";
import { ProductCart } from "./pages/Cart/ProductCart";

function App(): ReactElement {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/product-add" element={<ProductAdd />} />
        <Route path="/product-cart" element={<ProductCart />} />
      </Routes>
    </>
  );
}

export default App;
