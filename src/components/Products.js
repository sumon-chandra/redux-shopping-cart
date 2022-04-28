import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { fetchProducts, STATUSES } from "../features/productSlice";

import "./Product.css";
function Products() {
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    // For import products from redux store.
    dispatch(fetchProducts());

    // Normal condition ....

    // const fetchProducts = async () => {
    //   const res = await fetch(api);
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleClick = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h1>Loading ...</h1>;
  }
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
