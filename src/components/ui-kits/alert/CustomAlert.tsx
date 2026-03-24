import React, { useEffect, useState } from "react";
import { Card, Collapse } from "react-bootstrap";

import { Code, Info, ShoppingCartSimple, Warning } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const alertDismissing = [
  {
    type: "basic",
    color: "primary",
    image: "/images/icons/cookie-.png",
    message:
      "We have Cookies! We use it to ensure you get the best experience on our website and service",
    buttons: [
      <button
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        key="basic-close"
      />,
    ],
  },
  {
    type: "label",
    color: "success",
    icon: <ShoppingCartSimple size={16} />,
    message: "Your order is delayed",
    buttons: [
      <button
        className="btn btn-sm btn-success"
        data-bs-dismiss="alert"
        key="label-accept"
      >
        Accept
      </button>,
    ],
  },
  {
    type: "border",
    color: "warning",
    icon: <Info size={16} className="me-2 text-info" />,
    title: <p className="mb-0 d-inline">New Version is now available</p>,
    message:
      "With this new Version you have access to more customization features and file export options.",
    buttons: [
      <a
        href="#"
        className="link-primary text-d-underline"
        data-bs-dismiss="alert"
        key="border-deny"
      >
        Don't allow
      </a>,
      <a
        href="#"
        className="link-primary text-d-underline ms-2"
        key="border-allow"
      >
        Allow
      </a>,
    ],
  },
  {
    type: "custom",
    color: "warning",
    icon: (
      <Warning size={25} weight="fill" className="align-middle text-warning" />
    ),
    title: "Under maintenance",
    message:
      "Our team is currently checking some errors in this area. We don't recommend changing any of your settings until the next update.",
    buttons: [
      <a href="#" className="btn btn-warning" key="custom-info">
        Get more info
      </a>,
    ],
  },
];

const CustomAlert: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [open]); // Added open as dependency

  return (
    <Card className="equal-card">
      <Card.Header className="code-header">
        <h5 className="txt-ellipsis">Custom Alerts With Dismissing</h5>
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-link p-0 border-0"
          aria-label={open ? "Hide code" : "Show code"}
        >
          <Code size={30} weight="bold" className="source" />
        </button>
      </Card.Header>

      <Card.Body>
        {alertDismissing.map((alert, index) => {
          if (alert.type === "custom") {
            return (
              <div className="alert custom-alert p-0" role="alert" key={index}>
                <div className="alert-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div className="alert-body">
                  <h3 className="mb-0 text-center mb-3">
                    {alert.icon} {alert.title}
                  </h3>
                  <p className="mb-3">{alert.message}</p>
                  <div className="text-end">{alert.buttons}</div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={`alert ${
                alert.type === "label"
                  ? `alert-label alert-label-${alert.color}`
                  : alert.type === "border"
                    ? `alert-border-${alert.color}`
                    : `alert-${alert.color} alert-dismissible`
              }`}
              role="alert"
            >
              {alert.type === "basic" && (
                <div className="d-flex justify-content-between align-items-center">
                  {alert.image && (
                    <img
                      src={alert.image}
                      className="w-35 h-35 me-2"
                      alt="cookie icon"
                    />
                  )}
                  <p className="mb-0">{alert.message}</p>
                  {alert.buttons}
                </div>
              )}

              {alert.type === "label" && (
                <div className="d-flex justify-content-between align-items-center w-100">
                  <p className="mb-0 d-flex align-items-center gap-2">
                    <span className={`label-icon label-icon-${alert.color}`}>
                      {alert.icon}
                    </span>
                    {alert.message}
                  </p>
                  {alert.buttons}
                </div>
              )}

              {alert.type === "border" && (
                <>
                  <h6>
                    {alert.icon} {alert.title}
                  </h6>
                  <p>{alert.message}</p>
                  <div className="text-end">{alert.buttons}</div>
                </>
              )}
            </div>
          );
        })}

        <Collapse in={open}>
          <div className="mt-3">
            <pre>
              <code className="language-html">
                {`<div className="alert alert-primary alert-dismissible" role="alert">
  <div className="d-flex justify-content-between align-items-center">
    <img src="/images/icons/cookie-.png" className="w-35 h-35 me-2" alt="cookie icon" />
    <p className="mb-0">We have Cookies! We use it to ensure you get the best experience on our website and service</p>
    <button className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
  </div>
</div>

<div className="alert alert-label alert-label-success" role="alert">
  <div className="d-flex justify-content-between align-items-center w-100">
    <p className="mb-0 d-flex align-items-center gap-2">
      <span className="label-icon label-icon-success">
        <ShoppingCartSimple size={16} />
      </span>
      Your order is delayed
    </p>
    <button className="btn btn-sm btn-success" data-bs-dismiss="alert">Accept</button>
  </div>
</div>

<div className="alert alert-border-warning" role="alert">
  <h6>
    <Info size={16} className="me-2 text-info" /> New Version is now available
  </h6>
  <p>With this new Version you have access to more customization features and file export options.</p>
  <div className="text-end">
    <a href="#" className="link-primary text-d-underline" data-bs-dismiss="alert">Don't allow</a>
    <a href="#" className="link-primary text-d-underline ms-2">Allow</a>
  </div>
</div>

<div className="alert custom-alert p-0" role="alert">
  <div className="alert-header">
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
  </div>
  <div className="alert-body">
    <h3 className="mb-0 text-center mb-3">
      <Warning size={25} weight="fill" className="align-middle text-warning" /> Under maintenance
    </h3>
    <p className="mb-3">
      Our team is currently checking some errors in this area. We don't recommend changing any of your settings until the next update.
    </p>
    <div className="text-end">
      <a href='#' className="btn btn-warning">Get more info</a>
    </div>
  </div>
</div>`}
              </code>
            </pre>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default CustomAlert;
