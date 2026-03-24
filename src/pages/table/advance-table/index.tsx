import React, { useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";

import { IconArrowsMove, IconEdit, IconTrash } from "@tabler/icons-react";
import { Table2Columns } from "iconoir-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

type Employee = {
  name: string;
  position: string;
  status: "High" | "Medium" | "Lower" | string;
  email: string;
  id: string;
  salary: string;
  date: string;
};

const AdvanceTablePage = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      name: "Alison Mused",
      position: "Accountant",
      status: "Medium",
      email: "alison@gmail.com",
      id: "#167",
      salary: "$2000",
      date: "December 1, 2024",
    },
    {
      name: "Amelia Commishun",
      position: "Junior Technical Author",
      status: "High",
      email: "amelia@gmail.com",
      id: "#289",
      salary: "$1200",
      date: "December 1, 2024",
    },
    {
      name: "Molly Story",
      position: "Software Engineer",
      status: "Medium",
      email: "molly@gmail.com",
      id: "#138",
      salary: "$4500",
      date: "December 1, 2024",
    },
    {
      name: "Diana Book",
      position: "Integration Specialist",
      status: "Lower",
      email: "diana@gmail.com",
      id: "#280",
      salary: "$5000",
      date: "December 1, 2024",
    },
    {
      name: "Evan Scope",
      position: "Sales Assistant",
      status: "High",
      email: "evan@gmail.com",
      id: "#165",
      salary: "$2560",
      date: "December 1, 2024",
    },
    {
      name: "Julia Sik",
      position: "Accountant",
      status: "Medium",
      email: "julia@gmail.com",
      id: "#245",
      salary: "$2400",
      date: "December 1, 2024",
    },
    {
      name: "Kylie Down",
      position: "Chief Operating Officer",
      status: "Lower",
      email: "kylie@gmail.com",
      id: "#167",
      salary: "$1800",
      date: "December 1, 2024",
    },
  ]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLTableRowElement>,
    index: number
  ) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (
    e: React.DragEvent<HTMLTableRowElement>,
    targetIndex: number
  ) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      const newEmployees = [...employees];
      const [draggedEmployee] = newEmployees.splice(draggedIndex, 1);
      newEmployees.splice(targetIndex, 0, draggedEmployee);
      setEmployees(newEmployees);
      setDraggedIndex(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Advance Table"
          title=" Table "
          path={["Advance Table"]}
          Icon={Table2Columns}
        />
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Drag And Drop Table</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="table-responsive app-scroll">
                  <Table className="table table-bottom-border advance-drag-drop-table align-middle mb-0">
                    <thead>
                      <tr>
                        <th>
                          <IconArrowsMove
                            size={24}
                            className="text-secondary"
                          />
                        </th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>id</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee, index) => (
                        <tr
                          key={index}
                          draggable="true"
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, index)}
                          onDragEnd={handleDragEnd}
                          style={{
                            cursor: "move",
                            opacity: draggedIndex === index ? 0.5 : 1,
                          }}
                        >
                          <td>
                            <IconArrowsMove
                              size={24}
                              className="text-secondary"
                            />
                          </td>
                          <td>{employee.name}</td>
                          <td className="f-w-600">{employee.position}</td>
                          <td>
                            <span
                              className={`badge text-outline-${
                                employee.status === "High"
                                  ? "success"
                                  : employee.status === "Medium"
                                    ? "warning"
                                    : "danger"
                              }`}
                            >
                              {employee.status}
                            </span>
                          </td>
                          <td>{employee.email}</td>
                          <td className="f-w-500 text-primary">
                            {employee.id}
                          </td>
                          <td className="f-w-500 text-warning">
                            {employee.salary}
                          </td>
                          <td>{employee.date}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger icon-btn b-r-4"
                            >
                              <IconTrash size={18} />
                            </button>{" "}
                            <button
                              type="button"
                              className="btn btn-success icon-btn b-r-4"
                            >
                              <IconEdit size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdvanceTablePage;
