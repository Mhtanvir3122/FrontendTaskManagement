import { Button, Card } from "react-bootstrap";

const ProjectMeetingCard = () => {
  return (
    <Card className="overflow-hidden">
      <Card.Body className="p-0">
        <div className="meeting-call-box bg-gradient-mode">
          <img
            alt="img"
            className="img-fluid position-relative z-1"
            src="/images/dashboard/project/meeting-avatar.png"
          />
          <img
            alt="img"
            className="img-fluid bg-vector-img"
            src="/images/dashboard/project/bg-round.png"
          />
          <img
            alt="img"
            className="img-fluid bg-vector-img1"
            src="/images/dashboard/project/bg-round2.png"
          />

          <div className="meeting-details-box d-flex align-items-center">
            <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-dark flex-shrink-0">
              <img
                alt="image"
                className="img-fluid"
                src="/images/avatar/2.png"
              />
            </div>
            <div className="flex-grow-1 ps-2 text-start">
              <div className="fw-medium txt-ellipsis-1">Bette Hagenes</div>
              <div className="text-muted f-s-12 txt-ellipsis-1">
                Web Developer
              </div>
            </div>
            <Button variant="success" size="sm">
              Join
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectMeetingCard;
