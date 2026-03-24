import React, { useState } from "react";
import { Badge, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Bell, BellRinging, Trash } from "phosphor-react";

interface Notification {
  id: number;
  title: string;
  content: React.ReactNode;
  time: string;
  hasActions?: boolean;
}

const HeaderNotification: React.FC = () => {
  const [show, setShow] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Gene Hart wants to edit Report.doc",
      content: (
        <>
          <Link
            className="f-s-15 text-dark mb-0"
            to="/apps/email-page/read-email"
          >
            <span className="f-w-500 text-dark">Gene Hart</span> wants to edit{" "}
            <span className="f-w-500 text-dark">Report.doc</span>
          </Link>
          <div>
            <Link className="d-inline-block f-w-500 text-success me-1" to="#">
              Approve
            </Link>
            <Link className="d-inline-block f-w-500 text-danger" to="#">
              Deny
            </Link>
          </div>
        </>
      ),
      time: "sep 23",
      hasActions: true,
    },
    {
      id: 2,
      title: "Order from Shopper.com",
      content: (
        <Link
          className="f-s-15 text-dark mb-0"
          to="/apps/email-page/read-email"
        >
          Hey <span className="f-w-500 text-dark">Emery McKenzie</span>, get
          ready: Your order from{" "}
          <span className="f-w-500 text-dark">@Shopper.com</span>
        </Link>
      ),
      time: "sep 23",
    },
    {
      id: 3,
      title: "Simon Young shared a file",
      content: (
        <Link
          className="f-s-15 text-dark mb-0"
          to="/apps/email-page/read-email"
        >
          <span className="f-w-500 text-dark">Simon Young</span> shared a file
          called <span className="f-w-500 text-dark">Dropdown.pdf</span>
        </Link>
      ),
      time: "30 min",
    },
    {
      id: 4,
      title: "Becky G. Hayes added a comment",
      content: (
        <Link
          className="f-s-15 text-dark mb-0"
          to="/apps/email-page/read-email"
        >
          <span className="f-w-500 text-dark">Becky G. Hayes</span> has added a
          comment to <span className="f-w-500 text-dark">Final_Report.pdf</span>
        </Link>
      ),
      time: "45 min",
    },
    {
      id: 5,
      title: "Meeting invitation",
      content: (
        <>
          <Link
            className="f-s-15 text-dark mb-0"
            to="/apps/email-page/read-email"
          >
            <span className="f-w-600 text-dark">@Romaine</span> invited you to a
            meeting
          </Link>
          <div>
            <Link className="d-inline-block f-w-500 text-success me-1" to="#">
              Join
            </Link>
            <Link className="d-inline-block f-w-500 text-danger" to="#">
              Decline
            </Link>
          </div>
        </>
      ),
      time: "1 hour ago",
      hasActions: true,
    },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant="link"
        className="d-block head-icon position-relative bg-light-dark rounded-circle f-s-22 p-2"
      >
        <Bell size={24} />
        <span className="position-absolute translate-middle p-1 bg-primary border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower">
          <span className="visually-hidden">New alerts</span>
        </span>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="header-notification-canvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notification</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="app-scroll p-0">
          <div className="head-container">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="notification-message head-box d-flex justify-content-between p-3"
                >
                  <div className="message-content-box flex-grow-1 pe-2">
                    {notification.content}
                  </div>
                  <div className="text-end">
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <Trash size={18} className="text-danger" />
                    </Button>
                    <div>
                      <Badge bg="light-primary" className="text-primary">
                        {notification.time}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="hidden-massage py-4 px-3 text-center">
                <div>
                  <BellRinging size={50} className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-0">Notification Not Found</h6>
                  <p className="text-dark">
                    When you have any notifications added here, will appear
                    here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderNotification;
