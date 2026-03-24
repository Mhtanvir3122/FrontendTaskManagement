import React from "react";
import Chart from "react-apexcharts";
import { Badge, Card, Col, Row } from "react-bootstrap";

import {
  taskOverviewCards,
  taskOverviewOptions,
} from "@/data/dashboard/project-dashboard/TopCardsData.ts";

import ProjectDetailsCard from "@/components/widget/ProjectDetailsCard.tsx";
import ProjectMeetingCard from "@/components/widget/ProjectMeetingCard.tsx";

const DashboardOverview: React.FC = () => {
  return (
    <>
      {/* Task Overview Cards */}
      <Col md={7} xxl={5}>
        {taskOverviewCards.map((card) => (
          <Card
            key={card.id}
            className={`overview-details-box b-s-3-${card.borderColor} `}
          >
            <Card.Body>
              <Row>
                <Col xs={6}>
                  <div className="d-flex gap-3 align-items-center">
                    <span
                      className={`bg-${card.bgColor} h-60 w-60 d-flex-center flex-column rounded-3`}
                    >
                      <span className="f-w-500">{card.day}</span>
                      <span>{card.date}</span>
                    </span>

                    <div>
                      <p className="text-dark f-w-600 txt-ellipsis-1">
                        Task Overview
                      </p>
                      <div className="chart-card-box d-flex align-items-center">
                        <Chart
                          options={taskOverviewOptions(card.bgColor)}
                          series={taskOverviewOptions(card.bgColor).series}
                          type="line"
                          height={40}
                          width={100}
                        />
                        <Badge bg={card.badgeColor} className="b-r-50">
                          {card.badgeValue}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={6} className="mt-3 mt-sm-0">
                  <div className="d-flex align-items-center gap-1">
                    <div className="flex-grow-1">
                      <p className="text-dark f-w-500 txt-ellipsis-1">
                        Provided Time
                      </p>
                      <h6 className={`mb-0 text-${card.textColor}`}>
                        {card.providedTime}
                      </h6>
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-dark f-w-500 txt-ellipsis-1">
                        Working Time
                      </p>
                      <h6 className={`mb-0 text-${card.textColor}`}>
                        {card.workingTime}
                      </h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>

      {/* Meeting Card */}
      <Col md={5} xxl={3}>
        <ProjectMeetingCard />
      </Col>

      {/* Project Card */}
      <Col md={7} lg={4}>
        <ProjectDetailsCard />
      </Col>
    </>
  );
};

export default DashboardOverview;
