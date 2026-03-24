import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Collapse, Stack } from "react-bootstrap";

import { Code, DownloadSimple } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const badgeColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
const outlineBadgeColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "dark",
];
const lightBadgeColors = [
  { color: "primary", icon: <DownloadSimple size={12} /> },
  { color: "secondary", icon: "" },
  { color: "success", icon: "" },
  { color: "danger", icon: "" },
  { color: "warning", icon: "" },
  { color: "info", icon: "" },
  { color: "dark", icon: "" },
];
export const radiusBadgeData = [
  { color: "primary", radius: "0" },
  { color: "secondary", radius: "6" },
  { color: "success", radius: "8" },
  { color: "danger", radius: "10" },
];
const BasicBadges: React.FC = () => {
  const [uiState, setUiState] = useState({
    open: false,
    openOutline: false,
    openLight: false,
    openRadius: false,
  });
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Col sm={12} xl={6}>
        <Card>
          <Card.Header className="code-header">
            <h5>Basic Badges</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, open: !prev.open }))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              {badgeColors.map((color) => (
                <Badge key={color} bg={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </Stack>
            <Collapse in={uiState.open}>
              <div>
                <pre className="simpalalert mt-3 language-html">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Basic Alerts</h5>
  </Card.Header>
  <Card.Body>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
    ${badgeColors
      .map((color) => {
        const label = color.charAt(0).toUpperCase() + color.slice(1);
        const text =
          color === "light" || color === "warning" ? ' text="dark"' : "";
        return `  <Badge bg="${color}"${text}>${label}</Badge>`;
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
            <h5>Outline Badges</h5>
            <a onClick={() => setUiState((prev) => ({...prev,openOutline: !prev.openOutline }))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              {outlineBadgeColors.map((color) => (
                <span key={color} className={`badge text-outline-${color}`}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </span>
              ))}
            </Stack>
            <Collapse in={uiState.openOutline}>
              <div>
                <pre className="outlinebadge mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Outline Badges</h5>
  </Card.Header>
  <Card.Body>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
    ${outlineBadgeColors
      .map((color) => {
        const label = color.charAt(0).toUpperCase() + color.slice(1);
        return `  <span className="text-outline-${color}">${label}</span>`;
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
            <h5>Light Badges</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, openLight: !prev.openLight }))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              {lightBadgeColors.map(({ color, icon }) => (
                <span key={color} className={`badge text-light-${color}`}>
                  {icon && <span className="me-1">{icon}</span>}
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </span>
              ))}
            </Stack>
            <Collapse in={uiState.openLight}>
              <div>
                <pre className="lightbbadge mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Light Badges</h5>
  </Card.Header>
  <Card.Body>
      <Stack direction="horizontal" gap={2} className=""flex-wrap>
    ${lightBadgeColors
      .map(({ color, icon }) => {
        const label = color.charAt(0).toUpperCase() + color.slice(1);
        const iconPart = icon ? `<DownloadSimple size={12} /> ` : "";
        return `  <span className="badge text-light-${color}">${iconPart}${label}</span>`;
      })
      .join("\n")}
    </Stack>;
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
            <h5>Radius option on Badges</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, openRadius: !prev.openRadius }))}>
              <Code size={30} weight="bold" className=" source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              {radiusBadgeData.map(({ color, radius }) => (
                <span
                  key={color}
                  className={`badge text-bg-${color} b-r-${radius}`}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </span>
              ))}
            </Stack>
            <Collapse in={uiState.openRadius}>
              <div>
                <pre className="radiusbadge  mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Radius option on Badges</h5>
  </Card.Header>
  <Card.Body>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
         ${radiusBadgeData
           .map(({ color, radius }) => {
             const label = color.charAt(0).toUpperCase() + color.slice(1);
             return `      <Badge bg="${color}" className="b-r-${radius}">${label}</Badge>`;
           })
           .join("\n")}
    </Stack>;
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

export default BasicBadges;
