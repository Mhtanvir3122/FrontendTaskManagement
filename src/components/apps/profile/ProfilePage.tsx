import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import AboutMe from "@/components/apps/profile/AboutMe.tsx";
import FeaturedStories from "@/components/apps/profile/FeaturedStories.tsx";
import ProfileCard from "@/components/apps/profile/ProfileCard.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

import FeaturedPost from "./FeaturedPost";
import FriendsCard from "./FriendsCard";
import ProfileAppTabs from "./profileAppTabs";

const Profile = () => {
  const [data, setData] = useState<string>("1");
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Profile"
        title="Apps"
        path={["Profile Page", "Profile"]}
        Icon={StackIcon}
      />
      <Row>
        <Col lg="3">
          <ProfileAppTabs data={data} setData={setData} />
          <FriendsCard />
          <FeaturedPost />
        </Col>

        <FeaturedStories data={data} />

        <Col lg="4" xxl="3" className="order--1-lg col-box-4">
          <ProfileCard />
          <AboutMe />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
