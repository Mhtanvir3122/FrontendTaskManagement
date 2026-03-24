import { FC, ReactNode } from "react";

type TableRowProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const TableRow: FC<TableRowProps> = ({ children, onClick, className }) => {
  return (
    <tr onClick={onClick} className={className}>
      {children}
    </tr>
  );
};
