import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import { IconDisc, IconHistory, IconStar } from "@tabler/icons-react";
import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

// ✅ Important for HTML highlighting

const VerticalTabsRightSide: React.FC = () => {
  const [openTab, setOpenTab] = useState(false);
  const [activeTab, setActiveTab] = useState("vl-features");

  const tabs = [
    {
      id: "vl-features",
      icon: <IconDisc size={24} className="pe-1 ps-1" />,
      title: "Features",
      content: (
        <p className="ms-3 f-s-15">
          The idea is to use <code>:target</code> pseudoclass to show tabs, use
          anchors with fragment identifiers to switch between them.
        </p>
      ),
    },
    {
      id: "vl-history",
      icon: <IconHistory size={24} className="pe-1 ps-1" />,
      title: "History",
      content: (
        <p className="ms-3 f-s-15">
          The idea is to use <code>:target</code> pseudoclass to show tabs, use
          anchors with fragment identifiers to switch between them.
        </p>
      ),
    },
    {
      id: "vl-reviews",
      icon: <IconStar size={24} className="pe-1 ps-1" />,
      title: "Reviews",
      content: (
        <p className="ms-3 f-s-15">
          The idea is to use <code>:target</code> pseudoclass to show tabs, use
          anchors with fragment identifiers to switch between them.
        </p>
      ),
    },
  ];

  useEffect(() => {
    if (openTab) {
      Prism.highlightAll();
    }
  }, [openTab]);

  return (
    <Col lg={6}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5>Vertical Tabs Right Side</h5>
          <a role="button" onClick={() => setOpenTab(!openTab)}>
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body className="vertical-right-tab">
          <Tab.Container activeKey={activeTab}>
            <div className="d-flex">
              <Tab.Content
                className="tab-content text-sm-end mt-3 flex-grow-1"
                id="vl-bgContent"
              >
                {tabs.map((tab) => (
                  <Tab.Pane
                    eventKey={tab.id}
                    key={tab.id}
                    id={`${tab.id}-tab-pane`}
                    aria-labelledby={`${tab.id}-tab`}
                    role="tabpanel"
                  >
                    {tab.content}
                  </Tab.Pane>
                ))}
              </Tab.Content>

              <Nav
                variant="tabs"
                className="app-tabs-secondary me-0 ms-3 flex-column"
                id="vl-bg"
                role="tablist"
              >
                {tabs.map((tab) => (
                  <Nav.Item role="presentation" key={tab.id}>
                    <Nav.Link
                      eventKey={tab.id}
                      id={`${tab.id}-tab`}
                      role="tab"
                      aria-controls={`${tab.id}-tab-pane`}
                      aria-selected={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.icon}
                      {tab.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </Tab.Container>
        </Card.Body>

        {/* Prism Preview - WORKING */}
        <Collapse in={openTab}>
          <div>
            <pre className="language-html mt-3 mb-0">
              <code className="language-html">{`<Tab.Container activeKey="vl-features">
  <div className="d-flex">
    <Tab.Content className="tab-content text-sm-end mt-3 flex-grow-1" id="vl-bgContent">
      <Tab.Pane
        eventKey="vl-features"
        id="vl-features-tab-pane"
        aria-labelledby="vl-features-tab"
        role="tabpanel"
      >
        <!-- Features content -->
      </Tab.Pane>
      <Tab.Pane
        eventKey="vl-history"
        id="vl-history-tab-pane"
        aria-labelledby="vl-history-tab"
        role="tabpanel"
      >
        <!-- History content -->
      </Tab.Pane>
      <Tab.Pane
        eventKey="vl-reviews"
        id="vl-reviews-tab-pane"
        aria-labelledby="vl-reviews-tab"
        role="tabpanel"
      >
        <!-- Reviews content -->
      </Tab.Pane>
    </Tab.Content>

    <Nav variant="tabs" className="app-tabs-secondary me-0 ms-3 flex-column" id="vl-bg" role="tablist">
      <Nav.Item role="presentation">
        <Nav.Link
          eventKey="vl-features"
          id="vl-features-tab"
          role="tab"
          aria-controls="vl-features-tab-pane"
          aria-selected={true}
        >
          Features
        </Nav.Link>
      </Nav.Item>
      <Nav.Item role="presentation">
        <Nav.Link
          eventKey="vl-history"
          id="vl-history-tab"
          role="tab"
          aria-controls="vl-history-tab-pane"
          aria-selected={false}
        >
          History
        </Nav.Link>
      </Nav.Item>
      <Nav.Item role="presentation">
        <Nav.Link
          eventKey="vl-reviews"
          id="vl-reviews-tab"
          role="tab"
          aria-controls="vl-reviews-tab-pane"
          aria-selected={false}
        >
          Reviews
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
</Tab.Container>`}</code>
            </pre>
          </div>
        </Collapse>
      </Card>
    </Col>
  );
};

export default VerticalTabsRightSide;
