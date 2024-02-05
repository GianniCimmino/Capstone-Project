import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ProductForm = ({ product, callback }) => {
  const [editedProduct, setEditedProduct] = useState(
    product || {
      title: "",
      category: "",
      description: "",
      price: 0.0,
      imageUrl: "",
    }
  );

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    callback(editedProduct);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Titolo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci titolo"
          name="title"
          value={editedProduct.title}
          onChange={handleEditChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          as="select"
          name="category"
          value={editedProduct.category}
          onChange={handleEditChange}
        >
          <option>Console</option>
          <option>Giochi</option>
          <option>Accessori</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Descrizione"
          name="description"
          value={editedProduct.description}
          onChange={handleEditChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Prezzo</Form.Label>
        <Form.Control
          type="number"
          placeholder="Prezzo"
          name="price"
          value={editedProduct.price}
          onChange={handleEditChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL Immagine</Form.Label>
        <Form.Control
          type="text"
          placeholder="URL dell'immagine"
          name="imageUrl"
          value={editedProduct.imageUrl}
          onChange={handleEditChange}
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit">
          Salva Modifiche
        </Button>
      </div>
    </Form>
  );
};

export default ProductForm;
