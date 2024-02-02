import React from "react";
import "./BestSellers.css";
import all_product from "../Assets/all_product";
import Item from "../Item/Item";

const BestSellers = () => {
  return (
    <div className="best-sellers">
      <h1>Più Venduti</h1>
      <hr />
      <div className="games">
        {all_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
