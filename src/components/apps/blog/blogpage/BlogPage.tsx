import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { Blog, initialBlogData } from "@/data/app/blog/BlogData.ts";
import { StackIcon } from "@phosphor-icons/react";
import {
  IconArchive,
  IconCalendarDue,
  IconDotsVertical,
  IconTrash,
} from "@tabler/icons-react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Format date for display
  const formatDisplayDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Format date for input[type="date"]
  const formatInputDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setBlogs(initialBlogData);
  }, []);

  useEffect(() => {
    if (blogs.length === 0 || modalOpen) return;

    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      width: "90vw",
      height: "90vh",
    });

    return () => {
      lightbox.destroy();
    };
  }, [blogs, modalOpen]);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleEditClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setSelectedImage(blog.image);
    setImageFile(null);
    toggleModal();
  };

  const handleDeleteClick = (id: number) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setSelectedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    if (!selectedBlog) return;

    const updatedBlog = {
      ...selectedBlog,
      image: imageFile ? URL.createObjectURL(imageFile) : selectedBlog.image,
    };

    setBlogs((prev) =>
      prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );

    toggleModal();
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Blog Page"
        title="Apps"
        path={["Blog Page", "Blog"]}
        Icon={StackIcon}
      />

      <Row>
        {blogs.map((blog) => (
          <Col key={blog.id} className={blog.colclass}>
            <Card className="overflow-hidden">
              <a
                href={blog.image}
                className="glightbox img-hover-zoom"
                data-glightbox="type: image; zoomable: true;"
              >
                <Card.Img variant="top" src={blog.image} alt={blog.title} />
              </a>

              <div className="tag-container position-absolute top-0 end-0 m-2">
                <span className="badge bg-secondary">{blog.tag}</span>
              </div>

              <Card.Body>
                <div className="d-flex align-items-center mb-2 text-muted">
                  <IconCalendarDue size={18} className="me-2" />
                  {formatDisplayDate(blog.date)}
                </div>

                <Link
                  to="/apps/blog-page/blog-details"
                  className="fs-5 title-text "
                >
                  {blog.title}
                </Link>
                <p className="text-secondary txt-ellipsis-2 mt-2">
                  {blog.description}
                </p>

                <hr className="dashed" />

                <div className="d-flex justify-content-between align-items-center position-relative">
                  <div className="rounded-circle overflow-hidden me-3 w-45 h-45 bg-primary">
                    <img
                      src={blog.author.avatar}
                      alt="avatar"
                      className="img-fluid"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0">{blog.author.name}</h6>
                    <small className="text-muted">{blog.author.time}</small>
                  </div>
                  <div className="dropdown">
                    <Button
                      variant="white"
                      className="icon-btn border-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <IconDotsVertical size={18} />
                    </Button>
                    <ul className="dropdown-menu">
                      <li
                        className="dropdown-item text-success"
                        onClick={() => handleEditClick(blog)}
                      >
                        <IconArchive size={16} className="me-2" />
                        Edit
                      </li>
                      <li
                        className="dropdown-item text-danger"
                        onClick={() => handleDeleteClick(blog.id)}
                      >
                        <IconTrash size={16} className="me-2" />
                        Delete
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Edit Modal */}
      <Modal show={modalOpen} onHide={toggleModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="app-form">
            <FormGroup className="mb-4">
              <FormLabel>Blog Image</FormLabel>
              <div className="d-flex flex-column">
                <FormControl
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <small className="text-muted mt-1">
                  Upload a new image or keep the current one
                </small>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Preview"
                    className="mt-3 rounded max-h-200 img-cover"
                    fluid
                  />
                )}
              </div>
            </FormGroup>

            <FormGroup className="form-floating mb-3">
              <FormControl
                type="text"
                id="blogTitle"
                placeholder="Blog Title"
                value={selectedBlog?.title || ""}
                onChange={(e) =>
                  selectedBlog &&
                  setSelectedBlog({
                    ...selectedBlog,
                    title: e.target.value,
                  })
                }
              />
              <FormLabel htmlFor="blogTitle">Blog Title</FormLabel>
            </FormGroup>

            <FormGroup className="form-floating mb-3">
              <FormControl
                as="textarea"
                id="blogDescription"
                placeholder="Type a comment here"
                className="h-120"
                value={selectedBlog?.description || ""}
                onChange={(e) =>
                  selectedBlog &&
                  setSelectedBlog({
                    ...selectedBlog,
                    description: e.target.value,
                  })
                }
              />
              <FormLabel htmlFor="blogDescription">Blog Description</FormLabel>
            </FormGroup>

            <FormGroup className="form-floating mb-3">
              <FormControl
                type="date"
                id="blogDate"
                value={
                  selectedBlog?.date ? formatInputDate(selectedBlog.date) : ""
                }
                onChange={(e) =>
                  selectedBlog &&
                  setSelectedBlog({
                    ...selectedBlog,
                    date: e.target.value,
                  })
                }
              />
              <FormLabel htmlFor="blogDate">Blog Date</FormLabel>
            </FormGroup>

            <FormGroup className="form-floating mb-3">
              <FormControl
                type="text"
                id="blogTag"
                placeholder="Blog Tag"
                value={selectedBlog?.tag || ""}
                onChange={(e) =>
                  selectedBlog &&
                  setSelectedBlog({
                    ...selectedBlog,
                    tag: e.target.value,
                  })
                }
              />
              <FormLabel htmlFor="blogTag">Blog Tag</FormLabel>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BlogPage;
