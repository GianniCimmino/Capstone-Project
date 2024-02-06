import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ProductItem.css";
import productService from "../../services/products";

const GamePage = () => {
  return (
    <Container className="mt-5 text-white">
      <Row>
        <Col md={6}>
          <Image src={productItem.image} alt="Immagine del prodotto" fluid />
        </Col>
        <Col md={6}>
          <h2>{productItem.title}</h2>
          <p>
            Descrizione del videogioco. Questo è un gioco fantastico che ti
            immerge in un mondo avvincente pieno di avventure e sfide.
          </p>
          <h3>Specifiche Tecniche:</h3>
          <ul>
            <li>Requisiti di Sistema: Windows 10, macOS 10.14+</li>
            <li>Processore: Intel Core i5-3470 / AMD FX 6350</li>
            <li>Memoria: 8 GB di RAM</li>
            <li>Scheda Grafica: NVIDIA GeForce GTX 660 / AMD Radeon HD 7870</li>
            <li>Archiviazione: 50 GB di spazio disponibile</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default GamePage;