import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import new_game from "../Assets/new-games.png";

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={new_game} rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
