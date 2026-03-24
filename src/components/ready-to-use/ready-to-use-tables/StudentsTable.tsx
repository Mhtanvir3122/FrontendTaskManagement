import React, { useState } from "react";
import { studentsData } from "@/data/table-page/DataTable/studentsData.ts";
import { IconDotsVertical, IconPencil, IconTrash } from "@tabler/icons-react";
import CustomDataTable, { Column } from "@/components/common/CustomDataTable";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

interface Student extends Record<string, unknown> {
  name: string;
  parentName: string;
  id: string;
  contact: string;
  city: string;
  date: string;
  grade: string;
}

const StudentsTable:React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(studentsData.map((student: {id: string}) => student.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleItemSelection = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const columns: Column<Student>[] = [
    {
      key: "checkbox",
      header: (
        <Form.Check
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
          className="mt-0"
        />
      ),
      render: (_, student: Student) => (
        <Form.Check
          type="checkbox"
          checked={selectedItems.includes(student.id)}
          onChange={() => toggleItemSelection(student.id)}
          className="mt-0"
        />
      ),
      className: "no-export",
    },
    {
      key: "name",
      header: "Name",
    },
    {
      key: "parentName",
      header: "Parent Name",
    },
    {
      key: "id",
      header: "ID",
      render: (_, student: Student) => (
        <span className="f-w-500">{student.id}</span>
      ),
    },
    {
      key: "contact",
      header: "Contact",
      render: (_, student: Student) => (
        <span className="text-success">{student.contact}</span>
      ),
    },
    {
      key: "city",
      header: "City",
    },
    {
      key: "date",
      header: "Date",
    },
    {
      key: "grade",
      header: "Grade",
      render: (_, student: Student) => (
        <Badge
          bg="transparent"
          text={`outline-${student.grade === "A" ? "success" : "warning"}`}
          className={`hover:bg-${student.grade === "A" ? "success" : "warning"} hover:text-white`}
        >
          {student.grade}
        </Badge>
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
      title="Students List"
      showDescription={false}
      columns={columns}
      data={studentsData}
      rowKey="id"
      tableClassName="w-100 align-middle mb-0 student-list-table"
      cardClassName=""
      showActions={false}
    />
  );
};

export default StudentsTable;