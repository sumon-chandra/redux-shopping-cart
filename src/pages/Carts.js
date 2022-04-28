import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/cartSlice";
import "./Cart.css";

function Carts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      {products.length === 0 ? (
        <h1 className="empty">Your cart is empty</h1>
      ) : (
        products.map((product) => (
          <div key={product.id} className="cart-lists">
            <img src={product.image} alt="" />
            <h3> {product.title}</h3>
            <h2>Price: {product.price}</h2>
            <button
              className="remove-cart-btn"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Carts;
