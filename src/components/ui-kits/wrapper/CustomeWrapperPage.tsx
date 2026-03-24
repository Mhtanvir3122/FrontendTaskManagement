import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import { IconLink, IconSearch } from "@tabler/icons-react";

const overlayItems = [
  {
    title: "Custome Overlay",
    subtitle: "overlay design",
    image: "/images/wrapper/custome-overlay.jpg",
  },
];

const overlayCards = [
  {
    title: "Custome Overlay",
    description:
      "CSS gradients allow us to display smooth transitions between two or more colors.",
    image: "/images/wrapper/custome-overlay-1.jpg",
    link: "#",
  },
];
const overlayDesign = [
  {
    title: "Custome Overlay",
    subtitle: "Overlay Design",
    image: "/images/wrapper/custome-overlay-2.jpg",
  },
];
const overlayStyle = [
  {
    title: "Custome Overlay",
    subtitle: "Overlay Design",
    image: "/images/wrapper/custome-overlay-3.jpg",
  },
];

const CustomeWrapperPage: React.FC = () => {
  return (
    <div>
      <div className="overlay-page">
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h5>Custome Overlay</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                {overlayItems.map((item, index) => (
                  <Col xs={6} sm={6} lg={3} key={index}>
                    <div className="custome-wrapper position-relative">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="img-fluid rounded"
                      />
                      <div className="custome-wrapper-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
                        <h5>{item.title}</h5>
                        <span>{item.subtitle}</span>
                      </div>
                      <ul className="icon">
                        <li>
                          <a
                            className="text-outline-light h-35 w-35 d-flex align-items-center justify-content-center rounded-circle border"
                            href="#"
                          >
                            <IconSearch size={18} />
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-outline-light h-35 w-35 d-flex align-items-center justify-content-center rounded-circle border"
                            href="#"
                          >
                            <IconLink size={18} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                ))}

                {overlayCards.map((card, index) => (
                  <Col xs={6} sm={6} lg={3} key={index}>
                    <div className="custome-wrapper-2 position-relative overflow-hidden rounded">
                      <img
                        alt={card.title}
                        src={card.image}
                        className="img-fluid"
                      />
                      <div className="custome-wrapper-2-content">
                        <h5>{card.title}</h5>
                        <p className="mb-3">{card.description}</p>
                        <Button
                          size="sm"
                          color="success"
                          href={card.link}
                          className="rounded"
                        >
                          Check Now
                        </Button>
                      </div>
                    </div>
                  </Col>
                ))}

                {overlayDesign.map((item, index) => (
                  <Col xs={6} sm={6} lg={3} key={index}>
                    <div className="custome-wrapper-3 position-relative overflow-hidden rounded">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="img-fluid"
                      />
                      <div className="custome-wrapper-content-3">
                        <h5 className="mb-1">{item.title}</h5>
                        <span>{item.subtitle}</span>
                      </div>
                    </div>
                  </Col>
                ))}

                {overlayStyle.map((item, index) => (
                  <Col xs={6} sm={6} lg={3} key={index}>
                    <div className="custome-wrapper-4 position-relative overflow-hidden rounded">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="img-fluid"
                      />
                      <div className="custome-wrapper-content-4">
                        <h5 className="mb-1">{item.title}</h5>
                        <span>{item.subtitle}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default CustomeWrapperPage;
