import React, { useState } from "react";

import "./MyNavbar.css";
import { Container, Navbar, Button, Form, Nav } from "react-bootstrap";
import Logo from "../Assets/Logo.png";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth";
import { useToken } from "../../configurations/tokenContext";
import productService from "../../services/products";

function MyNavbar({ callback }) {
  let [input, setInput] = useState("");
  const { token, setToken } = useToken();

  // const fetchFilteredProducts = async () => {
  //   try {
  //     const response = await productService.getFilteredProducts();
  //     setInput(response.data);
  //   } catch (e) {}
  // };

  const handleChange = (value) => {
    setInput(value);
    callback(value);
  };

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();

    setToken(null);
  };

  const onLogin = () => {
    navigate("/login");
  };
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/console">Console</Nav.Link>
            <Nav.Link href="/games">Giochi</Nav.Link>
          </Nav>
          {token ? (
            <LiaUserAstronautSolid onClick={onLogout} />
          ) : (
            <LiaUserAstronautSolid
              className="color-icon circle"
              onClick={onLogin}
            />
          )}

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca un gioco/console"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              onClick={() => handleChange(input)}
            >
              Cerca
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
