import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import BasicDropdown from "@/components/ui-kits/dropdown/BasicDropdown.tsx";
import ColorDropdown from "@/components/ui-kits/dropdown/ColorDropdown.tsx";
import DropUpDropdown from "@/components/ui-kits/dropdown/DropUpDropdown.tsx";
import LightDropdown from "@/components/ui-kits/dropdown/LightDropdown.tsx";
import DropdownOutlineVariants from "@/components/ui-kits/dropdown/OutlineDropdown.tsx";
import SolidDropdown from "@/components/ui-kits/dropdown/SolidDropdown.tsx";

const DropdownPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Dropdown"
          title="Ui Kits"
          path={["Dropdown"]}
          Icon={Briefcase}
        />
        <Row>
          <BasicDropdown />
          <SolidDropdown />
          <DropdownOutlineVariants />
          <LightDropdown />
          <DropUpDropdown />
          <ColorDropdown />
        </Row>
      </Container>
    </div>
  );
};

export default DropdownPage;
