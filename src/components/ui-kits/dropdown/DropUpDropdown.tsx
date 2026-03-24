import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

interface DropdownOption {
  label: string;
  value: string;
}

const DropdownOutlineVariants: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);
  const [uiState, setUiState] = useState({
    openDropdown: false,
    dropdownOpen1: false,
    dropdownOpen2: false,
    dropdownOpen3: false,
    dropdownOpen4: false,
  })

  const toggle1 = () => setUiState((prev) => ({...prev, dropdownOpen1 : !uiState.dropdownOpen1}));
  const toggle2 = () => setUiState((prev) => ({...prev, dropdownOpen2 : !uiState.dropdownOpen2}));
  const toggle3 = () => setUiState((prev) => ({...prev, dropdownOpen3 : !uiState.dropdownOpen3}));
  const toggle4 = () => setUiState((prev) => ({...prev, dropdownOpen4 : !uiState.dropdownOpen4}));

  const dropdownOptions: DropdownOption[] = [
    { label: "Action", value: "action" },
    { label: "Another action", value: "another-action" },
    { label: "Something else here", value: "something-else" },
    { label: "divider", value: "divider" },
    { label: "Separated link", value: "separated-link" },
  ];

  return (
    <div className="col-12 outline-btn">
      <Card>
        <Card.Header className="d-flex justify-content-between code-header card-header">
          <h5 className="txt-ellipsis">Dropup Variation</h5>
          <a onClick={() => setUiState((prev) => ({...prev, openDropdown : !uiState.openDropdown}))} role="button">
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>
        <Card.Body className="d-flex flex-wrap gap-2">
          {/* Primary */}
          <ButtonGroup className="btn-rtl">
            <Button variant="light-primary">Primary</Button>
            <Dropdown show={uiState.dropdownOpen1} onToggle={toggle1} drop="down">
              <Dropdown.Toggle
                variant="light-primary"
                className="dropdown-toggle dropdown-toggle-split p-2 rounded-start-0 outline-variant"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </Dropdown.Toggle>
              <DropdownMenu>
                {dropdownOptions.map((option, index) =>
                  option.value === "divider" ? (
                    <Dropdown.Divider key={index} />
                  ) : (
                    <DropdownItem key={index} href="#">
                      {option.label}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>

          {/* Secondary */}
          <ButtonGroup className="btn-rtl">
            <Button variant="light-secondary">Split Dropup</Button>
            <Dropdown show={uiState.dropdownOpen2} onToggle={toggle2} drop="up">
              <Dropdown.Toggle
                variant="light-secondary"
                className="dropdown-toggle dropdown-toggle-split p-2  rounded-start-0 outline-variant"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </Dropdown.Toggle>
              <DropdownMenu>
                {dropdownOptions.map((option, index) =>
                  option.value === "divider" ? (
                    <Dropdown.Divider key={index} />
                  ) : (
                    <DropdownItem key={index} href="#">
                      {option.label}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>

          {/* Success */}
          <ButtonGroup className="btn-rtl">
            <Button variant="light-success">Split Dropend</Button>
            <Dropdown show={uiState.dropdownOpen3} onToggle={toggle3} drop="end">
              <Dropdown.Toggle
                variant="light-success"
                className="dropdown-toggle dropdown-toggle-split p-2 rounded-start-0 outline-variant"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </Dropdown.Toggle>
              <DropdownMenu>
                {dropdownOptions.map((option, index) =>
                  option.value === "divider" ? (
                    <Dropdown.Divider key={index} />
                  ) : (
                    <DropdownItem key={index} href="#">
                      {option.label}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>

          {/* Danger */}
          <ButtonGroup className="btn-rtl">
            <Button variant="light-danger">Split Dropstart</Button>
            <Dropdown show={uiState.dropdownOpen4} onToggle={toggle4} drop="start">
              <Dropdown.Toggle
                variant="light-danger"
                className="dropdown-toggle dropdown-toggle-split p-2 rounded-start-0 outline-variant"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </Dropdown.Toggle>
              <DropdownMenu>
                {dropdownOptions.map((option, index) =>
                  option.value === "divider" ? (
                    <Dropdown.Divider key={index} />
                  ) : (
                    <DropdownItem key={index} href="#">
                      {option.label}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </Card.Body>

        <Collapse in={uiState.openDropdown}>
          <pre className="mt-3 language-html">
            <code className="language-html">
              {`<Card>
  <Card.Body className="d-flex flex-wrap gap-2">
${["primary", "secondary", "success", "danger"]
  .map(
    (variant) => `
    <ButtonGroup>
      <Button variant="light-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
      <Dropdown>
        <Dropdown.Toggle
          variant="light-${variant}"
          className="dropdown-toggle dropdown-toggle-split p-2 rounded-end outline-variant"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>`
  )
  .join("\n")}
  </Card.Body>
</Card>`}
            </code>
          </pre>
        </Collapse>
      </Card>
    </div>
  );
};

export default DropdownOutlineVariants;
