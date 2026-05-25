import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const Product = ({ Product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(Product));
  };

  return (
    <div
      style={{
        height: "13rem",
        width: "13rem",
        margin: "1rem",
      }}
    >
      <img
        src={Product.images[0]}
        alt="product image"
        height={100}
        width={100}
      />
      <p>Name: {Product.title}</p>
      <p>Price: {Product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
