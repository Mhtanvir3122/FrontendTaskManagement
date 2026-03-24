import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const borderStyles = ["border", "border-t", "border-s", "border-e", "border-b"];

const borderSideStyles = [
  "border-0",
  "border-t-0",
  "border-s-0",
  "border-e-0",
  "border-b-0",
];

const borderColors = [
  "b-1-primary",
  "b-1-secondary",
  "b-1-success",
  "b-1-danger",
  "b-1-warning",
  "b-1-info",
  "b-1-light",
  "b-1-dark",
];

const borderWidths = [
  "b-1-primary",
  "b-3-primary",
  "b-5-primary",
  "b-7-primary",
  "b-9-primary",
  "b-11-primary",
  "b-13-primary",
  "b-15-primary",
  "b-16-primary",
];

const borderRadius = [
  "b-r-5",
  "b-r-10",
  "b-r-15",
  "b-r-20",
  "b-r-25",
  "b-r-30",
];

const dashedBorders = [
  "dashed-1-primary",
  "dashed-2-secondary",
  "dashed-3-success",
  "dashed-4-warning",
  "dashed-5-danger",
  "dashed-6-dark",
  "dashed-8-info",
];

const dottedBorders = [
  "dotted-1-primary",
  "dotted-2-secondary",
  "dotted-3-success",
  "dotted-4-warning",
  "dotted-5-danger",
  "dotted-6-dark",
  "dotted-8-info",
];

const imageClasses = [
  "rounded",
  "rounded-top",
  "rounded-end",
  "rounded-bottom",
  "rounded-start",
  "rounded-pill",
  "rounded-circle w-120 h-120",
];

const rotateData = [
  { degree: "90°", className: "rotate" },
  { degree: "180°", className: "rotate rotate-180" },
  { degree: "270°", className: "rotate rotate-270" },
  { degree: "-90°", className: "rotate rotate-90-1" },
  { degree: "-180°", className: "rotate rotate-180-1" },
  { degree: "-280°", className: "rotate rotate-280-1" },
];

const HelperRadiusBorder: React.FC = () => {
  return (
    <>
      {/* Radius */}
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Radius</h5>
            <div className="text-muted mt-2 f-s-15 ">
              using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                rounded*/rounded-top*/rounded-end*/rounded-bottom*/
                rounded-start*/rounded-pill*/rounded-circle*
              </a>{" "}
              class for Radius
            </div>
          </Card.Header>
          <Card.Body>
            <div className="app-example">
              {imageClasses.map((cls, index) => (
                <img
                  key={index}
                  src="/images/blog-app/01.jpg"
                  className={cls}
                  alt=""
                />
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Border */}
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Border</h5>
            <div className="text-muted mt-2 f-s-15 ">
              using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                b-*
              </a>{" "}
              class for border
            </div>
          </Card.Header>
          <Card.Body>
            {/* Border Styles */}
            <div className="app-example">
              {borderStyles.map((cls, index) => (
                <div key={index} className={`${cls} b-r-22`}>
                  {cls}
                </div>
              ))}
            </div>

            <div className="app-divider-v">
              <h6>Side Border</h6>
            </div>
            <div className="app-example">
              {borderSideStyles.map((cls, index) => (
                <div key={index} className={`${cls} b-r-22`}>
                  {cls}
                </div>
              ))}
            </div>

            <div className="app-divider-v">
              <h6>Border Color</h6>
            </div>
            <div className="app-example">
              {borderColors.map((cls, index) => (
                <div key={index} className={`${cls} p-2 b-r-22`}>
                  {cls}
                </div>
              ))}
            </div>

            <div className="app-divider-v">
              <h6>Border Width</h6>
            </div>
            <div className="app-example">
              {borderWidths.map((cls, index) => (
                <div key={index} className={`${cls} b-r-22`}>
                  {cls}
                </div>
              ))}
            </div>

            <div className="app-divider-v">
              <h6>Border Radius</h6>
            </div>
            <div className="app-example">
              {borderRadius.map((cls, index) => (
                <div key={index} className={`b-1-secondary ${cls}`}>
                  {cls}
                </div>
              ))}
            </div>

            <div className="app-divider-v">
              <h6>Border Dashed Style</h6>
            </div>
            <div className="app-example">
              {dashedBorders.map((cls, index) => (
                <div key={index} className={cls}>
                  {cls}
                </div>
              ))}
            </div>

            <div className="app-divider-v">
              <h6>Border Dotted Style</h6>
            </div>
            <div className="app-example">
              {dottedBorders.map((cls, index) => (
                <div key={index} className={cls}>
                  {cls}
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Rotate</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              {rotateData.map((item, index) => (
                <Col key={index} xs={6} sm={4} md={3} lg={2}>
                  <div className={`${item.className} b-r-22`}>
                    <span>{item.degree}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default HelperRadiusBorder;
