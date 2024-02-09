import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Reviews.css";
import productService from "../../services/products";

const Offers = () => {
  const [reviews, setReviews] = useState([]);

  const { productId } = useParams();

  const fetchReviews = async () => {
    try {
      const response = await productService.getReviews(productId);
      setReviews(response.data);
    } catch (error) {
      console.error("Errore nel recupero delle recensioni:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <Container className="my-4">
        <h2 className=" text-white mb-4">Recensioni</h2>
        <Row xs={2} md={3} lg={4} xl={5} className="g-4">
          {reviews.map((review) => (
            <Col key={review.id}>
              <Card className="background text-white">
                <Card.Body>
                  {/* Visualizza le informazioni della recensione */}
                  <Card.Title>{review.author.username}</Card.Title>
                  <Card.Text>{review.comment}</Card.Text>
                  {/* Aggiungi altri campi a seconda delle tue necessità */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Offers;
