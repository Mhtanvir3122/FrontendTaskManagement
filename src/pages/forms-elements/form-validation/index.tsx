import React from "react";
import { Container, Row } from "react-bootstrap";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import CustomValidation from "@/components/forms-elements/form-validation/CustomValidation.tsx";
import DefaultsValidation from "@/components/forms-elements/form-validation/DefaultsValidation.tsx";
import SupportedValidation from "@/components/forms-elements/form-validation/SupportedValidation.tsx";
import TooltipsValidation from "@/components/forms-elements/form-validation/TooltipsValidation.tsx";

const Index: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Form Validation"
          title="Forms Elements"
          path={["Form validation"]}
          Icon={Cardholder}
        />

        <Row>
          <TooltipsValidation />
          <CustomValidation />
          <DefaultsValidation />
          <SupportedValidation />
        </Row>
      </Container>
    </div>
  );
};

export default Index;
