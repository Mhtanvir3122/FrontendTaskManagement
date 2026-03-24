import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";

const ScrollspyExample: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("simple-list-item-1");
  const contentRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useRef<Record<string, HTMLHeadingElement | null>>({});

    const sectionIds = [
      "simple-list-item-1",
      "simple-list-item-2",
      "simple-list-item-3",
      "simple-list-item-4",
      "simple-list-item-5",
    ];

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleScroll = () => {
      const scrollPosition = contentElement.scrollTop;
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const section = sectionRefs.current[sectionId];
        if (section) {
          const sectionOffset = section.offsetTop;
          if (scrollPosition >= sectionOffset - 20) {
            currentSection = sectionId;
          }
        }
      }

      setActiveItem(currentSection);
    };

    contentElement.addEventListener("scroll", handleScroll);
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveItem(id);
    if (sectionRefs.current[id] && contentRef.current) {
      contentRef.current.scrollTo({
        top: sectionRefs.current[id]!.offsetTop,
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
              <h5>Simple anchors</h5>
            </Card.Header>
            <Card.Body>
              <div
                className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
                id="simple-list-example"
              >
                {sectionIds.map((id, idx) => (
                  <a
                    key={id}
                    className={`p-1 rounded border ${
                      activeItem === id ? "active" : ""
                    }`}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(id, e)}
                  >
                    Item {idx + 1}
                  </a>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-8">
          <Card>
            <Card.Body>
              <div
                ref={contentRef}
                className="scrollspy-example h-245 overflow-y-scroll app-scroll"
                tabIndex={0}
              >
                <h5
                  ref={(el) => { sectionRefs.current["simple-list-item-1"] = el}}
                  className="f-w-500 mb-2 text-dark"
                  id="simple-list-item-1"
                >
                  Item 1
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  Are you looking for a creative professional who can bring your
                  website to life? Look no further than a web designer! With
                  their expertise in both design and technology, web designers
                  have the skills to create visually stunning and user-friendly
                  websites that will captivate your audience. They understand
                  the importance of a well-designed website in today's digital
                  age and can tailor their designs to match your brand identity
                  and target audience.
                </p>

                <h5
                  ref={(el) => { sectionRefs.current["simple-list-item-2"] = el}}
                  className="f-w-500 mb-2 text-dark"
                  id="simple-list-item-2"
                >
                  Item 2
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  A web designer is not just someone who knows how to make a
                  website look good. They are skilled in various programming
                  languages and have a deep understanding of user experience and
                  interface design. They can create a website that not only
                  looks visually appealing but also functions seamlessly across
                  different devices and browsers. From choosing the right color
                  palette to creating intuitive navigation, a web designer pays
                  attention to every detail to ensure your website is both
                  aesthetically pleasing and user-friendly.
                </p>

                <h5
                  ref={(el) => { sectionRefs.current["simple-list-item-3"] = el}}
                  className="f-w-500 mb-2 text-dark"
                  id="simple-list-item-3"
                >
                  Item 3
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  It is a long-established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many websites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose injected humour
                  and the like
                </p>

                <h5
                  ref={(el) =>{ sectionRefs.current["simple-list-item-4"] = el }}
                  className="f-w-500 mb-2 text-dark"
                  id="simple-list-item-4"
                >
                  Item 4
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  In addition to their technical skills, web designers are also
                  great problem solvers. They can analyze your business goals
                  and translate them into a website that not only meets your
                  needs but also exceeds your expectations. They are constantly
                  staying updated with the latest design trends and technologies
                  to ensure your website is modern and competitive in the online
                  landscape. A web designer is a valuable asset to any business
                  or individual looking to establish a strong online presence
                  and make a lasting impression on their audience.
                </p>

                <h5 className="f-w-500 mb-2 text-dark" id="simple-list-item-5">
                  Item 5
                </h5>
                <p className="f-s-15 text-secondary mg-b-14">
                  A web designer is a professional who specializes in creating
                  and designing websites. They possess a unique skill set that
                  combines creativity, technical knowledge, and an understanding
                  of user experience. Web designers are responsible for the
                  visual layout, functionality, and overall aesthetics of a
                  website. They work closely with clients to understand their
                  needs and objectives, and then translate those into a visually
                  appealing and user-friendly website.
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
