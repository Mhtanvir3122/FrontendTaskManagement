import React, { useEffect, useState } from "react";
import { Alert, Card, Collapse } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const outlineAlerts = [
  { type: "outline-primary", message: "Outline-alert primary - check it out!" },
  {
    type: "outline-secondary",
    message: "Outline-alert secondary - check it out!",
  },
  { type: "outline-success", message: "Outline-alert success - check it out!" },
  { type: "outline-danger", message: "Outline-alert danger - check it out!" },
  { type: "outline-warning", message: "Outline-alert warning - check it out!" },
  { type: "outline-info", message: "Outline-alert info - check it out!" },
  { type: "outline-light", message: "Outline-alert light - check it out!" },
  { type: "outline-dark", message: "Outline-alert dark - check it out!" },
];

const OutlineAlert: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Card>
      <Card.Header className="code-header">
        <h5 className="mb-0">Outline Alerts</h5>
        <a onClick={() => setOpen(!open)}>
          <Code size={30} weight="bold" className=" source" />
        </a>
      </Card.Header>
      <Card.Body>
        {outlineAlerts.map((alert, index) => (
          <Alert key={index} variant={alert.type} role="alert">
            {alert.message}
          </Alert>
        ))}

        <Collapse in={open}>
          <div id="outlinealertExample">
            <pre className="outlinealert mt-3">
              <code className="language-html">
                {`<Card>
  <Card.Header>
    <h5>Outline Alerts</h5>
  </Card.Header>
  <Card.Body>
${outlineAlerts
  .map(
    (alert) =>
      `    <Alert variant="${alert.type}" role="alert">${alert.message}</Alert>`
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
  );
};

export default OutlineAlert;
