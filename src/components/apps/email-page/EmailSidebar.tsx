import React, { SetStateAction, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Nav,
} from "react-bootstrap";

import {
  IconAlbum,
  IconAlertOctagon,
  IconAlignJustified,
  IconCircleFilled,
  IconFile,
  IconMail,
  IconSend,
  IconStar,
  IconTag,
  IconTrash,
  IconUsers,
} from "@tabler/icons-react";

interface NewEmail {
  subject: string;
  status?: string;
}

interface EmailSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<SetStateAction<boolean>>;
  onSendEmail: (email: NewEmail) => void;
}

const EmailSidebar: React.FC<EmailSidebarProps> = ({
  activeTab,
  setActiveTab,
  setIsOpenSidebar,
  isOpenSidebar,
  onSendEmail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMail, setNewMail] = useState({
    to: "",
    subject: "",
    status: "",
    message: "",
    file: null as File | null,
  });

  const emailTabs = [
    {
      icon: <IconMail size={18} />,
      label: "Inbox",
      badge: "10+",
      tab: "inbox",
    },
    { icon: <IconSend size={18} />, label: "Sent", tab: "sent" },
    { icon: <IconFile size={18} />, label: "Draft", tab: "drafts" },
    {
      icon: <IconStar size={18} />,
      label: "Starred",
      badge: "2+",
      tab: "starred",
    },
    { icon: <IconAlertOctagon size={18} />, label: "Spam", tab: "spam" },
    { icon: <IconTrash size={18} />, label: "Trash", tab: "trash" },
  ];

  const labels = [
    { color: "text-danger", label: "Social" },
    { color: "text-primary", label: "Company" },
    { color: "text-success", label: "Important" },
    { color: "text-info", label: "Private" },
  ];

  const categories = [
    { icon: <IconMail size={18} />, label: "All Mail" },
    { icon: <IconAlbum size={18} />, label: "Primary" },
    { icon: <IconTag size={18} />, label: "Promotions" },
    { icon: <IconUsers size={18} />, label: "Social" },
  ];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setNewMail((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendEmail(newMail);
    setNewMail({
      to: "",
      subject: "",
      status: "",
      message: "",
      file: null,
    });
    toggleModal();
  };

  return (
    <Col lg={3}>
      <div className={`mailbox ${isOpenSidebar ? "mailtoggle" : ""}`}>
        <Card>
          <Card.Body>
            <div className="d-flex">
              <Button
                variant="primary"
                className="w-100 rounded"
                onClick={toggleModal}
              >
                Compose
              </Button>
              <div className="close-togglebtn">
                <Button
                  variant="link"
                  onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                  className="ms-2 p-2 close-toggle text-primary"
                  role="button"
                >
                  <IconAlignJustified size={20} />
                </Button>
              </div>
            </div>

            <div className="horizontal-tab-wrapper">
              <Nav as="ul" className="email-list mt-3 tabs flex-column">
                {emailTabs.map(({ icon, label, badge, tab }) => (
                  <Nav.Item key={tab}>
                    <Nav.Link
                      onClick={() => setActiveTab(tab)}
                      className={`tab-link cursor-pointer d-flex align-items-center ${activeTab === tab ? "active" : ""}`}
                    >
                      <span className="pe-2">{icon}</span>
                      <span className="flex-grow-1">{label}</span>
                      {badge && <span>{badge}</span>}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>

            <div className="app-divider-v dashed p-2" />

            <ul className="email-list">
              <li>
                <h6>Labels</h6>
              </li>
              {labels.map(({ color, label }) => (
                <li key={label} className={`f-w-500 ${color}`}>
                  <IconCircleFilled className={`pe-2 ${color}`} size={18} />
                  {label}
                </li>
              ))}
            </ul>

            <div className="app-divider-v dashed p-2" />

            <ul className="email-list">
              {categories.map(({ icon, label }) => (
                <li key={label} className="f-w-500">
                  <span className="pe-2">{icon}</span> {label}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>

      <Modal
        show={isModalOpen}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="app-form" onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <FormLabel>To :</FormLabel>
              <FormControl
                type="email"
                id="to"
                placeholder="@gmail.com"
                value={newMail.to}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Subject :</FormLabel>
              <FormControl
                type="text"
                id="subject"
                placeholder="Subject"
                value={newMail.subject}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Status :</FormLabel>
              <FormControl
                as="select"
                id="status"
                value={newMail.status}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Important">Important</option>
                <option value="Social">Social</option>
                <option value="Company">Company</option>
              </FormControl>
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Message :</FormLabel>
              <FormControl
                as="textarea"
                id="message"
                placeholder="Type your message..."
                rows={5}
                value={newMail.message}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Attachment :</FormLabel>
              <FormControl
                type="file"
                onChange={(e) =>
                  setNewMail((prev) => ({
                    ...prev,
                    file: (e.target as HTMLInputElement).files?.[0] ?? null,
                  }))
                }
              />
            </FormGroup>
            <div className="d-flex justify-content-end mt-3">
              <Button
                variant="secondary"
                className="me-2"
                onClick={toggleModal}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default EmailSidebar;
