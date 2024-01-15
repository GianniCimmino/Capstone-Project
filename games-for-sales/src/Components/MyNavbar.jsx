import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Games For Sales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Console" href="#action2">
              <NavDropdown.Item href="#action2">Playstation 5</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Playstation 4</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Xbox Series X</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Xbox Series S</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Xbox One</NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Nintendo Switch
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Giochi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action8">Azione</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Avventura</NavDropdown.Item>
              <NavDropdown.Item href="#action10">Strategia</NavDropdown.Item>
              <NavDropdown.Item href="#action11">Sportivi</NavDropdown.Item>
              <NavDropdown.Item href="#action12">Corse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
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
