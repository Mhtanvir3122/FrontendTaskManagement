import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";

import { orders } from "@/data/app/e-shop/orderpage/Orderpage.ts";
import { StackIcon } from "@phosphor-icons/react";
import {
  IconArrowBack,
  IconEdit,
  IconEye,
  IconSortDescending2,
  IconSquareRoundedX,
  IconTrash,
  IconTruckDelivery,
  IconTruckLoading,
} from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ProductDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("all-orders");

  const allOrders = orders;
  const deliveredOrders = orders.filter(
    (order) => order.status === "DELIVERED"
  );
  const pickupOrders = orders.filter((order) => order.status === "PICKUPS");
  const returnOrders = orders.filter((order) => order.status === "RETURNS");
  const cancelledOrders = orders.filter(
    (order) => order.status === "CANCELLED"
  );

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "CANCELLED":
        return "danger";
      case "DELIVERED":
        return "success";
      case "INPROGRESS":
        return "warning";
      case "PICKUPS":
        return "info";
      case "RETURNS":
        return "secondary";
      default:
        return "light";
    }
  };

  const renderTable = (data: typeof orders) => {
    return (
      <div className=" order-list-table table-responsive app-scroll ">
        <Table
          hover
          className="table-bottom-border table-striped align-middle mb-0"
        >
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" id="select-all" />
              </th>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Order Date</th>
              <th>Payment Method</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr key={index}>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>{order.id}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-circle overflow-hidden avatar-25"
                    >
                      <Image
                        src={order.customer.avatar}
                        alt={order.customer.name}
                        roundedCircle
                        fluid
                      />
                    </div>
                    <span>{order.customer.name}</span>
                  </div>
                </td>
                <td>{order.product}</td>
                <td>
                  <Badge bg={getBadgeVariant(order.status)}>
                    {order.status}
                  </Badge>
                </td>
                <td>{order.orderDate}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.amount}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button
                      as="a"
                      href="/apps/e-shop/orders-details"
                      variant="outline-primary"
                      size="sm"
                      className="rounded-circle d-flex-center p-0 w-30 h-30"
                    >
                      <IconEye size={14} />
                    </Button>
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="rounded-circle p-0 w-30 h-30"
                    >
                      <IconEdit size={14} />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="rounded-circle p-0 w-30 h-30"
                    >
                      <IconTrash size={14} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Orders"
        title="Apps"
        path={["E-shop", "Orders"]}
        Icon={StackIcon}
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body className="p-0">
              <Tab.Container
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k || "all-orders")}
              >
                <Nav
                  variant="tabs"
                  className="app-tabs-primary order-tabs d-flex justify-content-start border-0 mb-0 p-3"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="all-orders"
                      className="d-flex align-items-center gap-1"
                    >
                      <IconSortDescending2 size={18} /> All Orders
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="delivered"
                      className="d-flex align-items-center gap-1"
                    >
                      <IconTruckDelivery size={18} /> Delivered
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="pickups"
                      className="d-flex align-items-center gap-1"
                    >
                      <IconTruckLoading size={18} /> Pickups
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="returns"
                      className="d-flex align-items-center gap-1"
                    >
                      <IconArrowBack size={18} /> Returns
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="cancelled"
                      className="d-flex align-items-center gap-1"
                    >
                      <IconSquareRoundedX size={18} /> Cancelled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="p-0">
                  <Tab.Pane eventKey="all-orders">
                    {renderTable(allOrders)}
                  </Tab.Pane>
                  <Tab.Pane eventKey="delivered">
                    {renderTable(deliveredOrders)}
                  </Tab.Pane>
                  <Tab.Pane eventKey="pickups">
                    {renderTable(pickupOrders)}
                  </Tab.Pane>
                  <Tab.Pane eventKey="returns">
                    {renderTable(returnOrders)}
                  </Tab.Pane>
                  <Tab.Pane eventKey="cancelled">
                    {renderTable(cancelledOrders)}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
