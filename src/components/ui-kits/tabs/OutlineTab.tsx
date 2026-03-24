import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

type TabItem = {
  id: string;
  title: string;
  content: string[];
};

const tabs: TabItem[] = [
  {
    id: "connect",
    title: "Connect",
    content: [
      "This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.",
    ],
  },
  {
    id: "discover",
    title: "Discover",
    content: [
      "This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.",
    ],
  },
  {
    id: "order",
    title: "Orders",
    content: [
      "This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.",
    ],
  },
];

const OutlineTabs: React.FC = () => {
  const [openTab, setOpenTab] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Col lg={6}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5>Outline Tabs</h5>
          <a role="button" onClick={() => setOpenTab(!openTab)}>
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body>
          <Tab.Container defaultActiveKey="connect">
            <Nav variant="tabs" className="tab-outline-primary">
              {tabs.map((tab) => (
                <Nav.Item key={tab.id}>
                  <Nav.Link
                    eventKey={tab.id}
                    id={`${tab.id}-tab`}
                    aria-controls={`${tab.id}-tab-pane`}
                  >
                    {tab.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content className="mt-3">
              {tabs.map((tab) => (
                <Tab.Pane
                  key={tab.id}
                  eventKey={tab.id}
                  id={`${tab.id}-tab-pane`}
                  aria-labelledby={`${tab.id}-tab`}
                >
                  {tab.content.map((paragraph, idx) => (
                    <p className="f-s-15" key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </Card.Body>

        <Collapse in={openTab}>
          <pre className="language-html mt-3 mb-0">
            <code className="language-html">{`<Tab.Container defaultActiveKey="connect">
  <Nav variant="tabs" className="tab-outline-primary">
    <Nav.Item>
      <Nav.Link eventKey="connect">Connect</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="discover">Discover</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="order">Orders</Nav.Link>
    </Nav.Item>
  </Nav>
  <Tab.Content className="mt-3">
    <Tab.Pane eventKey="connect">
      <p>This is the connect tab content...</p>
    </Tab.Pane>
    <Tab.Pane eventKey="discover">
      <p>This is the discover tab content...</p>
    </Tab.Pane>
    <Tab.Pane eventKey="order">
      <p>This is the orders tab content...</p>
    </Tab.Pane>
  </Tab.Content>
</Tab.Container>`}</code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default OutlineTabs;
