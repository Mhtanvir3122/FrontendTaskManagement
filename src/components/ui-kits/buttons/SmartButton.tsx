import { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Row } from "react-bootstrap";

import {
  BehanceLogo,
  BellRinging,
  Camera,
  Code,
  Download,
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
  RedditLogo,
  SnapchatLogo,
  TelegramLogo,
  TwitterLogo,
  Warning,
  WhatsappLogo,
  YoutubeLogo,
} from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const iconButtons = [
  {
    icon: <Camera size={18} weight="duotone" />,
    iconName: '<Camera size={18} weight="duotone" />',
    className: "btn-primary",
  },
  {
    icon: <BellRinging size={18} weight="duotone" />,
    iconName: '<BellRinging size={18} weight="duotone" />',
    className: "btn-secondary",
  },
  {
    icon: <Camera size={18} weight="duotone" />,
    iconName: '<Camera size={18} weight="duotone" />',
    className: "btn-outline-primary",
  },
  {
    icon: <BellRinging size={18} weight="duotone" />,
    iconName: '<BellRinging size={18} weight="duotone" />',
    className: "btn-outline-secondary",
  },
  {
    icon: <Camera size={18} weight="duotone" />,
    iconName: '<Camera size={18} weight="duotone" />',
    className: "btn-light-primary",
  },
  {
    icon: <BellRinging size={18} weight="duotone" />,
    iconName: '<BellRinging size={18} weight="duotone" />',
    className: "btn-light-secondary",
  },
];

