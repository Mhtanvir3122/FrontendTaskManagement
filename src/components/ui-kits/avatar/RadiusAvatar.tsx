import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Collapse } from "react-bootstrap";

import { Code, User } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

const radiusAvatarColors = [
  {
    radius: 0,
    colorClass: "light-primary",
    raw: <User size={18} weight="fill" />,
  },
  {
    radius: 6,
    colorClass: "light-secondary",
    raw: <User size={18} weight="fill" />,
  },
  {
    radius: 10,
    colorClass: "light-success",
    raw: <User size={18} weight="fill" />,
  },
  {
    radius: 14,
    colorClass: "light-info",
    raw: <User size={18} weight="fill" />,
  },
  {
    radius: 20,
    colorClass: "light-warning",
    raw: <User size={18} weight="fill" />,
  },
  {
    radius: 30,
    colorClass: "light-danger",
    raw: <User size={18} weight="fill" />,
  },
];

const AvatarRadius: React.FC = () => {
  const [openAvtar2, setOpenAvtar2] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll();
    }
  }, []);
  return (
    <Col md={6}>
      <Card>
        <CardHeader className="code-header">
          <h5>Radius</h5>
          <a onClick={() => setOpenAvtar2(!openAvtar2)}>
            <Code size={30} weight="bold" className=" source" />
          </a>
          <p className="text-muted">Radius avatar text in soft color example</p>
        </CardHeader>
        <CardBody>
          <div className="d-flex gap-3 flex-wrap">
            {radiusAvatarColors.map((avatar, index) => (
              <span
                key={index}
                className={`text-${avatar.colorClass} h-45 w-45 d-flex-center b-r-${avatar.radius}`}
              >
                <User size={18} weight="fill" />
              </span>
            ))}
          </div>
        </CardBody>
        <Collapse in={openAvtar2}>
          <pre className="mt-3 language-html">
            <code className="language-html">
              {`<Card>
  <CardHeader>
    <h5>Radius</h5>
    <p className="text-muted">
      Radius avatar text in soft color example
    </p>
  </CardHeader>
  <CardBody>
    <div className="d-flex gap-3 flex-wrap">
${radiusAvatarColors
  .map(
    (
      avatar
    ) => `      <span className="text-${avatar.colorClass} h-45 w-45 d-flex-center b-r-${avatar.radius}">
       <User size={18} weight="fill" />
      </span>`
  )
  .join("\n")}
    </div>
  </CardBody>
</Card>`}
            </code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};
export default AvatarRadius;
