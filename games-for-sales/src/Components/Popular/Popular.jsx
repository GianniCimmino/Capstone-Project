import React from "react";
import "./Popular.css";
import all_product from "../Assets/all_product";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Tutte le console</h1>
      <hr />
      <div className="popular-item">
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
export default Popular;
