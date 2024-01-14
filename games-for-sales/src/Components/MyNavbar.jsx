import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Games For Sales</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Games" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Adventure</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Strategy</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sales" id="basic-nav-dropdown">
            <NavDropdown.Item href="#sale/1">Summer Sale</NavDropdown.Item>
            <NavDropdown.Item href="#sale/2">Holiday Sale</NavDropdown.Item>
            <NavDropdown.Item href="#sale/3">Year-End Sale</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2, justify-content: space-between"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
