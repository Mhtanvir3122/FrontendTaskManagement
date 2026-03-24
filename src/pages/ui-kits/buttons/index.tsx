import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import BasicOutlineLightBtn from "@/components/ui-kits/buttons/BasicOutlineLightBtn.tsx";
import BlockSizeRadiousButton from "@/components/ui-kits/buttons/BlockSizeRadiousButton.tsx";
import ButtonGroup from "@/components/ui-kits/buttons/ButtonGroup.tsx";
import SmartButton from "@/components/ui-kits/buttons/SmartButton.tsx";

const Buttons: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Button"
          title="Ui Kits"
          path={["Button"]}
          Icon={Briefcase}
        />
        <Row>
          <BasicOutlineLightBtn />
          <SmartButton />
          <BlockSizeRadiousButton />
          <ButtonGroup />
        </Row>
      </Container>
    </div>
  );
};

export default Buttons;
