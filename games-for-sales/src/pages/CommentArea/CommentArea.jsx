import React from "react";
import { Carousel } from "react-bootstrap";

const CommentArea = () => {
  return (
    <Carousel>
      {CommentArea.map((review, index) => (
        <Carousel.Item key={index}>
          <div>
            <h4>{review.author.username}</h4>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CommentArea;
