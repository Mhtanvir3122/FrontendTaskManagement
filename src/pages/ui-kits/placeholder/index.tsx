import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";

import { Briefcase } from "phosphor-react";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const cards1 = [
  {
    id: 1,
    img: "/images/placeholder/placeholder-3.jpg",
    title: "Card title",
    text: "Some quick example text to build on the card title and make up content.",
    placeholder: true,
  },
  {
    id: 2,
    img: "/images/placeholder/placholder-1.jpg",
    title: "Card title",
    text: "Some quick example text to build on the card title the card's content.",
  },
  { id: 3, img: "/images/placeholder/placholder-2.jpg", skeleton: true },
  {
    id: 4,
    img: "/images/placeholder/placeholder-4.jpg",
    skeleton: true,
    colored: true,
  },
];

const placeholderVariants = [
  "",
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-light",
  "bg-dark",
];

const placeholderSizes = [
  "placeholder-lg",
  "",
  "placeholder-sm",
  "placeholder-xs",
];

const PlaceholderPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Placeholder"
          title="Ui Kits"
          path={["Placeholder"]}
          Icon={Briefcase}
        />

        <Row className="list-item">
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Card Placeholder</h5>
              </Card.Header>
              <Card.Body>
                <div className="card-placeholder">
                  <Row>
                    {cards1.map(
                      ({
                        id,
                        img,
                        title,
                        text,
                        placeholder,
                        skeleton,
                        colored,
                      }) => (
                        <Col key={id} sm={6} xxl={3}>
                          <Card
                            className="equal-card -light"
                            aria-hidden={skeleton}
                          >
                            <div
                              className={placeholder ? "placeholder-glow" : ""}
                            >
                              <img
                                src={img}
                                className={`card-img-top ${placeholder ? "placeholder" : ""}`}
                                alt="..."
                              />
                            </div>
                            <Card.Body>
                              {skeleton ? (
                                <>
                                  <Placeholder className="placeholder-glow w-50" />
                                  <p className="placeholder-glow">
                                    {[7, 4, 4, 6, 8].map((col, i) => (
                                      <Placeholder
                                        key={i}
                                        tag="span"
                                        className={`placeholder col-${col} ${colored ? "bg-secondary" : ""}`}
                                      />
                                    ))}
                                  </p>
                                  <div className="d-flex gap-2">
                                    <Button
                                      disabled
                                      className="w-50 bg-secondary b-secondary "
                                    >
                                      <Placeholder className="w-100" />
                                    </Button>
                                    <Button
                                      disabled
                                      className={`w-50 ${colored ? "bg-primary b-primary" : "invisible"}`}
                                    >
                                      <Placeholder className="w-100" />
                                    </Button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <h5 className="card-title">{title}</h5>
                                  <p className="card-text">{text}</p>
                                  <Button variant="primary">
                                    Go somewhere
                                  </Button>
                                </>
                              )}
                            </Card.Body>
                          </Card>
                        </Col>
                      )
                    )}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6}>
            <Card>
              <Card.Header>
                <h5>Width</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-column gap-3">
                  <Placeholder className="col-6" />
                  <Placeholder className="w-75" />
                  <Placeholder className="w-25" />
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <h5>Animation</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-column gap-4">
                  <p className="placeholder-glow">
                    <Placeholder className="col-12" />
                  </p>
                  <p className="placeholder-wave">
                    <Placeholder className="col-12" />
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6}>
            <Card className="equal-card">
              <Card.Header>
                <h5>Color Variant</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-column">
                  {placeholderVariants.map((variant, index) => (
                    <p key={index} className="placeholder-glow">
                      <Placeholder className={`col-12 ${variant}`} />
                    </p>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card className="equal-card">
              <Card.Header>
                <h5>Sizing</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-column gap-3">
                  {placeholderSizes.map((size, index) => (
                    <Placeholder key={index} className={`col-12 ${size}`} />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceholderPage;
