import React from "react";
import "./MyFooter.css";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const MyFooter = () => {
  return (
    <footer className="bg mt-5 text-white">
      <hr />
      <Container className="p-3">
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
            <SocialIcon
              className="m-2"
              network="linkedin"
              url="https://www.linkedin.com/in/gianni-cimmino-fsdeveloper/"
            />
            <SocialIcon
              className="m-2"
              network="github"
              url="https://github.com/GianniCimmino"
            />
            <SocialIcon
              className="m-2"
              network="instagram"
              url="https://www.instagram.com/giannicimmino/"
            />
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="text-center py-1 text-light">
        <p>Copyright &copy; 2024 Gianni Cimmino - All rights reserved </p>
      </div>
    </footer>
  );
};

export default MyFooter;
