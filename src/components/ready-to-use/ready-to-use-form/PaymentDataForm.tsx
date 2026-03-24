import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const PaymentDataForm: React.FC = () => {
  return (
    <Form className="app-form">
      <Row>
        <Col md={12}>
          <Form.Group className="mb-3" controlId="cardholderName">
            <Form.Label>Cardholder Name</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3" controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="xxxx-xxxx-xxxx-xxx"
              required
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="expiration">
            <Form.Label>Expiration</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" required />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="cvcCode">
            <Form.Label>CVC code</Form.Label>
            <Form.Control type="text" placeholder="xxx" required />
          </Form.Group>
        </Col>

        <Col md={12} className="text-end">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PaymentDataForm;
