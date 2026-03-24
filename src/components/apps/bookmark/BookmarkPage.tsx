import { ChangeEvent, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";

import { bookMarkTableData } from "@/data/app/bookmark-data/Bookmark1.ts";
import { StackIcon } from "@phosphor-icons/react";
import { IconCircleFilled } from "@tabler/icons-react";
import {
  BookBookmark,
  Bookmark,
  HeartStraight,
  ShareNetwork,
  Star,
  Tag,
  Trash,
  UserCircle,
} from "phosphor-react";

import BookCard from "@/components/apps/bookmark/BookCard.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface BookmarkType {
  id: number;
  title: string;
  url: string;
  image: string;
  isFavourite?: boolean;
  isShared?: boolean;
  isStarred?: boolean;
  isDelete?: boolean;
}

const BookmarkPage = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [bookmarksData, setBookmarksData] =
    useState<BookmarkType[]>(bookMarkTableData);
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [editBookmark, setEditBookmark] = useState<BookmarkType | null>(null);

  const toggleModal = () => setModalOpen(!modalOpen);
  const toggleEditModal = () => setEditModalOpen(!editModalOpen);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleAddBookmark = () => {
    const newBookmark: BookmarkType = {
      id: bookmarksData.length + 1,
      title,
      url,
      image: file ? URL.createObjectURL(file) : "",
    };

    setBookmarksData([newBookmark, ...bookmarksData]);
    resetForm();
    toggleModal();
  };

  const handleEditClick = (bookmark: BookmarkType) => {
    setEditBookmark(bookmark);
    setTitle(bookmark.title);
    setUrl(bookmark.url);
    setEditModalOpen(true);
  };

  const handleSaveChanges = () => {
    const updatedBookmark: BookmarkType = {
      id: editBookmark?.id ?? 0,
      title,
      url,
      image: file ? URL.createObjectURL(file) : (editBookmark?.image ?? ""),
    };

    const updatedBookmarks = bookmarksData.map((bookmark) =>
      bookmark.id === editBookmark?.id ? updatedBookmark : bookmark
    );

    setBookmarksData(updatedBookmarks);
    resetForm();
    toggleEditModal();
  };

  const resetForm = () => {
    setTitle("");
    setUrl("");
    setFile(null);
  };

  const handleDelete = (id: number) => {
    setBookmarksData((prev) =>
      prev.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, isDelete: !bookmark.isDelete }
          : bookmark
      )
    );
  };

  const handleFavouriteToggle = (id: number) => {
    setBookmarksData((prev) =>
      prev.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, isFavourite: !bookmark.isFavourite }
          : bookmark
      )
    );
  };

  const handleShareToggle = (id: number) => {
    setBookmarksData((prev) =>
      prev.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, isShared: !bookmark.isShared }
          : bookmark
      )
    );
  };

  const handleStarToggle = (id: number) => {
    setBookmarksData((prev) =>
      prev.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, isStarred: !bookmark.isStarred }
          : bookmark
      )
    );
  };

  const renderCards = (filterFn: (b: BookmarkType) => boolean) => (
    <Row className="bookmark-card">
      {bookmarksData.filter(filterFn).map((bookmark) => (
        <Col sm={6} xxl={4} key={bookmark.id}>
          <BookCard
            bookmark={bookmark}
            onDelete={handleDelete}
            onFavouriteToggle={handleFavouriteToggle}
            onShareToggle={handleShareToggle}
            onStarToggle={handleStarToggle}
            onEdit={handleEditClick}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Bookmark"
        title="Apps"
        path={["Bookmark"]}
        Icon={StackIcon}
      />
      <Row>
        <Col lg={3}>
          <Card>
            <Card.Body>
              <div className="vertical-tab setting-tab">
                <Nav as="ul" className="nav-tabs app-tabs-primary m-0">
                  <Nav.Item as="li">
                    <Nav.Link
                      active={activeTab === "tab1"}
                      onClick={() => setActiveTab("tab1")}
                    >
                      <Bookmark size={20} className="me-2" />
                      Book Mark
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      active={activeTab === "tab2"}
                      onClick={() => setActiveTab("tab2")}
                    >
                      <HeartStraight size={20} className="me-2" />
                      Favourites
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      active={activeTab === "tab3"}
                      onClick={() => setActiveTab("tab3")}
                    >
                      <ShareNetwork size={20} className="me-2" />
                      Share
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      active={activeTab === "tab4"}
                      onClick={() => setActiveTab("tab4")}
                    >
                      <Star size={20} className="me-2" />
                      Important
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      active={activeTab === "tab5"}
                      onClick={() => setActiveTab("tab5")}
                    >
                      <Trash size={20} className="me-2" />
                      Delete
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              <hr />

              <ul className="email-list">
                <li>
                  <h6>Labels</h6>
                </li>
                <li>
                  <IconCircleFilled size={15} className="me-2 text-danger" />
                  Social
                </li>
                <li>
                  <IconCircleFilled size={15} className="me-2 text-primary" />
                  Company
                </li>
                <li>
                  <IconCircleFilled size={15} className="me-2 text-success" />
                  Important
                </li>
                <li>
                  <IconCircleFilled size={15} className="me-2 text-info" />
                  Private
                </li>
              </ul>

              <hr />

              <ul className="email-list">
                <li>
                  <Bookmark size={20} className="me-2" />
                  All Bookmark
                </li>
                <li>
                  <BookBookmark size={20} className="me-2" />
                  Primary
                </li>
                <li>
                  <Tag size={20} className="me-2" />
                  Promotions
                </li>
                <li>
                  <UserCircle size={20} className="me-2" />
                  Social
                </li>
              </ul>

              <Button
                variant="primary"
                className="w-100 mt-4 rounded"
                onClick={toggleModal}
              >
                Add Bookmark
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={9}>
          <Tab.Content>
            {activeTab === "tab1" &&
              renderCards((b) => !b.isDelete && !b.isStarred && !b.isShared)}
            {activeTab === "tab2" && renderCards((b) => b.isFavourite ?? false)}
            {activeTab === "tab3" && renderCards((b) => b.isShared ?? false)}
            {activeTab === "tab4" && renderCards((b) => b.isStarred ?? false)}
            {activeTab === "tab5" && renderCards((b) => b.isDelete ?? false)}
          </Tab.Content>
        </Col>
      </Row>

      {/* Add Modal */}
      <Modal show={modalOpen} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="app-form">
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddBookmark}>
            Add New
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={editModalOpen} onHide={toggleEditModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="app-form">
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BookmarkPage;
