import React, { useEffect, useState } from "react";
import { Alert, Card, Collapse } from "react-bootstrap";

import { Code, X } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const alertsContent = [
  {
    variant: "primary",
    heading: "Well done!",
    message:
      "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
    footer:
      "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
  },
  {
    variant: "secondary",
    heading: "Well done!",
    message:
      "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
    footer:
      "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
  },
  {
    variant: "success",
    heading: "Well done!",
    message:
      "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
    footer:
      "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
  },
];

const AlertContent: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Card>
      <Card.Header className="code-header">
        <h5 className="mb-0">Alert Additional content</h5>
        <a onClick={() => setOpen(!open)}>
          <Code size={30} weight="bold" className=" source" />
        </a>
      </Card.Header>
      <Card.Body>
        {alertsContent.map((alert, index) => (
          <Alert key={index} variant={alert.variant}>
            <h3 className="alert-heading d-flex justify-content-between align-items-center">
              {alert.heading}
              <X size={21} weight="bold" className="cursor-pointer" />
            </h3>
            <p>{alert.message}</p>
            <hr />
            <p className="mb-0">{alert.footer}</p>
          </Alert>
        ))}
        <Collapse in={open}>
          <div>
            <pre className="  mt-3">
              <code className="language-html">
                {`<Card>
  <Card.Header>
    <h5>Alert With Icon</h5>
  </Card.Header>
  <Card.Body>
${alertsContent
  .map(
    (alert) =>
      `<Alert variant="${alert.variant}" role="alert">
  <h3 className="alert-heading d-flex justify-content-between align-items-center">
    ${alert.heading}
    <X size={21} weight="bold" className="cursor-pointer" data-bs-dismiss="alert"/>
  </h3>
  <p>${alert.message}</p>
  <hr/>
  <p className="mb-0">${alert.footer}</p>
</Alert>`
  )
  .join("\n\n")}


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

export default AlertContent;
