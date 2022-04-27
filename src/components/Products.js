import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice";

import "./Product.css";
function Products() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="cart-container row ">
      {products.map((product) => (
        <article className="cart" key={product.id}>
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <h5>{product.price}</h5>
          <button onClick={() => handleClick(product)}>Add to card</button>
        </article>
      ))}
    </div>
  );
}

export default Products;
