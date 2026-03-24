import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Slider from "react-slick";

import { ticketsAppDatas } from "@/data/app/ticket-data/Ticket.ts";
import { StackIcon } from "@phosphor-icons/react";
import {
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconTrash,
} from "@tabler/icons-react";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { Circle } from "phosphor-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import CustomDataTable, { Column } from "@/components/common/CustomDataTable.tsx";

interface Category {
  name: string;
  count: number;
}

const categories: Category[] = [
  { name: "Laptop issues", count: 64 },
  { name: "Card issues", count: 52 },
  { name: "Admin issues", count: 32 },
  { name: "Laptop issues", count: 20 },
];

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

interface Ticket extends Record<string, unknown> {
  id: string;
  agent: string;
  agentAvatar: string;
  agentAvatarBg: string;
  priority: string;
  priorityColor: string;
  title: string;
  status: string;
  statusColor: string;
  date: string;
  dueDate: string;
};

const initialTickets: Ticket[] = [
  {
    id: "AR 2044",
    agent: "Gavin Cortez",
    agentAvatar: "/images/avatar/1.png",
    agentAvatarBg: "primary",
    priority: "Medium",
    priorityColor: "warning",
    title: "Bug Report",
    status: "in progress",
    statusColor: "success",
    date: "1 Jan 2024",
    dueDate: "3 Feb 2024",
  },
  {
    id: "AR 1763",
    agent: "Martena Mccray",
    agentAvatar: "/images/avatar/14.png",
    agentAvatarBg: "dark",
    priority: "Low",
    priorityColor: "danger",
    title: "Feature Request",
    status: "closed",
    statusColor: "info",
    date: "8 Jan 2024",
    dueDate: "10 Mar 2024",
  },
  {
    id: "AR 1987",
    agent: "Daryl Hawker",
    agentAvatar: "/images/avatar/5.png",
    agentAvatarBg: "success",
    priority: "High",
    priorityColor: "danger",
    title: "Performance Issue",
    status: "open",
    statusColor: "primary",
    date: "12 Jan 2024",
    dueDate: "20 Feb 2024",
  },
  {
    id: "AR 1899",
    agent: "Rebecca Moore",
    agentAvatar: "/images/avatar/07.png",
    agentAvatarBg: "warning",
    priority: "Medium",
    priorityColor: "warning",
    title: "UI Improvement",
    status: "in progress",
    statusColor: "success",
    date: "15 Jan 2024",
    dueDate: "28 Feb 2024",
  },
  {
    id: "AR 1555",
    agent: "Thomas Lee",
    agentAvatar: "/images/avatar/2.png",
    agentAvatarBg: "info",
    priority: "Low",
    priorityColor: "info",
    title: "General Inquiry",
    status: "pending",
    statusColor: "warning",
    date: "18 Jan 2024",
    dueDate: "1 Mar 2024",
  },
  {
    id: "AR 1321",
    agent: "Alicia Keys",
    agentAvatar: "/images/avatar/12.png",
    agentAvatarBg: "secondary",
    priority: "High",
    priorityColor: "danger",
    title: "Security Vulnerability",
    status: "open",
    statusColor: "danger",
    date: "20 Jan 2024",
    dueDate: "25 Feb 2024",
  },
  {
    id: "AR 1678",
    agent: "Samuel Thompson",
    agentAvatar: "/images/avatar/08.png",
    agentAvatarBg: "primary",
    priority: "Medium",
    priorityColor: "warning",
    title: "Integration Bug",
    status: "in review",
    statusColor: "info",
    date: "22 Jan 2024",
    dueDate: "5 Mar 2024",
  },
  {
    id: "AR 1730",
    agent: "Natalie Portman",
    agentAvatar: "/images/avatar/11.png",
    agentAvatarBg: "danger",
    priority: "Low",
    priorityColor: "secondary",
    title: "Feedback Follow-up",
    status: "closed",
    statusColor: "secondary",
    date: "24 Jan 2024",
    dueDate: "15 Mar 2024",
  },
  {
    id: "AR 1920",
    agent: "Kevin Malone",
    agentAvatar: "/images/avatar/09.png",
    agentAvatarBg: "light",
    priority: "High",
    priorityColor: "primary",
    title: "Login Issue",
    status: "open",
    statusColor: "primary",
    date: "26 Jan 2024",
    dueDate: "12 Mar 2024",
  },
  {
    id: "AR 1650",
    agent: "Pam Beesly",
    agentAvatar: "/images/avatar/13.png",
    agentAvatarBg: "success",
    priority: "Medium",
    priorityColor: "warning",
    title: "Content Update",
    status: "pending",
    statusColor: "warning",
    date: "28 Jan 2024",
    dueDate: "18 Mar 2024",
  },
];

