import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const PrismJS: React.FC = () => {
  useEffect(() => {
    import("prismjs").then((Prism) => {
      Prism.highlightAll();
    });
  }, []);
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Prismjs"
          title="Advance Ui"
          path={["Prismjs"]}
          Icon={BriefcaseMetal}
        />
        <Row>
          <Col xxl={6} xl={6} lg={12}>
            <Row>
              <Col xs={12}>
                <Card>
                  <Card.Header>
                    <h5>Dual Listboxes-html</h5>
                  </Card.Header>
                  <Card.Body>
                    <div>
                      <pre>
                        <code className="language-html">
                          {`<div className="container-fluid">
    <Row>
        <Col md="6">
            <Card>
                 <Card.Header
              className="code-header"
              data-bs-toggle="collapse"
              href="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              as="div"
            >
              <h5 className="mb-0 d-inline">Select by class</h5>
              <IconCode size={20} data-source="dlb1" className="float-end" />
            </Card.Header>
              <Card.Body>
              <select className="select1 form-control" multiple>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Card.Body>
            </Card>
        </div>
    </Row>
</div>`}
                        </code>
                      </pre>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card>
                  <Card.Header>
                    <h5>Dual Listboxes-css</h5>
                  </Card.Header>
                  <Card.Body>
                    <pre>
                      <code className="language-css">
                        {`.dual-listbox .dual-listbox__button {
    border-radius: 5px;
    background-color: rgba(var(--primary), 0.9);
    padding: 7px 12px;
}
.dual-listbox .dual-listbox__button:hover {
    background-color: rgba(var(--primary), 1);
    transition: all 0.3s ease;
}
.dual-listbox .dual-listbox__item.dual-listbox__item--selected {
    background-color: rgba(var(--primary), 0.1);
    color: rgba(var(--primary), 1);
}`}
                      </code>
                    </pre>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xxl={6} xl={6} lg={12}>
            <Row>
              <Col xs={12}>
                <Card>
                  <Card.Header>
                    <h5>Dual Listboxes-scss</h5>
                  </Card.Header>
                  <Card.Body>
                    <pre className="h-390">
                      <code className="language-css">
                        {`.dual-listbox {
    width: 100%;
    .dual-listbox__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: unset;
    }
    .dual-listbox__search {
        color: rgba(var(--secondary), 1);
        padding: 0.4rem 0.75rem;
        border: 1px solid var(--border_color);
        border-radius: 0.3rem;
        &:focus {
            color: rgba(var(--dark), 1);
            box-shadow: 0 0 0 0.25rem rgba(var(--primary), 0.3);
            border: 1px solid rgba(var(--primary), 1);
            outline: none;
        }
    }
    .dual-listbox__title {
        font-weight: 600;
        color: rgba(var(--dark), 0.60);
        padding: 0.6rem 1rem;
        border-radius: 0.3rem 0.3rem 0 0;
        border-color: rgba(var(--dark), 0.20);
    }
    .dual-listbox__available, .dual-listbox__selected {
        border-radius: 0 0 0.3rem 0.3rem;
        border: 1px solid rgba(var(--dark), 0.20);
    }
}`}
                      </code>
                    </pre>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card>
                  <Card.Header>
                    <h5>Dual Listboxes-javascript</h5>
                  </Card.Header>
                  <Card.Body>
                    <pre>
                      <code className="language-javascript">
                        {`var dlb4 = new DualListbox(".select4", {
    showSortButtons: true,
});
var sources = document.querySelectorAll(".source");
for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    source.addEventListener("click", function(event) {
        var code = document.querySelector("." + event.currentTarget.dataset.source);
        code.classList.toggle("open");
    });
}`}
                      </code>
                    </pre>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrismJS;
