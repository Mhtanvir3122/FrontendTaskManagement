import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface VideoItem {
  title: string;
  ratioClass: string;
  src: string;
}

const leftColumnVideos: VideoItem[] = [
  {
    title: "Ratio Video 1x1",
    ratioClass: "ratio ratio-1x1",
    src: "https://www.youtube.com/embed/BcKOz6kAgg0",
  },
  {
    title: "Ratio Video 4x3",
    ratioClass: "ratio ratio-4x3",
    src: "https://www.youtube.com/embed/BcKOz6kAgg0",
  },
];

const rightColumnVideos: VideoItem[] = [
  {
    title: "Ratio Video 16x9",
    ratioClass: "ratio ratio-16x9",
    src: "https://www.youtube.com/embed/PIa17rsNSEE",
  },
  {
    title: "Custom ratios 50%",
    ratioClass: "ratio ratio-custom-50",
    src: "https://www.youtube.com/embed/EwzynNhx4Y8",
  },
  {
    title: "Ratio Video 21x9",
    ratioClass: "ratio ratio-21x9",
    src: "https://www.youtube.com/embed/Ep5kNwmDRlg",
  },
];

const VideoEmbedPage: React.FC = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Video Embed"
        title="Advance Ui"
        path={["Video Embed"]}
        Icon={BriefcaseMetal}
      />
      <Row>
        <Col md={6}>
          {leftColumnVideos.map((video, index) => (
            <Card className="mb-4" key={`left-${index}`}>
              <Card.Header>
                <h5>{video.title}</h5>
              </Card.Header>
              <Card.Body>
                <div className={video.ratioClass}>
                  <div>
                    <iframe
                      className="w-100 h-100"
                      src={video.src}
                      title={`YouTube video player ${index}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={6}>
          {rightColumnVideos.map((video, index) => (
            <Card className="mb-4" key={`right-${index}`}>
              <Card.Header>
                <h5>{video.title}</h5>
              </Card.Header>
              <Card.Body>
                <div className={video.ratioClass}>
                  <div>
                    <iframe
                      className="w-100 h-100"
                      src={video.src}
                      title={`YouTube video player ${index + leftColumnVideos.length}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoEmbedPage;
