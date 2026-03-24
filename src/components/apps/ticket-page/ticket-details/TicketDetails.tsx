import { Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import TicketdetailsData from "@/components/apps/ticket-page/ticket-details/TicketdetailsData.tsx";
import Ticketfileupload from "@/components/apps/ticket-page/ticket-details/Ticketfileupload.tsx";
import Ticketinfo from "@/components/apps/ticket-page/ticket-details/Ticketinfo.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const TicketDetails = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Ticket Details"
          title="Apps"
          path={["Ticket Page", "Ticket Details"]}
          Icon={StackIcon}
        />
        <Row className="ticket-details">
          <Col md={5} lg={4} xxl={3}>
            <Ticketinfo />
            <Ticketfileupload />
          </Col>
          <Col md={7} lg={8} xxl={9}>
            <TicketdetailsData />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketDetails;
