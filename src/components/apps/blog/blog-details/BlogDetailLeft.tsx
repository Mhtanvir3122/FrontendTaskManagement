import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  CommentType,
  blogComments,
  relatedPosts,
} from "@/data/app/blog/BlogDetails.ts";
import {
  IconBrandHipchat,
  IconCalendarDue,
  IconSend,
  IconShare,
  IconThumbUp,
} from "@tabler/icons-react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const BlogDetailLeft = () => {
  const [comments, setComments] = useState<CommentType[]>(blogComments);

  const [newComment, setNewComment] = useState<CommentType>({
    name: "",
    email: "",
    comment: "",
    quote: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, comment } = newComment;
    if (!name || !email || !comment) return;

    // Optional: Auto-generate quote if comment contains quotes
    const quoteMatch = comment.match(/“.*?”|".*?"/);
    const quote = quoteMatch ? "- Anonymous" : "";

    const newEntry: CommentType = {
      ...newComment,
      quote,
      time: "Just now",
    };

    setComments([newEntry, ...comments]);
    setNewComment({ name: "", email: "", comment: "", quote: "", time: "" });
  };

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      width: "90vw",
      height: "90vh",
    });

    return () => lightbox.destroy();
  });

  return (
    <>
      <Card>
        <Card.Body>
          {/* Video and Images Section */}
          <div className="post-div mb-3">
            <Row>
              <Col xs={12}>
                <video controls className="w-100 h-400 rounded">
                  <source src="/images/blog-app/video1.mp4" type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </Col>
              {["09", "05", "08", "04"].map((img, index) => (
                <Col xs={6} sm={3} key={index}>
                  <a
                    href={`/images/blog-app/${img}.jpg`}
                    className="glightbox img-fluid"
                    data-glightbox="type: image;"
                  >
                    <Image
                      src={`/images/blog-app/${img}.jpg`}
                      className="img-fluid rounded"
                      alt="blog"
                      fluid
                    />
                  </a>
                </Col>
              ))}
            </Row>
          </div>

          {/* Blog Content */}
          <h5 className="mb-3 text-dark fw-bold">
            Adjust your focus when life gets blurry.
          </h5>

          <div className="mb-3 text-secondary">
            <p>
              Photography is the art, application, and practice of creating
              images by recording light...
            </p>
            <p>
              The word Photography literally means &#39;drawing with
              light&#39;...
            </p>

            <Card className="bg-light-secondary border-0 shadow-none my-3">
              <Card.Body>
                <i className="ti ti-quote icon-bg"></i>
                <p className="mb-2 text-dark fw-bold">
                  “I never stay in one country more than three months...”
                </p>
                <h6 className="text-secondary text-end">
                  <cite>- Josef Koudelka.</cite>
                </h6>
              </Card.Body>
            </Card>

            <p className="mb-4">
              In 1826, Phosphoric Niece first managed to fix an image...
            </p>

            {/* Photographer List + Image */}
            <Row className="mb-3">
              <Col md={6}>
                <h5 className="mb-3 text-dark fw-semibold">
                  List of photographers
                </h5>
                <ul className="blog-list">
                  {[
                    [
                      "Charlotte Abram (born 1993)",
                      "photographer and filmmaker",
                    ],
                    ["Jennifer Des (born 1975)", "photographer"],
                    ["Nathalie Gasses (born 1964)", "writer, photographer"],
                    [
                      "Germaine Van Paras (1893 - 1983)",
                      "film director, photographer, educator",
                    ],
                    ["Katrin Vermeer (born 1979)", "photographer, filmmaker"],
                    [
                      "Stephanie Windings-rate (1939 - 2019)",
                      "artistic portrait and animal photographer",
                    ],
                    [
                      "Claudia Andujar (born 1931)",
                      "Swiss-born Brazilian photographer and photojournalist",
                    ],
                    [
                      "Brigida Baltar (born 1959)",
                      "visual artist and photographer",
                    ],
                    ["Alice Della (born 1987)", "model, photographer"],
                  ].map(([name, desc], i) => (
                    <li key={i}>
                      <span className="text-dark fw-semibold">{name}</span> -{" "}
                      {desc}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <a
                  href="/images/blog-app/03.jpg"
                  className="glightbox"
                  data-glightbox="type: image; zoomable: true;"
                >
                  <Image
                    src="/images/blog-app/03.jpg"
                    className="w-100 rounded"
                    alt="photographer"
                    fluid
                  />
                </a>
              </Col>
            </Row>

            <p>
              The commercial introduction of digital cameras in the 1990s...
            </p>
          </div>

          {/* Author Info + Actions */}
          <div className="app-divider-v mb-2"></div>
          <div className="d-flex align-items-center flex-wrap">
            <div className="h-50 w-50 d-flex-center b-r-10 overflow-hidden">
              <Image
                src="/images/avatar/09.png"
                alt="avatar"
                className="bg-danger img-fluid w-50 h-50"
                roundedCircle
              />
            </div>
            <div className="flex-grow-1 ps-2 me-2">
              <h6 className="mb-0 fw-medium text-dark">Bette Hagenes</h6>
              <p className="text-muted font-size-12 mb-0">26 Nov,2022</p>
            </div>
            <div>
              <Button
                variant="link"
                className="btn-white btn-sm icon-btn b-r-5"
              >
                <IconThumbUp size={20} />
              </Button>
              <Button
                variant="link"
                className="btn-white btn-sm icon-btn b-r-5"
              >
                <IconBrandHipchat size={20} />
              </Button>
              <Button
                variant="link"
                className="btn-white btn-sm icon-btn b-r-5"
              >
                <IconShare size={20} />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Comments Section */}
      <Card>
        <Card.Header>
          <h5>Comments</h5>
        </Card.Header>
        <Card.Body>
          {comments.map((comment, idx) => (
            <div className="blogcomment-box mb-3" key={idx}>
              <div className="d-flex justify-content-between">
                <div className="h-40 w-40 d-flex-center b-r-10 overflow-hidden comment-img">
                  <Image
                    src="/images/avatar/4.png"
                    alt="avatar"
                    className="bg-warning img-fluid"
                    roundedCircle
                  />
                </div>
                <div className="commentdiv">
                  <h6 className="mb-0 text-dark fw-semibold fs-6">
                    {comment.name}{" "}
                    <span className="text-muted fs-12">{comment.time}</span>
                  </h6>
                  <p className="text-muted mb-0">
                    {comment.comment}
                    {comment.quote && (
                      <span className="fs-6 d-inline-block text-secondary ms-2">
                        <cite>{comment.quote}</cite>
                      </span>
                    )}
                  </p>
                  {comment.email && (
                    <Badge bg="secondary">{comment.email}</Badge>
                  )}{" "}
                  {comment.tags?.map((tag, i) => (
                    <Badge bg="dark" key={i} className="ms-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Leave A Comment */}
          <h5 className="mb-3">Leave A Comment</h5>
          <Form className="app-form" onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="comment"
                    value={newComment.comment}
                    onChange={handleChange}
                    placeholder="Enter Your Comment"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    value={newComment.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                  />
                </Form.Group>
              </Col>
              <Col>
                <div className="text-end">
                  <Button variant="primary" type="submit">
                    <IconSend size={18} /> Comment
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Related Posts */}
      <h5 className="mb-3 mt-4">Related Posts</h5>
      <Row>
        {relatedPosts.map((post, idx) => (
          <Col md={6} xxl={4} key={idx}>
            <Card className="blog-card overflow-hidden">
              <a
                href={`/images/blog-app/${post.img}`}
                className="glightbox img-hover-zoom"
                data-glightbox="type: image; zoomable: true;"
              >
                <Card.Img
                  variant="top"
                  src={`/images/blog-app/${post.img}`}
                  alt="blog"
                />
              </a>
              <div className="tag-container">
                <Badge bg="secondary">{post.tag}</Badge>
              </div>
              <Card.Body>
                <p className="d-flex align-items-center gap-2 text-body-secondary">
                  <IconCalendarDue size={20} />
                  {post.date}
                </p>
                <Link to="/apps/blog-page/blog-details" className="bloglink">
                  <h5 className="title-text mb-2">{post.title}</h5>
                </Link>
                <p className="card-text text-secondary">{post.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BlogDetailLeft;
