import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Eye,
  ShoppingCart,
  ShoppingCartSimple,
  Star,
  Trash,
} from "phosphor-react";

interface CartItem {
  id: number;
  imgSrc: string;
  name: string;
  rating: number;
  size: string;
  color: string;
  price: number;
  quantity: number;
  productLink: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    imgSrc: "/images/header/cart/01.png",
    name: "Backpacks",
    rating: 3,
    size: "M",
    color: "Pink",
    price: 600.5,
    quantity: 1,
    productLink: "/apps/e-shop/product-details",
  },
  {
    id: 2,
    imgSrc: "/images/header/cart/05.png",
    name: "Women's Watch",
    rating: 4,
    size: "S",
    color: "Rose Gold",
    price: 519.1,
    quantity: 2,
    productLink: "/apps/e-shop/product-details",
  },
  {
    id: 3,
    imgSrc: "/images/header/cart/04.png",
    name: "Sandals",
    rating: 5,
    size: "8",
    color: "White",
    price: 390,
    quantity: 2,
    productLink: "/apps/e-shop/product-details",
  },
  {
    id: 4,
    imgSrc: "/images/header/cart/03.png",
    name: "Jackets",
    rating: 3,
    size: "XL",
    color: "Blue",
    price: 300,
    quantity: 2,
    productLink: "/apps/e-shop/product-details",
  },
  {
    id: 5,
    imgSrc: "/images/header/cart/02.png",
    name: "Shoes",
    rating: 3,
    size: "9",
    color: "White",
    price: 450,
    quantity: 1,
    productLink: "/apps/e-shop/product-details",
  },
];

const HeaderCart: React.FC = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const toggleCart = () => setCartOpen(!isCartOpen);

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Button
        onClick={toggleCart}
        variant="link"
        className="d-block position-relative bg-light-dark rounded-circle p-2"
      >
        <ShoppingCartSimple size={22} />
        {cartItems.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
          </span>
        )}
      </Button>

      <Offcanvas
        show={isCartOpen}
        onHide={toggleCart}
        placement="end"
        className="cart-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="app-scroll p-0">
          {cartItems.length === 0 ? (
            <div className="text-center py-4 px-3">
              <ShoppingCartSimple size={50} className="text-primary mb-2" />
              <h6>Your Cart is Empty</h6>
              <p className="text-secondary mb-2">Add some items :)</p>
              <Link
                className="btn btn-outline-primary"
                to="/apps/e-shop/product-details"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="head-container">
                <div key={item.id} className="head-box">
                  <span className="b-1-light bg-light-primary h-45 w-45 d-flex-center b-r-6">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="img-fluid h-45 w-45 img-contain"
                    />
                  </span>
                  <div className="flex-grow-1 ms-2">
                    <Link
                      to={item.productLink}
                      target="_blank"
                      rel="noreferrer"
                      className="fw-semibold text-dark text-decoration-none d-flex align-items-center gap-1"
                    >
                      {item.name}
                      <span className="d-flex align-items-center">
                        ( {item.rating}
                        <Star
                          size={12}
                          weight="fill"
                          className="text-warning f-s-12"
                        />
                        )
                      </span>
                    </Link>
                    <div className="text-muted small">
                      size: {item.size} &nbsp; | &nbsp; color: {item.color}
                    </div>
                  </div>
                  <div className="text-end">
                    <Trash
                      size={18}
                      className="text-danger cursor-pointer"
                      onClick={() => removeItem(item.id)}
                      weight="fill"
                    />
                    <div className="text-muted small">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </Offcanvas.Body>

        {cartItems.length > 0 && (
          <div className="offcanvas-footer border-top p-3">
            <div className="mb-3">
              <h6 className="text-muted fw-semibold mb-0">
                Total{" "}
                <span className="float-end text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </h6>
            </div>
            <div className="d-flex gap-2">
              <Link
                className="btn btn-primary w-100"
                to="/apps/e-shop/cart"
                target="_blank"
              >
                <Eye size={16} className="me-1" />
                View Cart
              </Link>
              <Link
                className="btn btn-success w-100"
                to="/apps/e-shop/checkout"
                target="_blank"
              >
                Checkout
                <ShoppingCart size={16} className="ms-1" />
              </Link>
            </div>
          </div>
        )}
      </Offcanvas>
    </>
  );
};

export default HeaderCart;
