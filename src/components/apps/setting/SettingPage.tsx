import { useState } from "react";
import { Card, Col, ProgressBar, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

import { StackIcon } from "@phosphor-icons/react";
import {
  Alarm,
  ArrowSquareOut,
  BellSimple,
  Graph,
  LockOpen,
  Notification,
  ShieldCheck,
  Trash,
  UserCircleGear,
} from "phosphor-react";

import ActivityTimeline from "@/components/apps/setting/ActivityTimeline.tsx";
import Connection from "@/components/apps/setting/Connection.tsx";
import NotificationSettings from "@/components/apps/setting/NotificationSettings.tsx";
import PrivacyCard from "@/components/apps/setting/PrivacyCard.tsx";
import SecurityCard from "@/components/apps/setting/SecurityCard.tsx";
import SettingProfile from "@/components/apps/setting/SettingProfile.tsx";
import Subscription from "@/components/apps/setting/Subscription.tsx";
import TimeSpent from "@/components/apps/setting/TimeSpent.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleDeleteClick = async () => {
    console.log("Delete tab clicked");

    if (typeof window !== "undefined") {
      const { default: Swal } = await import("sweetalert2");
      console.log("Swal loaded:", Swal);

      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    }
  };

  return (
    <div className="container-fluid">
      <Breadcrumbs
        mainTitle="Setting"
        title="Apps"
        path={["Profile Page", "Setting"]}
        Icon={StackIcon}
      />
      <Row className="row m-1">
        <Col lg={4} xxl={3}>
          <Card>
            <Card.Header>
              <h5>Settings</h5>
            </Card.Header>
            <Card.Body className="flex-column vertical-tab setting-tab">
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k || "1")}
                className="app-tabs-primary nav nav-tabs"
              >
                <Tab
                  eventKey="1"
                  title={
                    <>
                      <UserCircleGear
                        weight="bold"
                        size={20}
                        className="me-2"
                      />
                      Profile
                    </>
                  }
                />
                <Tab
                  eventKey="2"
                  title={
                    <>
                      <Alarm weight="bold" size={20} className="me-2" />
                      Activity
                    </>
                  }
                />
                <Tab
                  eventKey="3"
                  title={
                    <>
                      <ShieldCheck weight="bold" size={20} className="me-2" />
                      Security
                    </>
                  }
                />
                <Tab
                  eventKey="4"
                  title={
                    <>
                      <LockOpen weight="bold" size={20} className="me-2" />
                      Privacy
                    </>
                  }
                />
                <Tab
                  eventKey="5"
                  title={
                    <>
                      <Notification weight="bold" size={20} className="me-2" />
                      Notification
                    </>
                  }
                />
                <Tab
                  eventKey="6"
                  title={
                    <>
                      <BellSimple weight="bold" size={20} className="me-2" />
                      Subscription
                    </>
                  }
                />
                <Tab
                  eventKey="7"
                  title={
                    <>
                      <Graph weight="bold" size={20} className="me-2" />
                      Connection
                    </>
                  }
                />
                <Tab
                  title={
                    <div
                      onClick={handleDeleteClick}
                      className="d-flex align-items-center"
                    >
                      <Trash weight="bold" size={20} className="me-2" />
                      Delete
                    </div>
                  }
                />
              </Tabs>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <h5>Time Spent</h5>
            </Card.Header>
            <Card.Body>
              <TimeSpent />
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card className="hover-effect card-light-primary mt-4">
                <Card.Body>
                  <h5>Used Space</h5>
                  <p className="mt-2 text-secondary fs-6">
                    Your team has used 80% of your available space. Need more?
                  </p>
                  <ProgressBar
                    now={78.5}
                    label="78.5%"
                    variant="primary"
                    striped
                    className="w-100 mt-3 mb-3"
                  />
                  <div>
                    <a href="#" className="me-3 text-secondary">
                      Dismiss
                    </a>
                    <a href="#" className="text-decoration-underline">
                      Upgrade plan
                    </a>
                  </div>
                </Card.Body>
              </Card>
              <div className="my-3 border-top"></div>
              <div className="d-flex align-items-center">
                <span className="h-45 w-45 d-flex justify-content-center align-items-center bg-warning rounded-circle position-relative">
                  <img
                    src="/images/avatar/09.png"
                    alt="avatar"
                    className="img-fluid rounded-circle w-45"
                  />
                  <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                </span>
                <div className="flex-grow-1 ps-2">
                  <div className="fw-bold fs-6">Ninfa Monaldo</div>
                  <div className="text-secondary fs-6">Web Developer</div>
                </div>
                <div>
                  <Link to="/apps/profile-page/profile">
                    <ArrowSquareOut weight="bold" size={24} className="fs-4" />
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8} xxl={9}>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || "1")}
            className="d-none"
          >
            <Tab eventKey="1" title="Profile">
              <SettingProfile />
            </Tab>
            <Tab eventKey="2" title="Activity">
              <ActivityTimeline />
            </Tab>
            <Tab eventKey="3" title="Security">
              <SecurityCard />
            </Tab>
            <Tab eventKey="4" title="Privacy">
              <PrivacyCard />
            </Tab>
            <Tab eventKey="5" title="Notification">
              <NotificationSettings />
            </Tab>
            <Tab eventKey="6" title="Subscription">
              <Subscription />
            </Tab>
            <Tab eventKey="7" title="Connection">
              <Connection />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Setting;
