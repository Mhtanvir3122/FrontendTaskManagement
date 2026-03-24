import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import classnames from "classnames";
import { Code, Keyboard, Lifebuoy, ThumbsDown } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const LightTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [openTab, setOpenTab] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Col lg={6}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Light Tabs</h5>
          <a onClick={() => setOpenTab(!openTab)} role="button">
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body>
          <Tab.Container
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || "description")}
          >
            <>
              {/* Nav Tabs */}
              <Nav
                variant="tabs"
                className="tab-light-primary"
                id="Light"
                role="tablist"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="description"
                    id="description-tab"
                    className={classnames({
                      active: activeTab === "description",
                    })}
                    aria-controls="description-tab-pane"
                    aria-selected={activeTab === "description"}
                  >
                    <Lifebuoy size={18} className="me-1" />
                    Description
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="howowrk"
                    id="howowrk-tab"
                    className={classnames({ active: activeTab === "howowrk" })}
                    aria-controls="howowrk-tab-pane"
                    aria-selected={activeTab === "howowrk"}
                  >
                    <Keyboard size={18} className="me-1" />
                    How It Works
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="drawbacks"
                    id="drawbacks-tab"
                    className={classnames({
                      active: activeTab === "drawbacks",
                    })}
                    aria-controls="drawbacks-tab-pane"
                    aria-selected={activeTab === "drawbacks"}
                  >
                    <ThumbsDown size={18} className="me-1" />
                    Drawbacks
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Tab Content */}
              <Tab.Content className="mt-3" id="LightContent">
                <Tab.Pane
                  eventKey="description"
                  id="description-tab-pane"
                  role="tabpanel"
                >
                  <p className="f-s-15">
                    The idea is to use <code>:target</code> pseudoclass to show
                    tabs, use anchors with fragment identifiers to switch
                    between them. The idea is to use pseudoclass to show tabs,
                    use anchors with fragment identifiers to switch between
                    them.
                  </p>
                </Tab.Pane>

                <Tab.Pane
                  eventKey="howowrk"
                  id="howowrk-tab-pane"
                  role="tabpanel"
                >
                  <p className="f-s-15">1. Show only the last tab.</p>
                  <p className="f-s-15">
                    2. If <code>:target</code> matches a tab, show it and hide
                    all following siblings.
                  </p>
                  <p className="f-s-15">
                    3. Matches a tab, show it and hide all following siblings.
                  </p>
                </Tab.Pane>

                <Tab.Pane
                  eventKey="drawbacks"
                  id="drawbacks-tab-pane"
                  role="tabpanel"
                >
                  <p className="f-s-15">
                    The idea is to use <code>:target</code> pseudoclass to show
                    tabs, use anchors with fragment identifiers to switch
                    between them. The idea is to use pseudoclass to show tabs,
                    use anchors with fragment identifiers to switch between
                    them.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </>
          </Tab.Container>
        </Card.Body>

        {/* Prism Preview */}
        <Collapse in={openTab}>
          <pre className="language-html mb-0">
            <code className="language-html">{`<Tab.Container activeKey="description">
  <>
    <Nav variant="tabs" className="tab-light-primary" id="Light" role="tablist">
      <Nav.Item>
        <Nav.Link eventKey="description" id="description-tab">
          <Lifebuoy size={18} className="me-1" /> Description
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="howowrk" id="howowrk-tab">
          <Keyboard size={18} className="me-1" /> How It Works
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="drawbacks" id="drawbacks-tab">
          <ThumbsDown size={18} className="me-1" /> Drawbacks
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <Tab.Content className="mt-3" id="LightContent">
      <Tab.Pane eventKey="description" id="description-tab-pane">
        <p className="f-s-15">The idea is to use <code>:target</code> pseudoclass to show tabs...</p>
      </Tab.Pane>
      <Tab.Pane eventKey="howowrk" id="howowrk-tab-pane">
        <p className="f-s-15">1. Show only the last tab.</p>
        <p className="f-s-15">2. If <code>:target</code> matches a tab...</p>
        <p className="f-s-15">3. Matches a tab, show it and hide...</p>
      </Tab.Pane>
      <Tab.Pane eventKey="drawbacks" id="drawbacks-tab-pane">
        <p className="f-s-15">The idea is to use <code>:target</code> pseudoclass to show tabs...</p>
      </Tab.Pane>
    </Tab.Content>
  </>
</Tab.Container>`}</code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default LightTabs;
