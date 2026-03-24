import React, { useEffect, useState } from "react";
import { Alert, Card, Collapse } from "react-bootstrap";

import { Code, DownloadSimple } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

type AlertItem = {
  color: string;
  icon: React.ReactNode;
  message: string;
  iconText: string;
};

const alertData: AlertItem[] = [
  {
    color: "primary",
    icon: <DownloadSimple size={20} />,
    iconText: "<DownloadSimple size={20} />",
    message: "Alert with label icons - check out!",
  },
  {
    color: "secondary",
    icon: <DownloadSimple size={20} />,
    iconText: "<DownloadSimple size={20} />",
    message: "Alert with label icons - check out!",
  },
  {
    color: "success",
    icon: <DownloadSimple size={20} />,
    iconText: "<DownloadSimple size={20} />",
    message: "Alert with label icons - check out!",
  },
];

const AlertIcon: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [open]);

  const PrismCode = alertData
    .map(
      (
        alert
      ) => `<Alert className=" alert-label alert-label-${alert.color}" role="alert">
  <p className="mb-0 d-flex align-items-center gap-2">
    <span className="label-icon label-icon-${alert.color}">
      ${alert.iconText}
    </span>
    ${alert.message}
  </p>
</Alert>`
    )
    .join("\n\n");

  return (
    <Card>
      <Card.Header className="code-header d-flex justify-content-between align-items-center">
        <h5>Alert With Label Icons</h5>
        <a onClick={() => setOpen(!open)} role="button">
          <Code size={30} weight="bold" className="source" />
        </a>
      </Card.Header>
      <Card.Body>
        {alertData.map((alert, index) => (
          <Alert
            key={index}
            className={`alert alert-label alert-label-${alert.color}`}
            role="alert"
          >
            <p className="mb-0 d-flex align-items-center gap-2">
              <span className={`label-icon label-icon-${alert.color}`}>
                {alert.icon}
              </span>
              {alert.message}
            </p>
          </Alert>
        ))}

        <Collapse in={open}>
          <div>
            <pre className="mt-3">
              <code className="language-html">{PrismCode}</code>
            </pre>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default AlertIcon;
