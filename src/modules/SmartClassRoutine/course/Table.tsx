import { FC, ReactNode } from "react";
import { Card } from "react-bootstrap";

import { Dropdown, DropdownItem } from "@/components/myComponant/Dropdown";
import Icon from "@/components/myComponant/Icon";
import {
  ITableHeadColumn,
  Table,
} from "@/components/myComponant/TableFor/Table";
import { TableCell } from "@/components/myComponant/TableFor/TableCell";
import { TableRow } from "@/components/myComponant/TableFor/TableRow";
import { numEnToBn } from "@/components/myComponant/input/checkValidation";

const columns: ITableHeadColumn[] = [
  { title: "Serial", width: 20 },
  { title: "Course Name", width: 200 },
  { title: "Department", minWidth: 150 },
  { title: "Time", minWidth: 150 },
  { title: "Department", minWidth: 120 },
  { title: "Action", minWidth: 20, className: "d-flex justify-content-center" },
];
interface CourseTableProps {
  children?: ReactNode;
  tableData?: any[];
  title?: string;
  handleUpdate: (data) => void;
}
const CourseTable: FC<CourseTableProps> = ({
  tableData,
  children,
  handleUpdate,
}) => {
  if (!tableData?.length) return null;

  return (
    <Card>
      <Card.Header>
        <h5>Course Table</h5>
      </Card.Header>
      <Card.Body className="p-0">
        <Table columns={columns}>
          {tableData?.map((item: any, i: number) => (
            <TableRow key={item?.id || i}>
              <TableCell text={numEnToBn(i + 1)} />

              <TableCell text={item?.name || "তথ্য নেই "} />
              <TableCell text={item?.department?.name || "তথ্য নেই "} />

              <TableCell text={item?.createdOn || "তথ্য নেই "} />

              <TableCell text={item?.department?.name || "তথ্য নেই "} />

              <TableCell className="p-0 m-0 ">
                <div className="d-flex justify-content-center align-items-center">
                  <Dropdown
                    className="p-0 m-0"
                    btnContent={
                      <Icon
                        className="p-0 m-0 px-0 py-0"
                        icon="more_vert"
                        size={20}
                      />
                    }
                  >
                    <DropdownItem
                      onClick={() => {
                        handleUpdate(item);
                      }}
                    >
                      <Icon size={16} icon="edit"  color="info"/>
                      <h6 className="mb-0 ms-2" style={{fontSize:16}}>সম্পাদনা করুন</h6>
                    </DropdownItem>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
        {children}
      </Card.Body>
    </Card>
  );
};

export default CourseTable;
