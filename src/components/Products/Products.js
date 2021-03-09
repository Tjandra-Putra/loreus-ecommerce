import React from "react";
import { Container, Row, Col, Form, Toast } from "react-bootstrap";
import Product from "../../components/Products/Product/Product";
import { useState } from "react";

import "./Products.css";

const products = (props) => {
  let [category, setCategory] = useState("Recommended");

  // Toast
  const [show, setShow] = useState(false);

  const toastMsg = () => {
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
            zIndex: "999",
          }}
        >
          <Toast
            className="toast-custom mx-auto"
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <div className="mr-auto toast-title">
                <i className="fas fa-check-circle text-success" /> Sorted by
              </div>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>{category}</Toast.Body>
          </Toast>
        </div>
      </React.Fragment>
    );
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  let loadedProducts;
  let propProduct = [...props.products];

  if (category === "Recommended") {
    loadedProducts = (
      <Row>
        {propProduct.map((product) => (
          <Col xs={6} sm={6} md={4} lg={4} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    );
  }

  if (category === "Price Low To High") {
    loadedProducts = (
      <Row>
        {propProduct
          .sort((a, b) => a.price - b.price)
          .map((product) => (
            <Col xs={6} sm={6} md={4} lg={4} key={product.id}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    );
  }

  if (category === "Price High To Low") {
    loadedProducts = (
      <Row>
        {propProduct
          .sort((a, b) => b.price - a.price)
          .map((product) => (
            <Col xs={6} sm={6} md={4} lg={4} key={product.id}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    );
  }

  if (category === "Just In") {
    loadedProducts = (
      <Row>
        {propProduct
          .filter((prod) => prod.productMsgInfo === "Just In")
          .map((product) => (
            <Col xs={6} sm={6} md={4} lg={4} key={product.id}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    );
  }

  return (
    <Container>
      {toastMsg()}
      <Row>
        <Col xs={12} sm={6} md={6}>
          <h4 style={{ fontWeight: "300" }}>Products</h4>
          <small className="text-muted">
            {"(" + props.products.length + " items)"}
          </small>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Form.Group
            controlId="exampleForm.ControlSelect1"
            style={{ float: "right" }}
          >
            <Form.Control
              as="select"
              value={category}
              onChange={(event) => {
                categoryHandler(event);
                setShow(true);
              }}
            >
              <option>Recommended</option>
              <option>Price Low To High</option>
              <option>Price High To Low</option>
              <option>Just In</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <hr className="mt-4"></hr>

      {loadedProducts}
    </Container>
  );
};

export default products;
