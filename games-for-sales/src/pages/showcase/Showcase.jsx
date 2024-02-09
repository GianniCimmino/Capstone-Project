import React, { useState } from "react";
import Populars from "../Popular/Populars.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Products from "./components/Products.jsx";
import MyNavbar from "../Navbar/MyNavbar.jsx";

const Showcase = () => {
  let [filterValue, setFilterValue] = useState([]);

  return (
    <div>
      <div>
        <MyNavbar callback={(value) => setFilterValue(value)}></MyNavbar>
      </div>
      <Products titleFilter={filterValue} />
      <Reviews />
      <Populars />
    </div>
  );
};

export default Showcase;
