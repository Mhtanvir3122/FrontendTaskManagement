import React from "react";
import {
  Button,
  Card,
  Dropdown,
  FormControl,
  InputGroup,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { chatmessages } from "@/data/app/chatapp/ChatData.ts";
import {
  IconBrandHipchat,
  IconCameraPlus,
  IconChecks,
  IconDotsVertical,
  IconMicrophone,
  IconMoodSmile,
  IconPaperclip,
  IconPhoneCall,
  IconSend,
  IconSettings,
  IconVideo,
} from "@tabler/icons-react";

function ChatContainer() {
  const [uiState, setUiState] = React.useState({
    callModal: false,
    videoModal: false,
  });

  const toggleCallModal = () => setUiState((prev) => ({ ...prev, callModal: !prev.callModal }));
  const toggleVideoModal = () => setUiState((prev) => ({ ...prev, videoModal: !prev.videoModal }));

  return (
    <Card className="chat-container-content-box">
      <Card.Header>
        <div className="chat-header d-flex align-items-center ms-lg-0 ms-5">
          {/* Profile Section */}
          <Link to="/apps/profile">
            <span className="profileimg h-45 w-45 d-flex-center b-r-50 position-relative bg-secondary">
              <img
                src="/images/avatar/14.png"
                alt="avatar"
                className="img-fluid b-r-50"
              />
              <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
            </span>
          </Link>

          <div className="flex-grow-1 ps-2 pe-2">
            <h6 className="mb-0">Jerry Ladies</h6>
            <p className="text-muted f-s-12 text-success mb-0">Online</p>
          </div>

          {/* Call Button */}
          <Button
            variant="success"
            className="h-45 w-45 icon-btn b-r-22 me-sm-2"
            onClick={toggleCallModal}
          >
            <IconPhoneCall size={18} />
          </Button>

          {/* Call Modal */}
          <Modal show={uiState.callModal} onHide={toggleCallModal} centered>
            <Modal.Body className="p-0">
              <div className="call">
                <div className="call-div">
                  <img
                    src="/images/profile-app/32.jpg"
                    className="w-100 rounded"
                    alt=""
                  />
                  <div className="call-caption">
                    <h2 className="text-white">Jerry Ladies</h2>
                    <div className="d-flex justify-content-center">
                      <Button
                        variant="success"
                        className="h-40 w-40 icon-btn d-flex-center b-r-50 call-btn"
                        onClick={toggleCallModal}
                      >
                        <IconPhoneCall size={18} />
                      </Button>
                      <Button
                        variant="danger"
                        className="h-40 w-40 icon-btn d-flex-center b-r-50 ms-4 call-btn"
                        onClick={toggleCallModal}
                      >
                        <IconPhoneCall size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* Video Button */}
          <Button
            variant="primary"
            className="h-45 w-45 icon-btn b-r-22 me-sm-2"
            onClick={toggleVideoModal}
          >
            <IconVideo size={18} />
          </Button>

          {/* Video Modal */}
          <Modal show={uiState.videoModal} onHide={toggleVideoModal} centered>
            <Modal.Body className="p-0">
              <div className="call">
                <div className="call-div pointer-events-auto">
                  <img
                    src="/images/profile-app/25.jpg"
                    className="w-100 rounded"
                    alt="avatar"
                  />
                  <div className="call-caption">
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                        <IconMicrophone size={16} className="text-dark" />
                      </span>
                      <Button
                        variant="danger"
                        className="h-45 w-45 icon-btn d-flex-center b-r-50 ms-4 call-btn"
                        onClick={toggleVideoModal}
                      >
                        <IconPhoneCall size={18} />
                      </Button>
                      <span className="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                        <IconPhoneCall size={16} className="text-dark" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="video-div">
                  <img
                    src="/images/profile-app/31.jpg"
                    className="w-100 rounded"
                    alt=""
                  />
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* Settings Dropdown */}
          <Dropdown className="dropdown-icon-none">
            <Dropdown.Toggle
              variant="secondary"
              className="h-45 w-45 icon-btn b-r-22 me-sm-2"
            >
              <IconSettings size={18} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <IconBrandHipchat size="18" />{" "}
                <span className="f-s-13">Chat Settings</span>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <IconPhoneCall size={18} />{" "}
                <span className="f-s-13">Contact Settings</span>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <IconSettings size={18} />{" "}
                <span className="f-s-13">Settings</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="chat-container">
          <div className="text-center">
            <span className="badge text-light-secondary">Today</span>
          </div>

          {chatmessages.map((chat) => (
            <div key={chat.id} className="position-relative">
              {/* Left aligned chat */}
              {chat.position === "left" ? (
                <>
                  <div className="chatdp h-45 w-45 b-r-50 position-absolute start-0 bg-secondary">
                    <img
                      src={chat.avatar}
                      alt="Avatar"
                      className="img-fluid b-r-50"
                    />
                  </div>
                  <div className="chat-box">
                    <div>
                      <p className="chat-text">{chat.message}</p>
                      <p className="text-muted">
                        <IconChecks size={18} className="text-primary" />{" "}
                        {chat.time}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                /* Right aligned chat */
                <>
                  <div className="chat-box-right">
                    <div>
                      <p className="chat-text">{chat.message}</p>
                      <p className="text-muted">
                        <IconChecks size={18} className="text-primary" />{" "}
                        {chat.time}
                      </p>
                    </div>
                  </div>
                  <div className="chatdp h-45 w-45 b-r-50 position-absolute end-0 top-0 bg-danger">
                    <img
                      src={chat.avatar}
                      alt="Avatar"
                      className="img-fluid b-r-50"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Card.Body>

      <Card.Footer>
        <div className="chat-footer d-flex">
          {/* Input and Emoji Button */}
          <div className="app-form flex-grow-1">
            <InputGroup>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Emoji</Tooltip>}
              >
                <InputGroup.Text className="bg-secondary ms-2 me-2 b-r-10">
                  <span className="emoji-btn d-flex-center">
                    <IconMoodSmile size={18} className="text-white" />
                  </span>
                </InputGroup.Text>
              </OverlayTrigger>
              <FormControl
                type="text"
                className="b-r-6"
                placeholder="Type a message"
                aria-label="Recipient's username"
              />
              <Button variant="primary" className="btn-sm ms-2 me-2 b-r-4">
                <IconSend size={18} /> <span>Send</span>
              </Button>
            </InputGroup>
          </div>

          {/* Additional Buttons */}
          <div className="d-none d-sm-flex">
            <OverlayTrigger overlay={<Tooltip>Microphone</Tooltip>}>
              <Button variant="secondary" className="w-50 h-50 icon-btn ms-2">
                <IconMicrophone size={18} />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip>Camera</Tooltip>}>
              <Button variant="secondary" className="w-50 h-50 icon-btn ms-2">
                <IconCameraPlus size={18} />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip>Attach file</Tooltip>}>
              <Button variant="secondary" className="w-50 h-50 icon-btn ms-2">
                <IconPaperclip size={18} />
              </Button>
            </OverlayTrigger>
          </div>

          {/* Dropdown for Mobile */}
          <div>
            <Dropdown className="dropdown-icon-none d-sm-none">
              <Dropdown.Toggle
                variant="light-primary"
                className="d-flex-center ms-1 p-0"
              >
                <IconDotsVertical size={18} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  <IconMicrophone size={18} />{" "}
                  <span className="f-s-13">Microphone</span>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <IconCameraPlus size={18} />
                  <span className="f-s-13">Camera</span>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <IconPaperclip size={18} />{" "}
                  <span className="f-s-13">Paperclip</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ChatContainer;
