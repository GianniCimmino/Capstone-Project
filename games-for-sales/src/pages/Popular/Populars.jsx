import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import productService from "../../services/products";
import Popular from "./Popular";
import ProductForm from "../showcase/components/ProductForm";
import { useToken } from "../../configurations/tokenContext";

const Populars = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const token = useToken();
  const fetchProducts = async () => {
    try {
      const response = await productService.getAllProducts();
      setProducts(response.data);
      console.log(products);
    } catch (error) {
      console.error("Errore nel recupero dei prodotti:", error);
    }
  };

  const handleAddSubmit = async (addedProduct) => {
    try {
      await productService.addProduct(addedProduct);
      await fetchProducts();
    } catch (error) {
      alert(error);
    }
    setShowModal(false);
  };

  const onRemove = async (product_id) => {
    try {
      await productService.deleteProduct(product_id);
      await fetchProducts();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  return (
    <Container>
      {(user.roles || []).includes("ADD_PRODUCT") && (
        <Row className="text-end m-4">
          <Button
            variant="primary"
            className="btn-block"
            onClick={() => setShowModal(true)}
          >
            Add product
          </Button>
        </Row>
      )}

      <Row xs={1} md={2} lg={3}>
        {products
          .filter((product) => product.category == "Console")
          .map((product) => (
            <Popular
              key={product._id}
              user={user}
              product={product}
              refreshProducts={fetchProducts}
              removeProduct={(id) => onRemove(id)}
            ></Popular>
          ))}
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Prodotto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm callback={handleAddSubmit}></ProductForm>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Populars;
