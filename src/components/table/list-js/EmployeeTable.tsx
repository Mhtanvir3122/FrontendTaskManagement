import React, { useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";

import { IconSearch } from "@tabler/icons-react";
import List from "list.js";

interface Employee {
  id: number;
  name: string;
  email: string;
  contact: string;
  date: string;
  status: "ACTIVE" | "BLOCK";
}

const EmployeeTable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "Allie Grater",
      email: "graterallie@gmail.com",
      contact: "8054478398",
      date: "2021-03-19",
      status: "BLOCK",
    },
    {
      id: 2,
      name: "Rhoda Report",
      email: "reportrhoda@gmail.com",
      contact: "7765392112",
      date: "2020-01-19",
      status: "ACTIVE",
    },
    {
      id: 3,
      name: "Rose Bush",
      email: "rose@gmail.com",
      contact: "9674903425",
      date: "2020-10-26",
      status: "ACTIVE",
    },
    {
      id: 4,
      name: "Dave Allippa",
      email: "dave@gmail.com",
      contact: "6490537289",
      date: "2020-06-19",
      status: "BLOCK",
    },
  ]);

  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [form, setForm] = useState<Employee>({
    id: 0,
    name: "",
    email: "",
    contact: "",
    date: "",
    status: "ACTIVE",
  });

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && listRef.current) {
      new List(listRef.current, {
        valueNames: ["name", "email", "contact", "date", "status"],
        page: 4,
        pagination: { paginationClass: "pagination" },
      });
    }
  }, [employees]);

  const toggle = () => setModal(!modal);
  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = form;
      setEmployees(updated);
    } else {
      setEmployees([...employees, { ...form, id: Date.now() }]);
    }
    toggle();
    setForm({
      id: 0,
      name: "",
      email: "",
      contact: "",
      date: "",
      status: "ACTIVE",
    });
    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    setForm(employees[index]);
    setEditIndex(index);
    toggle();
  };

  const handleDelete = (index: number) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
  };

  return (
    <>
      <Col lg={8}>
        <Card>
          <Card.Header>
            <h5>Add, Edit & Remove table</h5>
          </Card.Header>
          <Card.Body className="p-0">
            <div id="employee-list" ref={listRef}>
              <div className="list-table-header mb-3">
                <Row className="align-items-center justify-content-between gx-2">
                  <Col xs="auto">
                    <Button variant="primary" onClick={toggle}>
                      Add
                    </Button>
                  </Col>

                  <Col xs={12} sm="auto">
                    <Form className="app-form app-icon-form">
                      <InputGroup>
                        <Form.Control
                          type="search"
                          placeholder="Search..."
                          className="search"
                          aria-label="Search"
                        />
                        <InputGroup.Text className="bg-transparent border-start-0">
                          <IconSearch size={18} />
                        </InputGroup.Text>
                      </InputGroup>
                    </Form>
                  </Col>
                </Row>
              </div>
              <Table
                hover
                responsive
                className="table table-bottom-border list-table-data align-middle mb-0"
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>Employee</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Joining Date</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="list">
                  {employees.map((emp, i) => (
                    <tr key={emp.id}>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td className="name">{emp.name}</td>
                      <td className="email">{emp.email}</td>
                      <td className="contact">{emp.contact}</td>
                      <td className="date">{emp.date}</td>
                      <td className="status">
                        <Badge
                          bg={
                            emp.status === "ACTIVE"
                              ? "light-success"
                              : "light-danger"
                          }
                        >
                          {emp.status}
                        </Badge>
                      </td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() => handleEdit(i)}
                          className="btn edit-item-btn btn-sm btn-success"
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(i)}
                          className="btn remove-item-btn btn-sm btn-danger"
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="list-pagination p-3">
                <ul className="pagination mb-0"></ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={modal} onHide={toggle} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Edit Employee" : "Add Employee"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                name="contact"
                value={form.contact}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="BLOCK">BLOCK</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            {editIndex !== null ? "Update" : "Add"}
          </Button>
          <Button variant="secondary" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeTable;
