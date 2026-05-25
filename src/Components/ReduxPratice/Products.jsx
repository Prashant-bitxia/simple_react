import React, { use, useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products.length > 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {products.length > 0 &&
          products.map((item) => <Product Product={item} />)}
      </div>
      ;
    </>
  );
};

export default Products;
