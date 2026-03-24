import React, { useEffect, useState } from "react";
import { Alert, Card, Collapse } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const alerts = [
  { type: "primary", message: "Simple primary alert - check it out!" },
  { type: "secondary", message: "Simple secondary alert - check it out!" },
  { type: "success", message: "Simple success alert - check it out!" },
  { type: "danger", message: "Simple danger alert - check it out!" },
  { type: "warning", message: "Simple warning alert - check it out!" },
  { type: "info", message: "Simple info alert - check it out!" },
  { type: "light", message: "Simple light alert - check it out!" },
  { type: "dark", message: "Simple dark alert - check it out!" },
];

const BasicAlert: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Card>
      <Card.Header className="code-header">
        <h5 className="mb-0">Basic Alerts</h5>
        <a onClick={() => setOpen(!open)}>
          <Code size={30} weight="bold" className="source" />
        </a>
      </Card.Header>

      <Card.Body>
        {alerts.map((alert, index) => (
          <Alert key={index} variant={alert.type} role="alert">
            {alert.message}
          </Alert>
        ))}

        <Collapse in={open}>
          <div>
            <pre className="simpalalert mt-3">
              <code className="language-html">
                {`<Card>
  <Card.Header>
    <h5>Basic Alerts</h5>
  </Card.Header>
  <Card.Body>
${alerts
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

export default BasicAlert;
