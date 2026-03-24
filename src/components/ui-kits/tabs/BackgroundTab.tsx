import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import { ClockCounterClockwise, Code, Disc, Star } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const BackgroundTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Col lg={6}>
      <Card className="equal-card">
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5>Background Tabs</h5>
          <a onClick={() => setOpen(!open)} role="button">
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body>
          <Tab.Container
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || "features")}
          >
            <>
              <Nav
                variant="tabs"
                className="tab-primary bg-primary p-1"
                role="tablist"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="features"
                    id="features-tab"
                    role="tab"
                    aria-controls="features-tab-pane"
                  >
                    <Disc size={18} className="me-1" />
                    Features
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="history"
                    id="history-tab"
                    role="tab"
                    aria-controls="history-tab-pane"
                  >
                    <ClockCounterClockwise size={18} className="me-1" />
                    History
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="reviews"
                    id="reviews-tab"
                    role="tab"
                    aria-controls="reviews-tab-pane"
                  >
                    <Star size={18} className="me-1" />
                    Reviews
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="mt-3" id="bgContent">
                <Tab.Pane
                  eventKey="features"
                  role="tabpanel"
                  id="features-tab-pane"
                >
                  <p className="p-s-15">
                    The idea is to use <code>:target</code> pseudoclass to show
                    tabs, use anchors with fragment identifiers to switch
                    between them.
                  </p>
                  <p className="p-s-15">
                    This concept leverages modern CSS to control tab visibility
                    without JavaScript.
                  </p>
                </Tab.Pane>

                <Tab.Pane
                  eventKey="history"
                  role="tabpanel"
                  id="history-tab-pane"
                >
                  <p className="p-s-15">Show only the last tab.</p>
                  <p className="p-s-15">
                    If <code>:target</code> matches a tab, show it and hide all
                    following siblings.
                  </p>
                  <p className="p-s-15">
                    Matches a tab, show it and hide all following siblings.
                  </p>
                </Tab.Pane>

                <Tab.Pane
                  eventKey="reviews"
                  role="tabpanel"
                  id="reviews-tab-pane"
                >
                  <p className="p-s-15">
                    The idea is to use <code>:target</code> pseudoclass to show
                    tabs, use anchors with fragment identifiers to switch
                    between them.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </>
          </Tab.Container>
        </Card.Body>

        <Collapse in={open}>
          <pre className="language-html mb-0 mt-3">
            <code className="language-html">{`<Tab.Container activeKey="features">
  <>
    <Nav variant="tabs" className="tab-primary bg-primary p-1" role="tablist">
      <Nav.Item>
        <Nav.Link eventKey="features" id="features-tab" role="tab" aria-controls="features-tab-pane">
          <Disc size={18} className="me-2" />
          Features
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="history" id="history-tab" role="tab" aria-controls="history-tab-pane">
          <ClockCounterClockwise size={18} className="me-2" />
          History
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="reviews" id="reviews-tab" role="tab" aria-controls="reviews-tab-pane">
          <Star size={18} className="me-2" />
          Reviews
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <Tab.Content className="mt-3" id="bgContent">
      <Tab.Pane eventKey="features" role="tabpanel" id="features-tab-pane">
        <p className="p-s-15">The idea is to use <code>:target</code> pseudoclass...</p>
        <p className="p-s-15">This concept leverages modern CSS to control...</p>
      </Tab.Pane>
      <Tab.Pane eventKey="history" role="tabpanel" id="history-tab-pane">
        <p className="p-s-15">Show only the last tab.</p>
        <p className="p-s-15">If <code>:target</code> matches a tab...</p>
        <p className="p-s-15">Matches a tab, show it and hide...</p>
      </Tab.Pane>
      <Tab.Pane eventKey="reviews" role="tabpanel" id="reviews-tab-pane">
        <p className="p-s-15">The idea is to use <code>:target</code> pseudoclass...</p>
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

export default BackgroundTabs;
