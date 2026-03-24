import { useState } from "react";
import { Card, CardBody, Col, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IconStarFilled } from "@tabler/icons-react";

const ratingData = [
  { star: 5, count: 4567, percent: 74, color: "primary" },
  { star: 4, count: 2765, percent: 65, color: "secondary" },
  { star: 3, count: 1682, percent: 40, color: "success" },
  { star: 2, count: 2380, percent: 25, color: "warning" },
  { star: 1, count: 19211, percent: 10, color: "danger" },
];

const sizes = [6, 7, 25, 30, 40];
const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const ProductInfo = () => {
  const [selectedSizes, setSelectedSizes] = useState<number[]>([6]);
  const [selectedColor, setSelectedColor] = useState<string>("primary");

  const toggleSize = (size: number) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <Col xxl={6} className="order-xxl-2">
      <Card>
        <CardBody>
          <div className="product-details-contentbox">
            <h4>Trendy & Stylish Loafers For Men</h4>

            <div className="mt-2 d-flex align-items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <IconStarFilled key={i} size={20} className="text-warning" />
              ))}
              {[...Array(2)].map((_, i) => (
                <IconStarFilled key={i} size={20} className="text-muted" />
              ))}
              <h6 className="mb-0 ms-2 text-secondary">
                (<span className="fw-bold">4.50k</span> Review)
              </h6>
            </div>

            <div className="mt-4">
              <h3>
                $26.00 <span className="text-muted fs-6">(54% OFF)</span>
              </h3>
            </div>

            <hr className="my-4" />

            <div className="product-detailbox">
              <div className="mb-4">
                <h5>Size:</h5>
                <div className="form-selectgroup d-flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <label key={size} className="select-items">
                      <input
                        type="checkbox"
                        className="select-input"
                        checked={selectedSizes.includes(size)}
                        onChange={() => toggleSize(size)}
                      />
                      <span className="select-box">
                        <span className="selectitem">{size}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h5>Color:</h5>
                <div className="d-flex flex-wrap">
                  {colors.map((color) => (
                    <label key={color} className="check-box">
                      <input
                        type="radio"
                        name="color-radio"
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                      />
                      <span className={`radiomark check-${color} ms-2`} />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h5>Description:</h5>
              <p className="mt-2">
                A product description is a piece of writing that conveys the
                features and benefits of a product, ranging from basic facts to
                stories that make a product compelling to an ideal buyer.
              </p>
              <p>
                Aside from educating and enticing potential customers, the best
                descriptions can help you differentiate your product and brand
                from your competitors by putting forward your most salient
                features and benefits.
              </p>
            </div>

            <div className="mt-4">
              <div className="d-flex align-items-center">
                <IconStarFilled size={30} className="text-warning me-2" />
                <div>
                  <h5 className="mb-0">3.2 out of 5</h5>
                  <p className="mb-0 text-muted">Based on (20,435) ratings</p>
                </div>
              </div>

              <div className="mt-3">
                {ratingData.map((rating, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 mb-2"
                  >
                    <span className="fw-bold">{rating.star}</span>
                    <IconStarFilled size={12} className="text-warning" />
                    <ProgressBar
                      now={rating.percent}
                      variant={rating.color}
                      className="flex-grow-1 h-8px"
                    />
                    <span className="text-muted">
                      ({rating.count.toLocaleString()})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-details-btn text-end mt-4">
              <Link to="/apps/e-shop/cart" className="btn btn-primary me-2">
                Add To Cart
              </Link>
              <Link to="/apps/e-shop/checkout" className="btn btn-success me-2">
                Buy Now
              </Link>
              <Link to="/apps/e-shop/wishlist" className="btn btn-danger">
                Add to Wishlist
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductInfo;
