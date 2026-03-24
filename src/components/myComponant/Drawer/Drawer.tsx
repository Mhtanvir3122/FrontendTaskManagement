import React from "react";

import IconFontAwesome from "@/components/myComponant/IconfontAwesome";

import "./Drawer.scss";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "xl";
  children?: React.ReactNode;
  title?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  size = "md",
  children,
  title,
}) => {
  return (
    <div className={`drawer-overlay ${isOpen ? "open" : ""}`}>
      <div className={`drawer ${size} ${isOpen ? "open" : ""}`}>
        <div
          className="d-flex justify-content-between"
          style={{
            height: 65,
            borderBottom: "1px solid #eee",
            backgroundColor: "#819a9118",
          }}
        >
          <div className="d-flex justify-content-start align-items-center gap-2 p-1">
            <div>
              <IconFontAwesome
                iconName="faArrowLeft"
                onClick={onClose}
                size="xl"
              />
            </div>

            <h5 className="m-0">{title}</h5>
          </div>

          <div className="d-flex justify-content-start align-items-center gap-2 p-1">
            <IconFontAwesome
              iconName="faXmarkCircle"
              onClick={onClose}
              size="xl"
              color="#D84040"
            />
          </div>
        </div>
        <div className="drawer__content p-4 ">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
