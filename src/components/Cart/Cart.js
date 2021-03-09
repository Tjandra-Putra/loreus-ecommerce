import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Table,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Cart.css";
import * as actionTypes from "../../store/actions";

const cart = (props) => {
  const [isSubmitted, setSubmit] = useState();

  let buttonEnable = true;
  let redirect = null;

  const submitHandler = () => {
    if (props.selectedItems.length === 0) {
      alert("Cart must not be empty");
    } else {
      setSubmit(true);
    }
  };

  // If submit value is true, it will redirect
  if (isSubmitted) {
    redirect = <Redirect to="/checkout" />;
  }

  // Caculate total amount in cart
  let totalAmount = 0;
  props.selectedItems.map((item) => {
    totalAmount += item.price * item.quantity;
  });

  // Button disable property for checkout
  if (props.selectedItems.length !== 0) {
    buttonEnable = false;
  }

  let loadedProducts = props.selectedItems.map((item, index) => (
    <tr key={item.id} className="border-bottom">
      <td>
        <img
          src={item.imgUrl}
          className="img-fluid"
          alt="introImage"
          width="100"
        />
      </td>
      <td>{item.name}</td>
      <td>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="bd-highlight">
            <DropdownButton
              id="dropdown-basic-button"
              title={"Quantity " + item.quantity}
              onSelect={(event) =>
                props.editCartQuantityHandler(event, item.id)
              }
            >
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
              <Dropdown.Item eventKey="4">4</Dropdown.Item>
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
              <Dropdown.Item eventKey="6">6</Dropdown.Item>
              <Dropdown.Item eventKey="7">7</Dropdown.Item>
              <Dropdown.Item eventKey="8">8</Dropdown.Item>
              <Dropdown.Item eventKey="9">9</Dropdown.Item>
              <Dropdown.Item eventKey="10">10</Dropdown.Item>
            </DropdownButton>
          </div>
          {/* <div className="pl-2 bd-highlight">{item.quantity}</div> */}
        </div>
      </td>
      <td>S${item.price}</td>
      <td>
        <div
          className="btn-remove"
          onClick={() => props.removeCartItemHandler(index)}
        >
          Remove
        </div>
      </td>
    </tr>
  ));

  if (loadedProducts.length === 0) {
    loadedProducts = <p>There are no items in your bag.</p>;
  }

  return (
    <Container>
      {redirect}
      <Alert
        variant="dark"
        dismissible
        style={{ backgroundColor: "rgb(247, 247, 247)", border: "none" }}
      >
        HAVE A PROMO CODE? You will be able to apply it on the payment page
        during checkout.
      </Alert>
      <Row>
        <Col md={8} className="">
          <h5>Bag</h5>

          <Table borderless hover>
            <tbody>{loadedProducts}</tbody>
          </Table>
        </Col>
        <Col md={4} className="">
          <h5>Summary</h5>
          <div className="d-flex justify-content-between mt-3">
            <div className="pr-2 bd-highlight">Subtotal</div>
            <div className="pr-2 bd-highlight">S${totalAmount.toFixed(2)}</div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="pr-2 bd-highlight">
              Estimated Delivery & Handling
            </div>
            <div
              className="pr-2 bd-highlight"
              style={{ color: "rgb(250, 84, 0)", fontWeight: "500" }}
            >
              Free
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between mt-3">
            <div className="pr-2 bd-highlight">Total</div>
            <div className="pr-2 bd-highlight font-weight-bold">
              S${totalAmount.toFixed(2)}
            </div>
          </div>
          <hr />

          <Button
            variant="dark"
            id="btn-checkout"
            size="lg"
            block
            onClick={submitHandler}
            disabled={buttonEnable}
          >
            CHECKOUT
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// ==================================== REDUX SECTION ====================================

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
  return {
    selectedItems: global_state.selectedItems,
  };
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
  return {
    editCartQuantityHandler: (event, itemId) =>
      dispatch({
        type: actionTypes.EDIT_CART_QUANTITY,
        event: event,
        itemId: itemId,
      }),
    removeCartItemHandler: (index) =>
      dispatch({ type: actionTypes.REMOVE_CART_ITEM, index: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);
