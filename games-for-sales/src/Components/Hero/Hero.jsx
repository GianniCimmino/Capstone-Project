import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { Container, Col, Row } from "react-bootstrap";
import Image1 from "../Assets/tekken8.jpg";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Container fluid className="body">
      <div className="title-holder">
        <h2>Di tendenza</h2>
      </div>
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Col key={index} sm={8} md={6} lg={4}>
            <div
              className={`game-image-container ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/product">
                <img src={Image1} alt="Gioco 1" className="img-fluid m-5 p-3" />
              </a>
              <p className="image-description">Tekken 8</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hero;
