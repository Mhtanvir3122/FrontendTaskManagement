import { Card } from "react-bootstrap";

import { ticketDetails } from "@/data/app/ticket-data/Ticket.ts";
import { ArrowSquareOut, PhoneCall, User } from "phosphor-react";

const TicketInfo = () => {
  return (
    <Card>
      <Card.Body>
        <div className="ticket-details-profile mb-4 p-3 rounded-3">
          <div className="ticket-profile mb-4">
            <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-secondary me-3">
              <img src="/images/avatar/2.png" alt="" className="img-fluid" />
            </div>
            <div>
              <h6 className="mb-0">Marry jones</h6>
              <p className="text-secondary mb-0">(678)456-7890</p>
            </div>
          </div>
          <div className="ticket-profile-con d-flex gap-3 justify-content-center mt-3">
            <span className="bg-success h-35 w-35 d-flex-center b-r-50 text-white">
              <PhoneCall size={18} />
            </span>
            <span className="bg-danger h-35 w-35 d-flex-center b-r-50 text-white">
              <ArrowSquareOut size={18} />
            </span>
            <span className="bg-info h-35 w-35 d-flex-center b-r-50 text-white">
              <User size={18} />
            </span>
          </div>
        </div>

        <div className="about-list pt-0">
          {ticketDetails.map((item, index) => (
            <div key={index} className="d-flex justify-content-between mb-2">
              <span className="f-w-600">{item.label}</span>
              <span className="f-w-500 text-secondary small">{item.value}</span>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TicketInfo;
