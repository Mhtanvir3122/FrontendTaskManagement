import React from "react";
import { paymentData } from "@/data/table-page/DataTable/paymentData";
import CustomDataTable, { Column } from "@/components/common/CustomDataTable";

interface Payment {
  name: string;
  billNo: number;
  tax: number;
  charges: number;
  discount: string;
  billDate: string;
  total: number;
}

const PaymentTable: React.FC = () => {
  const columns: Column<Payment>[] = [
    {
      key: "name",
      header: "Name",
      render: (_, payment: Payment) => (
        <p className="mb-0">{payment.name}</p>
      ),
    },
    {
      key: "billNo",
      header: "Bill No",
    },
    {
      key: "tax",
      header: "Tax",
    },
    {
      key: "charges",
      header: "Charges",
    },
    {
      key: "discount",
      header: "Discount",
      render: (_, payment: Payment) => (
        <span className="f-w-500 text-success">{payment.discount}</span>
      ),
    },
    {
      key: "billDate",
      header: "Bill Date",
    },
    {
      key: "total",
      header: "Total",
    },
  ];

  return (
    <CustomDataTable
      title="Payment Details"
      showDescription={false}
      columns={columns}
      data={paymentData}
      rowKey="name"
      showActions={false}
      showFooter={true}
      tableClassName="w-100 align-middle mb-0 payment-details-table"
      cardClassName=""
    />
  );
};

export default PaymentTable;