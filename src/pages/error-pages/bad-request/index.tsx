import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { House } from "phosphor-react";

const BadRequest: React.FC = () => {
  return (
    <div className="error-container py-5">
      <Container className="text-center">
        <img
          src="/images/background/error-400.png"
          className="img-fluid mb-4"
          alt="400 Error"
        />

        <Row className="justify-content-center mb-4">
          <Col lg={8}>
            <p className="text-secondary fw-medium">
              400 Bad Request response status code indicates that the server
              cannot or will not process the request due to something that is
              perceived to be a client error.
            </p>
          </Col>
        </Row>

        <Link
          to="/dashboard/ecommerce"
          className="btn btn-lg btn-primary mt-3 d-inline-flex align-items-center justify-content-center gap-1"
        >
          <House size={18} weight="bold"  />
          Back To Home
        </Link>
      </Container>
    </div>
  );
};

export default BadRequest;
