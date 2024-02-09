import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import productService from "../../services/products";

const AllConsole = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await productService.getAllProducts();
      setProduct(response.data);
    } catch (error) {
      console.error("Errore nel recupero del prodotto:", error);
    }
  };

  const handleImmagineClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    fetchProducts();

    // navigate(`/console`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-5 text-white">
      <Row xs={1} md={2} lg={3} xl={4}>
        {product
          .filter((product) => product.category === "Console")
          .map((product) => (
            <Col key={product._id} className="game-image-container p-4">
              <img
                src={product.imageUrl}
                alt={product.title}
                onClick={() => handleImmagineClick(product._id)}
                className="image-description"
              ></img>
              <div className="d-flex justify-content-between">
                <p className="text-white m-3">{product.title}</p>
                <p className="text-white m-3">
                  {" "}
                  <strong>€{product.price}</strong>
                </p>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AllConsole;
