import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import {
  friends,
  posts,
  profileMessages,
  profileProjects,
  timelineData,
} from "@/data/app/profileapp/ProfileAppData.tsx";
import {
  IconBrandHipchat,
  IconMessage2,
  IconMoodSmileBeam,
  IconPencilPlus,
} from "@tabler/icons-react";
import { Send } from "iconoir-react";
import { Heart } from "phosphor-react";
import "slick-carousel/slick/slick.css";

import FileUploader from "@/components/apps/profile/FileUploader.tsx";

interface FeaturedStoriesProps {
  data: string;
}

const FeaturedStories: React.FC<FeaturedStoriesProps> = ({ data }) => {
  const settings = {
    slidesToShow: 4,
    className: "story-container app-arrow",
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const stories = [
    {
      imgSrc: "/images/profile-app/11.jpg",
      avatar: "/images/avatar/1.png",
      bgColor: "bg-primary",
    },
    {
      imgSrc: "/images/profile-app/12.jpg",
      avatar: "/images/avatar/08.png",
      bgColor: "bg-danger",
    },
    {
      imgSrc: "/images/profile-app/13.jpg",
      avatar: "/images/avatar/2.png",
      bgColor: "bg-secondary",
    },
    {
      imgSrc: "/images/profile-app/14.jpg",
      avatar: "/images/avatar/3.png",
      bgColor: "bg-dark",
    },
    {
      imgSrc: "/images/profile-app/15.jpg",
      avatar: "/images/avatar/07.png",
      bgColor: "bg-warning",
    },
    {
      imgSrc: "/images/profile-app/16.jpg",
      avatar: "/images/avatar/4.png",
      bgColor: "bg-info",
    },
    {
      imgSrc: "/images/profile-app/17.jpg",
      avatar: "/images/avatar/5.png",
      bgColor: "bg-primary",
    },
    {
      imgSrc: "/images/profile-app/18.jpg",
      avatar: "/images/avatar/6.png",
      bgColor: "bg-success",
    },
  ];

  return (
    <div className="col-lg-5 col-xxl-6 col-box-5">
      <div className="content-wrapper">
        <div className={`${data === "1" ? "active" : ""} tabs-content`}>
          <div className="profile-content">
            <Card id="featured-Stories">
              <Card.Header>
                <h5>Featured Stories</h5>
              </Card.Header>
              <Card.Body>
                <Slider {...settings}>
                  {stories.map((story, idx) => (
                    <div key={idx}>
                      <a
                        href={story.imgSrc}
                        className="glightbox story"
                        data-glightbox="type: image; zoomable: true;"
                      >
                        <img
                          src={story.imgSrc}
                          className="rounded img-fluid"
                          alt="story"
                        />
                        <div
                          className={`h-50 w-50 d-flex-center b-r-50 overflow-hidden story-icon ${story.bgColor}`}
                        >
                          <img
                            src={story.avatar}
                            alt="avatar"
                            className="img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                  ))}
                </Slider>
              </Card.Body>
            </Card>
            <Card id="post">
              <Card.Header>
                <h5>Post</h5>
              </Card.Header>
              <Card.Body>
                <div className="col-12">
                  <div className="photos-container">
                    <div className="left-main-img img-box">
                      <a
                        href="/images/profile-app/20.jpg"
                        className="glightbox"
                        data-glightbox="type: image; zoomable: true;"
                      >
                        <img src="/images/profile-app/20.jpg" alt="image" />
                        <div className="transparent-box2">
                          <div className="captions">Simple image example</div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <div className="sub">
                        <div className="img-box">
                          <a
                            href="/images/profile-app/21.jpg"
                            className="glightbox"
                            data-glightbox="type: image"
                          >
                            <img src="/images/profile-app/21.jpg" alt="image" />
                            <div className="transparent-box2">
                              <div className="captions">
                                Simple image example
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="img-box">
                          <a
                            href="/images/profile-app/23.jpg"
                            className="glightbox"
                            data-glightbox="type: image"
                          >
                            <img src="/images/profile-app/23.jpg" alt="image" />
                            <div className="transparent-box2">
                              <div className="captions">
                                Simple image example
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="img-box">
                          <a
                            href="/images/profile-app/24.jpg"
                            className="glightbox"
                            data-glightbox="type: image"
                          >
                            <img src="/images/profile-app/24.jpg" alt="image" />
                            <div className="transparent-box2">
                              <div className="captions">
                                Simple image example
                              </div>
                            </div>
                          </a>
                        </div>
                        <div id="multi-link" className="img-box">
                          <a
                            href="/images/profile-app/22.jpg"
                            className="glightbox"
                            data-glightbox="type: image"
                          >
                            <img src="/images/profile-app/22.jpg" alt="image" />
                            <div className="transparent-box">
                              <div className="caption">+3</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="more-img"
                      className="extra-images-container hide-element"
                    >
                      <a
                        href="/images/blog-app/03.jpg"
                        className="glightbox"
                        data-glightbox="type: image"
                      >
                        <img src="/images/blog-app/03.jpg" alt="image" />
                      </a>
                      <a
                        href="/images/blog-app/04.jpg"
                        className="glightbox"
                        data-glightbox="type: image"
                      >
                        <img src="/images/blog-app/04.jpg" alt="image" />
                      </a>
                      <a
                        href="/images/blog-app/10.jpg"
                        className="glightbox"
                        data-glightbox="type: image"
                      >
                        <img src="/images/blog-app/10.jpg" alt="image" />
                      </a>
                    </div>
                  </div>

                  <div className="photos-container">
                    <div className="left-main-img img-box">
                      <a
                        href="/images/profile-app/video.mp4"
                        className="glightbox"
                      >
                        <img src="/images/profile-app/26.jpg" alt="image" />
                        <div className="transparent-box">
                          <div className="caption">
                            <i className="fa-solid fa-play-circle fa-fw"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="right-main-img img-box">
                      <a
                        href="/images/profile-app/video.mp4"
                        className="glightbox"
                      >
                        <img src="/images/profile-app/25.jpg" alt="image" />
                        <div className="transparent-box">
                          <div className="caption">
                            <i className="fa-solid fa-play-circle fa-fw"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className={`${data == "2" ? "active" : ""} tabs-content`}>
          <Card>
            <Card.Header>
              <h5>Activity</h5>
            </Card.Header>
            <Card.Body>
              <ul className="app-timeline-box">
                {timelineData.map((item, index) => (
                  <li key={index} className="timeline-section">
                    <div className="timeline-icon">
                      <span
                        className={`${item.iconBg} h-35 w-35 d-flex-center b-r-50`}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div className="timeline-content">
                      {item.name && (
                        <div className="f-s-16">
                          <span className="text-primary">{item.name}</span>
                          <span className="text-secondary ms-2">
                            {item.description}
                          </span>
                        </div>
                      )}
                      {!item.name && (
                        <p className="f-s-16 text-info mb-0">
                          {item.description}
                        </p>
                      )}
                      {item.images && (
                        <div className="app-timeline-info-text timeline-border-box mt-3">
                          <div className="row">
                            {item.images.map((img, imgIdx) => (
                              <div key={imgIdx} className="col-sm-4">
                                <a
                                  href={img}
                                  className="glightbox img-hover-zoom"
                                  data-glightbox="type: image; zoomable: true;"
                                >
                                  <img
                                    src={img}
                                    className="img-fluid rounded timeline-img"
                                    alt=""
                                  />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.content && (
                        <div className="timeline-border-box mt-3">
                          {item.content}
                        </div>
                      )}
                      {item.actions && (
                        <div className="mt-3">{item.actions}</div>
                      )}
                      <p className="f-w-500 text-end mt-2 mb-0">
                        <i className="ph ph-clock me-1 align-middle"></i>
                        {item.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className={`${data == "3" ? "active" : ""} tabs-content`}>
          <Row>
            <Col xs="12" className="mb-3">
              {profileProjects.map((project) => (
                <div key={project.id} className="col-12 mb-4">
                  <Card className="hover-effect">
                    <Card.Header className="d-flex align-items-center">
                      <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden">
                        <img src={project.logo} alt="" className="img-fluid" />
                      </div>
                      <Link
                        to="/apps/projects-page/projects-details"
                        target="_blank"
                        className="flex-grow-1 px-3"
                      >
                        <h6 className="m-0 text-dark f-w-600">
                          {project.title}
                        </h6>
                        <div className="text-muted f-s-14 f-w-500">
                          {project.subtitle}
                        </div>
                      </Link>
                      <div className="dropdown">
                        <Button
                          className="bg-none border-0"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical"></i>
                        </Button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="ti ti-edit text-success"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item delete-button" href="#">
                              <i className="ti ti-trash text-danger"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex">
                        <div>
                          <h6 className="text-dark f-s-14 f-w-500">
                            Start Date:{" "}
                            <span className="text-success">
                              {project.startDate}
                            </span>
                          </h6>
                          <h6 className="text-dark f-s-14 f-w-500">
                            End Date:{" "}
                            <span className="text-danger">
                              {project.endDate}
                            </span>
                          </h6>
                        </div>
                        <div className="flex-grow-1 text-end">
                          <p className="f-w-500 text-secondary">Pricing</p>
                          <h6 className="f-w-600">{project.pricing}</h6>
                        </div>
                      </div>
                      <p className="text-muted f-s-14 text-secondary txt-ellipsis-2">
                        {project.description}
                      </p>
                      <div className="text-end mb-2">
                        <Badge
                          className={`bg-light-${project.status === "Completed" ? "success" : "primary"}`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <ProgressBar
                        now={project.progress}
                        variant={
                          project.progress === 100 ? "success" : "primary"
                        }
                        label={`${project.progress}%`}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <div className="row">
                        <div className="col-6">
                          <span className="text-dark f-w-600">
                            <IconMessage2 /> {project.members} Members
                          </span>
                        </div>
                        <div className="col-6">
                          <ul className="avatar-group float-end breadcrumb-start">
                            {project.avatars.map((avatar, index) => (
                              <li
                                key={index}
                                className="h-25 w-25 d-flex-center b-r-50 text-bg-success b-2-light position-relative"
                              >
                                <img
                                  src={avatar}
                                  alt={avatar}
                                  className="img-fluid b-r-50 overflow-hidden"
                                />
                              </li>
                            ))}
                            <li
                              className="text-bg-primary h-25 w-25 d-flex-center b-r-50"
                              data-bs-toggle="tooltip"
                              data-bs-title={`${project.additionalMembers} More`}
                            >
                              {project.additionalMembers}+
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </Col>
            <Col xs="12">
              <Card>
                <Card.Header>
                  <h5>Client Messages</h5>
                </Card.Header>
                <Card.Body className="">
                  <ListGroup as="ul" className="client-list">
                    {profileMessages.map((message) => (
                      <ListGroup.Item as="li" key={message.id} className="">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div
                            className={`rounded-circle d-flex justify-content-center align-items-center bg-${message.color} position-absolute avatar-35`}
                          >
                            {message.initials}
                          </div>
                          <div className="mg-s-40">
                            <h6 className="mb-0">{message.name}</h6>
                            <p className="text-muted">{message.message}</p>
                          </div>
                          <div>
                            <i className="ti ti-star fs-5 "></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className={`${data == "4" ? "active" : ""} tabs-content`}>
          {posts.map((post) => (
            <div key={post.id} className="col-12 mb-4">
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-danger">
                      <img
                        src={post.user.avatar}
                        alt="avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grow-1 ps-2 pe-2">
                      <div className="f-w-500">{post.user.name}</div>
                      <div className="text-muted f-s-12">{post.user.time}</div>
                    </div>
                    <div>
                      <i className="ti ti-dots-vertical"></i>
                    </div>
                  </div>

                  <div className="post-div mb-3">
                    <div className="post"></div>
                    <p className="text-muted">{post.postContent}</p>
                    <div className="post-icon d-flex align-items-center">
                      <Heart size={24} fontWeight="bold" className="me-2" />
                      <IconBrandHipchat
                        size={24}
                        fontWeight="bold"
                        className="me-2"
                      />
                      <Send
                        height={24}
                        width={24}
                        fontWeight="bold"
                        className="me-2"
                      />
                      <p className="m-0">{post.likes} Likes</p>
                    </div>
                  </div>

                  {post.comments.map((comment) => (
                    <div key={comment.id} className="Comment-box mb-3">
                      <div className="d-flex align-items-center">
                        <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-primary">
                          <img
                            src={comment.avatar}
                            alt="avatar"
                            className="img-fluid"
                          />
                        </div>
                        <div className="flex-grow-1 ps-2 pe-2">
                          <div className="f-w-600">{comment.name}</div>
                          <div className="text-muted f-s-12">
                            {comment.time}
                          </div>
                        </div>
                        <div>
                          <i className="ti ti-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
          ))}
          <Card>
            <Card.Body>
              <div className="post-container">
                <FileUploader />
              </div>
              <Form className="app-form mt-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message..."
                  />

                  <span className="input-group-text text-light-primary b-1-secondary">
                    <IconMoodSmileBeam size={20} stroke={1.5} />
                  </span>

                  <span className="input-group-text text-light-primary b-1-secondary">
                    <IconPencilPlus size={20} stroke={1.5} />
                  </span>
                </div>
              </Form>
              <div className="float-end">
                <button type="button" className="btn btn-primary mt-2">
                  <i className="ti ti-photo-plus"></i> Post
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className={`${data == "5" ? "active" : ""} tabs-content`}>
          <Row className="profile-friend-box">
            {friends.map((friend) => (
              <Col key={friend.id} xxl={6} className="box-col">
                <Card className="friend-list-card">
                  <Card.Body>
                    <div className="d-flex align-items-center position-relative">
                      <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-dark position-absolute">
                        <img
                          src={friend.avatar}
                          alt="avatar"
                          className="img-fluid"
                        />
                      </div>
                      <div className="flex-grow-1 ms-5">
                        <div className="fw-medium">{friend.name}</div>
                        <div className="text-muted f-s-12">{friend.job}</div>
                      </div>
                      <Link
                        to={friend.chatLink}
                        target="_blank"
                        className="btn btn-light-success icon-btn b-r-22"
                      >
                        <IconBrandHipchat size={20} />
                      </Link>
                    </div>
                    <div className="mt-4 friend-list-content">
                      <p className="mb-0">{friend.description}</p>
                      <div className="app-divider-v dashed m-0 py-3"></div>
                      <p className="f-s-16 text-secondary mb-0">
                        <span className="text-dark f-w-500">
                          {friend.followers}
                        </span>{" "}
                        Follower
                        <span className="text-dark f-w-500">
                          {friend.following}
                        </span>{" "}
                        Following
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col sm={12}>
              <Card className="equal-card">
                <Card.Header>
                  <h5>Friends Requests</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="friend-list">
                    {friends.map((friend) => (
                      <li
                        key={friend.id}
                        className="d-flex align-items-center position-relative mt-3"
                      >
                        <div
                          className={`h-50 w-50 d-flex-center b-r-50 overflow-hidden position-absolute bg-${friend.job === "Web Developer" ? "danger" : "primary"}`}
                        >
                          <img
                            src={friend.avatar}
                            alt="avatar"
                            className="img-fluid"
                          />
                        </div>
                        <div className="flex-grow-1 ms-5">
                          <h6 className="mb-0 fw-medium text-ellipsis">
                            {" "}
                            @{friend.name.split(" ")[0]}
                          </h6>
                          <p className="text-muted mb-0">{friend.job}</p>
                        </div>
                        <Button
                          color="primary"
                          className="btn btn-primary b-r-5 me-2"
                        >
                          <i className="ti ti-user-check me-2"></i>
                          <span>Follow</span>
                        </Button>
                        <Button className="btn btn-danger b-r-5">
                          <i className="ti ti-user-x me-2"></i>
                          <span>Remove</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStories;
