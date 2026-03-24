import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

import Cleave from "cleave.js/react";
import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const InputMasksPage: React.FC = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Input Masks"
        title="Forms elements"
        path={["Input Masks"]}
        Icon={Cardholder}
      />

      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Date Formatting Input Masks</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6} xl={4}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Simple Date:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="date"
                        options={{
                          date: true,
                          delimiter: "/",
                          datePattern: ["d", "m", "Y"],
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6} xl={4}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Date & Month:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="date & month"
                        options={{
                          date: true,
                          delimiter: "/",
                          datePattern: ["d", "m"],
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6} xl={4}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Formatting Date:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="formatting date"
                        options={{
                          date: true,
                          delimiter: ".",
                          datePattern: ["Y", "m", "d"],
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6} xl={4}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Formatting Delimiter:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="delimiter"
                        options={{ date: true, delimiter: "-" }}
                      />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Time Formatting Input Masks</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6} xl={4}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Simple Time:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="time"
                        options={{ time: true, timePattern: ["h", "m", "s"] }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6} xl={4}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Minutes & Seconds:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="minutes & seconds"
                        options={{ time: true, timePattern: ["m", "s"] }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6} xl={4}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Hours & Minutes:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="hours & minutes"
                        options={{ time: true, timePattern: ["h", "m"] }}
                      />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Custom Formatting Input Masks</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Simple Contact:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="xxx-xxx-xxxx"
                        options={{
                          blocks: [3, 3, 4],
                          delimiter: "-",
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Formatting Contact:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="(xxx)(xxx)(xxxx)"
                        options={{
                          blocks: [0, 3, 3, 4],
                          delimiter: "(",
                          delimiterLazyShow: true,
                          numeral: true,
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Credit Card Number Formatting:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="xxxx xxxx xxxx xxxx"
                        options={{
                          creditCard: true,
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Price:</Form.Label>
                      <Cleave
                        className="form-control"
                        placeholder="price"
                        options={{
                          numeral: true,
                          numeralThousandsGroupStyle: "thousand",
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <p>
                cleave.js is a Javascript Plugin for Input Masks. For more
                options, please check:{" "}
                <a
                  href="https://nosir.github.io/cleave.js/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-underline link-primary"
                >
                  cleave.js
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/nosir/cleave.js"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-underline link-primary"
                >
                  GitHub
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InputMasksPage;
