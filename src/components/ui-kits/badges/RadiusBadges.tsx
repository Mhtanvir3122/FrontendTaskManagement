import React, { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Stack } from "react-bootstrap";

import { BellRinging, Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const iconMap: Record<string, React.ReactNode> = {
  "bell-ringing": <BellRinging size={12} color="#fff" weight="bold" />,
};

const badgeWithButtonData = [
  {
    label: "Notifications",
    color: "light-primary",
    badge: "4",
    badgeColor: "primary",
  },
  {
    label: "Disable",
    color: "light-secondary",
    badgeHtml: `<span className="position-absolute top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
  <span className="visually-hidden">Disable</span>
</span>`,
  },
  {
    label: "Unread",
    color: "light-danger",
    icon: "bell-ringing",
    badgeColor: "danger",
  },
  {
    label: "Inbox",
    color: "outline-warning",
    badge: "99+",
    badgeColor: "warning",
  },
  {
    label: "50% Off",
    color: "light-info",
    badge: "New",
    badgeColor: "info",
    extraClass: "f-s-14",
  },
  {
    label: "1 missed call",
    color: "light-dark",
    badgeHtml: `<span className="position-absolute top-0 start-100 translate-middle p-2 bg-dark border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower">
  <span className="visually-hidden">Busy</span>
</span>`,
  },
];

const headingData = [
  { level: "h1", label: "Heading", badge: "New" },
  { level: "h2", label: "Heading", badge: "New" },
  { level: "h3", label: "Heading", badge: "New" },
  { level: "h4", label: "Heading", badge: "New" },
  { level: "h5", label: "Heading", badge: "New" },
  { level: "h6", label: "Heading", badge: "New" },
];

const RadiusBadges: React.FC = () => {
  const [uiState, setUiState] = useState({
    openButton: false,
    openHead: false,
  });

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      {/* -------- Badge with Button -------- */}
      <Col xl={12}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between">
            <h5>Badges with button</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev,openButton: !prev.openButton}))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack direction="horizontal" gap={4} className="flex-wrap">
              {badgeWithButtonData.map(
                (
                  {
                    label,
                    color,
                    badge,
                    badgeColor,
                    icon,
                    badgeHtml,
                    extraClass,
                  },
                  idx
                ) => (
                  <Button
                    key={idx}
                    variant={color}
                    className={`position-relative ${extraClass || ""}`}
                  >
                    {label}
                    {badgeHtml ? (
                      <span />
                    ) : (
                      <span
                        className={`position-absolute top-0 start-100 translate-middle ${
                          icon
                            ? `w-25 h-25 bg-${badgeColor} border border-light rounded-circle`
                            : `badge rounded-pill bg-${badgeColor}`
                        }`}
                      >
                        {icon ? iconMap[icon] : badge}
                      </span>
                    )}
                  </Button>
                )
              )}
            </Stack>

            {/* PrismJS preview code block */}
            <Collapse in={uiState.openButton}>
              <div>
                <pre className="badgeposithion mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Badges with button</h5>
  </Card.Header>
  <Card.Body>
    <Stack direction="horizontal" gap={3} className="flex-wrap">
${badgeWithButtonData
  .map(({ label, color, icon, badge, badgeColor, badgeHtml, extraClass }) => {
    const badgeContent = icon
      ? `<span className="position-absolute top-0 start-100 translate-middle h-25 w-25 bg-${badgeColor} border border-light rounded-circle">
  <BellRinging size={10} color="#fff" weight="bold" />
</span>`
      : badge
        ? `<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${badgeColor}">${badge}</span>`
        : badgeHtml?.trim() || "";

    return `      <Button variant="${color}" className="position-relative${
      extraClass ? ` ${extraClass}` : ""
    }">
        ${label}
        ${badgeContent}
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

      {/* -------- Heading Badges -------- */}
      <Col xl={12}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between">
            <h5>Radius Badges</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev,openHead: !prev.openHead}))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack gap={3}>
              {headingData.map(({ level, label, badge }, idx) => {
                return React.createElement(
                  level,
                  { key: idx, className: "mb-3" },
                  [
                    label + " ",
                    <span key="badge" className="badge bg-secondary">
                      {badge}
                    </span>,
                  ]
                );
              })}
            </Stack>
            <Collapse in={uiState.openHead}>
              <div>
                <pre className="radiusbadge mt-3">
                  <code className="language-html">
                    {`<Card>
            <Card.Header>
              <h5>Radius Badges</h5>
            </Card.Header>
            <Card.Body>
              <Stack gap={3} >
          ${headingData
            .map(
              ({ level, label, badge }) =>
                `      <${level}>${label} <span className="badge bg-secondary">${badge}</span></${level}>`
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

export default RadiusBadges;
