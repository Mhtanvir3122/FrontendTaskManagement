import React, { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Stack } from "react-bootstrap";

import {
  Code,
  DotsThreeOutline,
  EnvelopeSimple,
  MegaphoneSimple,
  Moon,
  ShoppingCart,
} from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

interface BadgePosition {
  label: string;
  bgColor: string;
  positionClass: string;
}

const badgePositionData: BadgePosition[] = [
  { label: "Offline", bgColor: "danger", positionClass: "top-0 start-0" },
  { label: "Busy", bgColor: "warning", positionClass: "top-0 start-100" },
  { label: "Online", bgColor: "success", positionClass: "top-100 start-0" },
  {
    label: "Disable",
    bgColor: "secondary",
    positionClass: "top-100 start-100",
  },
];

interface BadgeIconItem {
  icon: React.ReactNode;
  color: string;
  type: string;
}

const badgeIconData: BadgeIconItem[] = [
  {
    icon: <ShoppingCart size={22} />,
    color: "primary",
    type: "<ShoppingCart size={22} />",
  },
  {
    icon: <DotsThreeOutline size={22} />,
    color: "secondary",
    type: "<DotsThreeOutline size={22} />",
  },
  {
    icon: <MegaphoneSimple size={22} />,
    color: "success",
    type: "<MegaphoneSimple size={22} />",
  },
  {
    icon: <EnvelopeSimple size={22} />,
    color: "danger",
    type: "<EnvelopeSimple size={22} />",
  },
  {
    icon: <Moon size={22} weight="fill" />,
    color: "dark",
    type: '<Moon size={22} weight="fill" />',
  },
];

const IconBadges: React.FC = () => {
  const [uiState, setUiState] = useState({
    openPosition: false,
    openIcon: false,
  });

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Col sm={12} xl={6}>
        <Card>
          <Card.Header className="code-header">
            <h5>Badges position</h5>
            <a onClick={() => setUiState((prev) => ({...prev, openPosition: !prev.openPosition}))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack direction="horizontal" gap={3} className="flex-wrap">
              {badgePositionData.map(({ label, bgColor, positionClass }) => (
                <Button
                  key={label}
                  variant={`outline-${bgColor}`}
                  className="position-relative"
                >
                  {label}
                  <span
                    className={`position-absolute ${positionClass} translate-middle p-1 bg-${bgColor} border border-light rounded-circle`}
                  >
                    <span className="visually-hidden">{label}</span>
                  </span>
                </Button>
              ))}
            </Stack>
            <Collapse in={uiState.openPosition}>
              <div>
                <pre className="badgeposithion mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Badges positions</h5>
  </Card.Header>
  <Card.Body>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
${badgePositionData
  .map(({ label, bgColor, positionClass }) => {
    return `<Button variant="outline-${bgColor}" className="position-relative">
        ${label}
        <span className="position-absolute ${positionClass} translate-middle p-1 bg-${bgColor} border border-light rounded-circle">
          <span className="visually-hidden">${label}</span>
        </span>
      </Button>`;
  })
  .join("\n")}
    </Stack>
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} xl={6}>
        <Card>
          <Card.Header className="code-header">
            <h5>Icon's badges</h5>
            <a onClick={() => setUiState((prev) => ({...prev, openIcon: !prev.openIcon}))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack direction="horizontal" gap={3} className="flex-wrap">
              {badgeIconData.map(({ icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`position-relative bg-light-${color} p-2 rounded`}
                >
                  {icon}
                  <span
                    className={`position-absolute top-0 start-100 translate-middle p-1 bg-${color} rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast`}
                  />
                </a>
              ))}
            </Stack>
            <Collapse in={uiState.openIcon}>
              <div>
                <pre className="iconbadge mt-3">
                  <code
                    className="language-html
  "
                  >
                    {`<Card>
  <Card.Header>
    <h5>Icon's badges</h5>
  </Card.Header>
  <Card.Body>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        ${badgeIconData
          .map(
            ({ type, color }) =>
              `  <a href="#" className="position-relative bg-light-${color} p-2 rounded">
    ${type}
    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-${color} rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast" />
  </a>`
          )
          .join("\n")}
    </Stack>
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default IconBadges;
