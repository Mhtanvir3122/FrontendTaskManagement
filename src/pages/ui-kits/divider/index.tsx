import React, { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Container, Row } from "react-bootstrap";

import {
  Briefcase,
  Code,
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const dividerStyles = ["solid", "dotted", "dashed"];

const alignments = [
  "justify-content-start",
  "justify-content-center",
  "justify-content-end",
];

const DividerPage: React.FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  const [uiState, setUiState] = useState({
    openCodeDiv1 : false,
    openCodeDiv2 : false,
    openCodeDiv3 : false,
    openCodeDiv4 : false,
    openCodeDiv5 : false,
    openCodeDiv6 : false,
  })

  const colorsDivider = [
    {
      className: "secondary justify-content-center",
      element: (
        <span className="badge text-bg-secondary">Login With Social</span>
      ),
      code: `<span className="badge text-bg-secondary">Login With Social</span>`,
    },
    {
      className: "success justify-content-end",
      element: <p className="text-success">Align Right</p>,
      code: `<p className="text-success">Align Right</p>`,
    },
    {
      className: "danger",
      element: (
        <span className="badge text-bg-danger">Choose from below option</span>
      ),
      code: `<span className="badge text-bg-danger">Choose from the below option</span>`,
    },
    {
      className: "info justify-content-center gap-1",
      element: (
        <>
          <Button className="btn-facebook icon-btn b-r-22">
            <FacebookLogo size={18} weight="fill" className="text-white" />
          </Button>
          <Button className="btn-twitter icon-btn b-r-22">
            <TwitterLogo size={18} weight="fill" className="text-white" />
          </Button>
          <Button className="btn-linkedin icon-btn b-r-22">
            <LinkedinLogo size={18} weight="fill" className="text-white" />
          </Button>
        </>
      ),
      code: `
<Button className="btn btn-facebook icon-btn b-r-22">
  <i className="ti ti-brand-facebook text-white"></i>
</Button>
<Button className="btn btn-twitter icon-btn b-r-22">
  <i className="ti ti-brand-twitter text-white"></i>
</Button>
<Button className="btn btn-linkedin icon-btn b-r-22">
  <i className="ti ti-brand-linkedin text-white"></i>
</Button>
`,
    },
    {
      className: "warning justify-content-end gap-1",
      element: null,
      code: ``,
    },
    {
      className: "dark justify-content-center",
      element: <p>Dark</p>,
      code: `<p>Dark</p>`,
    },
  ];

  const colorsHorizontal = [
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
          mainTitle="Divider"
          title="Ui Kits"
          path={["Divider"]}
          Icon={Briefcase}
        />
        <Row>
          <Col md={6} xl={8}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between">
                <h5>Vertical Dividers</h5>
                <Button
                  variant="link"
                  onClick={() => setUiState((prev) => ({...prev, openCodeDiv1: !uiState.openCodeDiv1}))}
                  className="p-0"
                >
                  <Code size={30} weight="bold" className=" source" />
                </Button>
              </Card.Header>
              <Card.Body>
                {dividerStyles.map((style, index) => (
                  <div key={index} className={`app-divider-v ${style}`}></div>
                ))}
                <Collapse in={uiState.openCodeDiv1}>
                  <pre className="language-html">
                    <code className="language-html">
                      {`
${dividerStyles.map((style) => `<div className="app-divider-v ${style}"></div>`).join("\n")}
                                            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6" xl="4">
            <Card className="h-100">
              <Card.Header className="code-header d-flex justify-content-between">
                <h5>Horizontal</h5>
                <Button
                  variant="link"
                  onClick={() => setUiState((prev) => ({...prev, openCodeDiv2: !uiState.openCodeDiv2}))}
                  className="p-0"
                >
                  <Code size={30} weight="bold" className=" source" />
                </Button>
              </Card.Header>
              <Card.Body className="divider-body">
                <div className="d-flex h-100">
                  {dividerStyles.map((style, index) => (
                    <div key={index} className={`app-divider-h ${style}`}></div>
                  ))}
                </div>
              </Card.Body>
              <Collapse in={uiState.openCodeDiv2}>
                <pre className="language-html">
                  <code className="language-html">
                    {`
${dividerStyles.map((style) => `<div className="app-divider-h ${style}"></div>`).join("\n")}
                                        `}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>

          <Col md={6} xl={8}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between">
                <h5>Divider with text & aligns</h5>
                <Button
                  variant="link"
                  onClick={() => setUiState((prev) => ({...prev, openCodeDiv3: !uiState.openCodeDiv3}))}
                  className="p-0"
                >
                  <Code size={30} weight="bold" className=" source" />
                </Button>
              </Card.Header>
              <Card.Body>
                {alignments.map((alignment, index) => (
                  <div key={index} className={`app-divider-v ${alignment}`}>
                    <p>{alignment}</p>
                  </div>
                ))}
                <Collapse in={uiState.openCodeDiv3}>
                  <pre className="language-html">
                    <code className="language-html">
                      {`
${alignments.map((alignment) => `<div className="app-divider-v ${alignment}"><p>${alignment}</p></div>`).join("\n")}
                                            `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6" xl="4">
            <Card className="h-100">
              <Card.Header className="code-header d-flex justify-content-between">
                <h5>Horizontal with text & aligns</h5>
                <Button
                  variant="link"
                  onClick={() => setUiState((prev) => ({...prev, openCodeDiv4: !uiState.openCodeDiv4}))}
                  className="p-0"
                >
                  <Code size={30} weight="bold" className=" source" />
                </Button>
              </Card.Header>
              <Card.Body className="divider-body d-flex">
                <div className="app-divider-h">
                  <p>Or</p>
                </div>
                <div className="app-divider-h align-items-center">
                  <p>align-items-center</p>
                </div>
                <div className="app-divider-h align-items-end">
                  <p>Or</p>
                </div>
              </Card.Body>
              <Collapse in={uiState.openCodeDiv4}>
                <pre className="language-html">
                  <code className="language-html">
                    {`
<div className="app-divider-h"><p>Or</p></div>
<div className="app-divider-h align-items-center"><p>align-items-center</p></div>
<div className="app-divider-h align-items-end"><p>Or</p></div>
                                        `}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>

          <Col md={6} xl={8}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between">
                <h5>Color Options With Icon Buttons</h5>
                <Button
                  variant="link"
                  onClick={() => setUiState((prev) => ({...prev, openCodeDiv5: !uiState.openCodeDiv5}))}
                  className="p-0"
                >
                  <Code size={30} weight="bold" className=" source" />
                </Button>
              </Card.Header>
              <Card.Body>
                {colorsDivider.map((item, idx) => (
                  <div key={idx} className={`app-divider-v ${item.className}`}>
                    {item.element}
                  </div>
                ))}
              </Card.Body>
              <Collapse in={uiState.openCodeDiv5}>
                <pre className="language-html">
                  <code className="language-html">
                    {`
${colorsDivider.map((item) => `<div className="app-divider-v ${item.className}">${item.code}</div>`).join("\n")}
                                        `}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>

          <Col md="6" xl="4">
            <Card className="h-100">
              <Card.Header className="code-header d-flex justify-content-between">
                <h5>Horizontal</h5>
                <Button
                  variant="link"
                  onClick={() => setUiState((prev) => ({...prev, openCodeDiv6: !uiState.openCodeDiv6}))}
                  className="p-0"
                >
                  <Code size={30} weight="bold" className=" source" />
                </Button>
              </Card.Header>
              <Card.Body className="divider-body d-flex">
                {colorsHorizontal.map((color, index) => (
                  <div key={index} className={`app-divider-h ${color}`}></div>
                ))}
              </Card.Body>
              <Collapse in={uiState.openCodeDiv6}>
                <pre className="language-html">
                  <code className="language-html">
                    {`
${colorsHorizontal.map((color) => `<div className="app-divider-h ${color}"></div>`).join("\n")}
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

export default DividerPage;
