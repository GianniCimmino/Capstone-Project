import React from "react";
import Populars from "../Popular/Populars.jsx";
import Offers from "../Offers/Offers.jsx";
import BestSellers from "../BestSellers/BestSellers.jsx";
import Products from "./components/Products.jsx";

const Showcase = () => {
  return (
    <div>
      <h2 className="text-white m-3">Di tendenza</h2>
      <Products />
      <Offers />
      <Populars />
      <Offers />
      <BestSellers />
    </div>
  );
};

export default Showcase;
