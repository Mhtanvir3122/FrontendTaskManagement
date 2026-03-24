import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  Row,
} from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";
import {
  IconAlignJustified,
  IconBrandHipchat,
  IconPhoneCall,
  IconSettings,
  IconX,
} from "@tabler/icons-react";

import ChatContainer from "@/components/apps/chat/ChatContainer.tsx";
import ChatLeftData from "@/components/apps/chat/ChatLeftData.tsx";
import NewChatDropdown from "@/components/apps/chat/NewChatDropdown.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ChatPage: React.FC = () => {
  const [isChatToggled, setIsChatToggled] = useState(false);

  const handleToggleClick = () => {
    setIsChatToggled((prev) => !prev);
  };

  const handleCloseClick = () => {
    setIsChatToggled(false);
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Chat"
          title="Apps"
          path={["Chat"]}
          Icon={StackIcon}
        />
        <Row className="row position-relative chat-container-box">
          {/* Sidebar / Left Chat Panel */}
          <Col lg="4" xxl="3" className="box-col-5">
            <div className={`chat-div ${isChatToggled ? "chat-toggle" : ""}`}>
              <Card>
                <Card.Header className="border-0">
                  <div className="d-flex align-items-center">
                    <span className="chatdp h-45 w-45 d-flex-center b-r-50 position-relative bg-danger">
                      <img
                        src="/images/avatar/09.png"
                        alt="User Avatar"
                        className="img-fluid b-r-50"
                      />
                      <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle" />
                    </span>

                    <div className="flex-grow-1 ps-2">
                      <h6 className="mb-0">Ninfa Monaldo</h6>
                      <p className="text-secondary mb-0 f-s-12">
                        Web Developer
                      </p>
                    </div>

                    <div>
                      <Dropdown as={ButtonGroup} className="dropdown-icon-none">
                        <Dropdown.Toggle
                          as="a"
                          role="button"
                          className="btn p-0"
                          aria-expanded="false"
                        >
                          <IconSettings size={18} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="start">
                          <Dropdown.Item href="#">
                            <IconBrandHipchat size={18} className="me-2" />
                            <span className="f-s-13">Chat Settings</span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <IconPhoneCall size={18} className="me-2" />
                            <span className="f-s-13">Contact Settings</span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <IconSettings size={18} className="me-2" />
                            <span className="f-s-13">Settings</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    {/* Close Button */}
                    <div className="close-togglebtn">
                      <Button
                        variant="danger"
                        onClick={handleCloseClick}
                        className="ms-2 close-toggle icon-btn w-35 h-35"
                      >
                        <IconX size={18} />
                      </Button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body className="p-0">
                  <ChatLeftData />
                  <NewChatDropdown />
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Chat Content Panel */}
          <Col lg="8" xxl="9" className="box-col-7">
            <ChatContainer />

            <div className="d-block d-lg-none">
              <Button
                className="toggle-btn icon-btn"
                color="link"
                onClick={handleToggleClick}
              >
                <IconAlignJustified size={18} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatPage;
