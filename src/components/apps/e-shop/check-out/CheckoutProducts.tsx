import { useState } from "react";
import { Badge, Button, Form, Image, InputGroup, Table } from "react-bootstrap";

import { IconGift, IconStarFilled, IconX } from "@tabler/icons-react";

const CheckoutProducts = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/images/ecommerce/23.jpg",
      name: "Jacket",
      description: "Sky & stylist",
      size: "Medium",
      items: 2,
      price: 500,
      rating: 3,
    },
    {
      id: 2,
      image: "/images/ecommerce/25.jpg",
      name: "Shoes",
      description: "Trendy & stylist shoes",
      size: "33",
      items: 1,
      price: 350,
      rating: 2,
    },
    {
      id: 3,
      image: "/images/ecommerce/13.jpg",
      name: "Watch",
      description: "Designer golden watch",
      color: "Golden",
      items: 2,
      price: 890,
      rating: 3,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.items,
    0
  );
  const estimatedTax = 5.0;
  const shippingHandling = 10.0;
  const total = subtotal + estimatedTax + shippingHandling;

  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="checkout-cart-box">
          <div className="cart-images d-flex-center flex-shrink-0">
            <a href="#">
              <Image src={item.image} alt={item.name} width={80} fluid />
            </a>
          </div>
          <div className="ms-2 flex-grow-1">
            <h6 className="mb-1">
              {item.name} -{" "}
              <span className="text-muted">({item.description})</span>
            </h6>
            <div className="mb-2">
              {[...Array(5)].map((_, index) => (
                <IconStarFilled
                  key={index}
                  size={14}
                  className={
                    index < item.rating ? "text-warning" : "text-secondary"
                  }
                />
              ))}
            </div>
            <p className="mb-1">
              <span className="fw-semibold">
                {item.size ? "Size" : "Color"}
              </span>
              : {item.size || item.color}
            </p>
            <p className="mb-0">
              <span className="fw-semibold">Items</span>: {item.items}
            </p>
          </div>
          <div className="cart-price-box">
            <Button
              variant="link"
              onClick={() => handleRemove(item.id)}
              className="p-0 mb-2"
            >
              <IconX size={18} className="text-secondary" />
            </Button>
            <h5 className="mb-0">${item.price.toFixed(2)}</h5>
          </div>
        </div>
      ))}

      <div className="pricing-details mt-4">
        <div className="mb-3">
          <InputGroup>
            <Form.Control placeholder="Enter promo code / Gift Certificate" />
            <InputGroup.Text className="bg-dark text-white">
              <IconGift size={18} />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <Table borderless className="mb-0">
          <thead>
            <tr>
              <th>Subtotal</th>
              <th className="text-end">${subtotal.toFixed(2)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estimated Tax</td>
              <td className="text-end">${estimatedTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Estimated Shipping & Handling</td>
              <td className="text-end">${shippingHandling.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Delivery Charges</td>
              <td className="text-end">-</td>
            </tr>
            <tr>
              <td>Coupon Discount</td>
              <td className="text-end">
                <Badge bg="success">Apply</Badge>
              </td>
            </tr>
          </tbody>
        </Table>

        <Table className="mb-0 mt-3">
          <thead>
            <tr>
              <th className="fs-6 text-dark">Total</th>
              <th className="text-end text-success">${total.toFixed(2)}</th>
            </tr>
          </thead>
        </Table>

        <Button variant="primary" className="w-100 mt-3 rounded-1" id="next">
          Buy Order
        </Button>
      </div>
    </>
  );
};

export default CheckoutProducts;
