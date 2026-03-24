import { useCallback, useEffect, useRef, useState } from "react";
import { Badge, Button, CloseButton, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IconSettings } from "@tabler/icons-react";

const themeName = "Ki-Admin-React-Theme";

const getLocalStorageItem = (key: string, defaultValue: string): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(`${themeName}-${key}`) || defaultValue;
  }
  return defaultValue;
};

const setLocalStorageItem = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(`${themeName}-${key}`, value);
  }
};

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const Customizer = () => {
  const [sidebarOption, setSidebarOption] = useState("vertical-sidebar");
  const [layoutOption, setLayoutOption] = useState("ltr");
  const [colorOption, setColorOption] = useState("default");
  const [textOption, setTextOption] = useState("medium-text");
  const [show, setShow] = useState(false);

  const bodyRef = useRef<HTMLBodyElement | null>(null);
  const htmlRef = useRef<HTMLHtmlElement | null>(null);
  const navElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const mainNavRef = useRef<HTMLElement | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    bodyRef.current = document.body as HTMLBodyElement;
    htmlRef.current = document.documentElement as HTMLHtmlElement;
    navElementsRef.current = document.querySelectorAll("nav");
    mainNavRef.current = document.querySelector(".main-nav");
    setSidebarOption(getLocalStorageItem("sidebar-option", "vertical-sidebar"));
    setLayoutOption(getLocalStorageItem("layout-option", "ltr"));
    setColorOption(getLocalStorageItem("color-option", "default"));
    setTextOption(getLocalStorageItem("text-option", "medium-text"));
  }, []);

  useEffect(() => {
    if (!navElementsRef.current || !mainNavRef.current) return;

    navElementsRef.current.forEach((nav) => {
      nav.className = nav.className
        .replace(/\bdark-sidebar\b/g, "")
        .replace(/\bhorizontal-sidebar\b/g, "")
        .replace(/\bvertical-sidebar\b/g, "")
        .trim();

      if (sidebarOption) {
        nav.className = nav.className
          ? `${nav.className} ${sidebarOption}`
          : sidebarOption;
      }
    });

    if (sidebarOption === "horizontal-sidebar") {
      mainNavRef.current.style.marginLeft = "0px !important";
      mainNavRef.current.style.marginRight = "0px";
    }
  }, [sidebarOption]);

  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.setAttribute("text", textOption);
  }, [textOption]);

  useEffect(() => {
    if (!bodyRef.current || !htmlRef.current) return;

    const currentClasses = bodyRef.current.className || "";
    const updatedClasses = currentClasses
      .replace(/\bltr\b/g, "")
      .replace(/\brtl\b/g, "")
      .replace(/\bbox-layout\b/g, "")
      .trim();

    bodyRef.current.className = updatedClasses
      ? `${updatedClasses} ${layoutOption}`
      : layoutOption;

    if (layoutOption === "box-layout") {
      htmlRef.current.removeAttribute("dir");
    } else {
      htmlRef.current.setAttribute("dir", layoutOption);
    }
  }, [layoutOption]);

  useEffect(() => {
    if (!bodyRef.current) return;

    const currentClasses = bodyRef.current.className || "";
    const updatedClasses = currentClasses
      .replace(/\bdefault\b/g, "")
      .replace(/\bgold\b/g, "")
      .replace(/\bwarm\b/g, "")
      .replace(/\bhappy\b/g, "")
      .replace(/\bnature\b/g, "")
      .replace(/\bhot\b/g, "")
      .trim();

    bodyRef.current.className = updatedClasses
      ? `${updatedClasses} ${colorOption}`
      : colorOption;
  }, [colorOption]);

  const handleSidebarOptionChange = useCallback((option: string) => {
    setSidebarOption(option);
    setLocalStorageItem("sidebar-option", option);
  }, []);

  const handleLayoutOptionChange = useCallback((option: string) => {
    setLayoutOption(option);
    setLocalStorageItem("layout-option", option);
  }, []);

  const handleColorOptionChange = useCallback((option: string) => {
    setColorOption(option);

    const tempElement = document.createElement("div");
    tempElement.className = option;
    tempElement.style.display = "none";
    document.body.appendChild(tempElement);

    const primaryColorValue = getComputedStyle(tempElement)
      .getPropertyValue("--primary")
      .trim();

    if (primaryColorValue) {
      const primaryColorValues = primaryColorValue.split(",");
      if (primaryColorValues.length === 3) {
        const primaryColorHex = rgbToHex(
          parseInt(primaryColorValues[0] || ""),
          parseInt(primaryColorValues[1] || ""),
          parseInt(primaryColorValues[2] || "")
        );
        setLocalStorageItem("color-primary", primaryColorHex);
      }
    }

    const secondaryColorValue = getComputedStyle(tempElement)
      .getPropertyValue("--secondary")
      .trim();

    if (secondaryColorValue) {
      const secondaryColorValues = secondaryColorValue.split(",");
      if (secondaryColorValues.length === 3) {
        const secondaryColorHex = rgbToHex(
          parseInt(secondaryColorValues[0] || ""),
          parseInt(secondaryColorValues[1] || ""),
          parseInt(secondaryColorValues[2] || "")
        );
        setLocalStorageItem("color-secondary", secondaryColorHex);
      }
    }

    document.body.removeChild(tempElement);
    setLocalStorageItem("color-option", option);
  }, []);

  const handleTextOptionChange = useCallback((option: string) => {
    setTextOption(option);
    setLocalStorageItem("text-option", option);
  }, []);

  const resetCustomizer = useCallback(() => {
    setSidebarOption("dark-sidebar");
    setLayoutOption("ltr");
    setColorOption("default");
    setTextOption("medium-text");

    setLocalStorageItem("sidebar-option", "dark-sidebar");
    setLocalStorageItem("layout-option", "ltr");
    setLocalStorageItem("color-option", "default");
    setLocalStorageItem("text-option", "medium-text");

    if (typeof window !== "undefined") {
      localStorage.clear();
      window.location.reload();
    }
  }, []);

  return (
    <>
      <Button variant="primary" className="customizer-btn" onClick={handleShow}>
        <IconSettings />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="app-customizer"
      >
        <Offcanvas.Header className="flex-wrap bg-primary">
          <Offcanvas.Title className="text-white">
            Admin Customizer
          </Offcanvas.Title>
          <p className="d-block text-white opacity-75 w-100">
            It&#39;s time to style according to your choice!
          </p>
          <CloseButton variant="white" onClick={handleClose} />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="app-divider-v secondary my-3">
            <h6 className="mt-2">Sidebar option</h6>
          </div>
          <ul className="sidebar-option d-flex gap-1">
            <li
              className={sidebarOption === "vertical-sidebar" ? "selected" : ""}
              onClick={() => handleSidebarOptionChange("vertical-sidebar")}
            >
              <ul>
                <li className="header"></li>
                <li className="sidebar"></li>
                <li className="body">
                  <Badge bg="secondary" className="b-r-6">
                    Vertical
                  </Badge>
                </li>
              </ul>
            </li>
            <li
              className={
                sidebarOption === "horizontal-sidebar" ? "selected" : ""
              }
              onClick={() => handleSidebarOptionChange("horizontal-sidebar")}
            >
              <ul>
                <li className="header h-20">
                  <Badge bg="secondary" className="b-r-6">
                    Horizontal
                  </Badge>
                </li>
                <li className="body w-100"></li>
              </ul>
            </li>
            <li
              className={sidebarOption === "dark-sidebar" ? "selected" : ""}
              onClick={() => handleSidebarOptionChange("dark-sidebar")}
            >
              <ul>
                <li className="header"></li>
                <li className="sidebar bg-dark-600"></li>
                <li className="body">
                  <Badge bg="secondary" className="b-r-6">
                    Dark
                  </Badge>
                </li>
              </ul>
            </li>
          </ul>

          <div className="app-divider-v secondary my-3">
            <h6 className="mt-2">Layout option</h6>
          </div>
          <ul className="layout-option d-flex gap-1">
            <li
              className={layoutOption === "ltr" ? "selected" : ""}
              onClick={() => handleLayoutOptionChange("ltr")}
            >
              <ul>
                <li className="header" />
                <li className="sidebar" />
                <li className="body">
                  <Badge bg="secondary" className="b-r-6">
                    LTR
                  </Badge>
                </li>
              </ul>
            </li>
            <li
              className={layoutOption === "rtl" ? "selected" : ""}
              onClick={() => handleLayoutOptionChange("rtl")}
            >
              <ul>
                <li className="header" />
                <li className="body">
                  <Badge bg="secondary" className="b-r-6">
                    RTL
                  </Badge>
                </li>
                <li className="sidebar" />
              </ul>
            </li>
            <li
              className={layoutOption === "box-layout" ? "selected" : ""}
              onClick={() => handleLayoutOptionChange("box-layout")}
            >
              <ul>
                <li className="header" />
                <li className="sidebar" />
                <li className="body">
                  <Badge bg="secondary" className="b-r-6">
                    Box
                  </Badge>
                </li>
              </ul>
            </li>
          </ul>

          <h6 className="mt-3">Color Hint</h6>
          <ul className="color-hint p-0 d-flex gap-1">
            {["default", "gold", "warm", "happy", "nature", "hot"].map(
              (color) => (
                <li
                  key={color}
                  className={
                    (colorOption === color ? "selected" : "") + ` ${color}`
                  }
                  onClick={() => handleColorOptionChange(color)}
                >
                  <div />
                </li>
              )
            )}
          </ul>

          <div className="app-divider-v secondary my-3">
            <h6 className="mt-2 font-primary">Text size</h6>
          </div>
          <ul className="text-size d-flex gap-1">
            {["small-text", "medium-text", "large-text"].map((size) => (
              <li
                key={size}
                className={textOption === size ? "selected" : ""}
                onClick={() => handleTextOptionChange(size)}
              >
                {size.split("-")[0]}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>

        <div className="offcanvas-footer p-3">
          <div className="d-flex gap-2">
            <Button
              variant="danger"
              className="w-100"
              onClick={resetCustomizer}
            >
              Reset
            </Button>
            <Link
              className="btn btn-success w-100"
              to="https://themeforest.net/user/la-themes/portfolio"
              target="_blank"
            >
              Buy Now
            </Link>
          </div>
          <div className="d-flex gap-2 mt-2">
            <Link
              className="btn btn-primary w-100"
              to="mailto:teqlathemes@gmail.com."
            >
              Support
            </Link>
            <Link
              className="btn btn-dark w-100"
              to="https://phpstack-1384472-5121645.cloudwaysapps.com/document/next-ts/axelit/index.html"
            >
              Document
            </Link>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default Customizer;
