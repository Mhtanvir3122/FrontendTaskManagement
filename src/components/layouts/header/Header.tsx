import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import HeaderLeftSide from "@/components/layouts/header/HeaderLeftSide.tsx";
import HeaderRightSide from "@/components/layouts/header/HeaderRightSide.tsx";
import { SidebarProps } from "@/components/layouts/sidebar/Sidebar.tsx";

const Header: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="header-main">
      <Container fluid>
        <Row>
          <Col
            xs="8"
            sm="6"
            className="d-flex align-items-center header-left p-0"
          >
            <HeaderLeftSide
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </Col>
          <Col
            xs="4"
            sm="6"
            className="d-flex align-items-center justify-content-end header-right p-0"
          >
            <HeaderRightSide />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
