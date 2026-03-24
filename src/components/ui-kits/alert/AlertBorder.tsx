import React, { useEffect, useState } from "react";
import { Alert, Card, Collapse } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const borderAlerts = [
  { color: "border-primary", message: "Primary border alert - check out!" },
  { color: "border-secondary", message: "Secondary border alert - check out!" },
  { color: "border-success", message: "Success border alert - check out!" },
];

const AlertBorder: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Card>
      <Card.Header className="code-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Alert With Left Border</h5>
        <a onClick={() => setOpen(!open)}>
          <Code size={30} weight="bold" className=" source" />
        </a>
      </Card.Header>

      <Card.Body>
        {borderAlerts.map((alert, index) => (
          <Alert key={index} variant={alert.color} role="alert">
            {alert.message}
          </Alert>
        ))}

        <Collapse in={open}>
          <div>
            <pre className="leftbor mt-3">
              <code className="language-html">
                {`<Card>
  <Card.Header>
    <h5>Alert With Left Border</h5>
  </Card.Header>
  <Card.Body>
${borderAlerts
  .map(
    (alert) =>
      `    <Alert variant="${alert.color}" role="alert">${alert.message}</Alert>`
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

export default AlertBorder;
