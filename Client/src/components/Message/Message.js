import React from "react";
import { Alert } from "react-bootstrap";

const message = () => {
  return (
    <Alert variant="dark" className="text-center alert-message mb-0 border-0">
      <strong>VIP DAY SALE! </strong> Free shipping for orders over $38
    </Alert>
  );
};

export default message;
