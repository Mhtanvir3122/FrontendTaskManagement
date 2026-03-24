import { FC, ReactNode } from "react";
import { Card } from "react-bootstrap";

import { ITableHeadColumn, Table } from "@/components/myComponant/TableFor/Table";
import { TableCell } from "@/components/myComponant/TableFor/TableCell";
import { TableRow } from "@/components/myComponant/TableFor/TableRow";

const columns: ITableHeadColumn[] = [
  { title: "Id", width: 20 },
  { title: "Name", width: 200 },
  { title: "Position", minWidth: 150 },
  { title: "Office", minWidth: 150 },
  { title: "Status", minWidth: 120 },
  { title: "Salary", minWidth: 120 },
  { title: "Contact", minWidth: 150 },
  { title: "Extra Id", minWidth: 120 },
  { title: "Extra Status", minWidth: 120 },
];
interface HoverTableProps {
  children?: ReactNode;

  tableData: any[];
  title?: string;
}
const HoverTable: FC<HoverTableProps> = ({ tableData, children }) => {
  if (!tableData?.length) return null;

  return (
    <Card>
      <Card.Header>
        <h5>Hoverable Table</h5>
        
      </Card.Header>
      <Card.Body className="p-0">
        <Table columns={columns}>
          {tableData.map((item: any, i: number) => (
            <TableRow key={item.id || i}>
              {/* Id */}
              <TableCell text={item.id} />

              {/* Name with image */}
              <TableCell>
                <div className="d-flex align-items-center">
                  <div
                    className={`h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-${item.badgeColor} me-2 avatar-30 rounded-circle`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="img-fluid w-100"
                    />
                  </div>
                  <p className="mb-0 f-w-500 text-nowrap">{item.name}</p>
                </div>
              </TableCell>

              {/* Position */}
              <TableCell text={item.position} />

              {/* Office */}
              <TableCell text={item.office} />

              {/* Status badge */}
              <TableCell
                text={
                  <span className={`badge bg-${item.badgeColor}`}>
                    {item.status}
                  </span>
                }
              />

              {/* Salary */}
              <TableCell text={item.salary} />

              {/* Contact */}
              <TableCell text={item.contact} />

              {/* Extra Id */}
              <TableCell text={item.id} />

              {/* Extra Status */}
              <TableCell
                text={
                  <span className={`badge bg-${item.badgeColor}`}>
                    {item.status}
                  </span>
                }
              />
            </TableRow>
          ))}
        </Table>
        {children}
      </Card.Body>
    </Card>
  );
};

export default HoverTable;
