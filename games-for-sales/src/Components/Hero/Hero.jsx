import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { Container, Col, Row } from "react-bootstrap";
import Image1 from "../Assets/tekken8.jpg";
import all_product from "../Assets/all_product";

const Hero = () => {
  return (
    <Container fluid className="body">
      <div className="title-holder">
        <h2>Di tendenza</h2>
      </div>
      <Row>
        {all_product.map((item, index) => (
          <Col key={index} sm={8} md={6} lg={4}>
            <div className="game-image-container">
              <a href={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid m-5 p-3"
                />
              </a>
              <p className="image-description">{item.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hero;
