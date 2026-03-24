import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Card,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

const headings = [
  { id: "scrollspyHeading1", label: "First" },
  { id: "scrollspyHeading2", label: "Second" },
  { id: "scrollspyHeading3", label: "Third" },
  { id: "scrollspyHeading4", label: "Fourth" },
  { id: "scrollspyHeading5", label: "Fifth" },
];

const ScrollpyNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(headings[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<Map<string, HTMLHeadingElement>>(new Map());

  // Callback ref to register heading elements
  const registerHeadingRef = useCallback((id: string, element: HTMLHeadingElement | null) => {
    if (element) {
      headingRefs.current.set(id, element);
    } else {
      headingRefs.current.delete(id);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.intersectionRatio > b.intersectionRatio ? -1 : 1));

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].target.id);
        }
      },
      { root: contentRef.current, threshold: [0.25, 0.5, 0.75] }
    );

    headingRefs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    const element = headingRefs.current.get(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Scrollspy in Navbar</h5>
            </Card.Header>
            <Card.Body>
              <div
                id="navbar-example3"
                className="navbar navbar-expand-lg scrollpy-navbar bg-body-tertiary"
              >
                <Container fluid>
                  <Navbar.Brand href="#">
                    <img
                      src="/images/logo/1.png"
                      className="w-150"
                      alt="logo"
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarSupportedContent" />
                  <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ms-auto nav-pills">
                      {headings.slice(0, 2).map((h) => (
                        <Nav.Link
                          key={h.id}
                          href={`#${h.id}`}
                          className={`nav-pill-primary ${activeId === h.id ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, h.id)}
                        >
                          {h.label}
                        </Nav.Link>
                      ))}
                      <NavDropdown
                        title="Dropdown"
                        className={`nav-pill-primary ${
                          ["scrollspyHeading3", "scrollspyHeading4", "scrollspyHeading5"].includes(activeId)
                            ? "active"
                            : ""
                        }`}
                      >
                        {headings.slice(2).map((h) => (
                          <NavDropdown.Item
                            key={h.id}
                            href={`#${h.id}`}
                            onClick={(e) => handleNavClick(e, h.id)}
                          >
                            {h.label}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </div>

              <div
                ref={contentRef}
                className="scrollspy-example p-3 rounded-2 h-250 overflow-y-scroll app-scroll"
              >
                {headings.map((h) => (
                  <React.Fragment key={h.id}>
                    <h5
                      className="f-w-500 mb-2 text-dark"
                      id={h.id}
                      ref={(el) => registerHeadingRef(h.id, el)}
                    >
                      {h.label} paragraph
                    </h5>
                    <p className="f-s-15 text-secondary mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ScrollpyNav;