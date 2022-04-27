import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carts from "./pages/Carts";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
