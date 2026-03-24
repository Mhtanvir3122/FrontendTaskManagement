import React from "react";
import { paymentData } from "@/data/table-page/DataTable/jobData";
import { IconDotsVertical, IconPencil, IconStar, IconTrash } from "@tabler/icons-react";
import CustomDataTable, { Column } from "@/components/common/CustomDataTable";
import Dropdown from "react-bootstrap/Dropdown";

interface PaymentData extends Record<string, unknown> {
  avatar?: string;
  name: string;
  course: string;
  experience: string;
  rate: string;
  address: string;
  review: number;
  initials?: string;
}

const JobTable: React.FC = () => {
  const columns: Column<PaymentData>[] = [
    {
      key: "avatar",
      header: "",
      render: (_, item: PaymentData) => (
        <div className="h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-dark">
          {item.avatar ? (
            <img src={item.avatar} alt={item.name} className="img-fluid" />
          ) : (
            <span>{item.initials || item.name.charAt(0)}</span>
          )}
        </div>
      ),
      className: "no-export",
    },
    {
      key: "name",
      header: "NAME",
    },
    {
      key: "course",
      header: "COURSE",
    },
    {
      key: "experience",
      header: "EXPERIENCE",
    },
    {
      key: "rate",
      header: "RATE",
    },
    {
      key: "address",
      header: "ADDRESS",
    },
    {
      key: "review",
      header: "REVIEW",
      render: (_, item: PaymentData) => (
        <div>
          {[...Array(5)].map((_, idx) => (
            <IconStar
              key={idx}
              size={16}
              fill={idx < item.review ? "gold" : "none"}
              color={idx < item.review ? "gold" : "lightgray"}
            />
          ))}
        </div>
      ),
    },
    {
      key: "actions",
      header: "Action",
      render: (_) => (
        <Dropdown>
          <Dropdown.Toggle
            as="button"
            bsPrefix="btn"
            variant="white"
            color="light-light"
            className="border-0 icon-btn p-0 shadow-none"
          >
            <IconDotsVertical size={16} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <IconPencil size={18} className="me-2" /> Edit
            </Dropdown.Item>
            <Dropdown.Item>
              <IconTrash size={18} className="me-2" /> Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      className: "no-export",
    },
  ];

  return (
    <CustomDataTable
      title="Job Resumes"
      showDescription={false}
      columns={columns}
      data={paymentData}
      rowKey="name"
      tableClassName="w-100 align-middle mb-0 job-resumes-table"
      cardClassName=""
      showActions={false}
    />
  );
};

export default JobTable;