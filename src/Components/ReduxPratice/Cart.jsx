import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems: products, totalAmount } = useSelector(
    (state) => state.cart,
  );

  return (
    <div>
      <h1>Cart Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1,2fr)" }}>
        {products.length > 0 &&
          products.map((product) => (
            <div style={{ height: "15rem", width: "20rem" }}>
              <img src={product.images[0]} alt="" width="50" height="50" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <p>Name : {product.title}</p>
                <div style={{ display: "flex", justifyContent:"space-between" }}>
                  <p>Quantity: {product.quantity}</p>
                  <p>price : {product.price}</p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    dispatch(increment(product));
                  }}
                >
                  +
                </button>
                <button
                  button
                  onClick={() => {
                    dispatch(decrement(product));
                  }}
                >
                  -
                </button>
                <button
                  button
                  onClick={() => {
                    dispatch(remove(product));
                  }}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        <h2>Total Amount: {totalAmount}</h2>
      </div>
    </div>
  );
};

export default Cart;
