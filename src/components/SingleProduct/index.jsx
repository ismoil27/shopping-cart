import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "../../utilities/Rating";
import { CartState } from "../context/Context";
import "./singleproduct.css";

const SingleProduct = ({ value }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

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
          {cart.some((p) => p.id === value.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: value,
                });
              }}
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: value,
                });
              }}
              disabled={!value.inStock}
            >
              {!value.inStock ? "Out of Stock" : "Add to Cart"}{" "}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
