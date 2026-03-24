import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  Image,
  Modal,
  Nav,
  ProgressBar,
  Row,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Project,
  projectsAppData,
} from "@/data/app/projectapp/ProjectAppData.ts";
import { StackIcon } from "@phosphor-icons/react";
import { IconBrandWechat, IconPlus, IconTrash } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface FormData {
  projectName: string;
  image: File | null;
  startDate: string;
  endDate: string;
  pricing: string;
  description: string;
  category: "designing" | "development" | "";
}

const ProjectTabs: React.FC = () => {
  const [projects, setProjects] = useState(projectsAppData);
  const [activeTab, setActiveTab] = useState<"1" | "2" | "3">("1");
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    image: null,
    startDate: "",
    endDate: "",
    pricing: "",
    description: "",
    category: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const toggleTab = (tab: "1" | "2" | "3") => setActiveTab(tab);

  const toggleModal = () => {
    setModalOpen((prev) => {
      if (prev) resetForm();
      return !prev;
    });
  };

  const resetForm = () => {
    setFormData({
      projectName: "",
      image: null,
      startDate: "",
      endDate: "",
      pricing: "",
      description: "",
      category: "",
    });
    setImagePreview(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setImagePreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });

    setFormData((p) => ({ ...p, image: file }));
  };

  const handleDelete = (id: number) =>
    setProjects((prev) => prev.filter((p) => p.id !== id));

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category) return;

    const newProject: Project = {
      id: Date.now(),
      title: formData.projectName || "Untitled Project",
      subtitle: "New Project",
      logo: imagePreview || "/images/icons/language/logo1.png",
      startDate: formData.startDate,
      endDate: formData.endDate,
      price: formData.pricing,
      description: formData.description,
      status: "Pending",
      progress: 0,
      progressColor: "info",
      members: 0,
      avatars: [],
      moreMembers: 0,
      category: formData.category as "designing" | "development" | "all",
    };

    setProjects((prev) => [newProject, ...prev]);
    toggleModal();
  };

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "1") return true;
    if (activeTab === "2") return project.category === "designing";
    if (activeTab === "3") return project.category === "development";
    return false;
  });

  return (
    <>
      <Breadcrumbs
        mainTitle="Project"
        title="Apps"
        path={["Project App", "Project"]}
        Icon={StackIcon}
      />

      <div className="tab-wrapper mb-3">
        <Nav as="ul" className="tabs align-items-center">
          {[
            { k: "1", label: "All Project" },
            { k: "2", label: "Designing Project" },
            { k: "3", label: "Development Project" },
          ].map(({ k, label }) => (
            <Nav.Item key={k}>
              <Nav.Link
                eventKey={k}
                className={`tab-link ${activeTab === k ? "active" : ""}`}
                onClick={() => toggleTab(k as "1" | "2" | "3")}
              >
                {label}
              </Nav.Link>
            </Nav.Item>
          ))}

          <div className="ms-auto text-end">
            <Button
              variant="primary"
              className="w-45 h-45 icon-btn b-r-10 m-2"
              onClick={toggleModal}
            >
              <IconPlus size={18} />
            </Button>
          </div>
        </Nav>
      </div>

      <Tab.Content>
        <Tab.Pane eventKey={activeTab} active>
          <Row>
            {filteredProjects.map((project) => (
              <Col md={6} xl={4} key={project.id}>
                <Card className="hover-effect equal-card">
                  <Card.Header>
                    <div className="d-flex align-items-center">
                      <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden">
                        <Image
                          src={project.logo}
                          alt={project.title}
                          width={40}
                          height={40}
                          className="img-fluid"
                        />
                      </div>
                      <Link
                        to="/project_details"
                        className="flex-grow-1 ps-2 text-decoration-none"
                      >
                        <h6 className="m-0 text-dark f-w-600">
                          {project.title}
                        </h6>
                        <div className="text-muted f-s-14 f-w-500">
                          {project.subtitle}
                        </div>
                      </Link>
                      <Button
                        className="icon-btn delete-button"
                        variant="light-danger"
                        onClick={() => handleDelete(project.id)}
                      >
                        <IconTrash size={16} className="text-danger" />
                      </Button>
                    </div>
                  </Card.Header>

                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="text-dark f-s-14">
                          Start:{" "}
                          <span className="text-success">
                            {project.startDate}
                          </span>
                        </h6>
                        <h6 className="text-dark f-s-14">
                          End:{" "}
                          <span className="text-danger">{project.endDate}</span>
                        </h6>
                      </div>
                      <div className="text-end">
                        <p className="text-secondary mb-0">Pricing</p>
                        <h6>{project.price}</h6>
                      </div>
                    </div>

                    <p className="text-muted txt-ellipsis-2">
                      {project.description}
                    </p>

                    <div className="text-end mb-2">
                      <Badge bg={`light-${project.progressColor}`}>
                        {project.status}
                      </Badge>
                    </div>

                    <ProgressBar
                      now={project.progress}
                      variant={project.progressColor}
                      label={`${project.progress}%`}
                    />
                  </Card.Body>

                  <Card.Footer>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <span className="text-dark f-w-600">
                          <IconBrandWechat className="me-1" />
                          {project.members} Members
                        </span>
                      </Col>
                      <Col xs={6}>
                        <ul className="avatar-group float-end mb-0">
                          {project.avatars.map((avatar, i) => (
                            <li
                              key={i}
                              className={`h-30 w-30 d-flex-center b-r-50 ${
                                i === 0 ? "text-bg-danger" : "text-bg-success"
                              } b-2-light`}
                              title={`Member ${i + 1}`}
                            >
                              <Image
                                src={avatar}
                                alt={`Member ${i + 1}`}
                                width={30}
                                height={30}
                                className="img-fluid b-r-50"
                              />
                            </li>
                          ))}
                          {project.moreMembers > 0 && (
                            <li
                              className="text-bg-primary h-25 w-25 d-flex-center b-r-50"
                              title={`${project.moreMembers} More`}
                            >
                              {project.moreMembers}+
                            </li>
                          )}
                        </ul>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab.Pane>
      </Tab.Content>

      <Modal show={modalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit} className="app-form">
          <Modal.Body>
            <Row className="g-3">
              <Col xs={12}>
                <Form.Group controlId="projectName">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="projectName"
                    placeholder="Designing"
                    value={formData.projectName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    className="file_upload"
                    onChange={handleFileChange}
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mt-2 rounded"
                      height={60}
                    />
                  )}
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group controlId="pricing">
                  <Form.Label>Pricing</Form.Label>
                  <Form.Control
                    type="text"
                    name="pricing"
                    placeholder="$10k"
                    value={formData.pricing}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="designing">Designing</option>
                    <option value="development">Development</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Project
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ProjectTabs;
