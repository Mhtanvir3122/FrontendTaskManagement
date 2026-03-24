import React, { useEffect, useState } from "react";
import { Card, Col, Collapse } from "react-bootstrap";

import { Code, User } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

const avatarColors = [
  {
    colorClass: "primary",
    content: <User size={18} weight="fill" />,
    raw: "FontAwesomeIcon icon={faUser}",
  },
  {
    colorClass: "secondary",
    content: <User size={18} weight="fill" />,
    raw: "FontAwesomeIcon icon={faUser}",
  },
  {
    colorClass: "success",
    content: <User size={18} weight="fill" />,
    raw: "FontAwesomeIcon icon={faUser}",
  },
  {
    colorClass: "info",
    content: <User size={18} weight="fill" />,
    raw: "FontAwesomeIcon icon={faUser}",
  },
  { colorClass: "warning", content: "P", raw: "P" },
  { colorClass: "danger", content: "AD", raw: "AD" },
];

const AvatarColors: React.FC = () => {
  const [openAvtar8, setOpenAvtar8] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);
  return (
    <Col md={6}>
      <Card>
        <Card.Header className="code-header">
          <h5>Colors</h5>
          <a onClick={() => setOpenAvtar8(!openAvtar8)}>
            <Code size={30} weight="bold" className=" source" />
          </a>
          <p className="text-muted">
            Use color <code>bg-*</code> to change the background theme color of
            avatar.
          </p>
        </Card.Header>
        <Card.Body>
          <div className="d-flex gap-3 flex-wrap">
            {avatarColors.map((avatar, index) => (
              <span
                key={index}
                className={`bg-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50`}
              >
                {avatar.content}
              </span>
            ))}
          </div>
        </Card.Body>
        <Collapse in={openAvtar8}>
          <pre className="mt-3 language-html">
            <code className="language-html">
              {`<Card>
  <Card.Header>
    <h5>Colors</h5>
    <p className="text-muted">
      Use color <code>bg-*</code> to change the background theme color of avatar.
    </p>
  </Card.Header>
  <Card.Body>
    <div className="d-flex gap-3 flex-wrap">
${avatarColors
  .map(
    (
      avatar
    ) => `<span className="bg-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50">
        ${avatar.raw}
      </span>`
  )
  .join("\n")}
    </div>
  </Card.Body>
</Card>`}
            </code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default AvatarColors;
