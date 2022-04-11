import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import "./cart.css";
import Rating from "../../utilities/Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, SetTotal] = useState();
  useEffect(() => {
    SetTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((value) => (
            <ListGroup.Item key={value.id}>
              <Row>
                <Col md={2}>
                  <Image src={value.image} alt={value.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{value.name}</span>
                </Col>
                <Col md={2}>$ {value.price}</Col>
                <Col>
                  <Rating rating={value.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: value.id,
                          qty: e.target.value,
                        },
                      })
                    }
                    as="select"
                    value={value.qty}
                  >
                    {[...Array(value.inStock).keys()].map((x) => (
                      <option key={x + 1}> {x + 1} </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: value,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summery">
        <span className="title"> Subtotal({cart.length}) items </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          {" "}
          Total: $ {total}{" "}
        </span>
      </div>
    </div>
  );
};

export default Cart;
