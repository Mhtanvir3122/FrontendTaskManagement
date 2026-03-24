import { useState } from "react";
import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  developerTeamData,
  marketingTeamData,
  teamMembers,
} from "@/data/app/team/Teamdata.ts";
import { StackIcon } from "@phosphor-icons/react";
import {
  IconBrandFacebook,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Gear, Megaphone, PenNib } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

type MemberTypes = {
  coverImg: string;
  name: string;
  avatarImg: string;
  role?: string;
  position?: string;
  projects?: number;
  tasks?: number;
  employeeType?: string;
  description?: string;
};
const Team = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const renderTeamCard = (member: MemberTypes, isMarketing = false) => (
    <Card className="team-box-card hover-effect overflow-hidden">
      <div className="team-box">
        <img src={member.coverImg} className="card-img-top" alt={member.name} />
      </div>
      <div className="team-container">
        <div className="team-pic">
          <span className="bg-secondary h-80 w-80 d-flex-center b-r-50 position-relative overflow-hidden">
            <img
              src={member.avatarImg}
              alt={member.name}
              className="img-fluid b-r-50"
            />
          </span>
        </div>
      </div>
      <div className="taem-content">
        <div className="mb-3 mt-3">
          <h5>{member.name}</h5>
          <p>{isMarketing ? member.role : member.position}</p>
        </div>
        <div className="team-details">
          <div className="taem-contentbox">
            <p className="f-w-500">
              <Link
                to="/apps/projects-page/projects"
                className="f-w-600 text-dark"
                target="_blank"
              >
                Projects
              </Link>
            </p>
            <p className="text-center">{member.projects}</p>
          </div>
          <div className="taem-contentbox">
            <p className="f-w-500">
              <Link
                to="/apps/todo"
                className="f-w-600 text-dark"
                target="_blank"
              >
                Tasks
              </Link>
            </p>
            <p className="text-center">{member.tasks}</p>
          </div>
          <div className="taem-contentbox">
            <p className="f-w-500">
              <Link
                to="/apps/projects-page/projects-details"
                className="f-w-600 text-dark"
                target="_blank"
              >
                Position
              </Link>
            </p>
            <p className="text-center">
              {isMarketing
                ? member.position
                : member.employeeType || member.position}
            </p>
          </div>
        </div>
        <p className="team-content-list text-muted mb-3">
          {member.description}
        </p>
        <div className="p-2 mb-3">
          <a
            href="https://www.facebook.com"
            className="btn btn-facebook icon-btn b-r-22 me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook size={18} className="text-white" />
          </a>
          <a
            href="https://twitter.com"
            className="btn btn-twitter icon-btn b-r-22 me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTwitter size={18} className="text-white" />
          </a>
          <a
            href="https://www.pinterest.com"
            className="btn btn-pinterest icon-btn b-r-22 me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandPinterest size={18} className="text-white" />
          </a>
          <a
            href="https://www.whatsapp.com"
            className="btn btn-whatsapp icon-btn b-r-22 me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={18} className="text-white" />
          </a>
        </div>
      </div>
    </Card>
  );

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Team"
        title="Apps"
        path={["Team"]}
        Icon={StackIcon}
      />
      <Tab.Container
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k || "1")}
      >
        <div className="tab-wrapper">
          <Nav variant="tabs" className="pb-0 tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="1"
                className={`tab-link rounded-0${activeTab === "1" ? " active" : ""}`}
              >
                <PenNib weight="duotone" size={18} className="me-2" />
                Designer
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="2"
                className={`tab-link rounded-0${activeTab === "2" ? " active" : ""}`}
              >
                <Gear weight="duotone" size={18} className="me-2" />
                Development
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="3"
                className={`tab-link rounded-0${activeTab === "3" ? " active" : ""}`}
              >
                <Megaphone weight="duotone" size={18} className="me-2" />
                Marketing
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content className="content-wrapper mt-3">
          <Tab.Pane eventKey="1">
            <Card>
              <Card.Body>
                <Row>
                  {teamMembers.map((member, index) => (
                    <Col md={6} xl={4} key={index}>
                      {renderTeamCard(member)}
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="2">
            <Card>
              <Card.Body>
                <Row>
                  {developerTeamData.map((member, index) => (
                    <Col md={6} xl={4} key={index}>
                      {renderTeamCard(member)}
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="3">
            <Card>
              <Card.Body>
                <Row>
                  {marketingTeamData.map((member, index) => (
                    <Col md={6} xl={4} key={index}>
                      {renderTeamCard(member, true)}
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Team;
