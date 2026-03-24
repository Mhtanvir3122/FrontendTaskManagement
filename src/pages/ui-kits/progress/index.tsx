import React, { useEffect, useState } from "react";
import {
  Badge,
  Card,
  Col,
  Collapse,
  Container,
  ProgressBar,
  Row,
  Spinner,
} from "react-bootstrap";

import { Briefcase, Code, Trash, X } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const progressData = [
  { color: "primary", value: 12.5 },
  { color: "secondary", value: 25 },
  { color: "success", value: 37.5 },
  { color: "danger", value: 50 },
  { color: "warning", value: 62.5 },
  { color: "info", value: 75 },
  { color: "light", value: 82.5 },
  { color: "dark", value: 95 },
];
const progressItems = [
  {
    value: 100,
    color: "primary",
    text: "Loading data...",
    icon: "spinner",
    bgColor: "light-primary",
  },
  {
    value: 75,
    color: "secondary",
    text: "75% Processing",
    bgColor: "light-secondary",
  },
  {
    value: 52,
    color: "success",
    text: "52% Updating..",
    badge: "1 Min",
    bgColor: "light-success",
  },
  {
    value: 15,
    color: "danger",
    text: "Deleting data (85% remain)",
    icon: "trash",
    badge: "1 Min left",
    bgColor: "light-danger",
  },
];

