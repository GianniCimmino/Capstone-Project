import React from "react";
import "./Offers.css";
import esclusive_image from "../Assets/MGS.jpg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Preordina Ora!</h1>
        <button>Preordina</button>
      </div>
      <div className="offers-right">
        <img src={esclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
