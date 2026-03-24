import React, { useEffect, useState } from "react";
import { Card, Col, Collapse } from "react-bootstrap";

import { Code, User } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

const outlineAvatarColors = [
  { colorClass: "primary", icon: <User size={18} weight="fill" /> },
  { colorClass: "secondary", icon: <User size={18} weight="fill" /> },
  { colorClass: "success", icon: <User size={18} weight="fill" /> },
  { colorClass: "info", icon: <User size={18} weight="fill" /> },
  { colorClass: "warning", icon: "AR" },
  { colorClass: "danger", icon: "TE" },
];

const AvatarOutline: React.FC = () => {
  const [openAvtar3, setOpenAvtar3] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);
  return (
    <Col md={6}>
      <Card className="equal-card">
        <Card.Header className="code-header">
          <h5>Outline</h5>
          <a onClick={() => setOpenAvtar3(!openAvtar3)}>
            <Code size={30} weight="bold" className=" source" />
          </a>
          <p className="text-muted">
            For outline style use <code>text-outline-*</code> class.
          </p>
        </Card.Header>
        <Card.Body>
          <div className="d-flex gap-3 flex-wrap">
            {outlineAvatarColors.map((avatar, index) => (
              <span
                key={index}
                className={`text-outline-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50`}
              >
                {avatar.icon}
              </span>
            ))}
          </div>
        </Card.Body>
        <Collapse in={openAvtar3}>
          <pre className="mt-3 language-html">
            <code className="language-html">
              {`<div className="card equal-card">
  <div className="card-header">
    <h5>Outline</h5>
    <p className="text-muted">For outline style use <code>text-outline-*</code> class.</p>
  </div>
  <div className="card-body">
    <div className="d-flex gap-3 flex-wrap">
${outlineAvatarColors
  .map(
    (
      avatar
    ) => `      <span className="text-outline-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50">
        <User size={18} weight="fill" />
      </span>`
  )
  .join("\n")}
    </div>
  </div>
</div>`}
            </code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default AvatarOutline;
