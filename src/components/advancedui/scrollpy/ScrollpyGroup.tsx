import React, { useEffect, useRef, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const ScrollspyExample: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("list-item-1");
  const contentRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useRef<Record<string, HTMLHeadingElement | null>>({});
  const sectionIds = ["list-item-1", "list-item-2", "list-item-3", "list-item-4"];

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleScroll = () => {
      const scrollPosition = contentElement.scrollTop + 100;
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const section = sectionRefs.current[sectionId];
        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      }

      setActiveItem(currentSection);
    };

    contentElement.addEventListener("scroll", handleScroll);
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    const element = sectionRefs.current[id];
    if (element && contentRef.current) {
      contentRef.current.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-sm-4">
          <Card>
            <Card.Header>
              <h5>Scrollpy with list-group</h5>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <ListGroup id="list-example">
                  <ListGroup.Item
                    action
                    href="#list-item-1"
                    className={`nav-pill-primary ${activeItem === "list-item-1" ? "active" : ""}`}
                    onClick={() => handleNavClick("list-item-1")}
                  >
                    Item 1
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#list-item-2"
                    className={`nav-pill-primary ${activeItem === "list-item-2" ? "active" : ""}`}
                    onClick={() => handleNavClick("list-item-2")}
                  >
                    Item 2
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#list-item-3"
                    className={`nav-pill-primary ${activeItem === "list-item-3" ? "active" : ""}`}
                    onClick={() => handleNavClick("list-item-3")}
                  >
                    Item 3
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#list-item-4"
                    className={`nav-pill-primary ${activeItem === "list-item-4" ? "active" : ""}`}
                    onClick={() => handleNavClick("list-item-4")}
                  >
                    Item 4
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-8">
          <Card>
            <Card.Body>
              <div
                ref={contentRef}
                className="scrollspy-example h-215 overflow-y-scroll app-scroll"
                tabIndex={0}
              >
                <h5
                  ref={(el) => {
                    sectionRefs.current["list-item-1"] = el;
                  }}
                  className="f-w-500 mb-2 text-dark" id="list-item-1">
                  Item 1
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  A digital artisan, skilled in the art of crafting captivating
                  online experiences, is what one would refer to as a web
                  designer. This master of the virtual realm possesses an innate
                  ability to blend aesthetics with functionality, creating
                  visually stunning websites that leave a lasting impression on
                  the beholder. With a keen eye for detail and an unwavering
                  commitment to perfection, the web designer meticulously weaves
                  together colors, typography, and imagery to construct a
                  virtual masterpiece that not only captivates the senses but
                  also effortlessly guides the user through a seamless digital
                  journey.
                </p>

                <h5
                  ref={(el) => {
                    sectionRefs.current["list-item-2"] = el;
                  }}
                  className="f-w-500 mb-2 text-dark"
                  id="list-item-2"
                >
                  Item 2
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  Picture a modern-day Leonardo da Vinci, armed with a palette
                  of pixels and a canvas of code, and you have the essence of a
                  web designer. This visionary artist possesses an unparalleled
                  understanding of the digital landscape, effortlessly
                  transforming abstract concepts into tangible online realities.
                  With an unwavering dedication to staying ahead of the
                  ever-evolving trends, the web designer is a true pioneer,
                  constantly pushing the boundaries of creativity and
                  innovation. Their work is a testament to their ability to
                  harmonize technology and design, resulting in websites that
                  are not only visually striking but also functionally flawless.
                </p>

                <h5 className="f-w-500 mb-2 text-dark" id="list-item-3"
                  ref={(el) => {
                    sectionRefs.current["list-item-3"] = el;
                  }} >
                  Item 3
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  In the realm of the digital realm, the web designer reigns
                  supreme as the virtuoso of the online universe. Armed with an
                  arsenal of technical skills and an insatiable thirst for
                  creativity, this digital maestro orchestrates a symphony of
                  pixels and lines of code to create awe-inspiring websites that
                  are as visually captivating as they are user-friendly. With an
                  acute understanding of user experience and an unwavering
                  commitment to excellence, the web designer meticulously crafts
                  every element of a website, ensuring that it not only reflects
                  the brand's identity but also engages and delights its
                  visitors.
                </p>

                <h5 className="f-w-500 mb-2 text-dark" id="list-item-4"
                  ref={(el) => {
                    sectionRefs.current["list-item-4"] = el;
                  }}
                >
                  Item 4
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  A digital artisan, skilled in the art of crafting captivating
                  online experiences, is what one would refer to as a web
                  designer. This master of the virtual realm possesses an innate
                  ability to blend aesthetics with functionality, creating
                  visually stunning websites that leave a lasting impression on
                  the beholder. With a keen eye for detail and an unwavering
                  commitment to perfection, the web designer meticulously weaves
                  together colors, typography, and imagery to construct a
                  virtual masterpiece that not only captivates the senses but
                  also effortlessly guides the user through a seamless digital
                  journey.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScrollspyExample;
