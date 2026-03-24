import React from "react";
import { users } from "@/data/table-page/DataTable/defaultDatatable.ts";
import CustomDataTable, { Column } from "@/components/common/CustomDataTable.tsx";

interface User {
  [key: string]: unknown; 
  name: string;
  position: string;
  location: string;
  age: number;
  salary: string;
  totalSalary: string;
}
const RowBorderTable: React.FC = () => {
  const getRandomAvatar = () => {
    const randomNum = Math.floor(Math.random() * 16) + 1;
    const fileName = [7, 8, 9].includes(randomNum)
      ? `0${randomNum}`
      : `${randomNum}`;
    return `/images/avatar/${fileName}.png`;
  };

const columns: Column<User>[] = [
  {
    key: "name",
    header: "Name",
    render: (data: unknown) => {
      const name = data as string; 
      return (
        <div className="d-flex align-items-center">
          <img
            src={getRandomAvatar()}
            alt="User Avatar"
            className="rounded-circle me-2"
            width="32"
            height="32"
          />
          <span>{name}</span>
        </div>
      );
      },
    },
    {
      key: "position",
      header: "Position",
        render: (data: unknown) => {
        const position = data as string;
        return <span className="badge bg-light-primary">{position}</span>;
      },
    },
    { key: "location", header: "Office" },
    { key: "age", header: "Age" },
    { key: "salary", header: "Start date" },
    { key: "totalSalary", header: "Salary" },
  ];

  const handleEdit = (user: User) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (user: User) => {
    console.log("Delete user:", user);
  };

  return (
    <div>
      <CustomDataTable<User>
        title="Row Border Bottom Example"
        description={
          <>
            DataTables has most features enabled by default, so all you need to
            do to use it with your own tables is to call the construction
            function: <code>new DataTable();</code>.
          </>
        }
        rowKey="name"
        columns={columns}
        data={users}
        showActions={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
        tableClassName="w-100 align-middle mb-0 "
        className="row-border-table"
      />
    </div>
  );
};

export default RowBorderTable;
