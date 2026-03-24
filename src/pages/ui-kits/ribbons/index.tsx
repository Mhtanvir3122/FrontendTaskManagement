import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Briefcase, Gift } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ribbonData = [
  {
    bgColor: "bg-primary-500",
    ribbonClass: "ribbon-left ribbon-primary",
    text: "Ribbon",
  },
  {
    bgColor: "bg-light-500",
    ribbonClass: "cross-shadow-ribbon cross-left ribbon-light",
    text: "Cross",
  },
  {
    bgColor: "bg-success-500",
    ribbonClass: "ribbon-shape shape-left ribbon-success",
    text: "Shape",
  },
  {
    bgColor: "bg-danger-500",
    ribbonClass: "arrow-ribbon arrow-left ribbon-danger",
    text: "Arrow",
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "ribbon-side side-left ribbon-info",
    text: "Side",
  },
  {
    bgColor: "bg-light-500",
    ribbonClass: "ribbon-top top-left ribbon-light p-0",
    text: <Gift size={18} weight="fill" />,
  },
  {
    bgColor: "bg-dark-500",
    ribbonClass: "circle-ribbon p-2 circle-left ribbon-dark",
    text: "50%",
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "ribbon file-left ribbon-info",
    text: "25%",
  },
  {
    bgColor: "bg-primary-500",
    ribbonClass: "box-ribbon box-left",
    text: <div className="ribbonbox ribbon-primary">Box</div>,
  },
];

const ribbonDataPosition = [
  {
    bgColor: "bg-primary-300",
    ribbonClass: "ribbon-right ribbon-primary",
    text: "Ribbon",
  },
  {
    bgColor: "bg-secondary-500",
    ribbonClass: "ribbon-left-bottom ribbon-secondary",
    text: "Ribbon",
  },
  {
    bgColor: "bg-success-500",
    ribbonClass: "ribbon-right-bottom ribbon-success",
    text: "Ribbon",
  },
  {
    bgColor: "bg-danger-500",
    ribbonClass: "ribbon-shape shape-right ribbon-danger",
    text: "Shape",
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "ribbon-shape shape-left-bottom ribbon-info",
    text: "Shape",
  },
  {
    bgColor: "bg-light-500",
    ribbonClass: "ribbon-shape shape-right-bottom ribbon-light",
    text: "Shape",
  },
  {
    bgColor: "bg-dark-500",
    ribbonClass: "arrow-ribbon arrow-right ribbon-dark",
    text: "Arrow",
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "arrow-ribbon arrow-left-bottom ribbon-info",
    text: "Arrow",
  },
  {
    bgColor: "bg-primary-500",
    ribbonClass: "arrow-ribbon arrow-right-bottom ribbon-primary",
    text: "Arrow",
  },
  {
    bgColor: "bg-secondary-500",
    ribbonClass: "ribbon-top p-0 top-right ribbon-secondary",
    text: <Gift size={18} weight="fill" />,
  },
  {
    bgColor: "bg-success-500",
    ribbonClass: "ribbon-top p-0 top-left-bottom ribbon-success",
    text: <Gift size={18} weight="fill" />,
  },
  {
    bgColor: "bg-danger-500",
    ribbonClass: "ribbon-top p-0 top-right-bottom ribbon-danger",
    text: <Gift size={18} weight="fill" />,
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "circle-ribbon p-2 circle-right ribbon-info",
    text: "50%",
  },
  {
    bgColor: "bg-light-500",
    ribbonClass: "circle-ribbon p-2 circle-left-bottom ribbon-light",
    text: "50%",
  },
  {
    bgColor: "bg-dark-500",
    ribbonClass: "circle-ribbon p-2 circle-right-bottom ribbon-dark",
    text: "50%",
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "file-right ribbon-info",
    text: "25%",
  },
  {
    bgColor: "bg-primary-500",
    ribbonClass: "file-left-bottom ribbon-primary",
    text: "25%",
  },
  {
    bgColor: "bg-secondary-500",
    ribbonClass: "file-right-bottom ribbon-secondary",
    text: "25%",
  },
  {
    bgColor: "bg-danger-500",
    ribbonClass: "box-ribbon box-left-bottom",
    text: <div className="ribbonbox ribbon-danger">Box</div>,
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "box-ribbon box-right-bottom",
    text: <div className="ribbonbox ribbon-info">Box</div>,
  },
  {
    bgColor: "bg-primary-500",
    ribbonClass: "box-ribbon box-left",
    text: <div className="ribbonbox ribbon-primary">Box</div>,
  },
  {
    bgColor: "bg-light-500",
    ribbonClass: "ribbon-side side-right ribbon-light",
    text: "Side",
  },
  {
    bgColor: "bg-dark-500",
    ribbonClass: "ribbon-side side-left-bottom ribbon-dark",
    text: "Side",
  },
  {
    bgColor: "bg-info-500",
    ribbonClass: "ribbon-side side-right-bottom ribbon-info",
    text: "Side",
  },
  {
    bgColor: "bg-primary-500",
    ribbonClass: "cross-shadow-ribbon cross-right ribbon-primary",
    text: "Cross",
  },
  {
    bgColor: "bg-secondary-500",
    ribbonClass: "cross-shadow-ribbon cross-left-bottom ribbon-secondary",
    text: "Cross",
  },
  {
    bgColor: "bg-success-500",
    ribbonClass: "cross-shadow-ribbon cross-right-bottom ribbon-success",
    text: "Cross",
  },
];

const RibbonPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Ribbons"
          title="Ui Kits"
          path={["Ribbons"]}
          Icon={Briefcase}
        />

        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Basic Ribbon</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {ribbonData.map((ribbon, index) => (
                    <Col key={index} xl={2} lg={3} md={4} className="mb-3">
                      <div
                        className={`h-150 ${ribbon.bgColor} ${ribbon.ribbonClass.includes("file-left") ? "ribbon-file" : "ribbon-box"}`}
                      >
                        <div className={`ribbon ${ribbon.ribbonClass}`}>
                          {ribbon.text}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Ribbon With Position</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {ribbonDataPosition.map((ribbon, index) => (
                    <Col key={index} xl={2} lg={3} md={4} className="mb-3">
                      <div
                        className={`h-150 ${ribbon.bgColor} ${ribbon.ribbonClass.includes("file-") ? "ribbon-file" : "ribbon-box"}`}
                      >
                        <div className={`ribbon ${ribbon.ribbonClass}`}>
                          {ribbon.text}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RibbonPage;
