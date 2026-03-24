import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";
import "toastify-js/src/toastify.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import DefaultTost from "@/components/ui-kits/notifications/DefaultTost.tsx";
import NotificationVariants from "@/components/ui-kits/notifications/NotificationVariants.tsx";

const NotificationPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Notification"
          title="Ui Kits"
          path={[" Notification"]}
          Icon={Briefcase}
        />

        <Row>
          <DefaultTost />
          <NotificationVariants />
        </Row>
      </Container>
    </div>
  );
};

export default NotificationPage;
