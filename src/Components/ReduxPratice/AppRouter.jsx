import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex ", gap: "2rem" }}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
