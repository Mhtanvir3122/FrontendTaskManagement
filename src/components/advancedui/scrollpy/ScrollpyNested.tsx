import React, { JSX, useEffect, useRef, useState } from "react";
import { Card, Nav } from "react-bootstrap";

const ScrollspyExample: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("item-1");
  const contentRef = useRef<HTMLDivElement>(null);

  // Store refs for each section
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const sectionIds = [
      "item-1",
      "item-1-1",
      "item-1-2",
      "item-2",
      "item-3",
      "item-3-1",
      "item-3-2",
    ];

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleScroll = () => {
      const scrollPosition = contentElement.scrollTop + 100; 
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const section = sectionRefs.current[id];
        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      }

      setActiveItem(currentSection);
    };

    contentElement.addEventListener("scroll", handleScroll);
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-sm-4">
          <Card>
            <Card.Header>
              <h5>Scrollpy with nested nav</h5>
            </Card.Header>
            <Card.Body>
              <div
               className="h-100 flex-column align-items-stretch pe-4 scrollpy-nested-nav">
                <Nav className="flex-column" variant="pills">
                  <Nav.Link
                    href="#item-1"
                    className={`nav-pill-primary ${activeItem === "item-1" ? "active" : ""}`}
                  >
                    Item 1
                  </Nav.Link>
                  <Nav className="flex-column">
                    <Nav.Link
                      href="#item-1-1"
                      className={`ms-3 my-1 nav-pill-primary ${activeItem === "item-1-1" ? "active" : ""}`}
                    >
                      Item 1.1
                    </Nav.Link>
                    <Nav.Link
                      href="#item-1-2"
                      className={`ms-3 my-1 nav-pill-primary ${activeItem === "item-1-2" ? "active" : ""}`}
                    >
                      Item 1.2
                    </Nav.Link>
                  </Nav>
                  <Nav.Link
                    href="#item-2"
                    className={`nav-pill-primary ${activeItem === "item-2" ? "active" : ""}`}
                  >
                    Item 2
                  </Nav.Link>
                  <Nav.Link
                    href="#item-3"
                    className={`nav-pill-primary ${activeItem === "item-3" ? "active" : ""}`}
                  >
                    Item 3
                  </Nav.Link>
                  <Nav className="flex-column">
                    <Nav.Link
                      href="#item-3-1"
                      className={`ms-3 my-1 nav-pill-primary ${activeItem === "item-3-1" ? "active" : ""}`}
                    >
                      Item 3.1
                    </Nav.Link>
                    <Nav.Link
                      href="#item-3-2"
                      className={`ms-3 my-1 nav-pill-primary ${activeItem === "item-3-2" ? "active" : ""}`}
                    >
                      Item 3.2
                    </Nav.Link>
                  </Nav>
                </Nav>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-8">
          <Card>
            <Card.Body>
              <div
                ref={contentRef}
                className="scrollspy-example-2 h-350 overflow-y-scroll app-scroll"
                tabIndex={0}
              >
                {sectionIds.map((id) => {
                  const sectionContent: Record<string, JSX.Element> = {
                    "item-1": (
                      <>
                        <h5 className="f-w-500 mb-2 text-dark">Item 1</h5>
                        <p className="f-s-15 text-secondary mg-b-14">
                    A web designer is a skilled professional who specializes in
                    creating visually appealing and functional websites. They
                    possess a strong understanding of design principles, user
                    experience, and coding languages to develop websites that
                    are both aesthetically pleasing and user-friendly. A web
                    designer is responsible for creating the overall look and
                    feel of a
                        </p>
                      </>
                    ),
                    "item-1-1": (
                      <>
                        <h5 className="f-w-500 mb-2 text-dark">Item 1.1</h5>
                        <p className="f-s-15 text-secondary mg-b-14">
                    The role of a web designer goes beyond just creating
                    visually appealing websites. They also need to have a deep
                    understanding of user experience (UX) design principles.
                    This involves considering how users will interact with the
                    website, ensuring that it is easy to navigate, and
                    optimizing it for different devices and screen sizes. A web
                    designer needs to have a keen eye for detail and be able to
                    create designs
                        </p>
                      </>
                    ),
                    "item-1-2": (
                      <>
                        <h5 className="f-w-500 mb-2 text-dark">Item 1.2</h5>
                        <p className="f-s-15 text-secondary mg-b-14">
                    It is a long-established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many
                    websites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose injected humour and the like
                        </p>
                      </>
                    ),
                    "item-2": (
                      <>
                        <h5 className="f-w-500 mb-2 text-dark">Item 2</h5>
                        <p className="f-s-15 text-secondary mg-b-14">
                    In addition to design skills, a web designer also needs to
                    have a solid understanding of coding languages such as HTML,
                    CSS, and JavaScript. This allows them to bring their designs
                    to life and ensure that the website functions as intended.
                    They need to be able to write clean and efficient code,
                    optimize the website for search engines, and ensure that it
                    is compatible with different browsers and devices.
                        </p>
                      </>
                    ),
                    "item-3": (
                      <>
                        <h5 className="f-w-500 mb-2 text-dark">Item 3</h5>
                        <p className="f-s-15 text-secondary mg-b-14">
                    A web designer is a creative professional who specializes in
                    designing and creating visually appealing and user-friendly
                    websites. They have a deep understanding of various design
                    principles, color schemes, typography, and layout techniques
                    to create a visually stunning website that aligns with the
                    client's brand and objectives. A web designer combines their
                    technical skills with their artistic flair to bring a
                    website
                        </p>
                      </>
                    ),
                    "item-3-1": (
                      <>
                        <h5 className="f-w-500 mb-2 text-dark">Item 3.1</h5>
                        <p className="f-s-15 text-secondary mg-b-14">
                    The role of a web designer goes beyond just creating a
                    visually appealing website. They also need to have a good
                    understanding of user experience (UX) design principles.
                    This involves considering how users will interact with the
                    website, ensuring that it is easy to navigate, and that the
                    information is presented in a logical and intuitive manner.
                    A web designer will also need to have a good understanding
                    of responsive design, ensuring that the website looks and
                    functions well on different devices and screen sizes.
                        </p>
                      </>
                    ),
                    "item-3-2": (
                      <>
                        <h5 className="f-w-500 mb-2 text-dark">Item 3.2</h5>
                        <p className="f-s-15 text-secondary mg-b-14">
                    In addition to their design skills, a web designer also
                    needs to have a good understanding of coding languages such
                    as HTML, CSS, and JavaScript. This allows them to bring
                    their designs to life by coding the website and implementing
                    interactive elements. They may also need to work closely
                    with web developers to ensure that the design is implemented
                    correctly and that any technical issues are resolved.
                    Overall, a web designer plays a crucial role in creating
                    visually appealing and user-friendly websites that
                    effectively communicate the client's message
                        </p>
                      </>
                    ),
                  };

                  return (
                    <div
                      key={id}
                      id={id}
                      ref={(el) => {sectionRefs.current[id] = el}}
                    >
                      {sectionContent[id]}
                    </div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScrollspyExample;
