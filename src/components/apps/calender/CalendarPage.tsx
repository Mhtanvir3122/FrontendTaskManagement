import { Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import Slider from "react-slick";

import { StackIcon } from "@phosphor-icons/react";
import {
  IconBriefcase,
  IconCake,
  IconCalendarEvent,
  IconCircle,
  IconGlassFullFilled,
  IconPhoto,
  IconPlane,
} from "@tabler/icons-react";

import CalendarCard from "@/components/apps/calender/CalendarCard.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import { useRef } from "react";

const eventData = [
  {
    title: "International Women's Day",
    description:
      "Celebrated to recognize the social and political achievements of women.",
    date: "08 Mar 2024",
  },
  {
    title: "World Book Day",
    description: "Celebrated to promote reading, publishing, and copyright.",
    date: "23 Apr 2024",
  },
  {
    title: "World Refugee Day",
    description: "Observed to honor the courage and resilience of refugees.",
    date: "20 Jun 2024",
  },
  {
    title: "World Humanitarian Day",
    description:
      "A day to recognize humanitarian personnel and those who lost their lives.",
    date: "19 Aug 2024",
  },
  {
    title: "International Day of Peace",
    description: "Promotes peace and cessation of war across the globe.",
    date: "21 Sep 2024",
  },
];

const Calendar = () => {
  const externalRef = useRef<HTMLDivElement | null>(null);
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Calendar"
        title="Apps"
        path={["Calendar"]}
        Icon={StackIcon}
      />
      <Row className="m-1 calendar app-fullcalendar">
        <Col xxl="3">
          <Row>
            <Col md="6" xxl="12">
              <Card>
                <Card.Header>
                  <h5>Draggable Events</h5>
                </Card.Header>
                <Card.Body>
                  <div id="external-events" ref={externalRef}>
                    <div
                      className="list-event fc-event event-primary "
                      data-classname="event-primary"
                    >
                      <span className="bg-primary h-35 w-35 d-flex-center rounded-circle">
                        <IconBriefcase size={18} />
                      </span>
                      Meeting Time
                    </div>
                    <div
                      className="list-event fc-event event-success"
                      data-classname="event-success"
                    >
                      <span className="bg-success h-35 w-35 d-flex-center rounded-circle">
                        <IconPhoto size={18} />
                      </span>
                      Holiday
                    </div>
                    <div
                      className="list-event fc-event event-warning"
                      data-classname="event-warning"
                    >
                      <span className="bg-warning h-35 w-35 d-flex-center rounded-circle">
                        <IconPlane size={18} />
                      </span>
                      Tour Planning
                    </div>
                    <div
                      className="list-event fc-event event-info"
                      data-classname="event-info"
                    >
                      <span className="bg-info h-35 w-35 d-flex-center rounded-circle">
                        <IconCake size={18} />
                      </span>
                      Birthday
                    </div>
                    <div
                      className="list-event fc-event event-secondary"
                      data-classname="event-secondary"
                    >
                      <span className="bg-secondary h-35 w-35 d-flex-center rounded-circle">
                        <IconGlassFullFilled size={18} />
                      </span>
                      Lunch Break
                    </div>

                    <FormGroup className="calendar-remove-check mt-3">
                      <Form.Check
                        type="checkbox"
                        id="drop-remove"
                        label="Remove After Drop"
                      />
                    </FormGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md="6" xxl="12">
              <Card>
                <Card.Header>
                  <h5>Events Update List</h5>
                </Card.Header>
                <Card.Body>
                  <Slider className="event-container slider" {...settings}>
                    {eventData.map((event, idx) => (
                      <div className="event-box" key={idx}>
                        <h6 className="mb-3 d-flex align-items-center">
                          <IconCircle size={14} className="me-2" />
                          {event.title}
                        </h6>
                        <p className="mb-2 text-secondary f-s-13">
                          {event.description}
                        </p>
                        <p className="f-s-13 text-end mb-0 d-flex justify-content-end align-items-center">
                          <IconCalendarEvent size={14} className="me-1" />
                          {event.date}
                        </p>
                      </div>
                    ))}
                  </Slider>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xxl="9" className="mt-3 mt-md-0">
          <CalendarCard externalRef={externalRef} />
        </Col>
      </Row>
    </Container>
  );
};

export default Calendar;
