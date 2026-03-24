import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Modal,
  Pagination,
  Table,
} from "react-bootstrap";

import { TodoItem, initialTodos } from "@/data/app/todo/todoData.ts";
import { IconEdit, IconSearch, IconTrash } from "@tabler/icons-react";

const TodoListComponent: React.FC = () => {
  const [uiState, setUiState] = useState({
    showModal: false,
    isEditing: false,
  });
  const [todos, setTodos] = useState(initialTodos);
  const [formData, setFormData] = useState<Partial<TodoItem>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 8;

  const toggleModal = () => setUiState((prev) => ({ ...prev,showModal : !uiState.showModal}));

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Filter todos based on search term
  const filteredTodos = useMemo(() => {
    if (!searchTerm) return todos;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return todos.filter(
      (todo) =>
        todo.task.toLowerCase().includes(lowerSearchTerm) ||
        todo.assign.toLowerCase().includes(lowerSearchTerm) ||
        (todo.notes && todo.notes.toLowerCase().includes(lowerSearchTerm)) ||
        todo.priority.toLowerCase().includes(lowerSearchTerm) ||
        todo.date.toLowerCase().includes(lowerSearchTerm)
    );
  }, [todos, searchTerm]);

  const handleAdd = () => {
    if (formData.task && formData.assign && formData.date) {
      const newTodo: TodoItem = {
        id: Date.now(),
        task: formData.task,
        priority: formData.priority || "Low",
        assign: formData.assign,
        date: formData.date,
        notes: formData.notes || "",
        completed: false,
      };
      setTodos([...todos, newTodo]);
      toggleModal();
      setFormData({});
      setCurrentPage(Math.ceil((todos.length + 1) / itemsPerPage)); // Go to last page
    }
  };

  const handleEdit = () => {
    if (formData.id && formData.task && formData.assign && formData.date) {
      setTodos(
        todos.map((todo) =>
          todo.id === formData.id
            ? ({
                ...todo,
                ...formData,
              } as TodoItem)
            : todo
        )
      );
      toggleModal();
      setFormData({});
      setUiState((prev) => ({ ...prev, isEditing: false }));
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    const newPage = Math.min(
      currentPage,
      Math.ceil(updatedTodos.length / itemsPerPage)
    );
    setCurrentPage(newPage || 1);
  };

  const openEditModal = (todo: TodoItem) => {
    setFormData(todo);
    setUiState((prev) => ({ ...prev, isEditing: true }));
    setUiState((prev) => ({ ...prev, showModal: true }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
  const paginatedTodos = filteredTodos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <Col xl="9">
      <Card>
        <Card.Body className="p-0">
          <div className="d-flex justify-content-between p-3 border-bottom">
            <Form className="me-3 app-form app-icon-form search-lg h-100 w-100">
              <div className="position-relative h-100">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="search h-100 pe-4"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <IconSearch
                  className="position-absolute end-0 top-50 translate-middle-y me-2"
                  size={16}
                />
              </div>
            </Form>
            <Button
              variant="primary"
              onClick={() => {
                toggleModal();
                setUiState((prev) => ({ ...prev, isEditing: false }));
              }}
            >
              Add
            </Button>
          </div>

          <Table
            hover
            responsive
            className="table-bottom-border todo-table mb-0"
          >
            <thead>
              <tr>
                <th></th>
                <th>Task</th>
                <th>Priority</th>
                <th>Assign</th>
                <th>Date</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTodos.length > 0 ? (
                paginatedTodos.map((todo) => (
                  <tr
                    key={todo.id}
                    className={todo.completed ? "text-d-line-through" : ""}
                  >
                    <td>
                      <Form.Check
                        type="checkbox"
                        id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                      />
                    </td>
                    <td className="fw-semibold">{todo.task}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          todo.priority === "High"
                            ? "success"
                            : todo.priority === "Medium"
                              ? "warning"
                              : "danger"
                        } ${todo.completed ? "opacity-50" : ""}`}
                      >
                        {todo.priority}
                      </span>
                    </td>
                    <td className="fw-medium text-dark">
                      <p className="txt-ellipsis-1 mb-0">{todo.assign}</p>
                    </td>
                    <td className="text-success fw-semibold">{todo.date}</td>
                    <td>{todo.notes}</td>
                    <td
                      className={
                        todo.completed ? "opacity-50 cursor-not-allow" : ""
                      }
                    >
                      <Button
                        variant="outline-success"
                        size="sm"
                        className={`edit-item-btn icon-btn ${todo.completed ? "bg-success text-white opacity-50" : ""}`}
                        onClick={() => {
                          if (!todo.completed) openEditModal(todo);
                        }}
                      >
                        <IconEdit size={14} />
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className={`remove-item-btn icon-btn ${todo.completed ? "bg-danger text-white opacity-50" : ""}`}
                        onClick={() => {
                          if (!todo.completed) handleDelete(todo.id);
                        }}
                      >
                        <IconTrash size={14} />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4">
                    No tasks found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-between p-3 border-top flex-wrap">
              <div>
                <p className="f-w-500 f-s-16 me-3">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
              <Pagination className="app-pagination">
                <Pagination.First
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item
                    key={i + 1}
                    active={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          )}

          {/* Modal for Add/Edit */}
          <Modal show={uiState.showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>{uiState.isEditing ? "Edit Task" : "Add Task"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="app-form">
                <Form.Group className="mb-3">
                  <Form.Label>Task</Form.Label>
                  <Form.Control
                    id="task"
                    value={formData.task || ""}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Assign</Form.Label>
                  <Form.Control
                    id="assign"
                    value={formData.assign || ""}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    id="date"
                    type="date"
                    value={formData.date || ""}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="notes"
                    value={formData.notes || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    id="priority"
                    value={formData.priority || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>
                Cancel
              </Button>
              {uiState.isEditing ? (
                <Button variant="success" onClick={handleEdit}>
                  Update
                </Button>
              ) : (
                <Button variant="primary" onClick={handleAdd}>
                  Add
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TodoListComponent;
