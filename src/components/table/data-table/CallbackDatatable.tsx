import React from "react";

import { callbackTableData } from "@/data/table-page/DataTable/callbackDatatable";
import CustomDataTable, { Column } from "../../common/CustomDataTable";

interface TableData {
  name: string;
  position: string;
  location: string;
  age: number;
  salary: string;
  totalSalary: string;
}

const CallbackDatatable: React.FC = () => {
  const columns : Column<TableData>[] = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "position",
      header: "Position",
    },
    {
      key: "location",
      header: "Office",
    },
    {
      key: "age",
      header: "Age",
    },
    {
      key: "salary",
      header: "Start date",
    },
    {
      key: "totalSalary",
      header: "Salary",
    },
  ];

  return (
    <CustomDataTable
      title="Row Created Callback Example"
      rowKey="name"
      description="The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can be built."
      columns={columns}
      data={callbackTableData}
      showActions={false}
      showLengthMenu={true}
      tableClassName="w-100 align-middle mb-0 callback-datatable"
    />
  );
};

export default CallbackDatatable;
