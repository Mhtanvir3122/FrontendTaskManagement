import React, { useEffect, useState } from "react";
import { Alert, Card, Collapse } from "react-bootstrap";

import {
  AlignBottom,
  CheckCircle,
  Code,
  Download,
  Globe,
  Info,
  Power,
  Warning,
  Wheelchair,
  X,
} from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

interface alertListicon {
  icon: React.ReactNode;
  color: string;
  type: string;
  message: string;
}

const alertList: alertListicon[] = [
  {
    color: "light-border-primary",
    icon: <Download size={16} className="me-2" />,
    message: "Light-border-primary alert With icons -check it out!",
    type: '<Download size={16} className="me-2" />',
  },
  {
    color: "light-border-secondary",
    icon: <Wheelchair size={16} className="me-2" />,
    message: "Light-border-secondary alert With icons -check it out!",
    type: '<Wheelchair size={16} className="me-2" />',
  },
  {
    color: "light-border-success",
    icon: <CheckCircle size={16} className="me-2" />,
    message: "Light-border-success alert With icons -check it out!",
    type: '<CheckCircle size={16} className="me-2" />',
  },
  {
    color: "light-border-danger",
    icon: <Power size={16} className="me-2" />,
    message: "Light-border-danger alert With icons -check it out!",
    type: '<Power size={16} className="me-2" />',
  },
  {
    color: "light-border-warning",
    icon: <Warning size={16} className="me-2" />,
    message: "Light-border-warning alert With icons -check it out!",
    type: '<Warning size={16} className="me-2" />',
  },
  {
    color: "light-border-info",
    icon: <Info size={16} className="me-2" />,
    message: "Light-border-info alert With icons -check it out!",
    type: '<Info size={16} className="me-2" />',
  },
  {
    color: "light-border-light",
    icon: <AlignBottom size={16} className="me-2" />,
    message: "Light-border-light alert With icons -check it out!",
    type: '<AlignBottom size={16} className="me-2" />',
  },
  {
    color: "light-border-dark",
    icon: <Globe size={16} className="me-2" />,
    message: "Light-border-dark alert With icons -check it out!",
    type: '<Globe size={16} className="me-2" />',
  },
];

const WithIcon: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Card>
      <Card.Header className="code-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Alert With Icons</h5>
        <a onClick={() => setOpen(!open)} role="button">
          <Code size={30} weight="bold" className="source" />
        </a>
      </Card.Header>
      <Card.Body>
        {alertList.map((alert, index) => (
          <Alert
            key={index}
            variant={alert.color}
            className="d-flex justify-content-between align-items-center"
          >
            <p className="mb-0 d-flex align-items-center">
              {alert.icon}
              {alert.message}
            </p>
            <X
              size={16}
              weight="bold"
              className="cursor-pointer"
              data-bs-dismiss="alert"
            />
          </Alert>
        ))}

        <Collapse in={open}>
          <div>
            <pre className="mt-3">
              <code className="language-html">
                {`<Card>
  <Card.Header>
    <h5>Alert With Icon</h5>
  </Card.Header>
  <Card.Body>
${alertList
  .map(
    (
      alert
    ) => `    <Alert variant="${alert.color}" role="alert" className="d-flex justify-content-between align-items-center">
      <p className="mb-0 d-flex align-items-center">
        ${alert.type}
        ${alert.message}
      </p>
      <X size={16} weight="bold" className="cursor-pointer" data-bs-dismiss="alert" />
    </Alert>`
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

export default WithIcon;
