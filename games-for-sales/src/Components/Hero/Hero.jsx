import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import Image1 from "../Assets/MGS.png";

const Hero = () => {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle"></div>
        </div>
        <Row>
          <Col sm={4}>
            <div className="holder">
              <Card>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title>Metal Gear Solid Delta</Card.Title>
                  <Button variant="dark">Compra ora!</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
