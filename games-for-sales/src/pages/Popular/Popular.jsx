import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Popular.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Populars from "./Populars";
import ProductForm from "../showcase/components/ProductForm";

const Popular = ({ product, user, refreshProducts, removeProduct }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEditSubmit = async (editedProduct) => {
    try {
      await Populars.updateProduct(product._id, editedProduct);
      refreshProducts();
    } catch (error) {
      alert(error);
    }
    setShowModal(false);
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const navigate = useNavigate();

  const handleImmagineClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container>
      <Row>
        <Col className="game-image-container p-4">
          <img
            src={product?.imageUrl}
            alt={product?.title}
            onClick={() => handleImmagineClick(product?._id)}
            className="image-description"
          ></img>
          <div className="d-flex justify-content-between">
            <p className="text-white m-3">{product?.title}</p>
            <p className="text-white m-3">
              {" "}
              <strong>€{product?.price}</strong>
            </p>
          </div>

          {(user?.roles || []).includes("UPDATE_PRODUCT") && (
            <Button
              variant="primary"
              className="btn-block me-2"
              onClick={handleEdit}
            >
              Edit
            </Button>
          )}

          {(user?.roles || []).includes("DELETE_PRODUCT") && (
            <Button
              variant="danger"
              className="btn-block"
              onClick={() => removeProduct(product._id)}
            >
              Remove
            </Button>
          )}
        </Col>

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
      </Row>
    </Container>
  );
};

export default Popular;
