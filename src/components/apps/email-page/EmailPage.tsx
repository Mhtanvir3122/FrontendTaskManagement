import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import EmailBoard from "@/components/apps/email-page/EmailBoard";
import EmailSidebar from "@/components/apps/email-page/EmailSidebar";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";
import { emailBoxData } from "@/data/app/emailapp/Emails.ts";
import avatar from "/images/avatar/3.png"

const EmailPage = () => {
  const [activeTab, setActiveTab] = useState("inbox");
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [emails, setEmails] = useState(emailBoxData);

  interface NewEmail {
    subject: string;
    status?: string;
  }

  const handleSendEmail = (newEmail: NewEmail) => {
    const newEmailItem = {
      id: `email-${Date.now()}`,
      sender: "You",
      avatar: avatar,
      avatarBg: "primary",
      preview: newEmail.subject,
      date: new Date().toLocaleDateString(),
      tag: newEmail.status || "Primary",
      tagClass: "primary",
      starred: false,
      read: true,
      tab: "sent"
    };

    setEmails([newEmailItem, ...emails]);
  };


  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Email"
        title="Apps"
        path={["Emails App", "Email"]}
        Icon={StackIcon}
      />
      <Row className="position-relative">
        <EmailSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
          onSendEmail={handleSendEmail}
        />
        <EmailBoard
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
          emails={emails}
          setEmails={setEmails}
        />
      </Row>
    </Container>
  );
};

export default EmailPage;
