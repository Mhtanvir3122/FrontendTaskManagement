import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Collapse,
  Dropdown,
  DropdownButton,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const buttonGroupData = [
  {
    className: "secondary",
    active: true,
    links: ["Active link", "Link", "Link"],
  },
  {
    className: "outline-secondary",
    active: false,
    links: ["Active link", "Link", "Link"],
  },
  {
    className: "light-secondary",
    active: true,
    links: ["Active link", "Link", "Link"],
  },
];

const sizes = [
  {
    sizeClass: "btn-group-lg",
    ariaLabel: "Large button group",
    btnClass: "outline-primary",
  },
  {
    sizeClass: "",
    ariaLabel: "Default button group",
    btnClass: "outline-secondary",
  },
  {
    sizeClass: "btn-group-sm",
    ariaLabel: "Small button group",
    btnClass: "outline-success",
  },
];

const nestedVariants = ["secondary", "outline-secondary", "light"];

const checkboxItems = [
  { id: "btncheck1", label: "Checkbox 1" },
  { id: "btncheck2", label: "Checkbox 2" },
  { id: "btncheck3", label: "Checkbox 3" },
];

const radioItems = [
  { id: "btnradio1", label: "Radio 1", variant: "secondary" },
  { id: "btnradio2", label: "Radio 2", variant: "outline-secondary" },
  { id: "btnradio3", label: "Radio 3", variant: "outline-secondary" },
];

const verticalGroups = [
  {
    className: "secondary",
    buttons: ["Button", "Button", "Button"],
  },
  {
    className: "outline-secondary",
    buttons: ["Button", "Button", "Button"],
  },
  {
    className: "light-secondary",
    buttons: ["Button", "Button", "Button"],
  },
];

const radioVerticals = [
  { id: "vbtn-radio1", label: "Radio 1" },
  { id: "vbtn-radio2", label: "Radio 2" },
  { id: "vbtn-radio3", label: "Radio 3" },
];
const radioVerticals2 = [
  { id: "vbtn-radio11", label: "Radio 1" },
  { id: "vbtn-radio12", label: "Radio 2" },
  { id: "vbtn-radio13", label: "Radio 3" },
];

const ButtonGroupExample: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState("btnradio1");
  const [uiState, setUiState] = useState({
    openGroup: false,
    openGroup2: false,
    openNesting: false,
    openToggle: false,
    open: false,
  });

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      {/* Button Group Variants */}
      <Col lg={6} className="mb-4">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Button Group</h5>
            <a
              role="button"
              onClick={() =>
                setUiState((prev) => ({
                  ...prev,
                  openGroup: !uiState.openGroup,
                }))
              }
            >
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Row>
              {buttonGroupData.map((group, index) => (
                <Col xs={12} className="mb-3" key={index}>
                  <ButtonGroup>
                    {group.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant={group.className}
                        active={group.active && linkIndex === 0}
                      >
                        {link}
                      </Button>
                    ))}
                  </ButtonGroup>
                </Col>
              ))}
            </Row>
            <Collapse in={uiState.openGroup}>
              <div>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Body>
    <Row>
