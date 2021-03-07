import React from "react";
import { Alert } from "react-bootstrap";

const message = () => {
  return (
    <Alert variant="dark" className="text-center alert-message mb-0 border-0">
      <strong>SALES! </strong> Get your discount now!
    </Alert>
  );
};

export default message;
