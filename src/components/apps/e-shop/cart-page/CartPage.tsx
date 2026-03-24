import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";

import { cartData } from "@/data/app/e-shop/cart/Eshopcart.ts";
import { StackIcon, TrashIcon } from "@phosphor-icons/react";
import { IconHeart } from "@tabler/icons-react";
import "datatables.net-dt/css/dataTables.dataTables.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Man's Shoes",
    price: 519.1,
    image: "/images/header/cart/02.png",
    color: "Black",
    size: "Large",
    quantity: 1,
  },
  {
    id: 2,
    name: "Backpacks",
    price: 600.5,
    image: "/images/header/cart/01.png",
    color: "Pink",
    size: "Medium",
    quantity: 1,
  },
  {
    id: 3,
    name: "Watch",
    price: 300.99,
    image: "/images/header/cart/05.png",
    color: "Blue",
    size: "Medium",
    quantity: 1,
  },
  {
    id: 4,
    name: "Jackets for Woman",
    price: 600.5,
    image: "/images/header/cart/03.png",
    color: "Black",
    size: "XL",
    quantity: 1,
  },
  {
    id: 5,
    name: "Airpods Pro",
    price: 600.5,
    image: "/images/header/cart/06.png",
    color: "Black",
    size: "-",
    quantity: 1,
  },
  {
    id: 6,
    name: "Women's Watch",
    price: 519.1,
    image: "/images/header/cart/02.png",
    color: "Golden",
    size: "Small",
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItems] = useState<Product[]>(cartData);

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 53;
  const shipping = 65;
  const tax = subTotal * 0.125;
  const total = subTotal - discount + shipping + tax;

  const [products, setProducts] = useState<Product[]>(initialProducts);

  const updateQuantity = (id: number, amount: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
    );
  };

  const handleChange = (id: number, value: number) => {
    if (!isNaN(value) && value >= 0) {
      setProducts((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: value } : item
        )
      );
    }
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Cart"
          title="Apps"
          path={["E-shop", "Cart"]}
          Icon={StackIcon}
        />
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Body className="p-0">
                <div className="orders-details-datatable app-scroll table-responsive">
                  <Table className="table-bottom-border table-striped text-center align-middle mb-0">
                    <thead>
                      <tr>
                        <th className="text-start">Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="text-start">
                            <div className="d-flex align-items-center gap-2">
                              <span className="b-1-light bg-primary-200 p-1 h-45 w-45 d-flex-center b-r-12 flex-shrink-0 overflow-hidden box-list-img">
                                <img
                                  alt={product.name}
                                  src={product.image}
                                  className="img-fluid h-45 w-45 img-cover"
                                />
                              </span>
                              <div>
                                <p className="mb-1 fw-bold">{product.name}</p>
                                <p className="mb-0 small">
                                  Color: {product.color}
                                </p>
                                <p className="mb-0 small">
                                  Size: {product.size}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>${product.price.toFixed(2)}</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <Button
                                variant="danger"
                                className="h-35 w-35 d-flex-center b-r-6 p-0"
                                onClick={() => updateQuantity(product.id, -1)}
                              >
                                -
                              </Button>
                              <Form.Control
                                type="text"
                                className="h-35 w-55 ms-1 me-1 border b-r-6 text-center w-100"
                                value={product.quantity}
                                onChange={(e) =>
                                  handleChange(
                                    product.id,
                                    parseInt(e.target.value)
                                  )
                                }
                              />
                              <Button
                                variant="primary"
                                className="h-35 w-35 d-flex-center b-r-6 p-0"
                                onClick={() => updateQuantity(product.id, 1)}
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td>
                            ${(product.price * product.quantity).toFixed(2)}
                          </td>
                          <td>
                            <Button
                              variant="outline-primary"
                              className="icon-btn b-r-4"
                            >
                              <IconHeart size={18} />
                            </Button>{" "}
                            <Button
                              variant="outline-danger"
                              className="icon-btn b-r-4 delete-btn"
                              onClick={() => handleDelete(product.id)}
                            >
                              <TrashIcon size={18} />
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

          <Col lg="4">
            <Row>
              <Col xs="12">
                <Card>
                  <Card.Header>
                    <h5>Price Details</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="cart-datatable table-responsive">
                      <table className="table-bottom-border table-striped text-center align-middle mb-0 table">
                        <tbody>
                          <tr className="total-price">
                            <th>Sub Total :</th>
                            <th className="text-end">
                              <span id="cart-sub">${subTotal.toFixed(2)}</span>
                            </th>
                          </tr>
                          <tr>
                            <td>Discount:</td>
                            <td className="text-end" id="cart-discount">
                              - ${discount.toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td>Shipping Charge :</td>
                            <td className="text-end" id="cart-shipping">
                              ${shipping.toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td>Estimated Tax (12.5%) :</td>
                            <td className="text-end" id="cart-tax">
                              ${tax.toFixed(2)}
                            </td>
                          </tr>
                          <tr className="total-price">
                            <th>Total (USD) :</th>
                            <th className="text-end">
                              <span id="cart-total">${total.toFixed(2)}</span>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6" xl="12">
                <Card className="scratch-card position-relative">
                  <Card.Body>
                    <span>
                      <i className="ph-duotone ph-gift f-s-35"></i>
                    </span>
                    <h4>Extra 10% off</h4>
                    <div className="scratch-code-box d-flex align-items-center justify-content-between">
                      <h6 className="mb-0">WIN190EGHY018</h6>
                      <div className="flex-shrink-0">
                        <Button
                          color="primary"
                          size="sm"
                          className="b-r-24"
                          id="copyBtn"
                        >
                          copy
                        </Button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0">
                        Valid till 4 May 2024. <span>T&amp;C Apply</span>
                      </p>
                    </div>
                    <div className="scratch-overlay"></div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md="6" xl="12">
                <Card className="gift-card">
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="/images/ecommerce/01.gif"
                        alt="Gift"
                        className="w-35 h-35"
                      />
                      <h6 className="text-dark fw-bold fs-6 m-0">
                        Buying for a loved one?
                      </h6>
                    </div>
                    <div>
                      <p className="text-secondary mt-2">
                        Gift wrap and personalized message on card, Only for{" "}
                        <span className="text-dark fw-medium">
                          <b>$10.50 USD</b>
                        </span>
                      </p>
                      <div className="cart-gift text-end mt-4">
                        <Button color="primary">Add Gift</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
