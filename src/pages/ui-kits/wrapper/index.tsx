import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import ContentOverlayWrapper from "@/components/ui-kits/wrapper/ContentOverlayWrapper.tsx";
import CustomeWrapperPage from "@/components/ui-kits/wrapper/CustomeWrapperPage.tsx";

const Wrapper: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Wrapper"
          title="Ui Kits"
          path={["Wrapper"]}
          Icon={Briefcase}
        />
        <Row className="overlay-page">
          <CustomeWrapperPage />
          <ContentOverlayWrapper />
        </Row>
      </Container>
    </div>
  );
};

export default Wrapper;
