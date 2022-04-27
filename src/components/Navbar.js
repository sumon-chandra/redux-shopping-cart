import React from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";
function Navbar() {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FiShoppingCart />{" "}
                <span className="toolkit">{items.length}</span>
              </a>
            </li>
            <li>
              <a href="#"> Prices</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
