import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  AlignCenterHorizontal,
  AlignCenterVertical,
  Briefcase,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
} from "phosphor-react";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const items = [
  {
    className: "top-center",
    icon: <TextAlignCenter size={50} weight="light" />,
    label: "top-center",
  },
  {
    className: "center",
    icon: <TextAlignCenter size={50} weight="light" />,
    label: "center",
  },
  {
    className: "bottom-center",
    icon: <TextAlignCenter size={50} weight="light" />,
    label: "bottom-center",
  },
  {
    className: "left-center",
    icon: <TextAlignLeft size={50} weight="light" />,
    label: "left-center",
  },
  {
    className: "right-center",
    icon: <TextAlignRight size={50} weight="light" />,
    label: "right-center",
  },
  {
    className: "top-left",
    icon: <TextAlignLeft size={50} weight="light" />,
    label: "top-left",
  },
  {
    className: "top-right",
    icon: <TextAlignRight size={50} weight="light" />,
    label: "top-right",
  },
  {
    className: "bottom-left",
    icon: <TextAlignLeft size={50} weight="light" />,
    label: "bottom-left",
  },
  {
    className: "bottom-right",
    icon: <TextAlignRight size={50} weight="light" />,
    label: "bottom-right",
  },
  {
    className: "center-vertical",
    icon: <AlignCenterHorizontal size={50} weight="light" />,
    label: "center-horizontal",
  },
  {
    className: "center-vertical",
    icon: <AlignCenterVertical size={50} weight="light" />,
    label: "center-vertical",
  },
];

const imagePositions = [
  { className: "image-top-left", label: "image-top-left" },
  { className: "image-center", label: "image-center" },
  { className: "image-bottom-right", label: "image-bottom-right" },
  { className: "image-top-right", label: "image-top-right" },
  { className: "image-bottom-left", label: "image-bottom-left" },
];

const Alignment: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Alignment"
          title="Ui Kits"
          path={["Alignment"]}
          Icon={Briefcase}
        />
        <Col xs={12}>
          <Card>
            <Card.Header className="code-header">
              <h5>Text Alignment</h5>
            </Card.Header>

            <Card.Body>
              <Row className="center-thing-responsive">
                {items.map((item, index) => (
                  <Col key={index} xs={4} md={3} xxl={2}>
                    <div className="center-thing mt-3">
                      <div className={item.className}>{item.icon}</div>
                    </div>
                    <p className="f-s-16 text-center m-2">{item.label}</p>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Header className="code-header">
              <h5>Image alignment</h5>
            </Card.Header>

            <Card.Body>
              <Col xl={12}>
                <Row>
                  {imagePositions.map((position, index) => (
                    <Col key={index} xl={3} className="mb-3">
                      <div className="image-center-thing">
                        <div className={position.className}>
                          <Card.Img
                            src="/images/placeholder/05.png"
                            alt=""
                            className="rounded"
                          />
                        </div>
                      </div>
                      <p className="f-s-16 text-center m-2">{position.label}</p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default Alignment;
