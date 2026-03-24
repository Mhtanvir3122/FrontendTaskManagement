import React from "react";
import { Button, Card, Col, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const productReviews = [
  {
    name: "Elyssa Moen",
    initials: "EM",
    review:
      "I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.",
    avatar: null,
  },
  {
    name: "Mark",
    avatar: "/images/avatar/16.png",
    review: '"This Top is not only stylish but also incredibly warm."',
    images: ["/images/ecommerce/01.jpg", "/images/ecommerce/02.jpg"],
  },
];

const productList = [
  {
    title: "Sports shoes",
    sku: "#AB9875",
    price: "$450",
    image: "/images/dashboard/ecommerce-dashboard/product/product-01.jpg",
  },
  {
    title: "Smartwatch",
    sku: "#AB8394",
    price: "$920",
    image: "/images/dashboard/ecommerce-dashboard/product/product-02.jpg",
  },
  {
    title: "T-shirt",
    sku: "#AB3804",
    price: "$100",
    image: "/images/dashboard/ecommerce-dashboard/product/product-06.jpg",
  },
  {
    title: "Airpods",
    sku: "#AB2903",
    price: "$10,900",
    image: "/images/dashboard/ecommerce-dashboard/product/product-05.jpg",
  },
];

const ProductDetailsCard: React.FC = () => {
  return (
    <Col md={6} xxl={3} className="order-md-1 order-xxl-3">
      <Card>
        <Card.Body>
          <div className="product-details-contentbox">
            <div>
              <h5>Returns:</h5>
              <p className="text-muted">
                Returns is a scheme provided by respective sellers directly
                under this policy in terms of which the option of exchange,
                replacement and/or refund is offered by the respective sellers
                to you.
              </p>
            </div>

            <div className="mt-4">
              <div className="product-review">
                {productReviews.map((review, idx) => (
                  <div key={idx}>
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      {review.avatar ? (
                        <div className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-secondary position-absolute">
                          <Image src={review.avatar} alt="avatar" fluid />
                        </div>
                      ) : (
                        <span className="bg-danger h-35 w-35 d-flex-center b-r-50 position-absolute text-white text-center">
                          {review.initials}
                        </span>
                      )}
                      <span className="fs-6 fw-medium text-secondary ms-5">
                        {review.name}
                      </span>
                      <div>
                        <i className="ti ti-star fs-5"></i>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-muted mb-0">{review.review}</p>
                      {review.images && (
                        <div className="me-2 mt-3 text-end">
                          {review.images.map((img, i) => (
                            <Link
                              key={i}
                              to="/apps/e-shop/product"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={img}
                                alt=""
                                className="w-40 b-r-5 me-1"
                              />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    {idx !== productReviews.length - 1 && (
                      <div className="app-divider-v dotted py-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h5>Products:</h5>
              <div className="product-details-table mt-3">
                <Table
                  responsive
                  className="table-bottom-border align-middle products-data-table"
                >
                  <tbody>
                    {productList.map((product, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="position-relative">
                            <Image
                              src={product.image}
                              alt={product.title}
                              className="w-45 h-45 position-absolute rounded"
                            />
                            <div className="mg-s-40">
                              <h6 className="text-dark f-w-600 txt-ellipsis-1">
                                {product.title}
                              </h6>
                              <p className="text-secondary mb-0">
                                {product.sku}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <h6 className="text-success">{product.price}</h6>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button
                  variant="primary"
                  className="w-100"
                  href="/apps/e-shop/product"
                  target="_blank"
                >
                  View All Products
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductDetailsCard;
