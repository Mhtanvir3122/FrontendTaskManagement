import React from "react";
import { Container, Row } from "react-bootstrap";

import { Table2Columns } from "iconoir-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import DataTable from "@/components/table/data-table/DataTable.tsx";
import RowBorderTable from "@/components/table/data-table/RowBorderTable.tsx";
import ButtonsDatatable from "@/components/table/data-table/ButtonsDatatable.tsx";
import CallbackDatatable from "@/components/table/data-table/CallbackDatatable.tsx";

const Index: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Data Table"
          title="Table"
          path={["Data table"]}
          Icon={Table2Columns}
        />

        <Row>
          <DataTable />
          <RowBorderTable />
          <ButtonsDatatable />
          <CallbackDatatable />
        </Row>
      </Container>
    </div>
  );
};

export default Index;
