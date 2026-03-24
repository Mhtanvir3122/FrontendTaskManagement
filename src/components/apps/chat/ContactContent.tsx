import { chatContactList } from "@/data/app/chatapp/ChatData.ts";
import { IconPhoneCall, IconVideo } from "@tabler/icons-react";
import { Button } from "react-bootstrap";

const ContactContent = () => {
  return (
    <>
      <div className="chat-contact tabcontent chat-contact-list">
        {chatContactList.map((contact) => (
          <div className="d-flex align-items-center py-3" key={contact.id}>
            <div>
              <span
                className={`h-40 w-40 d-flex-center b-r-50 position-relative ${contact.bgColor}`}
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="img-fluid b-r-50"
                />
                <span
                  className={`position-absolute top-0 end-0 p-1 ${contact.onlineStatus} border border-light rounded-circle`}
                ></span>
              </span>
            </div>
            <div className="flex-grow-1 ps-2">
              <p className="contact-name text-dark mb-0 f-w-500">
                {contact.name}
              </p>
              <p className="mb-0 text-secondary f-s-13">{contact.phone}</p>
            </div>
            <div>
              <Button variant="success" className="h-35 w-35 icon-btn d-flex-center b-r-50 ">
                <IconPhoneCall size={15} />
              </Button>
            </div>
            <div>
              <Button variant="primary" className="h-35 w-35 icon-btn d-flex-center b-r-50 ms-1">
                <IconVideo size={15} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactContent;
