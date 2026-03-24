
import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import ReactDropdown from "react-bootstrap/Dropdown";
import "./dropdown.scss";

type IDropdown = {
  children: string | ReactNode | any;
  btnContent: ReactNode | string;
  className?: string;
  id?: string;
  position?: "static" | "relative";
  isDisabled?: boolean;
};

type TriggerProps = {
  onClick?: () => void;
  children: string | number | ReactNode;
};

const CustomToggle = React.forwardRef<any, TriggerProps>(({ onClick, children }, ref) => (
  <div ref={ref} onClick={onClick}>
    {children}
  </div>
));

const Dropdown: FC<IDropdown> = ({
  children,
  className,
  btnContent,
  id,
  position = "static",
  isDisabled,
}) => {
  return (
    <ReactDropdown style={{ position }} className={clsx(className)}>
      <ReactDropdown.Toggle
        id={id || generateId()?.toString()}
        as={CustomToggle}
        disabled={isDisabled}
      >
        {btnContent}
      </ReactDropdown.Toggle>

      <ReactDropdown.Menu>
        <div className="menu-wrapper" >{children}</div>
      </ReactDropdown.Menu>
    </ReactDropdown>
  );
};

export { Dropdown };
export const generateId = (): number => {
  return Date.now(); 
};