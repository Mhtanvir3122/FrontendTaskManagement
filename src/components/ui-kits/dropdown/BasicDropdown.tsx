import React, { useEffect, useState } from "react";
import { Card, CardHeader, Collapse, Dropdown } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

interface DropdownOption {
  label: string;
  value: string;
}

const DropdownExample: React.FC = () => {
  const [uiState, setUiState] = useState({
    openDropdown: false,
    dropdownOpen1: false,
    dropdownOpen2: false,
  })

  const dropdownOptions: DropdownOption[] = [
    { label: "Action", value: "action" },
    { label: "Another action", value: "another-action" },
    { label: "Something else here", value: "something-else" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div className="col-12">
      <Card>
        <CardHeader className="d-flex justify-content-between code-header card-header">
          <h5 className="txt-ellipsis">Single Button and Link Dropdown</h5>
          <a onClick={() => setUiState((prev) => ({ ...prev,openDropdown : !uiState.openDropdown }))} role="button">
            <Code size={30} weight="bold" className="source" />
          </a>
        </CardHeader>

        <div className="card-body d-flex flex-wrap gap-2">
          {/* Button Dropdown */}
          <Dropdown
            show={uiState.dropdownOpen1}
            onToggle={() => setUiState((prev) => ({ ...prev,dropdownOpen1 : !uiState.dropdownOpen1 }))}
          >
            <Dropdown.Toggle variant="primary" id="dropdown-button-1">
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownOptions.map((option, index) => (
                <Dropdown.Item key={index} href="#">
                  {option.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Link Dropdown */}
          <Dropdown
            show={uiState.dropdownOpen2}
            onToggle={() => setUiState((prev) => ({ ...prev,dropdownOpen2 : !uiState.dropdownOpen2 }))}
          >
            <Dropdown.Toggle variant="secondary" id="dropdown-button-2">
              Dropdown link
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownOptions.map((option, index) => (
                <Dropdown.Item key={index} href="#">
                  {option.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Collapse in={uiState.openDropdown}>
          <div>
            <pre className="language-html mt-3">
              <code className="language-html">
                {`<Card>
  <Card.Header className="code-header">
    <h5>Single Button and Link Dropdown</h5>
  </Card.Header>
  <Card.Body className="d-flex flex-wrap gap-2">

    {/* Button Dropdown */}
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-button-1">
        Dropdown button
      </Dropdown.Toggle>
      <Dropdown.Menu>
${dropdownOptions
  .map(
    (option) =>
      `        <Dropdown.Item href="#">${option.label}</Dropdown.Item>`
  )
  .join("\n")}
      </Dropdown.Menu>
    </Dropdown>

    {/* Link Dropdown */}
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-button-2">
        Dropdown link
      </Dropdown.Toggle>
      <Dropdown.Menu>
${dropdownOptions
  .map(
    (option) =>
      `        <Dropdown.Item href="#">${option.label}</Dropdown.Item>`
  )
  .join("\n")}
      </Dropdown.Menu>
    </Dropdown>

  </Card.Body>
</Card>`}
              </code>
            </pre>
          </div>
        </Collapse>
      </Card>
    </div>
  );
};

export default DropdownExample;
