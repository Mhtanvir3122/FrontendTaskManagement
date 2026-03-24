import React, { useState } from "react";
import { Button, Card, Col, Row, Toast, ToastBody } from "react-bootstrap";

const toastData = [
  {
    title: "Default Toast",
    message: "Hello, world! This is a toast message.",
    type: "default",
    imgSrc: "/images/logo/3.png",
  },
  {
    title: "Custom Content Toast",
    message: "Hello, world! This is a toast message.",
    type: "custom",
  },
  {
    title: "Primary Toast",
    message: "Hello, world! This is a toast message.",
    type: "primary",
  },
];

const DefaultTost: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5>Reactstrap Toasts</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              {toastData.map((toast) => (
                <Col key={toast.title} lg={4} className="mb-4 mb-lg-0">
                  {toast.type === "default" && (
                    <Toast className="d-block b-1-primary bg-light-primary">
                      <Toast.Header>
                        <img
                          src={toast.imgSrc}
                          className="rounded me-2"
                          alt="logo"
                          width="30"
                          height="30"
                        />
                        <strong className="me-auto text-primary">
                          Ki-admin
                        </strong>
                      </Toast.Header>
                      <ToastBody>{toast.message}</ToastBody>
                    </Toast>
                  )}

                  {toast.type === "custom" && (
                    <Toast className="d-block b-1-secondary">
                      <ToastBody className="text-secondary f-w-600">
                        {toast.message}
                        <div className="mt-2 pt-2 border-top">
                          <Button color="light-primary">Take action</Button>{" "}
                          <Button variant="secondary" data-bs-dismiss="toast">
                            Close
                          </Button>
                        </div>
                      </ToastBody>
                    </Toast>
                  )}

                  {toast.type === "primary" && (
                    <Toast
                      className={`d-block bg-${toast.type} text-white border-0`}
                    >
                      <ToastBody className="d-flex justify-content-between align-items-center">
                        {toast.message}
                        <Button
                          variant="close"
                          aria-label="Close"
                          onClick={() => setShow(false)} // or implement toast-specific close logic
                        />
                      </ToastBody>
                    </Toast>
                  )}
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5>Placement Toasts</h5>
          </Card.Header>
          <Card.Body>
            <Button color="light-primary" onClick={() => setShow(true)}>
              Show Toast
            </Button>
            <div className="mt-3">
              <Toast
                show={show}
                onClose={() => setShow(false)}
                className="mt-3"
              >
                <Toast.Header className=" bg-light-primary border-primary border-opacity-25">
                  <strong className="me-auto">Toast Header</strong>
                </Toast.Header>
                <ToastBody>Some text inside the toast body</ToastBody>
              </Toast>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DefaultTost;
