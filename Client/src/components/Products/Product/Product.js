import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Product.css";

const product = (props) => {
  return (
    <Container className="px-0 product">
      <LinkContainer to={"/products/" + props.product.id}>
        <Card className="my-4 card">
          <Card.Img variant="top" src={props.product.imgUrl} className="prod-img"/>
          <Card.Body>
            <Card.Title className="card-title product-msg-info">
              {props.product.productMsgInfo}
            </Card.Title>
            <Card.Title className="card-title product-name">{props.product.name}</Card.Title>
            {/* <Card.Text>{props.product.desc}</Card.Text> */}
            <Card.Text className="float-right product-price">
              S${props.product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Container>
  );
};

export default product;
