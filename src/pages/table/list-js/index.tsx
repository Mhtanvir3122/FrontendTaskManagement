import React from "react";
import { Container, Row } from "react-bootstrap";

import { Table2Columns } from "iconoir-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import EmployeeTable from "@/components/table/list-js/EmployeeTable.tsx";
import ListTable from "@/components/table/list-js/ListTable.tsx";
import TablesLists from "@/components/table/list-js/TablesLists.tsx";

const Index: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="List Js"
          title="Table"
          path={["List Js"]}
          Icon={Table2Columns}
        />
        <Row>
          <EmployeeTable />
          <ListTable />
          <TablesLists />
        </Row>
      </Container>
    </div>
  );
};

export default Index;
