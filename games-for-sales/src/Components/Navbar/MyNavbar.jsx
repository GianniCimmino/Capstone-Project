import React, { useEffect, useState } from "react";

import "./MyNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../Assets/Logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function MyNavbar() {
  const [menu, setMenu] = useState("console");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("gamesforsales");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Games For Sales
          </Link>
          {menu === "gamesforsales" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("console");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/console">
            Console
          </Link>
          {menu === "console" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("games");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/games">
            Giochi
          </Link>{" "}
          {menu === "games" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("accessories");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/accessories">
            Accessori
          </Link>
          {menu === "accessories" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
export default MyNavbar;
