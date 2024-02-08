import React, { useState, useEffect } from "react";
import "./Offers.css";
import productService from "../../services/products";
import Offer from "./Offer";

const Offers = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await productService.getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Errore nel recupero dei prodotti:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products
        .find((product) => product._id === ._id)
        .map((product) => (
          <Offer
            key={product._id}
            product={product}
            refreshProducts={fetchProducts}
          />
        ))}
      <Offer
        key={product._id}
        product={product}
        refreshProducts={fetchProducts}
      />
    </div>
  );
};

export default Offers;
