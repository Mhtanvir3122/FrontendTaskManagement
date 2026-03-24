import React, { useState } from "react";
import {
  Card,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "react-bootstrap";

import {
  ClockCounterClockwise,
  Disc,
  FloppyDisk,
  Keyboard,
  Star,
  UserCircle,
} from "phosphor-react";

type TabData = {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

const firstTabData: TabData[] = [
  {
    id: "description",
    label: "Description",
    icon: <UserCircle size={16} className="me-1" />,
    content: (
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use
        anchors with fragment identifiers to switch between them.
      </p>
    ),
  },
  {
    id: "howitworks",
    label: "How It Works",
    icon: <Keyboard size={16} className="me-1" />,
    content: (
      <ol>
        <li>Show only the last tab.</li>
        <li>
          If <code>:target</code> matches a tab, show it and hide all following
          siblings.
        </li>
        <li>Matches a tab, show it and hide all following siblings.</li>
      </ol>
    ),
  },
  {
    id: "drawbacks",
    label: "Drawbacks",
    icon: <FloppyDisk size={16} className="me-1" />,
    content: (
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use
        anchors with fragment identifiers to switch between them.
      </p>
    ),
  },
];

const secondTabData: TabData[] = [
  {
    id: "features",
    label: "Features",
    icon: <Disc size={16} className="me-1" />,
    content: (
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use
        anchors with fragment identifiers to switch between them.
      </p>
    ),
  },
  {
    id: "history",
    label: "History",
    icon: <ClockCounterClockwise size={16} className="me-1" />,
    content: (
      <ol>
        <li>Show only the last tab.</li>
        <li>
          If <code>:target</code> matches a tab, show it and hide all following
          siblings.
        </li>
        <li>Matches a tab, show it and hide all following siblings.</li>
      </ol>
    ),
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: <Star size={16} className="me-1" />,
    content: (
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use
        anchors with fragment identifiers to switch between them.
      </p>
    ),
  },
];

const RenderBootstrapTabs = ({
  data,
  tabId,
}: {
  data: TabData[];
  tabId: string;
}) => {
  const [activeTab, setActiveTab] = useState(data[0].id);

  return (
    <Card className="hover-effect equal-card tab-card">
      <Card.Body>
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={(selectedKey) => setActiveTab(selectedKey || "")}
          className={
            tabId === "bgContent"
              ? "tab-primary bg-primary p-1"
              : "tab-light-primary"
          }
        >
          {data.map(({ id, label, icon }) => (
            <NavItem key={id}>
              <NavLink eventKey={id} role="tab">
                {icon}
                {label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent className="pt-3">
          {data.map(({ id, content }) => (
            <TabPane key={id} active={activeTab === id}>
              {content}
            </TabPane>
          ))}
        </TabContent>
      </Card.Body>
    </Card>
  );
};

const CardTab: React.FC = () => {
  return (
    <>
      <Col xl="6">
        <RenderBootstrapTabs data={firstTabData} tabId="LightContent" />
      </Col>

      <Col xl="6">
        <Card className="mb-3 hover-effect">
          <Row>
            <Col md="6" xl="8">
              <Card.Body>
                <Card.Title as="h5">Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text with supporting
                  little bit longer below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-body-secondary">
                    Last updated 3 min&#39;s ago
                  </small>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md="6" xl="4">
              <img
                src="/images/blog-app/09.jpg"
                width="100%"
                height="100%"
                className="object-cover"
                alt="..."
              />
            </Col>
          </Row>
        </Card>
      </Col>

      <Col xl="6">
        <RenderBootstrapTabs data={secondTabData} tabId="bgContent" />
      </Col>
    </>
  );
};

export default CardTab;
