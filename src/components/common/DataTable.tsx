import { ReactNode } from "react";

export interface Column<T> {
  title: string;
  data: keyof T;
  render?: (data: T[keyof T], type: "display", row: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

const DataTable = <T extends { id?: string | number }>({
  columns,
  data,
  className = "",
  header,
  footer,
}: DataTableProps<T>) => {
  return (
    <div className={`table-responsive ${className}`}>
      {header && <div className="datatable-header">{header}</div>}
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={column.className}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id ?? rowIndex}>
              {columns.map((column, colIndex) => {
                const value = row[column.data];
                return (
                  <td key={colIndex} className={column.className}>
                    {column.render
                      ? column.render(value, "display", row)
                      : (value as ReactNode)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.title}</th>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default DataTable;
