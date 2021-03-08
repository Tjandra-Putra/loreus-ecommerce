import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Product from "../../components/Products/Product/Product";

const products = (props) => (
  <Container>
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
          style={{ width: "14vw", float: "right" }}
        >
          <Form.Control as="select">
            <option>Sort by Recommended</option>
            <option>Price Low To High</option>
            <option>Price High To Low</option>
            <option>Just In</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
    <hr></hr>

    <Row>
      {props.products.map((product) => (
        <Col xs={12} sm={6} md={4} lg={4} key={product.id}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default products;
