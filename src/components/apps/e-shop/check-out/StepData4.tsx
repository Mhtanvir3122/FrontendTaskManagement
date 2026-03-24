import { useState } from "react";
import {
  Accordion,
  Alert,
  CloseButton,
  Col,
  Image,
  Row,
} from "react-bootstrap";

import { Gift } from "phosphor-react";

const StepData4 = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div>
      <Row>
        <Col md="3" xl="4">
          <Row>
            <Col xs={12} className="mb-3">
              <Image
                src="/images/ecommerce/23.jpg"
                alt="product-img"
                fluid
                className="rounded"
              />
            </Col>
            <Col xs={6} className="mb-3">
              <Image
                src="/images/ecommerce/25.jpg"
                alt="product-img"
                fluid
                className="rounded"
              />
            </Col>
            <Col xs={6} className="mb-3 mt-sm-0">
              <Image
                src="/images/ecommerce/13.jpg"
                alt="product-img"
                fluid
                className="rounded"
              />
            </Col>
          </Row>
        </Col>
        <Col md="9" xl="8">
          <Row>
            <Col md={12}>
              <div className="mb-3">
                <h6 className="mb-0">Estimated Delivery Date: 27 Dec 2024</h6>
                <p className="text-muted">Items dispatched by MQ Store</p>
              </div>
              <Alert
                variant="success"
                className="alert-light-border-success d-flex align-items-center justify-content-between"
                onClose={() => setShow(false)}
                dismissible
              >
                <div className="d-flex align-items-center">
                  <Gift className="me-2" size={18} />
                  <p className="mb-0">
                    Gift wrap and personalized message on card, Only for $10.50
                    USD
                  </p>
                </div>
                <CloseButton onClick={() => setShow(false)} />
              </Alert>
            </Col>

            <Col xs={12}>
              <h6>Product details</h6>
              <Accordion
                className="app-accordion  accordion-flush accordion-secondary app-accordion-plus"
                defaultActiveKey="0"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Tom & Jerry Printed T-Shirt
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <span className="text-muted fw-semibold">size</span> :
                      medium
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">color</span> :
                      Green
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">Items</span> : 2
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">Rating</span> :
                      3+
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Swatch Watch Irony</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <span className="text-muted fw-semibold">color</span> :
                      Dark
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">Items</span> : 2
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">Rating</span> :
                      4+
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Nike Air Max 1</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <span className="text-muted fw-semibold">size</span> :
                      large
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">color</span> :
                      White
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">Items</span> : 1
                    </p>
                    <p>
                      <span className="text-muted fw-semibold">Rating</span> :
                      5+
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default StepData4;
