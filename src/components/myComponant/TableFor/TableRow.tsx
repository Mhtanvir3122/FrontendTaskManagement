// import { FC, ReactNode } from "react";

// type TableRowProps = {
//   children: ReactNode;
//   onClick?: () => void;
//   className?: string;
// };

// export const TableRow: FC<TableRowProps> = ({ children, onClick, className }) => {
//   return (
//     <tr onClick={onClick} className={className}>
//       {children}
//     </tr>
//   );
// };

import { FC, ReactNode, useState } from "react";
import Icon from "../Icon";

type TableRowProps = {
  children: ReactNode;
  details?: ReactNode;
  className?: string;
};

export const TableRow: FC<TableRowProps> = ({
  children,
  details,
  className,
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (details) setOpen(!open);
  };

  return (
    <>
      {/* Main Row */}
      <tr  className={className} style={{ cursor: "pointer" }}>
        <td style={{ width: "30px" }}>
          {details && (
            <Icon
            icon="expand_circle_down"
              size={16}
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.2s",
              }}
              onClick={toggle}
            />
          )}
        </td>

        {children}
      </tr>

      {/* Details Row */}
      {open && details && (
        <tr>
          <td colSpan={100}>
          <div className=""> {details}</div> 
          </td>
        </tr>
      )}
    </>
  );
};