import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import BasicCards from "@/components/ui-kits/cards/BasicCards.tsx";
import CardStyle from "@/components/ui-kits/cards/CardStyle.tsx";
import CardTab from "@/components/ui-kits/cards/CardTab.tsx";
import CardVarient from "@/components/ui-kits/cards/CardVarient.tsx";

const Cards: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Breadcrumbs
            mainTitle="Cards"
            title="Ui kits "
            path={["Cards"]}
            Icon={Briefcase}
          />
        </Row>
        <Row>
          <BasicCards />
          <CardVarient />
          <CardStyle />
          <CardTab />
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
