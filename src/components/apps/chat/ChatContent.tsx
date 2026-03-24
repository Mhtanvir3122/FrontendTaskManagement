import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";

import { chatGroups, privateContacts } from "@/data/app/chatapp/ChatData.ts";
import { IconChecks } from "@tabler/icons-react";
import { LockKeyOpen, UsersThree } from "phosphor-react";

const ChatContent = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="tab-wrapper mt-3">
      <Tab.Container
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k || "1")}
      >
        <Nav
          variant="tabs"
          className=" app-tabs-primary chat-status-tab border-0 justify-content-between mb-0 pb-0 px-3"
        >
          <Nav.Item>
            <Nav.Link eventKey="1" role="tab">
              <LockKeyOpen size={18} weight="duotone" className="me-2" />
              Private
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" role="tab">
              <UsersThree size={18} weight="duotone" className="me-2" />
              Group
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="pt-3">
          {/* Tab 1: Private */}
          <Tab.Pane eventKey="1">
            <div className="chat-contact">
              {privateContacts.map((contact) => (
                <div
                  className="chat-contactbox d-flex align-items-center"
                  key={contact.id}
                >
                  <div className="position-relative me-3">
                    <span
                      className={`h-45 w-45 d-flex-center b-r-50 position-relative ${contact.status}`}
                    >
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="img-fluid b-r-50"
                      />
                      <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 f-w-500 text-dark text-truncate">
                      {contact.name}
                    </p>
                    <p className="text-secondary f-s-12 chat-message mb-0 d-flex align-items-center ">
                      <IconChecks size={16} className="me-1" />
                      <span className="txt-ellipsis-1">{contact.message}</span>
                    </p>
                  </div>
                  <div>
                    <p className="f-s-12 chat-time mb-0">{contact.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Pane>

          {/* Tab 2: Group */}
          <Tab.Pane eventKey="2">
            <div className="chat-contact chat-group-list">
              {chatGroups.map((group, index) => (
                <div
                  key={index}
                  className="chat-contactbox d-flex align-items-center position-relative"
                >
                  <div className="position-relative me-3">
                    <ul className="avatar-group list-unstyled d-flex align-items-center mb-0">
                      {group.imageSrc ? (
                        <li
                          className={`h-45 w-45 d-flex-center overflow-hidden b-r-50 bg-${group.avatarBg}`}
                        >
                          <img
                            src={group.imageSrc}
                            alt={group.groupName}
                            className="img-fluid"
                          />
                        </li>
                      ) : (
                        <li
                          className={`text-bg-${group.avatarBg} h-45 w-45 d-flex-center b-r-50`}
                        >
                          {group.avatars[0]}
                        </li>
                      )}
                      <li
                        className="text-bg-secondary h-35 w-35 d-flex-center b-r-50"
                        title={group.avatars[1]}
                      >
                        {group.avatars[1]}
                      </li>
                    </ul>
                  </div>
                  <div className="flex-grow-1 text-start">
                    <p className="mb-0 f-w-500 text-dark txt-ellipsis-1">
                      {group.groupName}
                    </p>
                    <p className="text-secondary f-s-12 chat-message mb-0">
                      {group.lastMessage}
                    </p>
                  </div>
                  <div>
                    <p className="f-s-12 chat-time mb-0">{group.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ChatContent;
