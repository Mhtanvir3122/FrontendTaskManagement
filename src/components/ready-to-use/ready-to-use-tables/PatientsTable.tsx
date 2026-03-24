import React from "react";
import { patientsData } from "@/data/table-page/DataTable/patientsData.ts";
import CustomDataTable, { Column } from "@/components/common/CustomDataTable";

interface Patient {
  id: number;
  name: string;
  avatar?: string;
  initials: string;
  address: string;
  patientId: string;
  contact: string;
  age: number;
  lastVisit: string;
  status: string;
  statusColor: string;
}

const PatientsTable:React.FC = () => {
  const columns: Column<Patient>[] = [
    {
      key: "name",
      header: "Name",
      render: (_, patient: Patient) => (
        <div className="d-flex align-items-center">
          {patient.avatar ? (
            <div className="h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-dark">
              <img
                src={patient.avatar}
                alt={patient.name}
                className="img-fluid"
              />
            </div>
          ) : (
            <span
              className={`bg-${patient.statusColor} h-30 w-30 d-flex-center b-r-50`}
            >
              {patient.initials}
            </span>
          )}
          <p className="mb-0 ps-2">{patient.name}</p>
        </div>
      ),
    },
    {
      key: "address",
      header: "Address",
    },
    {
      key: "patientId",
      header: "Patient ID",
      className: "f-w-500",
    },
    {
      key: "contact",
      header: "Number",
      render: (_, patient: Patient) => (
        <span className="text-success">{patient.contact}</span>
      ),
    },
    {
      key: "age",
      header: "Age",
    },
    {
      key: "lastVisit",
      header: "Last Visit",
    },
    {
      key: "status",
      header: "Status",
      render: (_, patient: Patient) => (
        <span
          className={`badge text-outline-${patient.statusColor}`}
        >
          {patient.status}
        </span>
      ),
    },
  ];

  return (
    <CustomDataTable
      showDescription={false}
      title="Patients List"
      columns={columns}
      data={patientsData}
      rowKey="id"
      cardClassName=""
      tableClassName="w-100 align-middle mb-0 patients-list-table"
      showActions={false}
      showFooter={true}
    />
  );
};

export default PatientsTable;