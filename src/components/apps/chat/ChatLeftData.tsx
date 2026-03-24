import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { ChatCircleText, WhatsappLogo, PhoneCall } from "phosphor-react";

import ChatContent from "./ChatContent";
import UpdatesContent from "./UpdatesContent";
import ContactContent from "./ContactContent";

function ChatLeftData() {
  const [activeTab, setActiveTab] = useState<string>("chat");

  return (
    <div className="chat-tab-wrapper">
      <Tabs
        id="chat-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k as string)}
        className="tabs chat-tabs mb-0 pb-0"
      >
        <Tab
          eventKey="chat"
          title={
            <>
              <ChatCircleText size={18} weight="duotone" className="me-2" />
              Chat
            </>
          }
        >
          <ChatContent />
        </Tab>

        <Tab
          eventKey="updates"
          title={
            <>
              <WhatsappLogo size={18} weight="duotone" className="me-2" />
              Updates
            </>
          }
        >
          <UpdatesContent />
        </Tab>

        <Tab
          eventKey="contact"
          title={
            <>
              <PhoneCall size={18} weight="duotone" className="me-2" />
              Contact
            </>
          }
        >
          <ContactContent />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ChatLeftData;
