import React from "react";
import Populars from "../Popular/Populars.jsx";
import Offer from "../Offers/Offer.jsx";
import Products from "./components/Products.jsx";

const Showcase = () => {
  return (
    <div>
      <h2 className="text-white m-3">Di tendenza</h2>
      <Products />
      <Offer />
      <Populars />
    </div>
  );
};

export default Showcase;
