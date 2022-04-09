import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../../utilities/Rating";

const SingleProduct = ({ value }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={value.image} alt={value.name} />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Subtitle style={{ padddingBottom: "10px" }}>
            <span>${value.price.split(".")[0]} </span>
            {value.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery </div>
            )}
            <Rating rating={value.rating} />
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
