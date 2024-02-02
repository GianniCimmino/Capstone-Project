import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import BestSellers from "../Components/BestSellers/BestSellers.jsx";

const GamesForSales = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <BestSellers />
    </div>
  );
};

export default GamesForSales;
