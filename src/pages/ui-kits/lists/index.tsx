import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import BasicLists from "@/components/ui-kits/lists/BasicLists.tsx";
import CustomLists from "@/components/ui-kits/lists/CustomLists.tsx";
import ListVariants from "@/components/ui-kits/lists/ListVariants.tsx";

const HelperClass: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="List"
          title="Ui Kits"
          path={["List"]}
          Icon={Briefcase}
        />

        <Row className="list-item">
          <BasicLists />
          <ListVariants />
          <CustomLists />
        </Row>
      </Container>
    </div>
  );
};

export default HelperClass;
