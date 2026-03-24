import { useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

import {
  cardData,
  orderTimelineData,
  ordersCardData,
} from "@/data/app/e-shop/order-details/OrdersDetailsData.tsx";
import { StackIcon } from "@phosphor-icons/react";
import { IconEdit, IconStarFilled, IconTrash } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const OrdersDetailsPage = () => {
  const [orders, setOrders] = useState(ordersCardData);

  const handleDelete = (id: number) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Orders Details"
          title="Apps"
          path={["E-shop", "Orders Details"]}
          Icon={StackIcon}
        />

        <Row className="order-details">
          <Col xxl={9}>
            <Row>
              {cardData.map((card, cardIndex) => (
                <Col lg={4} key={`card-${cardIndex}`}>
                  <Card className="order-details-card">
                    <Card.Header>
                      <h5 className={cardIndex === 0 ? "text-nowrap" : ""}>
                        {card.title}
                      </h5>
                    </Card.Header>
                    <Card.Body>
                      {card.items.map((item, itemIndex) => (
                        <div
                          className={`d-flex justify-content-between align-items-center ${
                            itemIndex > 0 ? "mt-3" : ""
                          }`}
                          key={`item-${cardIndex}-${itemIndex}`}
                        >
                          <h6 className="d-flex align-items-center  text-dark gap-2">
                            <span className="h-40 w-40 d-flex-center b-r-50 text-light-primary">
                              {item.icon}
                            </span>
                            {item.label}
                          </h6>
                          <div className="text-end">
                            <p>{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Card>
              <Card.Header>
                <h5>Order : #ACD1100897</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="orders-details-datatable app-scroll table-responsive">
                  <Table className="table-bottom-border table-striped text-center align-middle mb-0">
                    <thead>
                      <tr>
                        <th className="text-start">Product Details</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Order Date</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src={order.productImage}
                                alt="product-img"
                                className="h-50 b-r-10 h-50px br-10"
                              />
                              <div className="text-start">
                                <h6 className="f-s-16 mb-0">
                                  {order.productName}
                                </h6>
                                <p className="text-muted f-s-13 m-0">
                                  Color:{" "}
                                  <span className="text-secondary">
                                    {order.color}
                                  </span>
                                </p>
                                <p className="text-muted f-s-13 m-0">
                                  Size:{" "}
                                  <span className="text-secondary">
                                    {order.size}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span
                              className={`badge text-light-${(() => {
                                switch (order.status) {
                                  case "CANCELLED":
                                    return "danger";
                                  case "DELIVERED":
                                    return "success";
                                  case "PICKUPS":
                                    return "info";
                                  case "RETURNS":
                                    return "secondary";
                                  default:
                                    return "light";
                                }
                              })()}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="f-w-500 text-success">
                            {order.price}
                          </td>
                          <td className="f-w-500 f-s-14">{order.orderDate}</td>
                          <td>{order.quantity}</td>
                          <td>
                            <div>
                              {[...Array(5)].map((_, i) => (
                                <IconStarFilled
                                  key={i}
                                  size={16}
                                  className={
                                    i < order.rating
                                      ? "text-warning"
                                      : "text-secondary"
                                  }
                                />
                              ))}
                            </div>
                          </td>
                          <td>
                            <Button
                              variant="outline-success"
                              className=" icon-btn b-r-4 me-2 rounded"
                            >
                              <IconEdit size={18} />
                            </Button>{" "}
                            <Button
                              variant="outline-danger"
                              className=" icon-btn b-r-4 rounded"
                              onClick={() => handleDelete(order.id)}
                            >
                              <IconTrash size={18} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3}>
            <Card className="equal-card">
              <Card.Header>
                <h5>Order Status</h5>
              </Card.Header>
              <Card.Body>
                <ul className="app-timeline-box">
                  {orderTimelineData.map((item, index) => (
                    <li className="timeline-section" key={`timeline-${index}`}>
                      <div className="timeline-icon">
                        <span
                          className={`${item.iconClass} h-35 w-35 d-flex-center b-r-50`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div className={`timeline-content ${item.contentClass}`}>
                        <div className="d-flex justify-content-between align-items-center timeline-flex">
                          <h6 className={`mt-2 ${item.titleClass}`}>
                            {item.title}
                          </h6>
                          {item.timeBadge ? (
                            <span className={`badge ${item.timeClass} ms-2`}>
                              {item.time}
                            </span>
                          ) : (
                            <span className={item.timeClass}>{item.time}</span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-2 text-dark">{item.description}</p>
                        )}
                        <p className="text-secondary">{item.date}</p>
                        {item.badges.length > 0 && (
                          <div className="mt-2">
                            {item.badges.map((badge, badgeIndex) => (
                              <span
                                key={`badge-${index}-${badgeIndex}`}
                                className="badge bg-primary-900 me-2"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default OrdersDetailsPage;
