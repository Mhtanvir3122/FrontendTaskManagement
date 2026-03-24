import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
  Stack,
  Table,
} from "react-bootstrap";

import { orders } from "@/data/app/e-shop/orderpage/Orderpage.ts";
import { StackIcon } from "@phosphor-icons/react";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";

const OrderListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [ordersList, setOrdersList] = useState(orders);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleDelete = (orderId: number) => {
    const updatedOrders = orders.filter((order) => order.idNum !== orderId);
    setOrdersList(updatedOrders);
  };

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

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Orders List"
        title="Apps"
        path={["E-shop", "Orders List"]}
        Icon={StackIcon}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body className="p-0">
              <div className="order-list-datatable app-scroll table-responsive">
                <Table
                  hover
                  className="table-bottom-border table-striped table-hover align-middle mb-0"
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
                    {ordersList.map((order) => (
                      <tr key={order.idNum}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>{order.id}</td>
                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <div
                              className={`rounded-circle overflow-hidden w-25 h-25 ${order.avatarBgColor}`}
                            >
                              <Image
                                src={order.customer.avatar}
                                alt={order.customer.name}
                                roundedCircle
                                fluid
                              />
                            </div>
                            <span>{order.customer.name}</span>
                          </Stack>
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
                          <Stack direction="horizontal" gap={2}>
                            <Button
                              as="a"
                              href="/apps/e-shop/orders-details"
                              variant="outline-primary"
                              size="sm"
                              className="d-flex-center p-0 w-30 h-30 rounded-circle"
                            >
                              <IconEye size={16} />
                            </Button>
                            <Button
                              variant="outline-success"
                              size="sm"
                              className="p-0 w-30 h-30 rounded-circle"
                              onClick={handleShow}
                            >
                              <IconEdit size={16} />
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              className="p-0 w-30 h-30 rounded-circle"
                              onClick={() => handleDelete(order.idNum)}
                            >
                              <IconTrash size={16} />
                            </Button>
                          </Stack>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Customer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bette Hagenes"
                defaultValue="Bette Hagenes"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="jacket"
                defaultValue="jacket"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Order Date</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select>
                <option value="">Select Your Payment Method</option>
                <option value="1">Mastercard</option>
                <option value="2">Visa</option>
                <option value="3">Paypal</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter Amount"
                  defaultValue="500"
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OrderListPage;
