import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  blogDetailsCategories,
  blogTags,
  popularPosts,
} from "@/data/app/blog/BlogDetails.ts";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMailFast,
} from "@tabler/icons-react";

const BlogDetailRight = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const getBadgeClass = (index: number) =>
    index % 2 === 0 ? "light-dark" : "light-secondary";

  return (
    <Row>
      <Col md={12}>
        {/* About Me */}
        <Card>
          <Card.Header>
            <h5>About Me</h5>
          </Card.Header>
          <Card.Body>
            <div className="text-secondary mb-3">
              <p className="mb-3">Hi! I am Aaliyah.</p>
              <p>
                Over the last fifteen years of my career, I earned a sense of
                creativity. I want to show the beauty of life in a chaotic
                world.
              </p>
              <p>
                In my first year as a photographer, I thought the photos I took
                needed more spark. So I enrolled in a graphic design class. I
                combined my photographs with visual arts and finally saw what I
                was looking for. The spark!
              </p>
            </div>

            <div className="d-flex gap-2">
              <Button variant="primary" className="icon-btn b-r-5">
                <IconBrandFacebook size={18} color="white" />
              </Button>
              <Button variant="success" className="icon-btn b-r-5">
                <IconBrandWhatsapp size={18} color="white" />
              </Button>
              <Button variant="info" className="icon-btn b-r-5">
                <IconBrandTwitter size={18} color="white" />
              </Button>
              <Button variant="dark" className="icon-btn b-r-5">
                <IconBrandGithub size={18} color="white" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Categories */}
      <Col md={12}>
        <Card className="equal-card">
          <Card.Header>
            <h5>Categories</h5>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {blogDetailsCategories.map((cat) => (
                <ListGroup.Item
                  key={cat.label}
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="me-auto">
                    <p className={`text-${cat.color} fw-semibold mb-0`}>
                      <i className="ti ti-chevron-right me-1"></i>
                      {cat.label}
                    </p>
                  </div>
                  <span>[{cat.count}]</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>

      {/* Popular Blog Posts */}
      <Col md={12}>
        <Card>
          <Card.Header>
            <h5>Popular Blog Posts</h5>
          </Card.Header>
          <Card.Body>
            {popularPosts.map((post, i) => (
              <div
                key={i}
                className="position-relative mb-3 d-flex align-items-start"
              >
                <Image
                  src={post.img}
                  alt=""
                  className={`position-absolute w-40 h-40 bg-${post.bg} rounded top-0`}
                  fluid
                />
                <div className="ms-5">
                  <p className="text-dark mb-0 fw-semibold small">
                    {post.text}
                  </p>
                  <div className="text-secondary text-end small">
                    {post.time}
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-3">
              <Link to="/apps/blog-page/blog" target="_blank">
                <Button variant="primary" className="rounded w-100">
                  <i className="ti ti-plus me-1"></i> View All
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Tags */}
      <Col md={12}>
        <Card>
          <Card.Header>
            <h5>Popular Blog Tags</h5>
          </Card.Header>
          <Card.Body>
            <div className="blog-tags d-flex gap-2 f-s-16 flex-wrap">
              {blogTags.map((tag, index) => (
                <Badge key={index} bg={getBadgeClass(index)}>
                  {tag}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Subscribe */}
      <Col md={12}>
        <Card>
          <Card.Header>
            <h5>Subscribe</h5>
          </Card.Header>
          <Card.Body>
            <Form className="app-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="email"
                    placeholder="@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="primary">
                    <IconMailFast size={20} />
                  </Button>
                </div>
              </Form.Group>
              <Form.Group>
                <p className="text-success">
                  Subscribe to our newsletter and stay Updated
                </p>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BlogDetailRight;
