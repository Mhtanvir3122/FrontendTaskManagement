import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const typographyStyles = [
  {
    title: "Text Align",
    description: "using text-* class for text align",
    items: [
      { class: "text-lowercase", label: "Text-Lowercase" },
      { class: "text-uppercase", label: "Text-Uppercase" },
      { class: "text-capitalize", label: "Text-Capitalize" },
      { class: "text-center", label: "Text Align Center" },
      { class: "text-start", label: "Text Align Start" },
      { class: "text-end", label: "Text Align End" },
    ],
  },
  {
    title: "Text Decoration",
    description: "using text-d-* class for text decoration",
    items: [
      { class: "text-decoration-underline", label: "underline" },
      { class: "text-decoration-line-through", label: "line-through" },
      { class: "text-decoration-overline", label: "overline" },
    ],
  },
  {
    title: "Font Style",
    description: "using f-fs-* class for font style",
    items: [
      { class: "fst-normal", label: "Normal" },
      { class: "fst-italic", label: "Italic" },
      { class: "fst-oblique", label: "Oblique" },
      { class: "fst-initial", label: "Initial" },
      { class: "fst-inherit", label: "Inherit" },
    ],
  },
  {
    title: "Headings",
    description: "using h1 to h6 class for Headings",
    items: [
      { class: "h1", label: "h1" },
      { class: "h2", label: "h2" },
      { class: "h3", label: "h3" },
      { class: "h4", label: "h4" },
      { class: "h5", label: "h5" },
      { class: "h6", label: "h6" },
    ],
  },
  {
    title: "Font Weight",
    description: "using f-fw-* class for font weight",
    items: [
      { class: "f-fw-100", label: "(100)" },
      { class: "f-fw-200", label: "(200)" },
      { class: "f-fw-300", label: "(300)" },
      { class: "f-fw-400", label: "(400)" },
      { class: "f-fw-500", label: "(500)" },
      { class: "f-fw-600", label: "(600)" },
      { class: "f-fw-700", label: "(700)" },
      { class: "f-fw-800", label: "(800)" },
      { class: "f-fw-900", label: "(900)" },
    ],
  },
  {
    title: "Font Size",
    description: "using f-s-* class for font size",
    items: [
      { class: "fs-1", label: "Size-1" },
      { class: "fs-2", label: "Size-2" },
      { class: "fs-3", label: "Size-3" },
      { class: "fs-4", label: "Size-4" },
      { class: "fs-5", label: "Size-5" },
      { class: "fs-6", label: "Size-6" },
    ],
  },
];

const HelperTextFont: React.FC = () => {
  return (
    <>
      <Col xs={12}>
        <Row>
          {typographyStyles.map((category, index) => (
            <Col xl={4} key={index}>
              <Card className="equal-card mb-4">
                <Card.Header>
                  <h5 className="f-w-600">{category.title}</h5>
                  <div className=" mt-2 f-s-15 text-muted">
                    using{" "}
                    <a href="#" className="text-decoration-underline text-dark">
                      {category.description}
                    </a>
                  </div>
                </Card.Header>
                <Card.Body>
                  {category.items.map((item, idx) => (
                    <div className="p-2" key={idx}>
                      - {category.title}{" "}
                      <span className={item.class + " ms-2"}>{item.label}</span>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
};

export default HelperTextFont;
