import React, { useState } from "react";
import "./Login.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth";
import { useToken } from "../../configurations/tokenContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(username, password);
      setToken(response.data.token);
      console.log("Login successful");
      navigate("/showcase");
    } catch (error) {
      alert(
        error.response && error.response.data
          ? error.response.data
          : "Generic Error"
      );
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4 text-center">Accedi</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il tuo username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserisci la tua password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                  />
                </Form.Group>
                <div className="login-footer">
                  <Link to="../showcase">Continua come ospite</Link>
                  <Button variant="primary" type="submit" className="btn-block">
                    Accedi
                  </Button>
                  <Link to="/register">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-block"
                    >
                      Registrati
                    </Button>
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
