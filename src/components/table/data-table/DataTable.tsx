import React from "react";

import { users } from "@/data/table-page/DataTable/defaultDatatable.ts";

import CustomDataTable, { Column } from "../../common/CustomDataTable.tsx";

interface User {
  id?: number;
  name: string;
  position: string;
  location: string;
  age: number;
  salary: string;
  totalSalary: string;
}

const DefaultDatatable: React.FC = () => {
  const getPositionBadgeClass = (position: string) => {
    const positionLower = position.toLowerCase();

    if (positionLower.includes("executive")) {
      return "bg-light-danger text-danger";
    } else if (positionLower.includes("director")) {
      return "bg-light-warning text-warning";
    } else if (
      positionLower.includes("engineer") ||
      positionLower.includes("developer")
    ) {
      return "bg-light-info text-info";
    } else if (positionLower.includes("specialist")) {
      return "bg-light-primary text-primary";
    } else if (
      positionLower.includes("assistant") ||
      positionLower.includes("associate")
    ) {
      return "bg-light-success text-success";
    } else if (
      positionLower.includes("manager") ||
      positionLower.includes("lead")
    ) {
      return "bg-light-info text-info";
    } else {
      return "bg-light-primary text-primary";
    }
  };

  const columns: Column<User>[] = [
    { key: "name", header: "Name" },
    {
      key: "position",
      header: "Position",
      render: (position: unknown) => (
        <span className={`badge ${getPositionBadgeClass(position as string)}`}>
          {position as string}
        </span>
      ),
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
    <CustomDataTable
      title="Default Datatable"
      description={
        <>
          DataTables has most features enabled by default, so all you need to do
          to use it with your own tables is to call the construction function:{" "}
          <code>new DataTable();</code>.
        </>
      }
      rowKey="name"
      columns={columns}
      data={users}
      showActions={true}
      onEdit={handleEdit}
      onDelete={handleDelete}
      tableClassName="w-100 align-middle mb-0"
    />
  );
};

export default DefaultDatatable;
