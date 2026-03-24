import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import { ClockCounterClockwise, Code, Disc, Star } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const VerticalTabsLeft: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("v-features");
  const [openTab, setOpenTab] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);

  const handleToggle = (tabId: string) => {
    if (activeTab !== tabId) setActiveTab(tabId);
  };

  const tabs = [
    {
      id: "v-features",
      icon: <Disc size={24} className="pe-1 ps-1" />,
      title: "features",
      content: (
        <p className="ms-3 f-s-15">
          The idea is to use <code>:target</code> pseudoclass to show tabs, use
          anchors with fragment identifiers to switch between them. The idea is
          to use pseudoclass to show tabs, use anchors with fragment identifiers
          to switch between them.
        </p>
      ),
    },
    {
      id: "v-history",
      icon: <ClockCounterClockwise size={24} className="pe-1 ps-1" />,
      title: "History",
      content: (
        <ol>
          <li>Show only the last tab.</li>
          <li>
            If <code>:target</code> matches a tab, show it and hide all
            following siblings.
          </li>
          <li>Matches a tab, show it and hide all following siblings.</li>
        </ol>
      ),
    },
    {
      id: "v-reviews",
      icon: <Star size={24} className="pe-1 ps-1" />,
      title: "reviews",
      content: (
        <p className="ms-3 f-s-15">
          The idea is to use <code>:target</code> pseudoclass to show tabs, use
          anchors with fragment identifiers to switch between them. The idea is
          to use pseudoclass to show tabs, use anchors with fragment identifiers
          to switch between them.
        </p>
      ),
    },
  ];

  return (
    <Col lg={6}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5>Vertical Tabs Left Side</h5>
          <a onClick={() => setOpenTab(!openTab)}>
            <Code size={30} weight="bold" className=" source" />
          </a>
        </Card.Header>
        <Card.Body className="vertical-tab">
          <Nav
            variant="tabs"
            className="app-tabs-secondary flex-column"
            id="v-bg"
            role="tablist"
          >
            {tabs.map((tab) => (
              <Nav.Item role="presentation" key={tab.id}>
                <Nav.Link
                  className={activeTab === tab.id ? "active" : ""}
                  id={`${tab.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}-tab-pane`}
                  type="button"
                  role="tab"
                  aria-controls={`${tab.id}-tab-pane`}
                  aria-selected={activeTab === tab.id}
                  onClick={() => handleToggle(tab.id)}
                >
                  {tab.icon}
                  {tab.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content className="tab-content mt-3" id="v-bgContent">
            {tabs.map((tab) => (
              <Tab.Pane
                eventKey={tab.id}
                id={`${tab.id}-tab-pane`}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
                className={activeTab === tab.id ? "show active" : ""}
                tabIndex={0}
                key={tab.id}
              >
                {tab.content}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Card.Body>

        <Collapse in={openTab}>
          <pre className="language-html">
            <code className="language-html">{`<Tab.Container activeKey="v-features">
  <Card>
    <Card.Header className="d-flex justify-content-between align-items-center">
      <h5>Vertical Tabs Left Side</h5>
      <a>
        <Code size={30} weight="bold" className="source" />
      </a>
    </Card.Header>
    <Card.Body className="vertical-tab">
      <Nav variant="tabs" className="app-tabs-secondary flex-column" id="v-bg" role="tablist">
${tabs
  .map(
    (tab) => `        <Nav.Item role="presentation">
          <Nav.Link
            eventKey="${tab.id}"
            id="${tab.id}-tab"
            role="tab"
            aria-controls="${tab.id}-tab-pane"
            aria-selected="true"
          >
            ${tab.title}
          </Nav.Link>
        </Nav.Item>`
  )
  .join("\n")}
      </Nav>

      <Tab.Content className="mt-3" id="v-bgContent">
${tabs
  .map(
    (tab) => `        <Tab.Pane
          eventKey="${tab.id}"
          role="tabpanel"
          id="${tab.id}-tab-pane"
          aria-labelledby="${tab.id}-tab"
          className="show active"
        >
          <!-- Content omitted for brevity -->
        </Tab.Pane>`
  )
  .join("\n")}
      </Tab.Content>
    </Card.Body>
  </Card>
</Tab.Container>`}</code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default VerticalTabsLeft;
