import React from "react";
import { ticketsData } from "@/data/table-page/DataTable/ticketData.ts";
import CustomDataTable, { Column } from "@/components/common/CustomDataTable";
import Badge from "react-bootstrap/Badge";

interface Ticket {
  agent: string;
  department: string;
  id: string;
  title: string;
  activity: string;
  date: string;
  priority: string;
  priorityClass: string;
}

const TicketTable:React.FC = () => {
  const columns: Column<Ticket>[] = [
    {
      key: "agent",
      header: "AGENT",
    },
    {
      key: "department",
      header: "DEPARTMENT",
    },
    {
      key: "id",
      header: "ID",
      render: (_, ticket: Ticket) => (
        <span className="f-w-500">{ticket.id}</span>
      ),
    },
    {
      key: "title",
      header: "TITLE",
      render: (_, ticket: Ticket) => <p>{ticket.title}</p>,
    },
    {
      key: "activity",
      header: "ACTIVITY",
      render: (_, ticket: Ticket) => (
        <span className={`text-${ticket.activity === "No reply yet" ? "danger" : "success"} f-w-500`}>
          {ticket.activity}
        </span>
      ),
    },
    {
      key: "date",
      header: "DATE",
    },
    {
      key: "priority",
      header: "PRIORITY",
      render: (_, ticket: Ticket) => (
        <Badge bg="transparent" className={ticket.priorityClass}>
          {ticket.priority}
        </Badge>
      ),
    },
  ];

  return (
    <CustomDataTable
      title="Ticket Detail"
      showDescription={false}
      columns={columns}
      data={ticketsData}
      rowKey="id"
      tableClassName="w-100 align-middle mb-0 ticket-detail-table"
      cardClassName=""
      showActions={false}
    />
  );
};

export default TicketTable;