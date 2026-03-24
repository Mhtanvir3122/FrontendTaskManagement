import React from "react";

import { currenciesData } from "@/data/table-page/DataTable/buttonsDatatable";
import { IconChevronsDown, IconChevronsUp } from "@tabler/icons-react";

import CustomDataTable, { Column } from "../../common/CustomDataTable.tsx";

interface CurrencyData {
  code: string;
  name: string;
  totalAmount: number | string;
  availableAmount: number | string;
  availableBalance: number | string;
  percentageChange: number;
}

const ButtonsDatatable: React.FC = () => {
  const columns: Column<CurrencyData>[] = [
    {
      key: "code",
      header: "Currency Code",
    },
    {
      key: "name",
      header: "Currency",
    },
    {
      key: "totalAmount",
      header: "Price",
    },
    {
      key: "availableAmount",
      header: "High",
    },
    {
      key: "availableBalance",
      header: "Low",
    },
    {
      key: "percentageChange",
      header: "Change",
      render: (percentageChange: unknown) => {
        const isPositive = percentageChange as number >= 0;
        return (
          <div className="d-flex gap-1 align-items-center">
            {isPositive ? (
              <IconChevronsUp
                className={`f-s-20 ${isPositive ? "text-success" : "text-danger"}`}
              />
            ) : (
              <IconChevronsDown
                className={`f-s-20 ${isPositive ? "text-success" : "text-danger"}`}
              />
            )}
            <h6
              className={`m-0 ${isPositive ? "text-success" : "text-danger"}`}
            >
              {percentageChange as number}%
            </h6>
          </div>
        );
      },
    },
  ];

  return (
    <CustomDataTable
      title="Buttons Example"
      rowKey="name"
      description="The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can be built."
      columns={columns}
      data={currenciesData}
      showActions={false}
      showLengthMenu={false}
      tableClassName="w-100 align-middle mb-0 Buttons-Example-datatable"
    />
  );
};

export default ButtonsDatatable;
