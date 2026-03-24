import React from "react";
import { Badge, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  notifications,
  statCards,
  timelineItems,
} from "@/data/dashboard/ecommerce/EcommerceCardsData.tsx";

const EcommerceDashboard: React.FC = () => {
  return (
    <>
      <Col lg={5} xxl={3}>
        <Row>
          {statCards.map((card) => (
            <Col key={card.id} xs={6} md={3} lg={6}>
              <Card>
                <span
                  className={`bg-${card.bgColor} h-50 w-50 d-flex-center rounded-circle m-auto eshop-icon-box`}
                >
                  {card.icon}
                </span>
                <Card.Body className="eshop-cards">
                  <span className="ripple-effect"></span>
                  <div className="overflow-hidden">
                    <h3 className={`text-${card.textColor} mb-0`}>
                      {card.value}
                    </h3>
                    <p className="mg-b-35 f-w-600 text-dark-800 txt-ellipsis-1">
                      {card.title}
                    </p>
                    <Badge bg={card.badgeBg}>{card.badgeText}</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>

      <Col lg={7} xxl={6}>
        {/* Order Summary Card */}
        <Card className="mb-3">
          <Card.Body>
            <Row className="align-items-center">
              <Col sm={6} className="position-relative">
                <div className="location-container">
                  <div className="glass-effect-box position-absolute bottom-0">
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="w-65 h-65 overflow-hidden position-absolute top-0 start-0 d-flex-center">
                        <img
                          alt="image"
                          className="img-fluid"
                          src="/images/dashboard/ecommerce-dashboard/order1.gif"
                        />
                      </div>
                      <div className="flex-grow-1 ps-5">
                        <p className="fw-medium mb-0">OrderId</p>
                        <h6 className="text-primary mb-0 txt-ellipsis-1">
                          r72qU2892
                        </h6>
                      </div>
                      <Badge bg="primary" className="f-s-10 ms-2">
                        • On The Way
                      </Badge>
                    </div>
                  </div>
                </div>
              </Col>

              <Col sm={6} className="cart-side-card mt-3 mt-sm-0">
                <div className="mb-2">
                  <h6 className="text-dark mb-0 txt-ellipsis-1">
                    Delivery Date : 20 Feb 2025
                  </h6>
                </div>
                <Table className="cart-side-table mb-0">
                  <tbody>
                    <tr className="total-price">
                      <th>Sub Total :</th>
                      <th className="text-end">
                        <span id="cart-sub">$359.96</span>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0 txt-ellipsis-1">Discount:</p>
                      </td>
                      <td className="text-end text-success">-$53.00</td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0 txt-ellipsis-1">
                          Estimated Tax (12.5%) :
                        </p>
                      </td>
                      <td className="text-end text-danger">$44.99</td>
                    </tr>
                    <tr className="total-price">
                      <th>
                        <p className="mb-0 txt-ellipsis-1">Total (USD) :</p>
                      </th>
                      <th className="text-end">
                        <span id="cart-total">$415.96</span>
                      </th>
                    </tr>
                  </tbody>
                </Table>
                <p className="f-w-500 mb-0 txt-ellipsis-1">
                  Support:{" "}
                  <Link
                    to="/apps/e-shop/orders-details"
                    className="link-primary text-d-underline"
                  >
                    https://support.aicom.com/order?r72qU2892
                  </Link>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <ul className="app-side-timeline shipping-timeline">
              {timelineItems.map((item) => (
                <li
                  key={item.id}
                  className={`side-timeline-section w-100 right-side ${
                    item.isCompleted ? "complete-step" : ""
                  }`}
                >
                  <div className="side-timeline-icon">
                    <span
                      className={`${
                        item.isCompleted
                          ? "bg-primary text-white"
                          : item.iconBg || "bg-light-secondary"
                      } ${
                        item.iconTextColor || "text-dark-400"
                      } h-35 w-35 d-flex-center b-r-50`}
                    >
                      <i className={item.icon}></i>
                    </span>
                  </div>
                  <div className="timeline-content p-0">
                    <div>
                      <h6 className="f-s-15 mb-2 txt-ellipsis-1">
                        {item.title}
                      </h6>
                      <p className="mb-0 text-dark-800 f-w-400">
                        {item.date}{" "}
                        <span className="text-primary f-w-500">
                          {item.time}
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={7} lg={4} xxl={3}>
        <ul className="notifications-list box-list mb-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`d-flex align-items-center ${notification.type === "header" ? "justify-content-between gap-3 b-s-4-primary" : ""}`}
            >
              {notification.type === "header" ? (
                <>
                  <div>
                    <h6 className="txt-ellipsis-1 mb-0">
                      {notification.title}
                    </h6>
                    <p className="text-secondary mb-0">
                      {notification.subtitle}
                    </p>
                  </div>
                  <div className="h-45 w-45 d-flex-center rounded-circle flex-shrink-0 bg-light-primary position-relative">
                    <i className={notification.icon}></i>
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger badge-notification">
                      {notification.badgeCount}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`h-45 w-45 d-flex-center b-r-12 overflow-hidden flex-shrink-0 ${notification.avatarBg}`}
                  >
                    {notification.avatarText ? (
                      notification.avatarText
                    ) : (
                      <img
                        alt="order"
                        className="img-fluid"
                        src={notification.avatarImage}
                      />
                    )}
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 f-w-500 f-s-16 txt-ellipsis-1">
                      {notification.message}
                    </p>
                    <p className="mb-0 text-secondary">{notification.time}</p>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </Col>
    </>
  );
};

export default EcommerceDashboard;
