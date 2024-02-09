import React from "react";
import Populars from "../Popular/Populars.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Products from "./components/Products.jsx";

const Showcase = () => {
  return (
    <div>
      <Products />
      <Reviews />
      <Populars />
    </div>
  );
};

export default Showcase;
