import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { emailList } from "@/data/app/emailapp/ReadEmail.tsx";
import { StackIcon } from "@phosphor-icons/react";
import {
  IconAlertOctagon,
  IconArchive,
  IconArrowBackUp,
  IconArrowBackUpDouble,
  IconArrowForwardUp,
  IconArrowLeft,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconDownload,
  IconFolder,
  IconPaperclip,
  IconStar,
  IconTag,
  IconTrash,
} from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import TextEditor from "@/components/editor/TextEditor.tsx";

const ReadEmailPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEmail = emailList[currentIndex];

  const renderTooltip = (text: string) => (
    <Tooltip id={`tooltip-${text.toLowerCase()}`}>{text}</Tooltip>
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, emailList.length - 1));
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Read Email"
        title="Apps"
        path={["Emails App", "Read Email"]}
        Icon={StackIcon}
      />

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center flex-wrap mb-3">
                <div className="flex-grow-1 d-flex align-items-center gap-2">
                  <Link to="/apps/email-page/email">
                    <Button
                      variant="link"
                      className="p-0 pe-2"
                      title="Back To Inbox"
                    >
                      <IconArrowLeft size={22} className="text-dark" />
                    </Button>
                  </Link>

                  {[
                    {
                      icon: <IconArchive size={18} className="text-dark" />,
                      label: "Archive",
                    },
                    {
                      icon: <IconStar size={18} className="text-dark" />,
                      label: "Starred",
                    },
                    {
                      icon: (
                        <IconAlertOctagon size={18} className="text-dark" />
                      ),
                      label: "Spam",
                    },
                    {
                      icon: <IconTrash size={18} className="text-dark" />,
                      label: "Delete",
                    },
                    {
                      icon: <IconFolder size={18} className="text-dark" />,
                      label: "Folder",
                    },
                    {
                      icon: <IconTag size={18} className="text-dark" />,
                      label: "Labels",
                    },
                  ].map(({ icon, label }, idx) => (
                    <OverlayTrigger
                      key={idx}
                      placement="top"
                      overlay={renderTooltip(label)}
                    >
                      <Button
                        variant="link"
                        className="border-0 p-1 text-decoration-none"
                      >
                        {icon}
                      </Button>
                    </OverlayTrigger>
                  ))}
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <span className="text-muted text-dark me-2">
                    {currentIndex + 1} of {emailList.length}
                  </span>

                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip("Previous")}
                  >
                    <Button
                      variant="link"
                      className="border-0 p-1 text-decoration-none"
                      onClick={handlePrevious}
                      disabled={currentIndex === 0}
                    >
                      <IconChevronLeft size={22} className="text-dark" />
                    </Button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip("Next")}
                  >
                    <Button
                      variant="link"
                      className="border-0 p-1 text-decoration-none"
                      onClick={handleNext}
                      disabled={currentIndex === emailList.length - 1}
                    >
                      <IconChevronRight size={22} className="text-dark" />
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>

              <div className="mail-container">
                <div className="d-flex align-items-center flex-nowrap mb-5">
                  <div className="position-relative">
                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center w-45 h-45">
                      <img
                        src="/images/avatar/6.png"
                        alt="avatar"
                        className="img-fluid rounded-circle w-100 h-100 object-cover"
                      />
                    </div>
                    <span className="position-absolute top-0 end-0 bg-success border border-light rounded-circle d-flex align-items-center justify-content-center w-10 h-10"></span>
                  </div>

                  <div className="flex-grow-1 ps-3">
                    <p className="text-secondary f-s-14 m-0">
                      {currentEmail.to}
                    </p>
                    <Dropdown className="dropdown-icon-none">
                      <Dropdown.Toggle variant="link" className="p-0 text-dark">
                        to <IconChevronDown size={18} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          From:{" "}
                          <span className="text-muted small">
                            {currentEmail.from}
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          To:{" "}
                          <span className="text-muted small">
                            {currentEmail.to}
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          cc:{" "}
                          <span className="text-muted small">
                            {currentEmail.cc}
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Date:{" "}
                          <span className="text-muted small">
                            {currentEmail.date}
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Subject:{" "}
                          <span className="text-muted small">
                            {currentEmail.subject}
                          </span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="text-end d-none d-sm-block">
                    <p className="mb-0">
                      {currentEmail.date}, {currentEmail.time}
                    </p>
                    <Badge bg="primary">Company</Badge>
                  </div>
                </div>

                <div className="mb-3 text-secondary">{currentEmail.body}</div>

                <div className="border-top my-3"></div>

                <div className="mb-3">
                  <h6>
                    <IconPaperclip size={18} className="me-2" /> Attached
                  </h6>
                  <div className="data-list-box d-flex flex-wrap gap-2 mt-3">
                    {currentEmail.files.map((file, index) => (
                      <div key={index} className="filebox">
                        <div className="d-flex gap-3 align-items-center position-relative">
                          <div className="position-absolute start-0 w-35 h-35">
                            <img
                              alt={file.title}
                              src={file.icon}
                              className="w-100 h-100 img-contain"
                            />
                          </div>

                          <div className="flex-grow-1 mg-s-40">
                            <h6 className="mb-0">{file.title}</h6>
                            <p className="text-secondary mb-0">
                              {file.details}
                            </p>
                          </div>

                          <p className="file-data text-secondary fw-semibold mb-0">
                            <IconDownload size={20} />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <TextEditor />

                <div className="d-flex flex-wrap gap-2 justify-content-end my-3">
                  <Button variant="primary">
                    <IconArrowBackUp className="me-1" /> Reply
                  </Button>
                  <Button variant="primary">
                    <IconArrowBackUpDouble className="me-1" /> Reply All
                  </Button>
                  <Button variant="primary">
                    <IconArrowForwardUp className="me-1" /> Forward
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReadEmailPage;
