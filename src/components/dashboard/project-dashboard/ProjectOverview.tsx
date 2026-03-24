import React from "react";
import { Button, Card, Col, Form, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";

import { updates } from "@/data/dashboard/project-dashboard/ProjectOverviewData.ts";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import ProfitOverviewCard from "@/components/widget/ProfitOverviewCard.tsx";
import YearlyEarningCard from "@/components/widget/YearlyEarningCard.tsx";

interface MeetingItem {
  id: string;
  name: string;
  description: string;
}

const meetingItems: MeetingItem[] = [
  {
    id: "meeting1",
    name: "Mark Moen",
    description: "Website Redesign Briefing",
  },
  {
    id: "meeting2",
    name: "Johan Moen",
    description: "CRM Integration Planning",
  },
  {
    id: "meeting3",
    name: "Carlos Ramirez",
    description: "Brand Audit Presentation",
  },
  {
    id: "meeting4",
    name: "Stellar Finances",
    description: "Performance Review",
  },
];

const ProjectOverview: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      {/* Yearly Earning Card */}
      <Col sm={6} md={5} lg={4} xxl={3}>
        <YearlyEarningCard chartHeight={180} />
      </Col>

      {/* Updates Card */}
      <Col sm={6} lg={4} xxl={3}>
        <Card className="updated-card equal-card text-center">
          <Card.Body>
            <Slider {...settings} className="updates-box-slider app-arrow">
              {updates.map((item, index) => (
                <div key={index}>
                  <div className="bg-light-primary b-r-12">
                    <img
                      src={item.img}
                      alt="update"
                      className="img-fluid d-block m-auto"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="fs-5 fw-semibold txt-ellipsis-2">
                      {item.text}
                    </p>
                    <Button variant="primary" className="mt-2">
                      Start Now
                    </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </Card.Body>
        </Card>
      </Col>

      {/* Meetings & Notes Card */}
      <Col sm={6} lg={4} xxl={3}>
        <Card className="equal-card">
          <Card.Body>
            <Tabs
              defaultActiveKey="meetings"
              id="meeting-notes-tabs"
              className="nav-tabs tab-primary bg-primary p-1 rounded updates-tab"
            >
              <Tab eventKey="meetings" title="Meetings">
                <div className="update-tab-content">
                  <ul className="form-selectgroup list-unstyled">
                    {meetingItems.map((item) => (
                      <li key={item.id} className="select-item">
                        <div className="form-check task-check mb-0">
                          <Form.Check.Input
                            type="checkbox"
                            id={item.id}
                            className="form-check-input task-check  w-25 h-25"
                          />
                          <Form.Check.Label
                            htmlFor={item.id}
                            className="form-check-label"
                          >
                            <span className="fs-6 client-name txt-ellipsis-1 d-block">
                              {item.name}
                            </span>
                            <span className="text-secondary">
                              {item.description}
                            </span>
                          </Form.Check.Label>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-100">
                    Show More
                  </Button>
                </div>
              </Tab>
              <Tab eventKey="notes" title="Notes">
                <div className="w-100 h-250 text-center no-data mt-5">
                  <img
                    src="/images/dashboard/project/no-data.png"
                    className="img-fluid w-180"
                    alt=""
                  />
                  <h6 className="f-w-500 text-primary mt-4">No Data Found</h6>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Col>

      {/* Profit Overview Card */}
      <Col sm={6} md={5} lg={4} xxl={3}>
        <ProfitOverviewCard />
      </Col>
    </>
  );
};

export default ProjectOverview;
