import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GoCodeReview } from "react-icons/go";
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
    <div className="background-review">
      <Container className="my-4">
        <h2 className=" text-white mb-4">Recensioni</h2>
        <Row xs={2} md={3} lg={4} xl={5} className="g-4">
          {reviews.map((review) => (
            <Col key={review.id}>
              <Card border="light" className="background text-white">
                <Card.Header className="d-flex ">
                  <GoCodeReview className="m-2" />
                  <Card.Title className="author-text-color">
                    {review.author.username}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{review.comment}</Card.Text>
                  <Card.Text>Voto: {review.rating}</Card.Text>
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
