import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import BasicBadges from "@/components/ui-kits/badges/BasicBadges.tsx";
import IconBadges from "@/components/ui-kits/badges/IconBadges.tsx";
import RadiusBadges from "@/components/ui-kits/badges/RadiusBadges.tsx";

const Badges: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Badges"
          title="Ui Kits"
          path={["Badges"]}
          Icon={Briefcase}
        />
        <Row>
          <BasicBadges />
          <IconBadges />
          <RadiusBadges />
        </Row>
      </Container>
    </div>
  );
};

export default Badges;
