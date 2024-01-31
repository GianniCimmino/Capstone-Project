import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import new_game from "../Assets/NuovoArrivo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NUOVI ARRIVI</h2>
        <div className="hand-hand-icon">
          <p>nuovo</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>Collezioni</p>
        <p>Per tutti</p>
      </div>
      <div className="hero-latest-btn">
        <div>Ultime Collezioni</div>
        <img src={arrow_icon} alt="" />
      </div>
      <div></div>
      <div className="hero-right">
        <img src={new_game} alt="" />
      </div>
    </div>
  );
};

export default Hero;
