import { Card, Col, Row } from "react-bootstrap";

import TextEditor from "@/components/editor/TextEditor.tsx";

const TicketdetailsData = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h5>Ticket Details</h5>
        </div>
        <Card.Body>
          <div className="ticket-details-content">
            <div className="mb-3">
              <h6>Ticket Id</h6>
              <p className="text-secondary f-s-16">AR 2044 - Bug Report</p>
            </div>
            <div className="mb-3">
              <h6>Ticket Description</h6>
              <p className="text-secondary">
                When attempting to send an email with attachments through the
                system, the attachments are not included in the outgoing email.
                The expected behavior is for all selected attachments to be sent
                along with the email content.
              </p>
            </div>
          </div>
        </Card.Body>
      </div>
      <Card className="shadow-sm border-0">
        <Card.Header className="text-white">
          <h5 className="mb-0">Comments</h5>
        </Card.Header>
        <Card.Body>
          <div className="ticket-comment-box mb-3">
            <div className="d-flex justify-content-between position-relative flex-wrap">
              <div className="h-45 w-45 d-flex-center b-r-50 bg-success overflow-hidden position-absolute">
                <img
                  src="/images/avatar/12.png"
                  alt="Avatar"
                  className="img-fluid"
                />
              </div>

              <div className="flex-grow-1 ps-2 pe-2 ms-5">
                <h6 className="mb-0">Gavin Cortez</h6>
                <p className="text-muted f-s-14">
                  to Danny Amacher danny@capacity.com
                </p>
                <p className="text-dark mb-3">
                  More detailed steps if you have found a different way or
                  additional conditions under which the bug occurs.
                </p>
              </div>

              <div className="ms-5">
                <p>Feb 9, 2022 10:31 AM</p>
              </div>
            </div>

            <Row className="d-flex flex-wrap ms-5">
              <Col sm="6" md="4" className="mb-3">
                <div className="ticket-details-comment p-3 w-100">
                  <h6 className="mb-0 txt-ellipsis-1">Screenshot png</h6>
                  <p className="mb-0 text-secondary">16 June 2022, 1.30pm</p>
                </div>
              </Col>
              <Col sm="6" md="4">
                <div className="ticket-details-comment p-3 w-100">
                  <h6 className="mb-0 txt-ellipsis-1">Screen_shot.png</h6>
                  <p className="mb-0 text-secondary">16 June 2022, 1.30pm</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="ticket-comment-box mb-3">
            <div className="d-flex justify-content-between position-relative flex-wrap">
              <div className="h-45 w-45 d-flex-center b-r-50 bg-primary overflow-hidden position-absolute">
                <img
                  src="/images/avatar/11.png"
                  alt="Avatar"
                  className="img-fluid"
                />
              </div>
              <div className="flex-grow-1 ps-2 pe-2 ms-5">
                <h6 className="mb-0">Allian Horman</h6>
                <p className="text-muted f-s-14">
                  to Danny Amacher danny@capacity.com
                </p>
                <p className="text-dark mb-3">
                  Thanks for flagging this issue! I was able to reproduce the
                  bug following the steps you outlined.
                </p>
              </div>

              <div>
                <p>Feb 9, 2022 10:31 AM</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <h5>Leave a Note</h5>
        </Card.Header>
        <Card.Body>
          <TextEditor />
        </Card.Body>
      </Card>
    </div>
  );
};

export default TicketdetailsData;
