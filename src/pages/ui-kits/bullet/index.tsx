import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Container, Row } from "react-bootstrap";

import {
  ArrowBendDownRight,
  ArrowFatLineRight,
  Briefcase,
  CaretRight,
  Code,
  StarFour,
} from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const Bullet: React.FC = () => {
  const [uiState, setUiState] = useState({
    openPosition: false,
    openPosition2: false,
    openPosition3: false,
    openPosition4: false,
    openPosition5: false,
    openPosition6: false,
    openPosition7: false,
    openPosition8: false,
    openPosition9: false,
    openPosition10: false,
    openPosition11: false,
    openPosition12: false,
  })

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const bulletVariants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Bullet"
          title="Ui Kits"
          path={["Bullet"]}
          Icon={Briefcase}
        />
        <Row className="list-item bullet-item">
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Diamond Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition : !uiState.openPosition}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li
                      key={variant}
                      className={`diamond diamond-bullet-${variant}`}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="diamond diamond-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Heart Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition2 : !uiState.openPosition2}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li
                      key={variant}
                      className={`heart heart-bullet-${variant}`}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition2}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="heart heart-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
                `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Burst Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition3 : !uiState.openPosition3}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li
                      key={variant}
                      className={`burst burst-bullet-${variant}`}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition3}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="burst burst-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
                  `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Star Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition4 : !uiState.openPosition4}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li key={variant} className="bullet-list-box">
                      <StarFour
                        size={16}
                        weight="fill"
                        className={`text-${variant} me-2`}
                      />
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition4}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li><IconNorthStar size={20} className="text-${variant} me-2" /> ${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
                  `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Right Arrow Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition5 : !uiState.openPosition5}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li key={variant} className="bullet-list-box right-arrow">
                      <ArrowFatLineRight
                        size={16}
                        weight="fill"
                        className={`text-${variant} me-2`}
                      />
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition5}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="right-arrow"><IconArrowBigRightLineFilled size={22} className="text-${variant} me-2" /> ${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
                  `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Line Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition6 : !uiState.openPosition6}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li key={variant} className={`line line-bullet-${variant}`}>
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition6}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="line line-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Arrow Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition7 : !uiState.openPosition7}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li key={variant} className="bullet-list-box">
                      <CaretRight
                        size={16}
                        weight="bold"
                        className={`text-${variant} me-2`}
                      />
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition7}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="arrow arrow-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Corner Arrow Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition8 : !uiState.openPosition8}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li
                      key={variant}
                      className={`bullet-list-box corner-arrow corner-arrow-bullet-${variant}`}
                    >
                      <ArrowBendDownRight
                        size={16}
                        weight="fill"
                        className={`text-${variant} me-2`}
                      />
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition8}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="corner-arrow corner-arrow-bullet-${variant}"><IconCornerDownRightDouble size={22} className="text-${variant} me-2" /> ${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Circle Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition9 : !uiState.openPosition9}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li
                      key={variant}
                      className={`circle circle-bullet-${variant}`}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition9}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="circle circle-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Triangle Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition10 : !uiState.openPosition10}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li
                      key={variant}
                      className={`triangle triangle-bullet-${variant}`}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition10}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="triangle triangle-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Square Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition11 : !uiState.openPosition11}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li
                      key={variant}
                      className={`square square-bullet-${variant}`}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition11}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="square square-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} xxl={3}>
            <Card>
              <Card.Header className="code-header">
                <h5>Plus Bullet</h5>
                <a onClick={() => setUiState((prev) => ({...prev, openPosition12 : !uiState.openPosition12}))}>
                  <Code size={30} weight="bold" className=" source" />
                </a>
              </Card.Header>
              <Card.Body>
                <ul>
                  {bulletVariants.map((variant) => (
                    <li key={variant} className={`plus plus-bullet-${variant}`}>
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                      Bullet
                    </li>
                  ))}
                </ul>
                <Collapse in={uiState.openPosition12}>
                  <pre tabIndex={0} className="language-html">
                    <code className="language-html">
                      {`
<ul>  
  ${bulletVariants
    .map(
      (variant) =>
        `<li className="plus plus-bullet-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)} Bullet</li>`
    )
    .join("\n  ")}
</ul>
            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bullet;
