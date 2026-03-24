import React, { SetStateAction, useState } from "react";
import { Badge, Card, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  IconArchive,
  IconDotsVertical,
  IconMailOpened,
  IconStar,
  IconStarFilled,
  IconTrash,
} from "@tabler/icons-react";

import EmailToolbar from "@/components/apps/email-page/EmailToolbar.tsx";

interface EmailBoardProps {
  activeTab: string;
  onTabChange?: (tab: string) => void;
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<SetStateAction<boolean>>;
  emails: EmailItem[];
  setEmails: React.Dispatch<SetStateAction<EmailItem[]>>;
}

interface EmailItem {
  id: string;
  sender: string;
  avatar: string;
  avatarBg: string;
  preview: string;
  date: string;
  tag: string;
  tagClass: string;
  starred: boolean;
  read: boolean;
  tab: string;
}

const EmailBoard: React.FC<EmailBoardProps> = ({
  activeTab,
  onTabChange,
  isOpenSidebar,
  setIsOpenSidebar,
  emails,
  setEmails,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const toggleStar = (id: string) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };

  const deleteEmail = (id: string) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, tab: "trash" } : email
      )
    );
    if (activeTab !== "trash" && onTabChange) {
      onTabChange("trash");
    }
  };

  const archiveEmail = (id: string) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, tab: "inbox" } : email
      )
    );
  };

  const markAsRead = (id: string) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, read: !email.read } : email
      )
    );
  };

  const filteredEmails = emails
    .filter((email) => {
      switch (activeTab) {
        case "inbox":
          return email.tab === "inbox";
        case "sent":
          return email.tab === "sent";
        case "drafts":
          return email.tab === "drafts";
        case "spam":
          return email.tab === "spam";
        case "starred":
          return email.starred;
        case "trash":
          return email.tab === "trash";
        default:
          return email.tab === "inbox";
      }
    })
    .filter((email) =>
      email.sender.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const renderEmailItem = (email: EmailItem) => (
    <div key={email.id} className={`mail-box  ${!email.read ? "fw-bold" : ""}`}>
      <span
        className="ms-2 me-2 cursor-pointer"
        onClick={() => toggleStar(email.id)}
      >
        {email.starred ? (
          <IconStarFilled className="text-warning" size={20} />
        ) : (
          <IconStar className="text-warning" size={20} />
        )}
      </span>
      <div className="flex-grow-1 position-relative">
        <div
          className={`mail-img h-35 w-35 rounded-circle overflow-hidden bg-${email.avatarBg} position-absolute mt-1`}
        >
          <img alt="" className="img-fluid" src={email.avatar} />
        </div>
        <div className="ms-5 ps-4">
          <h6 className="mb-0 fw-semibold txt-ellipsis-1">{email.sender}</h6>
          <Link to="/apps/email-page/read-email">
            <span className="text-secondary">{email.preview}</span>
          </Link>
        </div>
      </div>
      <div className="text-center ">
        <p className="mb-0">{email.date}</p>
        <Badge pill bg={email.tagClass}>
          {email.tag}
        </Badge>
      </div>
      <div>
        <Dropdown className="btn-group dropdown-icon-none">
          <Dropdown.Toggle variant="white" className="border-0 p-0">
            <IconDotsVertical className="text-primary" size={20} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => archiveEmail(email.id)}>
              <IconArchive size={16} className="me-2" /> Archive
            </Dropdown.Item>
            <Dropdown.Item onClick={() => deleteEmail(email.id)}>
              <IconTrash size={16} className="me-2" /> Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={() => markAsRead(email.id)}>
              <IconMailOpened size={16} className="me-2" /> Mark as Read
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );

  return (
    <Col lg="9">
      <Card className="h-100">
        <Card.Body>
          <EmailToolbar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onToggleSidebar={() => setIsOpenSidebar(!isOpenSidebar)}
          />
          <div className="mail-table">
            {filteredEmails.length > 0 ? (
              filteredEmails.map(renderEmailItem)
            ) : (
              <div className="text-center py-5">
                <h5>No emails found</h5>
                <p>There are no emails in this folder</p>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EmailBoard;
