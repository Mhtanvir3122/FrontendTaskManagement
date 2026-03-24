import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BriefcaseMetal } from "phosphor-react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import TourTab from "@/components/advancedui/tour/TourTab.tsx";
import AboutMe from "@/components/apps/profile/AboutMe.tsx";
import FeaturedStories from "@/components/apps/profile/FeaturedStories.tsx";
import ProfileCard from "@/components/apps/profile/ProfileCard.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const Tour: React.FC = () => {
  const [data] = useState<string>("1");

  useEffect(() => {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: {
          enabled: true,
        },
        classes: "shepherd-theme-custom",
        scrollTo: {
          behavior: "smooth",
          block: "center",
        },
      },
    });

    tour.addStep({
      id: "profile-tabs",
      title: "All Tabs!",
      text: "Go and check Now 👍",
      attachTo: {
        element: "#profile-tabs",
        on: "bottom",
      },
      buttons: [
        { text: "< Back", action: tour.back },
        { text: "Next >", action: tour.next },
      ],
    });

    tour.addStep({
      id: "featured-Stories",
      title: "Stories!",
      text: "Beautiful day starts with some pictures.",
      attachTo: {
        element: "#featured-Stories",
        on: "bottom",
      },
      buttons: [
        { text: "< Back", action: tour.back },
        { text: "Next >", action: tour.next },
      ],
    });

    tour.addStep({
      id: "post",
      title: "Post",
      text: " Some picture of our post secthion..\n",
      attachTo: {
        element: "#post",
        on: "bottom",
      },
      buttons: [
        { text: "< Back", action: tour.back },
        { text: "Next >", action: tour.next },
      ],
    });

    tour.addStep({
      id: "about-me",
      title: "About Me",
      text: " something details about me!!\n",
      attachTo: {
        element: "#about-me",
        on: "bottom",
      },
      buttons: [
        { text: "< Back", action: tour.back },
        { text: "Next >", action: tour.next },
      ],
    });

    tour.addStep({
      id: "friend",
      title: "Friend",
      text: " Friendlists who follow this!\n",
      attachTo: {
        element: "#friend",
        on: "bottom",
      },
      buttons: [
        { text: "< Back", action: tour.back },
        { text: "Done &#x1F44D;", action: tour.cancel },
      ],
    });

    tour.start();

    return () => {
      tour.complete();
    };
  }, []);

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Tour"
          title="Advance UI "
          path={["Tour"]}
          Icon={BriefcaseMetal}
        />

        <Row>
          <TourTab />
          <FeaturedStories data={data} />
          <Col lg="4" xxl="3" className="order--1-lg col-box-4">
            <ProfileCard />
            <AboutMe />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tour;