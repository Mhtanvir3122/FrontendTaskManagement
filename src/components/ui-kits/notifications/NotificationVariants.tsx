import React, { useState } from "react";
import { Button, Card, Col, Toast, ToastBody } from "react-bootstrap";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const NotificationPositions = [
  {
    label: "Top",
    value: "top",
    variant: "light-primary",
    bgColor: "rgba(var(--primary),1)",
  },
  {
    label: "Left",
    value: "left",
    variant: "light-success",
    bgColor: "rgba(var(--success),1)",
  },
  {
    label: "Right",
    value: "right",
    variant: "light-info",
    bgColor: "rgba(var(--info),1)",
  },
  {
    label: "Bottom",
    value: "bottom",
    variant: "light-warning",
    bgColor: "rgba(var(--warning),1)",
  },
  {
    label: "Center",
    value: "center",
    variant: "light-secondary",
    bgColor: "rgba(var(--secondary),1)",
  },
];

const notificationsVariantsData = [
  {
    id: 1,
    type: "primary",
    message: "This is a Primary toast message.",
    ButtonColor: "light-primary",
  },
  {
    id: 2,
    type: "secondary",
    message: "This is a Secondary toast message.",
    ButtonColor: "light-secondary",
  },
  {
    id: 3,
    type: "success",
    message: "This is a Success toast message.",
    ButtonColor: "light-success",
  },
  {
    id: 4,
    type: "danger",
    message: "This is a Danger toast message.",
    ButtonColor: "light-danger",
  },
  {
    id: 5,
    type: "warning",
    message: "This is a Warning toast message.",
    ButtonColor: "light-warning",
  },
  {
    id: 6,
    type: "info",
    message: "This is an Info toast message.",
    ButtonColor: "light-info",
  },
  {
    id: 7,
    type: "light",
    message: "This is a Light toast message.",
    ButtonColor: "light-light",
  },
  {
    id: 8,
    type: "dark",
    message: "This is a Dark toast message.",
    ButtonColor: "light-dark",
  },
];

const NotificationVariants: React.FC = () => {
  const showToast = (
    position: "left" | "center" | "right" | "top" | "bottom",
    background: string
  ) => {
    Toastify({
      text: "Welcome Back! This is a Toast Notification",
      duration: 3000,
      gravity: position === "top" || position === "bottom" ? position : "top",
      position:
        position === "left" || position === "right" ? position : "center",
      style: {
        background,
      },
    }).showToast();
  };

  const [visibleToasts, setVisibleToasts] = useState<number[]>([]);

  const handleShowToast = (id: number) => {
    if (!visibleToasts.includes(id)) {
      setVisibleToasts((prev) => [...prev, id]);
      setTimeout(() => handleCloseToast(id), 3000); // Auto-close after 3 sec
    }
  };

  // Function to close a toast
  const handleCloseToast = (id: number) => {
    setVisibleToasts((prev) => prev.filter((toastId) => toastId !== id));
  };

  return (
    <>
      <Col xs={12}>
        <Card>
          <Card.Header className="code-header">
            <h5>Position Notification</h5>
            <p>
              It is Very Easy to Customize, and it is used in website
              applications.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap gap-2">
              {NotificationPositions.map((pos) => (
                <Button
                  key={pos.value}
                  variant={pos.variant}
                  onClick={() =>
                    showToast(
                      pos.value as
                        | "left"
                        | "center"
                        | "right"
                        | "top"
                        | "bottom",
                      pos.bgColor
                    )
                  }
                >
                  {pos.label}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12}>
        <Card>
          <Card.Header className="code-header">
            <h5>Color Notification</h5>
            <p>
              It is Very Easy to Customize, and it uses in website application.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap gap-2">
              {notificationsVariantsData.map((toast) => (
                <Button
                  key={toast.id}
                  variant={toast.ButtonColor}
                  onClick={() => handleShowToast(toast.id)} // Using handleShowToast
                >
                  {toast.type.charAt(0).toUpperCase() + toast.type.slice(1)}
                </Button>
              ))}
            </div>

            <div className="toast-container position-fixed top-0 end-0 p-3">
              {notificationsVariantsData.map((toast) =>
                visibleToasts.includes(toast.id) ? (
                  <Toast
                    key={toast.id}
                    className={`bg-${toast.type} text-white`}
                  >
                    <Toast.Header onToggle={() => handleCloseToast(toast.id)}>
                      {toast.type.charAt(0).toUpperCase() + toast.type.slice(1)}
                      <strong className="me-auto"></strong>
                    </Toast.Header>
                    <ToastBody>{toast.message}</ToastBody>
                  </Toast>
                ) : null
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default NotificationVariants;
