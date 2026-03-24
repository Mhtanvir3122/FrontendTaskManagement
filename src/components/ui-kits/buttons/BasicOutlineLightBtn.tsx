import { useEffect, useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";

import {
  Code,
  Download,
  FacebookLogo,
  LinkedinLogo,
  PinterestLogo,
  RedditLogo,
  TwitterLogo,
  Warning,
} from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const buttonVariants = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
  "link",
] as const;

const outlineVariants = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
] as const;

const lightButtonColors = [
  { type: "primary", text: "Primary" },
  { type: "secondary", text: "Secondary" },
  { type: "success", text: "Success" },
  { type: "danger", text: "Danger" },
  { type: "warning", text: "Warning" },
  { type: "info", text: "Info" },
  { type: "light", text: "Light" },
  { type: "dark", text: "Dark" },
];
const iconButtonVariants = [
  {
    variant: "primary",
    buttons: [
      { text: "Primary", icon: <Download size={16} />, iconPosition: "start" },
      { text: "Secondary", icon: <Warning size={16} />, iconPosition: "end" },
    ],
  },
  {
    variant: "outline-primary",
    buttons: [
      { text: "Primary", icon: <Download size={16} />, iconPosition: "start" },
      { text: "Secondary", icon: <Warning size={16} />, iconPosition: "end" },
    ],
  },
  {
    variant: "light-primary",
    buttons: [
      { text: "Primary", icon: <Download size={16} />, iconPosition: "start" },
      { text: "Secondary", icon: <Warning size={16} />, iconPosition: "end" },
    ],
  },
];

const iconSocialButtons = [
  {
    variant: "primary",
    buttons: [
      {
        text: "Facebook",
        iconName: ' <FacebookLogo size={18} weight="fill" />',
        icon: <FacebookLogo size={18} weight="fill" />,
        className: "btn-facebook text-white",
      },
      {
        text: "Twitter",
        iconName: '<TwitterLogo size={18} weight="fill" />',
        icon: <TwitterLogo size={18} weight="fill" />,
        className: "btn-twitter text-white",
      },
    ],
  },
  {
    variant: "outline-primary",
    buttons: [
      {
        text: "Pinterest",
        iconName: "<PinterestLogo size={18} />",
        icon: <PinterestLogo size={18} />,
        className: "btn-outline-pinterest",
      },
      {
        text: "Linkedin",
        iconName: "<LinkedinLogo size={18} />",
        icon: <LinkedinLogo size={18} />,
        className: "btn-outline-linkedin",
      },
    ],
  },
  {
    variant: "light-primary",
    buttons: [
      {
        text: "Reddit",
        icon: <RedditLogo size={18} />,
        iconName: "<RedditLogo size={18} />",
        className: "btn-light-reddit",
      },
      {
        text: "Twitter",
        icon: <TwitterLogo size={18} />,
        iconName: "<TwitterLogo size={18} />",
        className: "btn-light-twitter",
      },
    ],
  },
];

