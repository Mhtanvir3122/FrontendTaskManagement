import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Collapse, Dropdown } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

interface DropdownOption {
  label: string;
  value: string;
}

const dropdownOptions: DropdownOption[] = [
  { label: "Action", value: "action" },
  { label: "Another action", value: "another-action" },
  { label: "Something else here", value: "something-else" },
  { label: "divider", value: "divider" },
  { label: "Separated link", value: "separated-link" },
];

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

const DropdownOutlineVariants = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean[]>(
    Array(variants.length).fill(false)
  );

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="col-12 outline-btn">
      <Card>
        <Card.Header className="d-flex justify-content-between code-header card-header">
          <h5 className="txt-ellipsis">Dropdown Light Variants</h5>
          <a role="button" onClick={() => setOpenDropdown(!openDropdown)}>
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>
        <Card.Body className="d-flex flex-wrap gap-2">
          {variants.map((variant, index) => (
            <ButtonGroup className="btn-rtl" key={variant}>
              <Button variant={`light-${variant}`}>{variant}</Button>
              <Dropdown
                show={dropdownOpen[index]}
                onToggle={() => toggleDropdown(index)}
              >
                <Dropdown.Toggle
                  variant={`light-${variant}`}
                  className="dropdown-toggle dropdown-toggle-split p-2 rounded-start-0 outline-variant"
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
        <Collapse in={openDropdown}>
          <pre className="mt-3 language-html">
            <code className="language-html">
              {`<Card>
  <CardBody className="d-flex flex-wrap gap-2">
${variants
  .map(
    (variant) => `    <ButtonGroup className="btn-rtl">
      <Button variant="light-${variant}">${variant}</Button>
      <Dropdown>
        <Dropdown.Toggle
          variant="light-${variant}"
          className="dropdown-toggle dropdown-toggle-split p-2 rounded-start-0 outline-variant"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          ${dropdownOptions
            .map((option) =>
              option.value === "divider"
                ? `<Dropdown.Divider />`
                : `<Dropdown.Item href="#">${option.label}</Dropdown.Item>`
            )
            .join("\n          ")}
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>`
  )
  .join("\n")}
  </CardBody>
</Card>`}
            </code>
          </pre>
        </Collapse>
      </Card>
    </div>
  );
};

export default DropdownOutlineVariants;
