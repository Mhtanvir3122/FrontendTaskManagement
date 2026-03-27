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
  { title: "", width: 20 },
  { title: "ক্রমিক নং", width: 100 },

  { title: "মেনুর নাম", width: 200 },
  { title: "মেনুর ধরন", minWidth: 150 },
  { title: "আইকন", minWidth: 120 },
  { title: "পাথ", minWidth: 120 },
  { title: "প্যারেন্ট", minWidth: 120 },
  {
    title: "অ্যাকশন",
    minWidth: 20,
    className: "d-flex justify-content-center",
  },
];
interface DetailsTableProps {
  children?: ReactNode;
  tableData?: any;
  title?: string;
  handleUpdate: (data) => void;
}
const DetailsTable: FC<DetailsTableProps> = ({
  tableData,
  children,
  handleUpdate,
}) => {
  if (!tableData?.children?.length) return null;

  return (
    <Card>
      {/* <Card.Header>
        <h6>Course Table</h6>
      </Card.Header> */}
              <h6 className="px-2 p-1"> চাইল্ড মেনু তালিকা</h6>

      <Card.Body className="p-0">
        <Table columns={columns}>
          {tableData?.children?.map((item: any, i: number) => (
            <TableRow key={item?.id || i}>
              <TableCell text={numEnToBn(i + 1)} />

              <TableCell text={item?.name || "তথ্য নেই "} />
              <TableCell text={item?.type || "তথ্য নেই "} />

              <TableCell text={item?.iconClass || "তথ্য নেই "} />

              <TableCell text={item?.path || "তথ্য নেই "} />
              <TableCell text={tableData?.name || "তথ্য নেই "} />

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
                        handleUpdate({
                          ...item,
                          parentDto: {
                            id: tableData?.id,
                            name: tableData?.name,
                          },
                        });
                      }}
                    >
                      <Icon size={16} icon="edit" color="info" />
                      <h6 className="mb-0 ms-2" style={{ fontSize: 16 }}>
                        সম্পাদনা করুন
                      </h6>
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

export default DetailsTable;
