import React, { useEffect, useRef } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

export interface Column<T> {
  key: keyof T ;
  header: string | React.ReactNode;
  render?: <K extends keyof T>(data: T[K], item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  rowKey?: keyof T;
  title?: string;
  description?: string | React.ReactNode;
  showTitle?: boolean;
  showDescription?: boolean;
  columns: Column<T>[];
  data: T[];
  showActions?: boolean;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  className?: string;
  cardClassName?: string;
  tableClassName?: string;
  enableSearch?: boolean;
  enablePagination?: boolean;
  pageLength?: number;
  showLengthMenu?: boolean;
  showFooter?: boolean;
  footerData?: T[];
  footerColumns?: Column<T>[];
}

const CustomDataTable = <T extends Record<string, unknown>>({
  rowKey = "id" as keyof T,
  title = "Default Datatable",
  description = "DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function.",
  showTitle = true,
  showDescription = true,
  columns,
  data,
  showActions = true,
  onEdit,
  onDelete,
  className = "",
  cardClassName = "",
  tableClassName = "w-100 align-middle mb-0",
  pageLength = 10,
  showLengthMenu = true,
  showFooter = false,
  footerData = [],
  footerColumns = [],
}: DataTableProps<T>) => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      const dt = new DataTable(tableRef.current, {
        dom: showLengthMenu
          ? `
          <"dt-layout-top"<"dt-layout-row"<"dt-layout-cell dt-layout-start"l><"dt-layout-cell dt-layout-end"f>>>
          <"dt-layout-middle"tr>
          <"dt-layout-bottom"<"dt-layout-row"<"dt-layout-cell dt-layout-start"i><"dt-layout-cell dt-layout-end"p>>>
        `
          : `
          <"dt-layout-top"<"dt-layout-row"<"dt-layout-cell dt-layout-end"f>>>
          <"dt-layout-middle"tr>
          <"dt-layout-bottom"<"dt-layout-row"<"dt-layout-cell dt-layout-start"i><"dt-layout-cell dt-layout-end"p>>>
        `,
        pagingType: "full_numbers",
        pageLength: pageLength,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search...",
          lengthMenu: "Show _MENU_ entries",
          info: "Showing _START_ to _END_ of _TOTAL_ entries",
          infoEmpty: "Showing 0 to 0 of 0 entries",
          infoFiltered: "(filtered from _MAX_ total entries)",
        },
      });

      return () => {
        dt.destroy();
      };
    }
  }, [data, pageLength, showLengthMenu]);

  return (
    <div className={className}>
      <Card className={cardClassName}>
        {(showTitle || showDescription) && (
          <Card.Header>
            {showTitle && <h5>{title}</h5>}
            {showDescription && description && <p>{description}</p>}
          </Card.Header>
        )}

        <Card.Body className="p-0">
          <div
            className={`app-scroll table-responsive ${className ? className : ""} app-datatable-default cursor-pointer`}
          >
            <Table ref={tableRef} striped hover className={tableClassName}>
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={`${String(column.key)}-${index}`} className={column.className}>
                      {column.header}
                    </th>
                  ))}
                  {showActions && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={String(item[rowKey])}>
                    {columns.map((column, colIndex) => (
                      <td key={`${String(item[rowKey])}-${String(column.key)}-${colIndex}`}>
                        {column.render
                          ? column.render(item[column.key], item)
                          : (item[column.key] as React.ReactNode)}
                      </td>
                    ))}
                    {showActions && (
                      <td>
                        {onEdit && (
                          <Button
                            variant="light-success"
                            className="me-2 p-1"
                            size="sm"
                            onClick={() => onEdit(item)}
                          >
                            <IconEdit size={18} className="text-success" />
                          </Button>
                        )}
                        {onDelete && (
                          <Button
                            variant="light-danger"
                            className="p-1 delete-btn"
                            size="sm"
                            onClick={() => onDelete(item)}
                          >
                            <IconTrash size={18} className="text-danger" />
                          </Button>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
              {showFooter && (
                <tfoot>
                  <tr>
                    {footerColumns.length > 0
                      ? footerColumns.map((column, index) => (
                          <th
                            key={`footer-${String(column.key)}-${index}`}
                            className={column.className}
                          >
                            {column.header}
                          </th>
                        ))
                      : columns.map((column, index) => (
                          <th
                            key={`footer-${String(column.key)}-${index}`}
                            className={column.className}
                          >
                            {column.header}
                          </th>
                        ))}
                    {showActions && <th>Action</th>}
                  </tr>
                  {footerData.map((item, index) => (
                    <tr key={`footer-row-${index}`}>
                      {footerColumns.length > 0
                        ? footerColumns.map((column, colIndex) => (
                            <td key={`footer-${String(column.key)}-${index}-${colIndex}`}>
                              {column.render
                                ? column.render(item[column.key], item)
                                : (item[column.key] as React.ReactNode)}
                            </td>
                          ))
                        : columns.map((column, colIndex) => (
                            <td key={`footer-${String(column.key)}-${index}-${colIndex}`}>
                              {column.render
                                ? column.render(item[column.key], item)
                                : (item[column.key] as React.ReactNode)}
                            </td>
                          ))}
                      {showActions && <td></td>}
                    </tr>
                  ))}
                </tfoot>
              )}
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomDataTable;