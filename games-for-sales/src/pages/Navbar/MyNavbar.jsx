import React from "react";
import "./MyNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Button, Form, Nav } from "react-bootstrap";
import Logo from "../Assets/Logo.png";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth";
import { useToken } from "../../configurations/tokenContext";

function MyNavbar() {
  const { token, setToken } = useToken();

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
            <Nav.Link href="/preorders">Pre-ordini</Nav.Link>
          </Nav>
          {token ? (
            // Se il token esiste, mostra il pulsante Logout
            <Button onClick={onLogout}>Logout</Button>
          ) : (
            // Se il token non esiste, mostra il link di login

            <Button onClick={onLogin}>Login</Button>
          )}

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca un gioco/console"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Cerca</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