const TicketPage = () => {
  const [uiState, setUiState] = useState({
    deleteModal: false,
    showModal: false,
    selectAll: false,
  });
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [ticketList, setTicketList] = useState<Ticket[]>(initialTickets);
  const [nextId, setNextId] = useState(1);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    if (ticketList.length === 0) {
      setUiState((prev) => ({ ...prev, selectAll: false }));
    } else if (selectedItems.length === ticketList.length) {
      setUiState((prev) => ({ ...prev, selectAll: true }));
    } else {
      setUiState((prev) => ({ ...prev, selectAll: false }));
    }
  }, [selectedItems, ticketList.length]);
  const toggleDropdown = (index: string) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const [formData, setFormData] = useState({
    title: "",
    client: "",
    priority: "",
    status: "",
    date: "",
    dueDate: "",
  });

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      case "lower":
        return "success";
      default:
        return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "open":
        return "info";
      case "in progress":
        return "warning";
      case "closed":
        return "success";
      default:
        return "secondary";
    }
  };

  const handleSubmit = () => {
    const newId = `AR ${2000 + nextId}`;
    const newTicket: Ticket = {
      id: newId,
      title: formData.title,
      agent: "Tom Hardy",
      agentAvatar: "/images/avatar/13.png",
      agentAvatarBg: "primary",
      priority: formData.priority,
      priorityColor: getPriorityColor(formData.priority),
      status: formData.status,
      statusColor: getStatusColor(formData.status),
      date: formData.date,
      dueDate: formData.dueDate,
    };

    setTicketList([newTicket, ...ticketList]);
    setNextId(nextId + 1);
    resetForm();
    setUiState((prev) => ({ ...prev, showModal: false }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      client: "",
      priority: "",
      status: "",
      date: "",
      dueDate: "",
    });
  };

  const handleDelete = () => {
    if (selectedTicketId) {
      setTicketList((prev) =>
        prev.filter((ticket) => ticket.id !== selectedTicketId)
      );
      setSelectedItems((prev) => prev.filter((id) => id !== selectedTicketId));
      setSelectedTicketId(null);
      setUiState((prev) => ({ ...prev, deleteModal: false }));
    }
  };

  const toggleSelectAll = () => {
    if (uiState.selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(ticketList.map((ticket) => ticket.id));
    }
  };

  const toggleItemSelection = (id: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < ticketList.length;

  const columns: Column<Ticket>[] = [
    {
      key: "checkbox",
      header: (
        <Form.Check
          type="checkbox"
          checked={uiState.selectAll}
          ref={(input) => {
            if (input) {
              input.indeterminate = isIndeterminate;
            }
          }}
          onChange={toggleSelectAll}
        />
      ),
      render: (_data: unknown, item: Ticket) => (
        <Form.Check
          type="checkbox"
          checked={selectedItems.includes(item.id)}
          onChange={() => toggleItemSelection(item.id)}
        />
      ),
      className: "no-export",
    },
    {
      key: "id",
      header: "ID",
    },
    {
      key: "agent",
      header: "Agent",
      render: (_data: unknown, item: Ticket) => (
        <div className="d-flex align-items-center">
          <div
            className={`h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-${item.agentAvatarBg} me-2`}
          >
            <img src={item.agentAvatar} alt="avatar" className="img-fluid" />
          </div>
          {item.agent}
        </div>
      ),
    },
    {
      key: "priority",
      header: "Priority",
      render: (_data: unknown, item: Ticket) => (
        <Badge bg="transparent" text={`outline-${item.priorityColor}`}>
          {item.priority}
        </Badge>
      ),
    },
    {
      key: "title",
      header: "Title",
      render: (_data: unknown, item: Ticket) => (
        <div className="d-flex align-items-center">{item.title}</div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (_data: unknown, item: Ticket) => (
        <Badge bg="transparent" text={`outline-${item.statusColor}`}>
          {item.status}
        </Badge>
      ),
    },
    {
      key: "date",
      header: "Date",
    },
    {
      key: "dueDate",
      header: "Due Date",
    },
    {
      key: "actions",
      header: "Action",
      render: (_data: unknown, item: Ticket) => (
        <Dropdown
          show={showDropdown === item.id}
          onToggle={() => toggleDropdown(item.id)}
        >
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
              <IconEye className="text-primary me-2" size={16} />
              View
            </Dropdown.Item>
            <Dropdown.Item>
              <IconEdit className="text-success me-2" size={16} />
              Edit
            </Dropdown.Item>
            <Dropdown.Item
              className="text-danger"
              onClick={() => {
                setSelectedTicketId(item.id);
                setUiState((prev) => ({ ...prev, deleteModal: true }));
              }}
            >
              <IconTrash className="me-2" size={16} />
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Ticket"
        title="Apps"
        path={["Ticket Page", "Ticket"]}
        Icon={StackIcon}
      />

      <Row className="ticket-app">
        <Col lg={6}>
          <Row>
            {ticketsAppDatas.map((ticket, index) => (
              <Col sm={6} key={index}>
                <Card className={`ticket-card bg-${ticket.bgColor}`}>
                  <Card.Body>
                    <Circle
                      width={118}
                      height={118}
                      weight="bold"
                      className="circle-bg-img"
                    />
                    <div className="h-50 w-50 d-flex-center b-r-15 bg-white mb-3">
                      <ticket.icon
                        weight="bold"
                        className={`f-s-25 text-${ticket.textColor}`}
                      />
                    </div>
                    <p className="f-s-16">{ticket.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="text-white">{ticket.count}</h3>
                      <ul className="avatar-group">
                        {ticket.avatars.map((avatar, idx) => (
                          <li
                            key={idx}
                            className={`h-45 w-45 d-flex-center b-r-50 text-bg-${avatar.bgColor} b-2-light position-relative`}
                            data-bs-toggle="tooltip"
                            data-bs-title={avatar.tooltip}
                          >
                            <span
                              className={`position-absolute top-0 start-2 p-1 bg-${avatar.bgColor} border border-light rounded-circle`}
                            ></span>
                            <img
                              src={avatar.img}
                              alt={avatar.tooltip}
                              className="img-fluid b-r-50 overflow-hidden"
                            />
                          </li>
                        ))}
                        <li
                          className="bg-white text-dark h-35 w-35 d-flex-center b-r-50"
                          data-bs-toggle="tooltip"
                          data-bs-title={`${ticket.extraCount} More`}
                        >
                          {`${ticket.extraCount}+`}
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col lg={6}>
          <Card className="create-ticket-card">
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={7}>
                  <h5 className="mb-2">The Ticket Component</h5>
                  <p className="mb-5 mt-3 text-secondary">
                    Provide a more detailed explanation of the issue or desired
                    feature.
                  </p>
                  <Button
                    variant="primary"
                    className="mb-3"
                    onClick={() => setUiState((prev) => ({ ...prev, showModal: true }))}
                  >
                    Create Ticket
                  </Button>
                </Col>
                <Col sm={5}>
                  <img
                    src="/images/icons/ticket.png"
                    alt="Ticket Icon"
                    className="img-fluid d-block m-auto max-w-300"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <h5 className="ms-3 mb-2">Top Category</h5>
          <Slider {...settings} className="ticket-slider">
            {categories.map((category, index) => (
              <li key={index}>
                <div className="ticket-catagory p-3">
                  <h6 className="mb-0">{category.name}</h6>
                  <span className="badge text-bg-success">
                    {category.count}
                  </span>
                </div>
              </li>
            ))}
          </Slider>

          <Modal show={uiState.showModal} onHide={() => setUiState((prev) => ({ ...prev, showModal: false }))} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Client</Form.Label>
                  <Form.Control
                    value={formData.client}
                    onChange={(e) =>
                      setFormData({ ...formData, client: e.target.value })
                    }
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Priority</Form.Label>
                      <Form.Select
                        value={formData.priority}
                        onChange={(e) =>
                          setFormData({ ...formData, priority: e.target.value })
                        }
                      >
                        <option value="">Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Lower">Lower</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        value={formData.status}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                      >
                        <option value="">Select Status</option>
                        <option value="open">Open</option>
                        <option value="in progress">In Progress</option>
                        <option value="closed">Closed</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Due Date</Form.Label>
                      <Form.Control
                        type="date"
                        value={formData.dueDate}
                        onChange={(e) =>
                          setFormData({ ...formData, dueDate: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setUiState((prev) => ({ ...prev, showModal: false }))}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>

        <Col sm={12}>
          <CustomDataTable
            showTitle={false}
            showDescription={false}
            rowKey="id"
            key={ticketList.length}
            columns={columns}
            data={ticketList}
            showActions={false}
            tableClassName="w-100 align-middle mb-0"
            enableSearch={true}
            enablePagination={true}
          />
        </Col>
        <Modal show={uiState.deleteModal} onHide={() => setUiState((prev) => ({ ...prev, deleteModal: false }))} centered>
          <Modal.Body className="text-center">
            <img
              alt="Delete Icon"
              className="img-fluid mb-3"
              src="/images/icons/delete-icon.png"
            />
            <h4 className="text-danger fw-bold">Are You Sure?</h4>
            <p className="text-secondary fs-6">
              You won&#39;t be able to revert this!
            </p>
            <div className="mt-3 d-flex justify-content-center gap-2">
              <Button variant="secondary" onClick={() => setUiState((prev) => ({ ...prev, deleteModal: false }))}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Yes, Delete it
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
};

export default TicketPage;
