import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { House } from "phosphor-react";

const Forbidden : React.FC = () => {
  return (
    <div className="error-container py-5">
      <Container className="text-center">
        <img
          alt="403 Forbidden"
          className="img-fluid mb-4"
          src="/images/background/error-403.png"
        />

        <Row className="justify-content-center mb-4">
          <Col lg="8">
            <p className="text-secondary fw-medium">
              403 Forbidden response status code indicates that the server
              understands the request
              <br /> but refuses to authorize it.
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
export default Forbidden;