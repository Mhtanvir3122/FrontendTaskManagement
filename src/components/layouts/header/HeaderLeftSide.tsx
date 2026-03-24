import React from "react";
import { Form } from "react-bootstrap";

import { MagnifyingGlass, SquaresFour } from "phosphor-react";

import { SidebarProps } from "@/components/layouts/sidebar/Sidebar.tsx";

const HeaderLeftSide: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      <span
        className="header-toggle cursor-pointer"
        onClick={() => setSidebarOpen?.(!sidebarOpen)}
      >
        <SquaresFour size={24} weight="regular" />
      </span>

      <div className="header-searchbar w-100">
        <Form className="mx-sm-3 app-form app-icon-form">
          <div className="position-relative">
            <Form.Control
              aria-label="Search"
              placeholder="Search..."
              type="search"
              className="form-control"
            />
            <MagnifyingGlass size={18} className=" me-2 text-dark" />
          </div>
        </Form>
      </div>
    </>
  );
};

export default HeaderLeftSide;
