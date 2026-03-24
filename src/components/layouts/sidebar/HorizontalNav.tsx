import React, { useEffect, useRef, useState } from "react";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface HorizontalNavProps {
  navRef: React.RefObject<HTMLUListElement | null>;
  onScroll: (translateX: number) => void;
}

const HorizontalNav: React.FC<HorizontalNavProps> = ({ navRef, onScroll }) => {
  const scrollPositionRef = useRef(0);
  const size = 150;

  const getLayout = () => {
    if (typeof window === "undefined") return "ltr";
    const layout = localStorage.getItem("Ki-Admin-React-Theme-layout-option");
    return layout || "ltr";
  };

  const getSidebarOption = () => {
    if (typeof window === "undefined") return "vertical-sidebar";
    return localStorage.getItem("Ki-Admin-React-Theme-sidebar-option");
  };

  const [sidebarOption, setSidebarOption] = useState(() => getSidebarOption());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentOption = getSidebarOption();
      if (currentOption !== sidebarOption) {
        setSidebarOption(currentOption);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [sidebarOption]);
  const scrollNav = (direction: "left" | "right") => {
    const nav = navRef.current;
    if (!nav) return;

    const layout = getLayout();
    const isRTL = layout === "rtl";
    const container = nav.parentElement;
    if (!container) return;

    const containerWidth = container.getBoundingClientRect().width;
    const navWidth = nav.offsetWidth;
    const maxOffset = navWidth - containerWidth;

    let newOffset;

    // In RTL mode, the scroll direction is inverted
    if (isRTL) {
      if (direction === "right") {
        newOffset = Math.max(scrollPositionRef.current - size, -maxOffset);
      } else {
        newOffset = Math.min(scrollPositionRef.current + size, 0);
      }
      nav.style.marginRight = `${newOffset}px`;
    } else {
      if (direction === "left") {
        newOffset = Math.max(scrollPositionRef.current - size, 0);
      } else {
        newOffset = Math.min(scrollPositionRef.current + size, maxOffset);
      }
      nav.style.marginLeft = `-${newOffset}px`;
    }

    const translateX = isRTL ? newOffset : -newOffset;
    onScroll(translateX);
    scrollPositionRef.current = newOffset;
  };

  const layout = getLayout();
  const isRTL = layout === "rtl";

  return (
    <>
      {sidebarOption === "horizontal-sidebar" && (
        <div className="menu-navs">
          <span
            className={`menu-previous ${isRTL ? "rotate-180 float-end" : "float-start"}`}
            onClick={() => scrollNav(isRTL ? "right" : "left")}
          >
            <IconChevronLeft />
          </span>
          <span
            className={`menu-next ${isRTL ? "rotate-180 float-start" : "float-end"}`}
            onClick={() => scrollNav(isRTL ? "left" : "right")}
          >
            <IconChevronRight />
          </span>
        </div>
      )}
    </>
  );
};

export default HorizontalNav;
