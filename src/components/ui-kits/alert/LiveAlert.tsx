import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";

import { Code } from "phosphor-react";

interface AlertProps {
  message: string;
  type: string;
}

const LiveAlert: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [alerts, setAlerts] = useState<AlertProps[]>([]); // store multiple alerts

  const appendAlert = (message: string, type: string) => {
    setAlerts((prev) => [...prev, { message, type }]);
  };

  const removeAlert = (index: number) => {
    setAlerts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <Card.Header className="code-header d-flex justify-content-between">
        <h5>Live Alert</h5>
        <a onClick={() => setOpen(!open)}>
          <Code size={30} weight="bold" className="source" />
        </a>
      </Card.Header>

      <Card.Body>
        <div id="liveAlert">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`alert alert-${alert.type} alert-dismissible`}
              role="alert"
            >
              <div>{alert.message}</div>
              <button
                type="button"
                className="btn-close"
                onClick={() => removeAlert(index)}
                aria-label="Close"
              ></button>
            </div>
          ))}
        </div>
        <Button
          variant="primary"
          onClick={() =>
            appendAlert("Hi!, Welcome To ki-admin", " alert-light-primary ")
          }
        >
          Show live alert
        </Button>
      </Card.Body>
      <Collapse in={open}>
        <div>
          <pre className=" livealeart mt-3">
            <code className="language-html">
              {`<Card>
  <Card.Header>
    <h5>Live Alert</h5>
  </Card.Header>
  <Card.Body>
<div id="liveAlert"></div>
<Button variant="primary">Show live alert</Button>
   </Card.Body>
</Card>`}
            </code>
          </pre>
        </div>
      </Collapse>
    </Card>
  );
};

export default LiveAlert;
