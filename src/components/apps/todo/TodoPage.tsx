import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";
import { IconPlus, IconTrash } from "@tabler/icons-react";

import ToDoTable from "@/components/apps/todo/ToDoTable.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const defaultTasks = [
  "ki-admin & Dashboard",
  "Project Management",
  "Chat Application",
  "Todo App",
  "React Weather App",
  "Tic-Tac-Toe",
  "Stopwatch",
  "Calculator App",
  "Ecommerce Site",
  "Chat Application",
];

const TodoPage = () => {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState<string[]>(defaultTasks);
  const [newTask, setNewTask] = useState("");

  const toggleModal = () => setModal(!modal);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([newTask, ...tasks]);
      setNewTask("");
      toggleModal();
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Todo"
        title="Apps"
        path={["Todo"]}
        Icon={StackIcon}
      />
      <Row>
        <Col xl="3">
          <Card>
            <Card.Body>
              <Button
                variant="primary"
                size="lg"
                className="fs-6 w-100 rounded"
                onClick={toggleModal}
              >
                <IconPlus className="me-1" size={18} /> Add Project
              </Button>

              {/* Modal */}
              <Modal show={modal} onHide={toggleModal} centered>
                <Modal.Header closeButton>
                  <h5>Create Task</h5>
                </Modal.Header>
                <Modal.Body>
                  <Form className="app-form">
                    <Form.Group controlId="taskName">
                      <Form.Label>Task Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter task name"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleAddTask}>
                    Save changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <div className="todo-container mt-4">
                {tasks.map((task, index) => (
                  <div key={index} className="task">
                    <span className="txt-ellipsis-1">{task}</span>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-1 border-0"
                      onClick={() => handleDeleteTask(index)}
                    >
                      <IconTrash className="text-danger" size={18} />
                    </Button>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <ToDoTable />
      </Row>
    </Container>
  );
};

export default TodoPage;
