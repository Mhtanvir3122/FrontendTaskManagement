import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import { IconKeyboardShow } from "@tabler/icons-react";
import { Code, Lifebuoy, ThumbsDown } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism.css";

const BottomTabs: React.FC = () => {
  const [openTab, setOpenTab] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Col lg={6}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5>Light Tabs (Bottom Side)</h5>
          <a onClick={() => setOpenTab(!openTab)} role="button">
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body className="bottom-tab">
          <Tab.Container defaultActiveKey="description">
            <>
              <Tab.Content className="mb-3">
                <Tab.Pane
                  eventKey="description"
                  id="description-tab-pane"
                  aria-labelledby="description-tab"
                >
                  <p className="f-s-15">
                    The idea is to use <code>:target</code> pseudoclass to show
                    tabs, use anchors with fragment identifiers to switch
                    between them.
                  </p>
                </Tab.Pane>

                <Tab.Pane
                  eventKey="howowrk"
                  id="howowrk-tab-pane"
                  aria-labelledby="howowrk-tab"
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
                  aria-labelledby="drawbacks-tab"
                >
                  <p className="f-s-15">
                    This method might not work well in older browsers and lacks
                    JavaScript control for dynamic behavior.
                  </p>
                </Tab.Pane>
              </Tab.Content>

              <Nav
                variant="tabs"
                className="app-tabs-secondary justify-content-start gap-2 flex-wrap mt-3"
                id="Light"
                role="tablist"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="description"
                    id="description-tab"
                    aria-controls="description-tab-pane"
                    role="tab"
                  >
                    <Lifebuoy size={24} className="pe-1 ps-1" />
                    Description
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="howowrk"
                    id="howowrk-tab"
                    aria-controls="howowrk-tab-pane"
                    role="tab"
                  >
                    <IconKeyboardShow size={24} className="pe-1 ps-1" />
                    How It Works
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="drawbacks"
                    id="drawbacks-tab"
                    aria-controls="drawbacks-tab-pane"
                    role="tab"
                  >
                    <ThumbsDown size={24} className="pe-1 ps-1" />
                    Drawbacks
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </>
          </Tab.Container>
        </Card.Body>

        <Collapse in={openTab}>
          <div>
            <pre className="language-html mb-0 mt-3">
              <code className="language-html">{`<Tab.Container defaultActiveKey="description">
  <>
    <Tab.Content className="mb-3">
      <Tab.Pane eventKey="description">
        <p className="f-s-15">
          The idea is to use <code>:target</code> pseudoclass to show tabs...
        </p>
      </Tab.Pane>
      <Tab.Pane eventKey="howowrk">
        <p className="f-s-15">1. Show only the last tab.</p>
        <p className="f-s-15">2. If <code>:target</code> matches...</p>
      </Tab.Pane>
      <Tab.Pane eventKey="drawbacks">
        <p className="f-s-15">
          This method might not work well in older browsers...
        </p>
      </Tab.Pane>
    </Tab.Content>

    <Nav variant="tabs" className="tab-light-primary mt-3">
      <Nav.Item>
        <Nav.Link eventKey="description">Description</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="howowrk">How It Works</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="drawbacks">Drawbacks</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
</Tab.Container>`}</code>
            </pre>
          </div>
        </Collapse>
      </Card>
    </Col>
  );
};

export default BottomTabs;
