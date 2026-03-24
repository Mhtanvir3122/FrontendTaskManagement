import React, { SetStateAction } from "react";
import { Card, Nav } from "react-bootstrap";

import {
  IconClipboardData,
  IconPhotoHeart,
  IconTimeline,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import classNames from "classnames";

interface ProfileTabTypes {
  data: string;
  setData: React.Dispatch<SetStateAction<string>>;
}

const tabs = [
  { id: "1", label: "Profile", icon: <IconUser size={18} /> },
  {
    id: "2",
    label: "Activities",
    icon: <IconTimeline size={18} />,
    badge: "10+",
  },
  { id: "3", label: "Projects", icon: <IconClipboardData size={18} /> },
  { id: "4", label: "Post", icon: <IconPhotoHeart size={18} /> },
  { id: "5", label: "Friends", icon: <IconUsers size={18} /> },
];

const ProfileTabs: React.FC<ProfileTabTypes> = ({ data, setData }) => {
  return (
    <Card>
      <Card.Body>
        <Nav variant="tabs" className="profile-app-tabs border-0 mb-0 pb-0">
          {tabs.map((tab) => (
            <Nav.Item key={tab.id} className="w-100 d-flex">
              <Nav.Link
                className={classNames(
                  "tab-link fw-medium f-s-16 f-w-600 w-100 d-block",
                  {
                    active: data === tab.id,
                  }
                )}
                onClick={() => setData(tab.id)}
              >
                {tab.icon}
                <span className="ms-1">
                  {tab.label}
                  {tab.badge && (
                    <span className="badge bg-warning rounded-pill badge-notification ms-2">
                      {tab.badge}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
                </span>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default ProfileTabs;
