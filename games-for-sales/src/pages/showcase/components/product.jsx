import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import productService from "./Products";
import ProductForm from "./ProductForm";

const Product = ({ product, user, refreshProducts, removeProduct }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEditSubmit = async (editedProduct) => {
    try {
      await productService.updateProduct(product._id, editedProduct);
      refreshProducts();
    } catch (error) {
      alert(error);
    }
    setShowModal(false);
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="body">
      <Row>
        <Col>
          <Card style={{ height: "100%" }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Prezzo: €{product.price}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-end">
              {(user.roles || []).includes("UPDATE_PRODUCT") && (
                <Button
                  variant="primary"
                  className="btn-block me-2"
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              )}

              {(user.roles || []).includes("DELETE_PRODUCT") && (
                <Button
                  variant="danger"
                  className="btn-block"
                  onClick={() => removeProduct(product._id)}
                >
                  Remove
                </Button>
              )}
            </Card.Footer>
          </Card>

          {/* Modale per la modifica del prodotto */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modifica Prodotto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ProductForm
                product={product}
                callback={handleEditSubmit}
              ></ProductForm>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
