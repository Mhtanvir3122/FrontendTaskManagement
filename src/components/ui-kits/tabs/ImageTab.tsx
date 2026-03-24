import React from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

import { AU, SA, UZ, VN } from "country-flag-icons/react/1x1";

const TabsWithAvatars: React.FC = () => {
  const avatarTabItems = [
    {
      id: "home",
      label: "Guthry",
      position: "Sales Manager",
      avatarSrc: "/images/avatar/5.png",
      content: (
        <p className="f-s-15">
          The idea is to use <code>:target </code>pseudoclass to show tabs, use
          anchors with fragment identifiers to switch between them. The idea is
          to use pseudoclass to show tabs, use anchors with fragment identifiers
          to switch between them.
        </p>
      ),
    },
    {
      id: "profile",
      label: "Olive Yew",
      position: "Account Manager",
      avatarSrc: "/images/avatar/1.png",
      content: (
        <ol>
          <li>Show only the last tab.</li>
          <li>
            If <code>:target</code> matches a tab, show it.
          </li>
          <li>Hide all following siblings.</li>
        </ol>
      ),
    },
    {
      id: "contact",
      label: "Lily",
      position: "Manager",
      avatarSrc: "/images/avatar/14.png",
      content: (
        <p className="f-s-15">
          The idea is to use <code>:target </code>pseudoclass to show tabs, use
          anchors with fragment identifiers to switch between them. The idea is
          to use pseudoclass to show tabs, use anchors with fragment identifiers
          to switch between them.
        </p>
      ),
    },
  ];

  interface FlagTabItem {
    id: string;
    label: string;
    icon: React.ReactNode;
  }

  const flagTabItems: FlagTabItem[] = [
    { id: "usa", label: "USA", icon: <VN className="w-25" /> },
    { id: "gbr", label: "GBR", icon: <AU className="w-25" /> },
    { id: "deu", label: "DEU", icon: <SA className="w-25" /> },
    { id: "lbr", label: "LBR", icon: <UZ className="w-25" /> },
  ];

  return (
    <Row>
      {/* Avatar Tabs */}
      <Col lg={6}>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h5>Avatar-based Tabs</h5>
          </Card.Header>
          <Card.Body>
            <Tab.Container defaultActiveKey="home">
              <Nav variant="tabs" className="tab-light-secondary">
                {avatarTabItems.map(({ id, label, position, avatarSrc }) => (
                  <Nav.Item key={id}>
                    <Nav.Link
                      eventKey={id}
                      className="d-flex gap-2 align-items-center"
                    >
                      <span className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                        <img src={avatarSrc} alt="" className="img-fluid" />
                      </span>
                      <div className="text-start">
                        <div className="fw-semibold">{label}</div>
                        <div className="small text-muted">{position}</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content className="pt-3">
                {avatarTabItems.map(({ id, content }) => (
                  <Tab.Pane key={id} eventKey={id}>
                    {content}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Col>

      {/* Flag Tabs */}
      <Col lg={6}>
        <Card>
          <Card.Header>
            <h5>Flag-based Tabs</h5>
          </Card.Header>
          <Card.Body>
            <Tab.Container defaultActiveKey="usa">
              <Nav variant="tabs" className="tab-light-secondary">
                {flagTabItems.map(({ id, label, icon }) => (
                  <Nav.Item key={id}>
                    <Nav.Link
                      eventKey={id}
                      className="d-flex align-items-center gap-2"
                    >
                      {icon}
                      {label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content className="pt-3">
                {flagTabItems.map(({ id }) => (
                  <Tab.Pane key={id} eventKey={id}>
                    <p className="f-s-15">
                      The idea is to use <code>:target </code>pseudoclass to
                      show tabs, use anchors with fragment identifiers to switch
                      between them. The idea is to use pseudoclass to show tabs,
                      use anchors with fragment identifiers to switch between
                      them.
                    </p>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TabsWithAvatars;
