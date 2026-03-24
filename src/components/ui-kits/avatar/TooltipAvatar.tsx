import React, { useState, useEffect } from "react";
import { Card, Col, Collapse, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Code } from "@phosphor-icons/react";
import { StyledAvatar } from "@/components/common/StyledComponent";

import { User } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

const avatarGroups = [
  {
    tooltipAvatars: [
      {
        id: "Tooltip1",
        src: "/images/avatar/4.png",
        tooltip: "Hello from Tooltip 1!",
        bg: "primary",
      },
      {
        id: "Tooltip2",
        src: "/images/avatar/5.png",
        tooltip: "Hello from Tooltip 2!",
        bg: "success",
      },
      {
        id: "Tooltip3",
        src: "/images/avatar/6.png",
        tooltip: "Hello from Tooltip 3!",
        bg: "danger",
      },
    ],
  },
  {
    tooltipIcons: [
      {
        id: "Tooltip4",
        icon: <User size={18} weight="fill" />,
        tooltip: "Hello from Tooltip 4!",
        bg: "primary",
      },
      {
        id: "Tooltip5",
        icon: <User size={18} weight="fill" />,
        tooltip: "Hello from Tooltip 5!",
        bg: "secondary",
      },
      {
        id: "Tooltip6",
        icon: <User size={18} weight="fill" />,
        tooltip: "Hello from Tooltip 6!",
        bg: "success",
      },
    ],
  },
  {
    tooltipText: [
      {
        id: "Tooltip7",
        text: "A",
        tooltip: "Hello from Tooltip 7!",
        bg: "danger",
      },
      {
        id: "Tooltip8",
        text: "CD",
        tooltip: "Hello from Tooltip 8!",
        bg: "dark",
      },
      {
        id: "Tooltip9",
        text: "XYZ",
        tooltip: "Hello from Tooltip 9!",
        bg: "warning",
      },
      {
        id: "Tooltip10",
        text: "2+",
        tooltip: "2 more",
        bg: "secondary",
        size: "30",
      },
    ],
  },
];

const AvatarGroup: React.FC = () => {
  const [openAvtar, setOpenAvtar] = useState(false);

  useEffect(() => {
    if (Prism) {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Col md={7}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">Group with Tooltip</h5>
            <p className="text-muted mb-0">User group with tooltip</p>
          </div>
          <a onClick={() => setOpenAvtar(!openAvtar)}>
            <Code size={30} weight="bold" className=" source" />
          </a>
        </Card.Header>

        <Card.Body>
          <div className="d-flex gap-3 flex-wrap">
            {avatarGroups.map((group, groupIndex) => (
              <ul className="avatar-group d-flex gap-2" key={groupIndex}>
                {group.tooltipAvatars?.map((a) => (
                  <OverlayTrigger
                    key={a.id}
                    placement="top"
                    overlay={<Tooltip id={a.id}>{a.tooltip}</Tooltip>}
                  >
                    <li>
                      <StyledAvatar
                        src={a.src}
                        alt={`Avatar for ${a.tooltip}`}
                        size="md"
                        variant="image"
                        bgColor={a.bg}
                        className="overflow-hidden"
                      />
                    </li>
                  </OverlayTrigger>
                ))}

                {group.tooltipIcons?.map((a) => (
                  <OverlayTrigger
                    key={a.id}
                    placement="top"
                    overlay={<Tooltip id={a.id}>{a.tooltip}</Tooltip>}
                  >
                    <li>
                      <StyledAvatar
                        size="md"
                        variant="icon"
                        bgColor={a.bg}
                        icon={a.icon}
                        className="text-white"
                      />
                    </li>
                  </OverlayTrigger>
                ))}

                {group.tooltipText?.map((a) => (
                  <OverlayTrigger
                    key={a.id}
                    placement="top"
                    overlay={<Tooltip id={a.id}>{a.tooltip}</Tooltip>}
                  >
                    <li>
                      <StyledAvatar
                        size={a.size ? (a.size as any) : "md"}
                        variant="text"
                        bgColor={a.bg}
                        text={a.text}
                        className="text-white"
                      />
                    </li>
                  </OverlayTrigger>
                ))}
              </ul>
            ))}
          </div>
        </Card.Body>

        <Collapse in={openAvtar}>
          <pre className="language-html mb-0">
            <code className="language-html">
              {`<ul className="avatar-group d-flex gap-2">
  <li className="rounded-circle bg-primary">
    <img src="/images/avatar/4.png" alt="" className="img-fluid" />
  </li>
  <li className="rounded-circle bg-success">
    <img src="/images/avatar/5.png" alt="" className="img-fluid" />
  </li>
  ...
</ul>`}
            </code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default AvatarGroup;
