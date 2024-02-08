import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <footer className="mt-5 text-white">
      <hr />
      <Container>
        <Row>
          <Col md={4}>
            <h5>Informazioni</h5>
            <p>Chi siamo</p>
            <p>Termini e condizioni</p>
            <p>Privacy Policy</p>
          </Col>
          <Col md={4}>
            <h5>Assistenza</h5>
            <p>Contattaci</p>
            <p>FAQ</p>
          </Col>
          <Col md={4}>
            <h5>Seguici</h5>
            <Link
              className="text-white"
              to="https://www.linkedin.com/in/gianni-cimmino-fsdeveloper/"
            >
              <p>LinkedIn</p>
            </Link>
            <Link className="text-white" to="https://github.com/GianniCimmino">
              <p>GitHub</p>
            </Link>
            <Link
              className="text-white"
              to="https://www.instagram.com/giannicimmino/"
            >
              <p>Instagram</p>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3 bg-dark text-light">
        <p>&copy; 2024 Gianni Cimmino</p>
      </div>
    </footer>
  );
};

export default MyFooter;
