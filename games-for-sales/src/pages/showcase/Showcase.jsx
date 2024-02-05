import React from "react";
import "./Showcase.css";
import Popular from "../Popular/Popular.jsx";
import Offers from "../Offers/Offers.jsx";
import BestSellers from "../BestSellers/BestSellers.jsx";
import Products from "./components/Products.jsx";

const Showcase = () => {
  return (
    <div>
      <Products />
      <Offers />
      <Popular />
      <Offers />
      <BestSellers />
    </div>
  );
};

export default Showcase;
