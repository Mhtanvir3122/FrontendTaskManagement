import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  BoundingBox,
  Calendar,
  ChatCircleText,
  Envelope,
  FolderOpen,
  GooglePhotosLogo,
  IconProps,
  Notebook,
  Plus,
  ProjectorScreenChart,
  Scroll,
  SelectionForeground,
  ShoppingBagOpen,
  UsersThree,
} from "phosphor-react";

type AppItem = {
  path: string;
  Icon: React.FC<IconProps>;
  label: string;
  colorClass: string;
};

const apps: AppItem[] = [
  {
    path: "/apps/e-shop/add-product",
    Icon: ShoppingBagOpen,
    label: "E-shop",
    colorClass: "text-light-primary",
  },
  {
    path: "/apps/email-page/email",
    Icon: Envelope,
    label: "Email",
    colorClass: "text-light-danger",
  },
  {
    path: "/apps/chat",
    Icon: ChatCircleText,
    label: "Chat",
    colorClass: "text-light-success",
  },
  {
    path: "/apps/projects-page/projects",
    Icon: ProjectorScreenChart,
    label: "Project",
    colorClass: "text-light-warning",
  },
  {
    path: "/apps/invoice",
    Icon: Scroll,
    label: "Invoice",
    colorClass: "text-light-info",
  },
  {
    path: "/apps/blog-page/blog",
    Icon: Notebook,
    label: "Blog",
    colorClass: "text-light-dark",
  },
  {
    path: "/apps/calendar",
    Icon: Calendar,
    label: "calendar",
    colorClass: "text-light-danger",
  },
  {
    path: "/apps/file-manager",
    Icon: FolderOpen,
    label: "File Manager",
    colorClass: "text-light-warning",
  },
  {
    path: "/apps/gallery",
    Icon: GooglePhotosLogo,
    label: "Gallery",
    colorClass: "text-light-primary",
  },
  {
    path: "/apps/profile-page/profile",
    Icon: UsersThree,
    label: "Profile",
    colorClass: "text-light-success",
  },
  {
    path: "/apps/kanban-board",
    Icon: SelectionForeground,
    label: "Task Board",
    colorClass: "text-light-secondary",
  },
];

const HeaderApps: React.FC = () => {
  const [isAppsOpen, setAppsOpen] = useState(false);

  const toggleApps = () => setAppsOpen(!isAppsOpen);

  return (
    <>
      <Button
        onClick={toggleApps}
        variant="link"
        className="d-block head-icon bg-light-dark rounded-circle f-s-22 p-2"
      >
        <BoundingBox size={22} weight="light" />
      </Button>

      <Offcanvas
        show={isAppsOpen}
        onHide={toggleApps}
        placement="end"
        className="apps-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Apps</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row row-cols-3 g-2">
            {apps.map(({ path, Icon, label, colorClass }) => (
              <div key={label} className="d-flex-center text-center">
                <Link
                  to={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${colorClass} w-100 rounded-3 py-3 px-2`}
                >
                  <span>
                    <Icon size={30} weight="light" />
                  </span>
                  <p className="mb-0 f-w-500 text-dark txt-ellipsis-1">
                    {label}
                  </p>
                </Link>
              </div>
            ))}

            <div className="d-flex-center text-center">
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex-center text-light-secondary w-100 h-100 rounded-3 p-2 dashed-1-secondary"
              >
                <Plus size={30} weight="light" />
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderApps;
