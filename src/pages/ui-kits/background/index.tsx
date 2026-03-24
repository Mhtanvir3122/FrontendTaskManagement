import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Container, Row } from "react-bootstrap";

import { Briefcase, Code } from "phosphor-react";
import Prism from "prismjs";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const backgroundColors = [
  { name: "primary", text: "text-white", bgColor: 900 },
  { name: "secondary", text: "text-white", bgColor: 500 },
  { name: "success", text: "text-white", bgColor: 500 },
  { name: "danger", text: "text-white", bgColor: 500 },
  { name: "warning", text: "text-white", bgColor: 500 },
  { name: "info", text: "text-white", bgColor: 500 },
  { name: "light", text: "text-dark", bgColor: 500 },
  { name: "dark", text: "text-white", bgColor: 500 },
];

const backgroundColorsShades = [
  "bg-primary-900",
  "bg-primary-800",
  "bg-primary-700",
  "bg-primary-600",
  "bg-primary-500",
  "bg-primary-400",
  "bg-primary-300",
];

const Background: React.FC = () => {
  const [uiState, setUiState] = useState({
    openBack : false,
    openBack2: false,
    openBack3: false,
    openBack4: false,
  })

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Background"
          title="Ui Kits"
          path={["Background"]}
          Icon={Briefcase}
        />

        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header className="code-header">
                <h5>Background Colors</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openBack : !uiState.openBack}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <div className="d-flex gap-2 flex-wrap">
                  {backgroundColors.map((color) => (
                    <span
                      key={color.name}
                      className={`py-2 px-3 bg-${color.name} ${color.text} rounded f-w-500`}
                    >
                      bg-{color.name}
                    </span>
                  ))}
                </div>
              </Card.Body>
              <Collapse in={uiState.openBack}>
                <pre className="diamondbullet language-html mt-3">
                  <code className="language-html">
                    {`
              <div className="d-flex gap-2 flex-wrap">
                ${backgroundColors
                  .map(
                    (color) =>
                      `<span className="py-2 px-3 bg-${color.name} ${color.text} rounded f-w-500">bg-${color.name}</span>`
                  )
                  .join("\n  ")}
              </div>
                              `}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>
          {/* Background Color Shades */}
          <Col xs={12}>
            <Card>
              <Card.Header className="code-header">
                <h5>Background Color Shades</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openBack2 : !uiState.openBack2}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <div className="d-flex gap-2 flex-wrap">
                  {backgroundColorsShades.map((bgColor) => (
                    <span
                      key={bgColor}
                      className={`py-2 px-3 ${bgColor} rounded f-w-500`}
                    >
                      {bgColor}
                    </span>
                  ))}
                </div>
              </Card.Body>
              <Collapse in={uiState.openBack2}>
                <pre className="diamondbullet mt-3 language-html">
                  <code className="language-html">
                    {`
         <div className="d-flex gap-2 flex-wrap">
             ${backgroundColorsShades
               .map(
                 (bgColor) =>
                   `<span className="py-2 px-3 ${bgColor} rounded f-w-500">${bgColor}</span>`
               )
               .join("\n  ")}
          </div>
                `}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>
          {/* Outline Background */}
          <Col xs={12}>
            <Card>
              <Card.Header className="code-header">
                <h5>Outline Background</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openBack3 : !uiState.openBack3}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <div className="d-flex gap-2 flex-wrap">
                  {backgroundColors.map((color) => (
                    <span
                      key={color.name}
                      className={`py-2 px-3 btn-outline-${color.name} rounded f-w-500 opacity-75`}
                    >
                      bg-outline-{color.name}
                    </span>
                  ))}
                </div>
              </Card.Body>
              <Collapse in={uiState.openBack3}>
                <pre className="diamondbullet language-html mt-3">
                  <code className="language-html">
                    {`
     <div className="d-flex gap-2 flex-wrap">
          ${backgroundColors
            .map(
              (color) =>
                `<span className="py-2 px-3 bg-outline-${color.name} rounded f-w-500">bg-outline-${color.name}</span>`
            )
            .join("\n  ")}
        </div>
                `}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>
          {/* Soft Background */}
          <Col xs={12}>
            <Card>
              <Card.Header className="code-header">
                <h5>Soft Background</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openBack4 : !uiState.openBack4}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <div className="d-flex gap-2 flex-wrap">
                  {backgroundColors.map((color) => (
                    <span
                      key={color.name}
                      className={`py-2 px-3 bg-light-${color.name} rounded f-w-500`}
                    >
                      bg-light-{color.name}
                    </span>
                  ))}
                </div>
              </Card.Body>
              <Collapse in={uiState.openBack4}>
                <pre className="diamondbullet language-html mt-3">
                  <code className="language-html">
                    {`
<div className="d-flex gap-2 flex-wrap">
  ${backgroundColors
    .map(
      (color) =>
        `<span className="py-2 px-3 bg-light-${color.name} rounded f-w-500">bg-light-${color.name}</span>`
    )
    .join("\n  ")}
</div>
                `}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Background;
