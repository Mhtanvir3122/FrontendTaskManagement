import React from "react";
import { Card, Col } from "react-bootstrap";

const textColors = [
  { class: "text-primary", label: "text-primary" },
  { class: "text-secondary", label: "text-secondary" },
  { class: "text-success", label: "text-success" },
  { class: "text-danger", label: "text-danger" },
  { class: "text-warning", label: "text-warning" },
  { class: "text-info", label: "text-info" },
  { class: "text-light", label: "text-light" },
  { class: "text-dark", label: "text-dark" },
];

const linkColors = [
  { class: "link-primary", label: "link-primary" },
  { class: "link-secondary", label: "link-secondary" },
  { class: "link-success", label: "link-success" },
  { class: "link-danger", label: "link-danger" },
  { class: "link-warning", label: "link-warning" },
  { class: "link-info", label: "link-info" },
  { class: "link-light", label: "link-light" },
  { class: "link-dark", label: "link-dark" },
];
const textBackgrounds = [
  { class: "txt-bg-primary", label: "txt-bg-primary" },
  { class: "txt-bg-secondary", label: "txt-bg-secondary" },
  { class: "txt-bg-success", label: "txt-bg-success" },
  { class: "txt-bg-danger", label: "txt-bg-danger" },
  { class: "txt-bg-warning", label: "txt-bg-warning" },
  { class: "txt-bg-info", label: "txt-bg-info" },
  { class: "txt-bg-light", label: "txt-bg-light" },
  { class: "txt-bg-dark", label: "txt-bg-dark" },
];

const HelperColor: React.FC = () => {
  return (
    <>
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Text Color</h5>
            <div className=" mt-2 f-s-15 text-muted">
              Using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                text-*
              </a>{" "}
              class for text color
            </div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap gap-2">
              {textColors.map((color) => (
                <span key={color.class} className={`${color.class} p-2`}>
                  - .{color.label}
                </span>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Link Color</h5>
            <div className=" mt-2 f-s-15 text-muted">
              Using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                link-*
              </a>{" "}
              class for link color
            </div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap gap-2">
              {linkColors.map((color) => (
                <span key={color.class} className="p-2">
                  -{" "}
                  <a
                    href="#"
                    className={`text-decoration-underline ${color.class}`}
                  >
                    {color.label}
                  </a>
                </span>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Text Background Color</h5>
            <div className=" mt-2 f-s-15 text-muted">
              Using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                txt-bg-*
              </a>{" "}
              class for light background
            </div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap gap-2">
              {textBackgrounds.map((bg) => (
                <span key={bg.class} className={`${bg.class} p-2 `}>
                  - .{bg.label}
                </span>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default HelperColor;