const socialButtons = [
  {
    icon: <FacebookLogo size={18} weight="fill" />,
    iconName: '<FacebookLogo size={18} weight="fill" />',
    className: "btn-facebook text-white",
  },
  {
    icon: <TwitterLogo size={18} weight="fill" />,
    iconName: '<TwitterLogo size={18} weight="fill" />',
    className: "btn-twitter text-white",
  },
  {
    icon: <PinterestLogo size={18} />,
    iconName: "<PinterestLogo size={18} />",
    className: "btn-pinterest text-white",
  },
  {
    icon: <LinkedinLogo size={18} />,
    iconName: "<LinkedinLogo size={18} />",
    className: "btn-linkedin text-white",
  },
  {
    icon: <RedditLogo size={18} />,
    iconName: "<RedditLogo size={18} />",
    className: "btn-reddit text-white",
  },
  {
    icon: <WhatsappLogo size={18} />,
    iconName: "<WhatsappLogo size={18} />",
    className: "btn-whatsapp text-white",
  },
  {
    icon: <EnvelopeSimple size={18} />,
    iconName: "<EnvelopeSimple size={18} />",
    className: "btn-gmail text-white",
  },
  {
    icon: <TelegramLogo size={18} />,
    iconName: "<TelegramLogo size={18} />",
    className: "btn-telegram text-white",
  },
  {
    icon: <YoutubeLogo size={18} />,
    iconName: "<YoutubeLogo size={18} />",
    className: "btn-youtube text-white",
  },
  {
    icon: <LinkedinLogo size={18} />,
    iconName: "<LinkedinLogo size={18} />",
    className: "btn-vimeo text-white",
  },
  {
    icon: <BehanceLogo size={18} />,
    iconName: "<BehanceLogo size={18} />",
    className: "btn-behance text-white",
  },
  {
    icon: <GithubLogo size={18} />,
    iconName: "<GithubLogo size={18} />",
    className: "btn-github text-white",
  },
  {
    icon: <InstagramLogo size={18} />,
    iconName: "<InstagramLogo size={18} />",
    className: "btn-skype text-white",
  },
  {
    icon: <SnapchatLogo size={18} />,
    iconName: "<SnapchatLogo size={18} />",
    className: "btn-snapchat text-dark",
  },
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
type ButtonGroupType = {
  primaryVariant: string;
  secondaryVariant: string;
};

const activeButtonGroups: ButtonGroupType[] = [
  {
    primaryVariant: "primary",
    secondaryVariant: "secondary",
  },
  {
    primaryVariant: "outline-primary",
    secondaryVariant: "outline-secondary",
  },
  {
    primaryVariant: "light-primary",
    secondaryVariant: "light-secondary",
  },
];
type LoadingButtonType = {
  variant: string;
  content: React.ReactNode;
  className?: string;
};
const loadingButtons: LoadingButtonType[][] = [
  [
    {
      variant: "primary",
      className: "d-inline-flex-center",
      content: (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </>
      ),
    },
    {
      variant: "secondary",
      className: "d-inline-flex-center",
      content: (
        <>
          Wait...
          <span
            className="spinner-border spinner-border-sm ms-2"
            role="status"
            aria-hidden="true"
          />
        </>
      ),
    },
    {
      variant: "success",
      className: "icon-btn",
      content: (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </>
      ),
    },
    {
      variant: "danger",
      className: "icon-btn",
      content: (
        <>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </>
      ),
    },
  ],
  [
    {
      variant: "light-primary",
      className: "d-inline-flex-center",
      content: (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </>
      ),
    },
    {
      variant: "light-secondary",
      className: "d-inline-flex-center",
      content: (
        <>
          Wait...
          <span
            className="spinner-border spinner-border-sm ms-2"
            role="status"
            aria-hidden="true"
          />
        </>
      ),
    },
    {
      variant: "light-success",
      className: "icon-btn",
      content: (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </>
      ),
    },
    {
      variant: "light-danger",
      className: "icon-btn",
      content: (
        <>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </>
      ),
    },
  ],
  [
    {
      variant: "outline-primary",
      className: "d-inline-flex-center",
      content: (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </>
      ),
    },
    {
      variant: "outline-secondary",
      className: "d-inline-flex-center",
      content: (
        <>
          Wait...
          <span
            className="spinner-border spinner-border-sm ms-2"
            role="status"
            aria-hidden="true"
          />
        </>
      ),
    },
    {
      variant: "outline-success",
      className: "icon-btn",
      content: (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </>
      ),
    },
    {
      variant: "outline-danger",
      className: "icon-btn",
      content: (
        <>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </>
      ),
    },
  ],
];

const IconSocialButtons = () => {
  const [ uiState, setUiState ] = useState({
    openIconBtn : false,
    openSocialBtn : false,
    openIconButton : false,
    openActiveButton : false,
    openLoadingButton : false
  })

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Row className="g-3">
        {/* Icon Button */}
        <Col xl={4}>
          <Card>
            <Card.Header className="code-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Icon Buttons</h5>
              <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openIconBtn : !uiState.openIconBtn }))}>
                <Code size={30} weight="bold" className="source" />
              </a>
            </Card.Header>
            <Card.Body>
              <div className="app-btn-list d-flex flex-wrap gap-2">
                {iconButtons.map((btn, index) => (
                  <Button
                    key={index}
                    type="button"
                    className={`btn ${btn.className} icon-btn b-r-4`}
                  >
                    {btn.icon}
                  </Button>
                ))}
              </div>
              <Collapse in={uiState.openIconBtn}>
                <pre className="language-html mt-3">
                  <code className="language-html">
                    {`<div className="app-btn-list">
${iconButtons
  .map(
    (
      btn
    ) => `  <Button type="button" className="btn ${btn.className} icon-btn b-r-4">
    ${btn.iconName}
  </Button>`
  )
  .join("\n")}
</div>`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        {/* Social Buttons */}
        <Col xl={8}>
          <Card>
            <Card.Header className="code-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Social Buttons</h5>
              <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openSocialBtn : !uiState.openSocialBtn }))}>
                <Code size={30} weight="bold" className="source" />
              </a>
            </Card.Header>
            <Card.Body>
              <div className="app-btn-list d-flex flex-wrap gap-2">
                {socialButtons.map((btn, index) => (
                  <Button
                    key={index}
                    type="button"
                    className={`btn ${btn.className} icon-btn b-r-22`}
                  >
                    {btn.icon}
                  </Button>
                ))}
              </div>
              <Collapse in={uiState.openSocialBtn}>
                <pre className="language-jsx mt-3">
                  <code className="language-jsx">
                    {`<div className="app-btn-list">
${socialButtons
  .map(
    (
      btn
    ) => `  <Button type="button" className="btn ${btn.className} icon-btn b-r-22">
    ${btn.iconName}
  </Button>`
  )
  .join("\n")}
</div>`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Diaable Button  Card */}
      <div className="col-12">
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Disable Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openIconButton : !uiState.openIconButton }))}>
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
                        className="d-inline-flex align-items-center gap-1 opacity-50"
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
    <h5>Disable Buttons</h5>
  </Card.Header>
  <Card.Body>
        <div className="d-flex flex-wrap justify-content-between  gap-3">
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

      <div className="col-12">
        <Card>
          <Card.Header className="d-flex justify-content-between  code-header">
            <h5>Active Buttons</h5>
            <a role="button" onClick={() => setUiState((prev) => ({ ...prev,openActiveButton : !uiState.openActiveButton }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Row>
              {activeButtonGroups.map((group, idx) => (
                <Col
                  md={6}
                  lg={4}
                  xs={12}
                  className="mb-3 app-btn-list"
                  key={idx}
                >
                  <Button
                    variant={group.primaryVariant}
                    active
                    className="me-2"
                  >
                    <Download size={16} className="me-1" />
                    Primary
                  </Button>
                  <Button
                    variant={group.secondaryVariant}
                    active
                    className="d-lg-inline-flex align-items-center"
                  >
                    Secondary <Warning size={16} className="ms-2" />
                  </Button>
                </Col>
              ))}
            </Row>

            <Collapse in={uiState.openActiveButton}>
              <pre className="mt-3 language-html" id="activebuttonexample">
                <code className="language-html">
                  {`<Card>
  <Card.Header>
    <h5>Outline Buttons</h5>
  </Card.Header>
  <Card.Body>
        <div className="d-flex flex-wrap justify-content-between gap-3">
  ${activeButtonGroups
    .map(
      (group) => `  <div className="col-md-6 col-lg-4 col-12 mb-3 app-btn-list">
    <Button variant="${group.primaryVariant}" active className="d-inline-flex align-items-center gap-1 me-2">
      <Download size={16} /> Primary
    </Button>
    <Button variant="${group.secondaryVariant}" active className="d-lg-inline-flex align-items-center gap-1">
      Secondary <Warning size={16} />
    </Button>
  </div>`
    )
    .join("\n")}
</div>             
  </Card.Body>
</Card>`}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header className="d-flex justify-content-between  code-header">
            <h5>Loading Buttons</h5>
            <a
              role="button"
              onClick={() => setUiState((prev) => ({ ...prev,openLoadingButton : !uiState.openLoadingButton }))}
            >
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Row className="g-3">
              <Col lg={10}>
                <div className="d-flex flex-row flex-wrap justify-content-between gap-3">
                  {loadingButtons.map((row, rowIndex) => (
                    <div key={rowIndex} className="d-flex gap-2 flex-wrap">
                      {row.map((btn, i) => (
                        <Button
                          key={i}
                          variant={btn.variant}
                          className={`${btn.className} d-flex gap-2`}
                          type="button"
                        >
                          {btn.content}
                        </Button>
                      ))}
                    </div>
                  ))}
                </div>
              </Col>
            </Row>

            <Collapse in={uiState.openLoadingButton}>
              <pre className="mt-3 language-html" id="activebuttonexample">
                <code className="language-html">
                  {`<Card>
  <Card.Header>
    <h5>Loading Buttons</h5>
  </Card.Header>
  <Card.Body>
           <Row className="g-3">
    <Col lg={10}>
    <div className="d-flex flex-row flex-wrap justify-content-between gap-3">
    ${loadingButtons[0]
      .map((_, rowIndex) => {
        const row = loadingButtons.map((group) => group[rowIndex]);
        return `      <div className="d-flex gap-2">
${row
  .map(
    (
      btn
    ) => `        <Button variant="${btn.variant}" className="${btn.className} d-flex align-items-center gap-2" type="button">
          ${
            btn.variant.includes("danger") || btn.variant.includes("success")
              ? `<span class="${
                  btn.variant.includes("grow")
                    ? "spinner-grow spinner-grow-sm"
                    : "spinner-border spinner-border-sm"
                }" role="status" aria-hidden="true"></span>
          <span class="visually-hidden">Loading...</span>`
              : btn.variant.includes("secondary")
                ? `Wait... <span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>`
                : `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Loading...`
          }
        </Button>`
  )
  .join("\n")}
      </div>`;
      })
      .join("\n\n")}
    </div>
    </Col>
    </Row>  
  </Card.Body>
</Card>`}
                </code>
              </pre>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default IconSocialButtons;
