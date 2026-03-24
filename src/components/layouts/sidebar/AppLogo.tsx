import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IconChevronRight, IconSettings } from "@tabler/icons-react";

interface AppLogoProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: (isOpen: boolean) => void;
}

export const AppLogo: React.FC<AppLogoProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = (isOpen: boolean) => setDropdownOpen(isOpen);

  return (
    <div className="app-logo">
      <Link className="logo d-inline-block" to="/">
        <img alt="Logo" src="/images/logo/1.png" />
      </Link>

      <span
        className="bg-light-primary toggle-semi-nav d-flex-center"
        onClick={() => setSidebarOpen?.(!sidebarOpen)}
      >
        <IconChevronRight size={16} />
      </span>

      <div className="d-flex align-items-center nav-profile p-3">
        <span className="h-45 w-45 d-flex-center b-r-10 position-relative bg-danger m-auto">
          <img
            alt="avatar"
            className="img-fluid b-r-10"
            src="/images/avatar/woman.jpg"
          />
          <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle" />
        </span>

        <div className="flex-grow-1 ps-2">
          <h6 className="text-primary mb-0">Ninfa Monaldo</h6>
          <p className="text-muted f-s-12 mb-0">Web Developer</p>
        </div>

        <Dropdown
          show={dropdownOpen}
          onToggle={toggle}
          className="profile-menu-dropdown dropdown-icon-none"
        >
          <Dropdown.Toggle className="p-0" variant="white">
            <IconSettings size={20} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item as={Link} to="/apps/profile-page/profile" target="_blank">
              <i className="ph-duotone ph-user-circle pe-1 f-s-20"></i> Profile
              Details
            </Dropdown.Item>

            <Dropdown.Item as={Link} to="/apps/profile-page/setting" target="_blank">
              <i className="ph-duotone ph-gear pe-1 f-s-20"></i> Settings
            </Dropdown.Item>

            <Dropdown.Item as="div">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <Link className="f-w-500" to="#">
                    <i className="ph-duotone ph-detective pe-1 f-s-20"></i>{" "}
                    Incognito
                  </Link>
                </div>
                <div className="flex-shrink-0">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input form-check-primary"
                      id="incognitoSwitch"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
            </Dropdown.Item>

            <Dropdown.Item
              as={Link}
              className="mb-0 text-secondary f-w-500"
              to="/auth-pages/sign-up"
              target="_blank"
            >
              <i className="ph-bold ph-plus pe-1 f-s-20"></i> Add account
            </Dropdown.Item>

            <Dropdown.Item className="app-divider-v dotted py-1" />

            <Dropdown.Item
              as={Link}
              className="mb-0 text-danger"
              to="/auth-pages/sign-in"
              target="_blank"
            >
              <i className="ph-duotone ph-sign-out pe-1 f-s-20"></i> Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
