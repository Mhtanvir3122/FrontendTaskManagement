import React, { useEffect, useState } from "react";
import { Card, Col, Collapse } from "react-bootstrap";

import { Code, User } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

const lightAvatarColors = [
  { colorClass: "light-primary", raw: <User size={18} weight="fill" /> },
  { colorClass: "light-secondary", raw: <User size={18} weight="fill" /> },
  { colorClass: "light-success", raw: <User size={18} weight="fill" /> },
  { colorClass: "light-info", raw: <User size={18} weight="fill" /> },
  { colorClass: "light-warning", raw: <User size={18} weight="fill" /> },
  { colorClass: "light-danger", raw: <User size={18} weight="fill" /> },
];

const AvatarLightColors: React.FC = () => {
  const [openAvtar4, setOpenAvtar4] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);
  return (
    <Col md={6}>
      <Card>
        <Card.Header className="code-header">
          <h5>Light Background</h5>
          <a onClick={() => setOpenAvtar4(!openAvtar4)}>
            <Code size={30} weight="bold" className=" source" />
          </a>
          <p className="text-muted">
            For light style use <code>text-light-*</code> class.
          </p>
        </Card.Header>
        <Card.Body>
          <div className="d-flex gap-3 flex-wrap">
            {lightAvatarColors.map((avatar, index) => (
              <span
                key={index}
                className={`text-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50`}
              >
                <User size={18} weight="fill" />
              </span>
            ))}
          </div>
        </Card.Body>
        <Collapse in={openAvtar4}>
          <pre className="mt-3 language-html">
            <code className="language-html">
              {`<Card>
  <Card.Header>
    <h5>Light Background</h5>
    <p className="text-muted">
      For light style use <code>text-light-*</code> class.
    </p>
  </Card.Header>
  <Card.Body>
    <div className="d-flex gap-3 flex-wrap">
${lightAvatarColors
  .map(
    (
      avatar
    ) => `      <span className="text-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50">
        <User size={18} weight="fill" />
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

export default AvatarLightColors;
