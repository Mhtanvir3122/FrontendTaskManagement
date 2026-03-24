import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { House } from "phosphor-react";

const InternalServer: React.FC = () => {
  return (
    <div className="error-container py-5">
      <Container className="text-center">
        <img
          alt="500 Internal Server Error"
          className="img-fluid mb-4"
          src="/images/background/error-500.png"
        />
        <Row className="justify-content-center mb-4">
          <Col lg="8">
            <p className="text-secondary fw-medium">
              500 Internal Server Error response code indicates that the server
              encountered an unexpected condition that prevented it from
              fulfilling the request.
            </p>
          </Col>
        </Row>
        <Link
          to="/dashboard/ecommerce"
          className="btn btn-lg btn-primary mt-3 d-inline-flex align-items-center justify-content-center gap-1"
        >
          <House size={18} weight="bold" />
          Back To Home
        </Link>
      </Container>
    </div>
  );
};
export default InternalServer;