const BasicOutlineLightBtn: React.FC = () => {
  const [uiState, setUiState] = useState({
    openBasic: false,
    openOutline: false,
    openLight: false,
    openIconButton: false,
    openIconButtonRadius: false,
    openIconSocial: false
  });

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      {/* Basic Buttons Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Basic Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openBasic: !prev.openBasic}))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <div className="d-flex flex-wrap gap-2">
              {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>

            <Collapse in={uiState.openBasic}>
              <div>
                <pre className="basicbutton mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Basic Buttons</h5>
  </Card.Header>
  <Card.Body>
${buttonVariants
  .map(
    (variant) =>
      `    <Button variant="${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>`
  )
  .join("\n")}
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>

      {/* Outline Buttons Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Outline Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openOutline: !prev.openOutline}))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <div className="d-flex flex-wrap gap-2">
              {outlineVariants.map((variant) => (
                <Button key={variant} variant={`outline-${variant}`}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>

            <Collapse in={uiState.openOutline}>
              <div>
                <pre className="outlinebtn mt-3">
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Outline Buttons</h5>
  </Card.Header>
  <Card.Body>
${outlineVariants
  .map(
    (variant) =>
      `    <Button variant="outline-${variant}">${variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>`
  )
  .join("\n")}
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>

      {/* Light Buttons Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Light Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openLight: !prev.openLight}))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <div className="app-btn-list d-flex flex-wrap gap-2">
              {lightButtonColors.map((btn, index) => (
                <Button key={index} variant={`light-${btn.type}`} role="btn">
                  {btn.text}{" "}
                </Button>
              ))}
            </div>

            <Collapse in={uiState.openLight}>
              <pre className="language-html">
                <code className="language-html">
                  {`<Card>
  <Card.Header>
    <h5>Outline Buttons</h5>
  </Card.Header>
  <Card.Body>
${lightButtonColors
  .map(
    (btn) =>
      `      <Button variant="light-${btn.type}" role="btn">
       ${btn.text}
         </Button>`
  )
  .join("\n")}
                           
  </Card.Body>
</Card>`}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
      {/* Icon Button  Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center ">
            <h5 className="mb-0">Light Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openIconButton: !prev.openIconButton}))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap justify-content-between gap-3 overflow-auto">
              {iconButtonVariants.map((group, index) => (
                <div key={index} className="d-flex gap-2">
                  {group.buttons.map((btn, i) => {
                    const btnVariant =
                      i === 0
                        ? group.variant
                        : group.variant.replace("primary", "secondary");

                    return (
                      <Button
                        key={i}
                        variant={btnVariant}
                        className="d-inline-flex align-items-center gap-1"
                      >
                        {btn.iconPosition === "start" && (
                          <>
                            {btn.icon}
                            <span>{btn.text}</span>
                          </>
                        )}
                        {btn.iconPosition === "end" && (
                          <>
                            <span>{btn.text}</span>
                            {btn.icon}
                          </>
                        )}
                      </Button>
                    );
                  })}
                </div>
              ))}
            </div>
            <Collapse in={uiState.openIconButton}>
              <pre className="language-html">
                <code className="language-html">
                  {`<Card>
  <Card.Header>
    <h5>Outline Buttons</h5>
  </Card.Header>
  <Card.Body>
        <div className="d-flex flex-wrap justify-content-between gap-3">
  ${iconButtonVariants
    .map((group) =>
      group.buttons
        .map((btn, i) => {
          const btnVariant =
            i === 0
              ? group.variant
              : group.variant.replace("primary", "secondary");

          return `<Button variant="${btnVariant}" className="d-inline-flex align-items-center gap-1">
  ${btn.iconPosition === "start" ? "<Download /> " : ""}
  ${btn.text}
  ${btn.iconPosition === "end" ? " <Warning />" : ""}
</Button>`;
        })
        .join("\n")
    )
    .join("\n\n")}
</div>             
  </Card.Body>
</Card>`}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </div>

      {/* Icon Button Radius Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Radius</h5>
            <a
              role="button"
              onClick={() => setUiState((prev) => ({ ...prev,openIconButtonRadius: !prev.openIconButtonRadius}))}
            >
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between flex-wrap gap-3 overflow-auto">
              {iconButtonVariants.map((group, index) => (
                <div key={index} className="d-flex gap-2">
                  {group.buttons.map((btn, i) => {
                    const btnVariant =
                      i === 0
                        ? group.variant
                        : group.variant.replace("primary", "secondary");

                    return (
                      <Button
                        key={i}
                        variant={btnVariant}
                        className="d-inline-flex align-items-center gap-1 rounded-pill"
                      >
                        {btn.iconPosition === "start" && (
                          <>
                            {btn.icon}
                            <span>{btn.text}</span>
                          </>
                        )}
                        {btn.iconPosition === "end" && (
                          <>
                            <span>{btn.text}</span>
                            {btn.icon}
                          </>
                        )}
                      </Button>
                    );
                  })}
                </div>
              ))}
            </div>
            <Collapse in={uiState.openIconButtonRadius}>
              <div>
                <pre>
                  <code className="language-html">
                    {`<Card>
  <Card.Header>
    <h5>Radius</h5>
  </Card.Header>
  <Card.Body>
        <div className="d-flex flex-wrap justify-content-between gap-3">
  ${iconButtonVariants
    .map((group) =>
      group.buttons
        .map((btn, i) => {
          const btnVariant =
            i === 0
              ? group.variant
              : group.variant.replace("primary", "secondary");

          return `<Button variant="${btnVariant}" className="d-inline-flex align-items-center gap-1 rounded-pill">
  ${btn.iconPosition === "start" ? "<Download /> " : ""}
  ${btn.text}
  ${btn.iconPosition === "end" ? " <Warning />" : ""}
</Button>`;
        })
        .join("\n")
    )
    .join("\n\n")}
</div>             
  </Card.Body>
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>

      {/* Social Buttons  Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Social Buttons</h5>
            <button
              className="btn btn-link p-0 border-0 bg-transparent"
              onClick={() => setUiState((prev) => ({ ...prev,openIconSocial: !prev.openIconSocial}))}
              aria-expanded={uiState.openIconSocial}
            >
              <Code size={30} weight="bold" className="source" />
            </button>
          </Card.Header>
          <Card.Body>
            <div className="app-btn-list d-flex flex-wrap gap-2 overflow-auto">
              {iconSocialButtons.map((group, index) => (
                <div key={index} className="d-flex flex-row gap-2">
                  {group.buttons.map((btn, i) => (
                    <Button
                      key={i}
                      variant={group.variant}
                      className={`d-inline-flex align-items-center gap-1 rounded-pill ${btn.className}`}
                    >
                      {btn.icon}
                      <span>{btn.text}</span>
                    </Button>
                  ))}
                </div>
              ))}
            </div>
            <Collapse in={uiState.openIconSocial}>
              <div>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<div class="card">
  <div class="card-header">
    <h5>Social Buttons</h5>
  </div>
  <div class="card-body">
    <div class="app-btn-list d-flex flex-wrap gap-2">
${iconSocialButtons
  .map((group) =>
    group.buttons
      .map(
        (btn) =>
          `      <button type="button" class="btn btn-${group.variant} d-inline-flex align-items-center gap-1 rounded-pill ${btn.className}">
        ${btn.iconName}
        <span>${btn.text}</span>
      </button>`
      )
      .join("\n")
  )
  .join("\n\n")}
    </div>
  </div>
</div>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default BasicOutlineLightBtn;
