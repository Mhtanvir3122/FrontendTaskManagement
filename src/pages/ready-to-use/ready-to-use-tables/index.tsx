import React from "react";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import { Container, Row } from "react-bootstrap";
import { HandHeart } from "@phosphor-icons/react";
import PatientsTable from "@/components/ready-to-use/ready-to-use-tables/PatientsTable.tsx";
import PaymentTable from "@/components/ready-to-use/ready-to-use-tables/PaymentTable.tsx";
import JobTable from "@/components/ready-to-use/ready-to-use-tables/JobTable.tsx";
import TicketTable from "@/components/ready-to-use/ready-to-use-tables/TicketTable.tsx";
import StudentsTable from "@/components/ready-to-use/ready-to-use-tables/StudentsTable.tsx";

const Index: React.FC = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Ready To Use Tables"
        title="Ready to use"
        path={["Ready to use tables"]}
        Icon={HandHeart}
      />
     <Row>
       <PatientsTable />
       <StudentsTable />
       <PaymentTable />
       <JobTable />
       <TicketTable />
     </Row>
    </Container>
);
};

export default Index;