${buttonGroupData
  .map(
    (group) => `      <Col xs="12">
        <ButtonGroup>
${group.links
  .map(
    (link, idx) =>
      `          <Button variant="${group.className}"${group.active && idx === 0 ? ' active aria-current="page"' : ""}>${link}</Button>`
  )
  .join("\n")}
        </ButtonGroup>
      </Col>`
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
      </Col>

      {/* Button Sizes */}
      <Col lg={6} className="mb-4">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Sizes</h5>
            <a
              role="button"
              onClick={() =>
                setUiState((prev) => ({
                  ...prev,
                  openGroup2: !uiState.openGroup2,
                }))
              }
            >
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Row>
              {sizes.map((size, index) => (
                <Col xs={12} className="mb-3" key={index}>
                  <div
                    className={`btn-group ${size.sizeClass}`}
                    role="group"
                    aria-label={size.ariaLabel}
                  >
                    {["Left", "Middle", "Right"].map((label, idx) => (
                      <Button key={idx} variant={size.btnClass}>
                        {label}
                      </Button>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
            <Collapse in={uiState.openGroup2}>
              <div>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<Row>
${sizes
  .map(
    (size) => `  <Col xs="12">
    <div class="btn-group ${size.sizeClass}" role="group" aria-label="${size.ariaLabel}">
      <Button variant="${size.btnClass}">Left</Button>
      <Button variant="${size.btnClass}">Middle</Button>
      <Button variant="${size.btnClass}">Right</Button>
    </div>
  </Col>`
  )
  .join("\n")}
</Row>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>

      {/* Nesting */}
      <Col lg={6} className="mb-4">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Nesting</h5>
            <a
              role="button"
              onClick={() =>
                setUiState((prev) => ({
                  ...prev,
                  openNesting: !uiState.openNesting,
                }))
              }
            >
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Row>
              {nestedVariants.map((variant, idx) => (
                <Col xs={12} className="mb-3" key={idx}>
                  <ButtonGroup>
                    <Button variant={variant}>1</Button>
                    <Button variant={variant}>2</Button>
                    <DropdownButton
                      as={ButtonGroup}
                      title="Dropdown"
                      variant={variant}
                      id={`dropdown-${idx}`}
                    >
                      <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                      <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
                </Col>
              ))}
            </Row>
            <Collapse in={uiState.openNesting}>
              <div>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<Row>
${nestedVariants
  .map(
    (variant) => `  <Col xs="12">
    <ButtonGroup>
      <Button variant="${variant}">1</Button>
      <Button variant="${variant}">2</Button>
      <DropdownButton variant="${variant}" title="Dropdown">
        <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
        <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  </Col>`
  )
  .join("\n")}
</Row>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>

      {/* Checkbox and Radio */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Checkbox & Radio</h5>
            <a
              role="button"
              onClick={() =>
                setUiState((prev) => ({
                  ...prev,
                  openToggle: !uiState.openToggle,
                }))
              }
            >
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <ToggleButtonGroup type="checkbox" className="mb-2">
                {checkboxItems.map(({ id, label }) => (
                  <ToggleButton
                    key={id}
                    id={id}
                    type="checkbox"
                    variant="outline-secondary"
                    value={id}
                  >
                    {label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </div>
            <div className="mb-3">
              <ToggleButtonGroup
                type="radio"
                name="radioGroup"
                value={selectedRadio}
                onChange={(val) => setSelectedRadio(val)}
              >
                {radioItems.map(({ id, label }) => (
                  <ToggleButton
                    key={id}
                    id={id}
                    type="radio"
                    variant={
                      selectedRadio === id ? "secondary" : "outline-secondary"
                    }
                    name="radioGroup"
                    value={id}
                  >
                    {label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </div>
            <div className="btn-toolbar">
              <ButtonGroup className="me-2">
                {[1, 2, 3, 4].map((num) => (
                  <Button key={num} variant="secondary">
                    {num}
                  </Button>
                ))}
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="secondary">8</Button>
              </ButtonGroup>
            </div>
            <Collapse in={uiState.openToggle}>
              <div>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<ToggleButtonGroup type="checkbox">
${checkboxItems
  .map(
    ({ id, label }) =>
      `  <ToggleButton id="${id}" type="checkbox" variant="outline-secondary" value="${id}">${label}</ToggleButton>`
  )
  .join("\n")}
</ToggleButtonGroup>

<ToggleButtonGroup type="radio" name="radioGroup">
${radioItems
  .map(
    ({ id, label }) =>
      `  <ToggleButton id="${id}" type="radio" variant="${selectedRadio === id ? "secondary" : "outline-secondary"}" value="${id}">${label}</ToggleButton>`
  )
  .join("\n")}
</ToggleButtonGroup>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>

      {/* Button Vertical */}
      <Col xs={12}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Button Vertical</h5>
            <a
              role="button"
              onClick={() =>
                setUiState((prev) => ({ ...prev, open: !uiState.open }))
              }
              className="cursor-pointer"
            >
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Row className="btn-responsive">
              {verticalGroups.map((group, index) => (
                <Col className="m-2" xs="auto" key={index}>
                  <ButtonGroup vertical>
                    {group.buttons.map((label, idx) => (
                      <Button key={idx} variant={group.className}>
                        {label}
                      </Button>
                    ))}
                  </ButtonGroup>
                </Col>
              ))}
              <Col className="m-2" xs="auto">
                <ButtonGroup vertical>
                  {radioVerticals.map((radio, idx) => (
                    <React.Fragment key={radio.id}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="vbtn-radio"
                        id={radio.id}
                        defaultChecked={idx === 0}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor={radio.id}
                      >
                        {radio.label}
                      </label>
                    </React.Fragment>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>
            <Collapse in={uiState.open}>
              <div>
                <pre className="btnvertical mt-3">
                  <code className="language-html">
                    {`<Row>
${verticalGroups
  .map(
    (group) => `  <div class="col-lg-4 col-12 mb-3">
    <div class="btn-group-vertical" role="group">
${group.buttons
  .map(
    (label) =>
      `      <Button type="button" class="btn btn-${group.className}">${label}</Button>`
  )
  .join("\n")}
    </div>
  </div>`
  )
  .join("\n")}
  <div class="col-lg-4 col-12 mb-3">
    <div class="btn-group-vertical ms-2" role="group">
${radioVerticals2
  .map(
    (radio) =>
      `      <Input type="radio" class="btn-check" name="vbtn-radio" id="${radio.id}" />
      <label class="btn btn-outline-secondary" for="${radio.id}">${radio.label}</label>`
  )
  .join("\n")}
    </div>
  </div>
</Row>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ButtonGroupExample;
