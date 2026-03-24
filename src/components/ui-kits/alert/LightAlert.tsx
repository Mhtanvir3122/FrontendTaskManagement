import { useEffect, useState } from "react";
import { Alert, Card, Collapse } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";

const lightAlerts = [
  {
    type: "primary",
    text: "Light primary color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
  {
    type: "secondary",
    text: "Light secondary color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
  {
    type: "success",
    text: "Light success color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
  {
    type: "danger",
    text: "Light danger color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
  {
    type: "warning",
    text: "Light warning color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
  {
    type: "info",
    text: "Light info color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
  {
    type: "light",
    text: "Light light color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
  {
    type: "dark",
    text: "Light dark color alert with",
    linkText: "an example link",
    linkHref: "#",
  },
];

const LightAlert: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [open]);

  return (
    <Card>
      <Card.Header className="code-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Light Alert With Link color</h5>
        <a
          role="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="lightalertExample"
          id="togglerLightAlert"
        >
          <Code
            size={30}
            weight="bold"
            data-sorce="lightalert"
            className="source"
          />
        </a>
      </Card.Header>

      <Card.Body>
        {lightAlerts.map((alert, index) => (
          <Alert key={index} variant={`light-${alert.type}`} role="alert">
            {alert.text}{" "}
            <a href={alert.linkHref} className="alert-link">
              {alert.linkText}
            </a>{" "}
            - Check it!
          </Alert>
        ))}

        <Collapse in={open}>
          <div id="lightalertExample">
            <pre className="lightalert mt-3">
              <code className="language-html">
                {`<Card>
  <Card.Header>
    <h5>Light Alert With Link color</h5>
  </Card.Header>
  <Card.Body>
${lightAlerts
  .map(
    (alert) => `  
    <Alert variant="light-${alert.type}" role="alert">
      ${alert.text}<Alert.Link href="#">an example link</Alert.Link>.
         - Check it!
    </Alert>`
  )
  .join("\n\n")}
  </Card.Body>
</Card>`}
              </code>
            </pre>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default LightAlert;
