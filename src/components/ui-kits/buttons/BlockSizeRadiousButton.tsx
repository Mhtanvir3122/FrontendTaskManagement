import React, { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Row } from "react-bootstrap";

import {
  Butterfly,
  Code,
  DownloadSimple,
  Medal,
  Power,
  Warning,
} from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const blockButtonGroups = [
  { primary: "primary", secondary: "secondary" },
  { primary: "outline-primary", secondary: "outline-secondary" },
  { primary: "light-primary", secondary: "light-secondary" },
];

type ButtonDataType = {
  text: string;
  variant: string;
  sizeClass: string;
  iconName: string;
  icon: React.ReactNode;
  position: "start" | "end";
};

const sizedButtons: ButtonDataType[] = [
  {
    text: "Primary",
    variant: "primary",
    sizeClass: "btn-xxl",
    icon: <DownloadSimple size={16} />,
    iconName: "<DownloadSimple size={16} />",
    position: "start",
  },
  {
    text: "Primary",
    variant: "primary",
    sizeClass: "btn-xl",
    icon: <DownloadSimple size={16} />,
    iconName: "<DownloadSimple size={16} />",
    position: "start",
  },
  {
    text: "Secondary",
    variant: "secondary",
    sizeClass: "btn-lg",
    icon: <Butterfly size={16} />,
    iconName: "<Butterfly size={16} />",
    position: "end",
  },
  {
    text: "Success",
    variant: "success",
    sizeClass: "btn-md",
    icon: <Medal size={16} />,
    iconName: "<Medal size={16} />",
    position: "start",
  },
  {
    text: "Danger",
    variant: "danger",
    sizeClass: "btn-sm",
    icon: <Power size={16} />,
    iconName: " <Power size={16} />",
    position: "start",
  },
  {
    text: "Warning",
    variant: "warning",
    sizeClass: "btn-xs",
    icon: <Warning size={16} />,
    iconName: " <Warning size={16} />",
    position: "start",
  },
];

const borderButtons = [
  { text: "Primary", variant: "primary", radiusClass: "b-r-0" },
  { text: "Secondary", variant: "secondary", radiusClass: "b-r-6" },
  { text: "Success", variant: "success", radiusClass: "b-r-10" },
  { text: "Danger", variant: "danger", radiusClass: "b-r-22" },
];

const BlockSizeRadiousButton: React.FC = () => {
  const [uiState, setUiState] = useState({
    openBlock : false,
    openSize : false,
    openRadious : false,
  })

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      {/* Block Buttons Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Block Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openBlock : !uiState.openBlock }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Row className="mb-2">
              {blockButtonGroups.map((group, index) => (
                <Col key={index} md={6} lg={4} className="app-btn-list">
                  <div className="d-grid gap-2">
                    <Button variant={group.primary} className="w-100  gap-2">
                      Button
                    </Button>
                    <Button variant={group.secondary} className="w-100  gap-2">
                      Button
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>

            <Collapse in={uiState.openBlock}>
              <div>
                <pre className="basicbutton mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Block Buttons</h5>
  </Card.Header>
  <Card.Body>
   <Row>
          ${blockButtonGroups
            .map(
              (group) => `  <div class="col-md-6 col-lg-4 app-btn-list">
    <div class="d-grid gap-2">
      <Button variant="${group.primary}" className="w-100  ">Button</Button>
      <Button variant="${group.secondary}" className="w-100 gap-2">Button </Button>
    </div>
  </div>`
            )
            .join("\n")}
          </Row>
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
      {/* Sizes Buttons Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Size Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev, openSize : !uiState.openSize }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <div className="app-btn-list d-flex flex-wrap gap-2">
              {sizedButtons.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.variant}
                  type="button"
                  className={`d-inline-flex align-items-center gap-2 ${btn.sizeClass}`}
                >
                  {btn.position === "start" && btn.icon}
                  {btn.text}
                  {btn.position === "end" && btn.icon}
                </Button>
              ))}
            </div>
            <Collapse in={uiState.openSize}>
              <div>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Block Buttons</h5>
  </Card.Header>
  <Card.Body>
       ${sizedButtons
         .map(
           (
             btn
           ) => `  <Button variant="${btn.variant}" type="button" class="d-inline-flex align-items-center gap-2 ${btn.sizeClass}">
    ${btn.position === "start" ? btn.iconName : ""}
    ${btn.text}
    ${btn.position === "end" ? btn.iconName : ""}
  </Button>`
         )
         .join("\n")}
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
      {/* Radious Buttons Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Radius Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openRadious : !uiState.openRadious }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <div className="app-btn-list d-flex gap-2 flex-wrap">
              {borderButtons.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.variant}
                  className={`w-auto ${btn.radiusClass}`}
                >
                  {btn.text}
                </Button>
              ))}
            </div>
            <Collapse in={uiState.openRadious}>
              <div>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Block Buttons</h5>
  </Card.Header>
  <Card.Body>
       <div class="app-btn-list d-flex gap-2 flex-wrap">
  ${borderButtons
    .map(
      (
        btn
      ) => `  <Button variant="${btn.variant}" type="button" class="w-auto ${btn.radiusClass}">
    ${btn.text}
  </Button>`
    )
    .join("\n  ")}
</div>
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default BlockSizeRadiousButton;
