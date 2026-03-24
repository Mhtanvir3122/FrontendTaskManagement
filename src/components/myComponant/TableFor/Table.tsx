import { FC, ReactNode } from "react";

export interface ITableHeadColumn {
  title: string;
  minWidth?: number;
  width?: number;
  className?: string;
}

type TableProps = {
  columns: ITableHeadColumn[];
  children: ReactNode;
  className?: string;
};

export const Table: FC<TableProps> = ({ columns, children, className }) => {
  return (
        <div className="table-responsive">
      <table  className={`table table-bottom-border table-hover align-middle mb-0 ${className || ""}`}>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                style={{
                  minWidth: col.minWidth,
                  width: col.width,
                }}
                className={col.className}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
