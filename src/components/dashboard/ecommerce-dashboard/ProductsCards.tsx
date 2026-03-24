import React, { useEffect } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

import {
  productImages,
  tagOptions,
} from "@/data/dashboard/ecommerce/ProductsCardsData.ts";
import "glightbox/dist/css/glightbox.min.css";

import AiCommerceCard from "@/components/widget/AiCommerceCard.tsx";
import TotalRevenueCard from "@/components/widget/TotalRevenueCard.tsx";

const ProductsCards: React.FC = () => {
  useEffect(() => {
    let lightbox: { destroy: () => void } | null = null;

    import("glightbox").then((mod) => {
      lightbox = mod.default({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
      });
    });

    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  return (
    <>
      <Col sm={6} md={4} xxl={2} className="order-3-md">
        <AiCommerceCard />
      </Col>

      {/* Revenue Chart Card */}
      <Col md={6} lg={4}>
        <TotalRevenueCard />
      </Col>

      {/* Product Gallery Card */}
      <Col md={8} xxl={6}>
        <Card className="ecommerce-product-box">
          <Card.Body>
            <Row>
              {/* Product Images */}
              <Col sm={5}>
                <Row className="g-2 h-100">
                  {productImages.map((image) => (
                    <Col
                      key={image.id}
                      xs={image.id === 1 || image.id === 2 ? 6 : 3}
                      className={image.id === 2 ? "position-relative" : ""}
                    >
                      {image.ribbon && (
                        <div className="box-ribbon box-right">
                          <div className="ribbonbox ribbon-danger">
                            {image.ribbon}
                          </div>
                        </div>
                      )}
                      <a
                        href={image.src}
                        className="glightbox brand-img-box"
                        data-glightbox={`type: image;${
                          image.id === 1 ? " zoomable: true;" : ""
                        }`}
                      >
                        <img
                          src={image.src}
                          className={`w-100 ${image.rounded ? "rounded" : ""}`}
                          alt={image.alt}
                        />
                      </a>
                    </Col>
                  ))}
                </Row>
              </Col>

              {/* Product Details */}
              <Col sm={7}>
                <div className="my-3">
                  <h3 className="text-dark-800 f-w-700 txt-ellipsis-1">
                    $58,902.90{" "}
                    <span className="f-s-16 f-w-500 text-secondary">
                      Last week
                    </span>
                  </h3>
                  <div className="custom-progress-container">
                    <div className="progress-bar"></div>
                    <div className="progress-bar"></div>
                    <div className="progress-bar"></div>
                    <div className="progress-bar"></div>
                  </div>
                </div>

                <h6>Choose tags</h6>
                <div className="form-selectgroup products-tags-list my-3">
                  {tagOptions.map((tag, index) => (
                    <Form.Label key={index} className="select-items">
                      <Form.Check.Input
                        type="checkbox"
                        className="select-input"
                        defaultChecked={tag.checked}
                      />
                      <span className="select-box">
                        <span className="selectitem">○ {tag.label}</span>
                      </span>
                    </Form.Label>
                  ))}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductsCards;
