import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const TOTAL_LOADERS = 40;
const SpinnersPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Spinners"
          title="Advance Ui"
          path={["Spinners"]}
          Icon={BriefcaseMetal}
        />

        <Row>
          <Col xs="12">
            <Card>
              <Card.Body>
                <div className="loader-container">
                  {Array.from({ length: TOTAL_LOADERS }, (_, i) => (
                    <div className="loader-main" key={i}>
                      <div className="loader_box">
                        <div className={`loader_${i + 1}`}></div>
                      </div>
                    </div>
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

export default SpinnersPage;
