import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductGame.css";
import productService from "../../services/products";

const ProductGame = () => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await productService.getProduct(productId);
      setProduct(response.data);
    } catch (error) {
      console.error("Errore nel recupero del prodotto:", error);
    }
  };
  useEffect(() => {
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-5 text-white">
      <Row className="d-flex justify-content-center">
        <img src={product.imageUrl} alt={product.title} className="w-75"></img>
        <h1 className="w-50 mt-5">{product.title}</h1>
      </Row>
      <Row>
        <Col className="m-5">
          <h3>Riguardo al gioco</h3>
          <p>{product.description}</p>
        </Col>
      </Row>
      <Row>
        <h1>Configurazioni</h1>
        <Col className="m-5">
          <h2>Requisiti Minimi:</h2>
          <ul>
            <li>
              <strong>Sistema Operativo:</strong> Windows 10
            </li>
            <li>
              <strong>Processore:</strong> Intel Core i5-2400 / AMD FX-6300
            </li>
            <li>
              <strong>RAM:</strong> 8 GB
            </li>
            <li>
              <strong>Scheda Grafica:</strong> NVIDIA GeForce GTX 660 / AMD
              Radeon HD 7850
            </li>
            <li>
              <strong>Spazio su Disco:</strong> 50 GB di spazio libero
            </li>
            <li>
              <strong>DirectX:</strong> Versione 11
            </li>
            <li>
              <strong>Connessione Internet:</strong> Connessione a banda larga
            </li>
          </ul>

          <h2>Requisiti Consigliati:</h2>
          <ul>
            <li>
              <strong>Sistema Operativo:</strong> Windows 10
            </li>
            <li>
              <strong>Processore:</strong> Intel Core i7-9700K / AMD Ryzen 5
              3600X
            </li>
            <li>
              <strong>RAM:</strong> 16 GB
            </li>
            <li>
              <strong>Scheda Grafica:</strong> NVIDIA GeForce RTX 2060 / AMD
              Radeon RX 5700
            </li>
            <li>
              <strong>Spazio su Disco:</strong> SSD con 50 GB di spazio libero
            </li>
            <li>
              <strong>DirectX:</strong> Versione 12
            </li>
            <li>
              <strong>Connessione Internet:</strong> Connessione a banda larga
            </li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ProductGame;