const ProgressPage: React.FC = () => {
  const [uiState, setUiState] = useState({
    openProgress: false,
    openProgress2: false,
    openProgress3: false,
    openProgress4: false,
    openProgress5: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Progress"
          title="Ui Kits"
          path={["Progress"]}
          Icon={Briefcase}
        />
        <Row className="progress-rtl">
          <Col md={6}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Progress Bars Basic</h5>
                <a
                  onClick={() =>
                    setUiState((prev) => ({
                      ...prev,
                      openProgress: !uiState.openProgress,
                    }))
                  }
                  aria-expanded={uiState.openProgress}
                  className="cursor-pointer"
                >
                  <Code size={30} weight="bold" className="source" />
                </a>
              </Card.Header>

              <Card.Body>
                <div className="row">
                  <div className="d-flex gap-3 flex-column w-100">
                    {progressData.map((bar, index) => (
                      <ProgressBar
                        key={index}
                        now={bar.value}
                        variant={bar.color}
                        className="w-100"
                        label={`${bar.value}%`}
                        visuallyHidden
                      />
                    ))}
                  </div>
                </div>
              </Card.Body>

              {/* Collapsible HTML source preview */}
              <Collapse in={uiState.openProgress}>
                <pre className="language-html ">
                  <code className="language-html">
                    {progressData
                      .map(
                        (bar) =>
                          `<ProgressBar className="w-100" now={bar.value} variant="${bar.color}" label={${bar.value}%} visuallyHidden/>`
                      )
                      .join("\n\n")}
                  </code>
                </pre>
              </Collapse>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between align-items-center">
                <Card.Title as="h5" className="m-0 text-truncate">
                  Progress Bars Light With Text
                </Card.Title>
                <a
                  onClick={() =>
                    setUiState((prev) => ({
                      ...prev,
                      openProgress2: !uiState.openProgress2,
                    }))
                  }
                  className="text-decoration-none cursor-pointer"
                  aria-expanded={uiState.openProgress2}
                >
                  <Code size={30} weight="bold" className="source" />
                </a>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-column gap-3">
                  {progressData.map((bar, index) => (
                    <ProgressBar
                      key={index}
                      now={bar.value}
                      variant={`light-${bar.color}`}
                      label={`${bar.value}%`}
                      className="w-100"
                    />
                  ))}
                </div>
              </Card.Body>
              <Collapse in={uiState.openProgress2}>
                <Card.Footer>
                  <pre className="language-html">
                    <code>
                      {progressData
                        .map(
                          (bar) =>
                            `<ProgressBar  now={${bar.value}} variant="light-${bar.color}" label="${bar.value}%"  className="w-100"/>`
                        )
                        .join("\n")}
                    </code>
                  </pre>
                </Card.Footer>
              </Collapse>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between align-items-center">
                <Card.Title as="h5" className="m-0 text-truncate">
                  Striped Progress With Animation
                </Card.Title>
                <a
                  onClick={() =>
                    setUiState((prev) => ({
                      ...prev,
                      openProgress3: !uiState.openProgress3,
                    }))
                  }
                  className="text-decoration-none cursor-pointer"
                  aria-expanded={uiState.openProgress3}
                >
                  <Code size={30} weight="bold" className="source" />
                </a>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-column gap-3">
                  {progressData.map((bar, index) => (
                    <ProgressBar
                      key={index}
                      now={bar.value}
                      variant={bar.color}
                      striped
                      animated
                      label={`${bar.value}%`}
                      className="w-100"
                    />
                  ))}
                </div>
              </Card.Body>

              <Collapse in={uiState.openProgress3}>
                <Card.Footer>
                  <pre className="language-html">
                    <code>
                      {progressData
                        .map(
                          (
                            bar
                          ) => `<ProgressBar now={${bar.value}} variant="${bar.color}" stripedanimated
label="${bar.value}%"
  className="w-100"
/>`
                        )
                        .join("\n")}
                    </code>
                  </pre>
                </Card.Footer>
              </Collapse>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between">
                <h5>Progress Sizes</h5>
                <a
                  onClick={() =>
                    setUiState((prev) => ({
                      ...prev,
                      openProgress4: !uiState.openProgress4,
                    }))
                  }
                  role="button"
                >
                  <Code size={30} weight="bold" className="source" />
                </a>
              </Card.Header>

              <Card.Body>
                <div className="d-flex flex-column gap-3">
                  {progressData.map((bar, index) => (
                    <div className={`h-${index + 5}`} key={index}>
                      <ProgressBar
                        now={bar.value}
                        variant={bar.color as any}
                        label={`${bar.value}%`}
                        className={`h-${index + 5}`}
                      />
                    </div>
                  ))}
                </div>
              </Card.Body>

              <Collapse in={uiState.openProgress4}>
                <div>
                  <pre className="language-html mb-0">
                    <code className="language-html">
                      {progressData
                        .map(
                          (bar, index) => `
<ProgressBar  now={${bar.value}} variant="${bar.color}" label="${bar.value}%" className="h-${index + 5}"/>`
                        )
                        .join("\n")}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header className="code-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">The Real Time Example</h5>
                <a
                  onClick={() =>
                    setUiState((prev) => ({
                      ...prev,
                      openProgress5: !uiState.openProgress5,
                    }))
                  }
                  role="button"
                >
                  <Code size={30} weight="bold" className="source" />
                </a>
              </Card.Header>

              <Card.Body>
                <Row>
                  {progressItems.map((item, index) => (
                    <Col md={6} className="mb-3" key={index}>
                      <div className={`p-3 rounded bg-${item.bgColor}`}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            {item.icon === "spinner" && (
                              <Spinner
                                animation="border"
                                size="sm"
                                className="me-2 ms-2"
                              />
                            )}
                            {item.icon === "close" && (
                              <X size={18} className="me-2 ms-2" />
                            )}
                            {item.icon === "trash" && (
                              <Trash size={18} className="me-2 ms-2" />
                            )}
                            <span>{item.text}</span>
                          </div>
                          {item.badge && (
                            <Badge bg={item.color} className="ms-2">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <ProgressBar
                          now={item.value}
                          variant={item.color}
                          className="h-5 fs-075"
                          label={`${item.value}%`}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>

                <Collapse in={uiState.openProgress5}>
                  <div>
                    <pre className="mt-4">
                      <code className="language-html">
                        {progressItems
                          .map(
                            (item) => `
<ProgressBar
  now={${item.value}}
  variant="${item.color}"
  label="${item.value}%"
  className="h-5"
/>`
                          )
                          .join("\n")}
                      </code>
                    </pre>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProgressPage;
