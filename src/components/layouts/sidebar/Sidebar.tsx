import React, { Fragment, useEffect, useRef, useState } from "react";

import { MenuList } from "@/data/sidebar/sidebar.ts";
import Scrollbar from "simplebar-react";

import { AppLogo } from "@/components/layouts/sidebar/AppLogo.tsx";
import HorizontalNav from "@/components/layouts/sidebar/HorizontalNav.tsx";

import MenuItem from "./MenuItem";

export interface SidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navRef = useRef<HTMLUListElement | null>(null);
  const [navTranslateX, setNavTranslateX] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);

    useEffect(() => {
    const getSidebarOption = () => {
      if (typeof window === "undefined") return "vertical-sidebar";
      return localStorage.getItem("Ki-Admin-React-Theme-sidebar-option");
    };

    const checkSidebarOption = () => {
      const option = getSidebarOption();
      setIsHorizontal(option === "horizontal-sidebar");
    };

    checkSidebarOption();

    const interval = setInterval(checkSidebarOption, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={`vertical-sidebar ${sidebarOpen ? "semi-nav" : ""}`}>
      <AppLogo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Scrollbar className="app-nav simplebar-scrollable-y">
        <ul className="main-nav p-0 mt-2" 
            style={{ marginLeft: isHorizontal ? `${navTranslateX}px` : "0px",
                      transition: isHorizontal ? "margin-left 0.3s ease" : "none", 
            }} ref={navRef}>
          {MenuList.map((opt, index) => (
            <Fragment key={index}>
              <MenuItem
                title={opt.title}
                type={opt.type}
                path={opt.path}
                name={opt.name}
                iconClass={opt.iconClass}
                badgeCount={opt.badgeCount}
                links={opt.children}
                collapseId={opt.collapseId}
              />
            </Fragment>
          ))}
        </ul>
      </Scrollbar>
      <HorizontalNav navRef={navRef} onScroll={setNavTranslateX}/>
    </nav>
  );
};

export default Sidebar;
