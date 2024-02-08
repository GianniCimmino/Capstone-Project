import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import productService from "../../services/products";
import ProductItem from "./ProductItem";

const ProductItems = () => {
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
    <Container>
      <Row>
        {products.map((obj) => (
          <ProductItem
            key={obj._id}
            product={obj}
            refreshProducts={fetchProducts}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductItems;
