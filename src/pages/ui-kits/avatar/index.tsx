import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import ColorAvatar from "@/components/ui-kits/avatar/ColorAvatar.tsx";
import ImagesAvatar from "@/components/ui-kits/avatar/ImagesAvatar.tsx";
import LightAvatar from "@/components/ui-kits/avatar/LightAvatar.tsx";
import OutlineAvatar from "@/components/ui-kits/avatar/OutlineAvatar.tsx";
import RadiusAvatar from "@/components/ui-kits/avatar/RadiusAvatar.tsx";
import TooltipAvatar from "@/components/ui-kits/avatar/TooltipAvatar.tsx";

const AvatarPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Avatar"
          title="Ui Kits"
          path={["Avtar"]}
          Icon={Briefcase}
        />
        <Row className=" accordions-rtl">
          <ColorAvatar />
          <LightAvatar />
          <RadiusAvatar />
          <OutlineAvatar />
          <ImagesAvatar />
          <TooltipAvatar />
        </Row>
      </Container>
    </div>
  );
};

export default AvatarPage;
