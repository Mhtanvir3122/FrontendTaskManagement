import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { House } from "phosphor-react";

const ServiceUnavailable : React.FC = () => {
  return (
    <div className="error-container py-5">
      <Container className="text-center">
        <img
          alt="503 Service Unavailable"
          className="img-fluid mb-4"
          src="/images/background/error-503.png"
        />
        <Row className="justify-content-center mb-4">
          <Col lg={8}>
            <p className="text-secondary fw-medium">
              503 status code (Service Unavailable) typically indicates a
              performance issue on the origin server.
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
export default ServiceUnavailable;