import { Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import TimeLine1 from "@/components/apps/timeline/TimeLine1.tsx";
import TimeLine2 from "@/components/apps/timeline/TimeLine2.tsx";
import TimeLine3 from "@/components/apps/timeline/TimeLine3.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const TimelinePage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Timeline"
          title="Apps"
          path={["Timeline"]}
          Icon={StackIcon}
        />
        <Row className="row">
          <Col lg={6}>
            <TimeLine1 />
          </Col>

          <Col lg={6}>
            <TimeLine2 />
          </Col>

          <Col xs={12}>
            <TimeLine3 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TimelinePage;
