import { Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import BlogDetailLeft from "@/components/apps/blog/blog-details/BlogDetailLeft.tsx";
import BlogDetailRight from "@/components/apps/blog/blog-details/BlogDetailRight.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BlogDetailsPage = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Blog Details"
          title="Apps"
          path={["Blog Page", "Blog Details"]}
          Icon={StackIcon}
        />
        <Row>
          <Col lg={8} xxl={9}>
            <BlogDetailLeft />
          </Col>
          <Col lg={4} xxl={3}>
            <BlogDetailRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetailsPage;
