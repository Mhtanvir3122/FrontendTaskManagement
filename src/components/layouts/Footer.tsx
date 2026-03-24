import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { IconHelp } from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-4">
      <Container fluid>
        <Row>
          <Col md={9} xs={12}>
            <p className="footer-text fw-semibold mb-0">
              © 2025 ki-admin. All rights reserved 💖 V1.0.0
            </p>
          </Col>
          <Col md={3}>
            <div className="footer-text text-end">
              <a
                className="fw-medium text-primary"
                href="mailto:teqlathemes@gmail.com"
              >
                Need Help <IconHelp size={16} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
