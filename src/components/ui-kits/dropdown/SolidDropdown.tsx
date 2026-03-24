import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Collapse, Dropdown } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const SolidDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  const variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  const dropdownOptions = [
    { label: "Action", value: "action" },
    { label: "Another action", value: "another-action" },
    { label: "Something else here", value: "something-else" },
    { label: "divider", value: "divider" },
    { label: "Separated link", value: "separated-link" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(
    Array(variants.length).fill(false)
  );

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div className="col-12">
      <Card>
        <Card.Header className="d-flex justify-content-between code-header card-header">
          <h5 className="txt-ellipsis">Dropdown Color Variants</h5>
          <a onClick={() => setOpen(!open)} role="button">
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body className="d-flex flex-wrap gap-2">
          {variants.map((variant, index) => (
            <ButtonGroup key={variant} className="btn-rtl">
              <Button variant={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
              <Dropdown
                show={dropdownOpen[index]}
                onToggle={() => toggleDropdown(index)}
              >
                <Dropdown.Toggle
                  variant={variant}
                  className="dropdown-toggle dropdown-toggle-split p-2 rounded-start-0"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {dropdownOptions.map((option, i) =>
                    option.value === "divider" ? (
                      <Dropdown.Divider key={i} />
                    ) : (
                      <Dropdown.Item key={i} href="#">
                        {option.label}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          ))}
        </Card.Body>

        <Collapse in={open}>
          <pre className="mt-3 language-html">
            <code className="language-html">
              {`<Card>
  <Card.Header>
    <h5>Dropdown Color Variants</h5>
  </Card.Header>
  <Card.Body className="d-flex flex-wrap gap-2">
${variants
  .map(
    (variant) => `    <ButtonGroup className="btn-rtl">
      <Button variant="${variant}">
        ${variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Button>
      <Dropdown>
        <Dropdown.Toggle
          variant="${variant}"
          className="dropdown-toggle dropdown-toggle-split p-2 rounded-start-0"
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

export default SolidDropdown;
