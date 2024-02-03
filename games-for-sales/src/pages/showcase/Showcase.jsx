import React from "react";
import "./Showcase.css";
import Hero from "../Hero/Hero.jsx";
import Popular from "../Popular/Popular.jsx";
import Offers from "../Offers/Offers.jsx";
import BestSellers from "../BestSellers/BestSellers.jsx";
import CommentArea from "../CommentArea/CommentArea.jsx";

const Showcase = () => {
  return (
    <div>
      <Hero />
      <CommentArea />
      <Popular />
      <Offers />
      <BestSellers />
    </div>
  );
};

export default Showcase;
