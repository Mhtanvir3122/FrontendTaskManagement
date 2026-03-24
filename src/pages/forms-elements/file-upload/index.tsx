import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import BasicFileupload from "@/components/forms-elements/file-upload/BasicFileupload.tsx";
import CircleUploader from "@/components/forms-elements/file-upload/CircleUploader.tsx";
import FilepondUploader from "@/components/forms-elements/file-upload/FilepondUploader.tsx";
import LightFileupload from "@/components/forms-elements/file-upload/LightFileupload.tsx";
import SolidFileupload from "@/components/forms-elements/file-upload/SolidFileupload.tsx";

const FileUploadPage: React.FC = () => {
  return (
      <Container fluid>
        <Breadcrumbs
          mainTitle="File Upload"
          title="Forms elements"
          path={["File Upload"]}
          Icon={Cardholder}
        />
        <Row>
          <Col xs="12">
            <BasicFileupload />
          </Col>
          <Col xl="8">
            <FilepondUploader />
          </Col>
          <Col xl="4">
            <CircleUploader />
          </Col>
          <Col xs="12">
            <SolidFileupload />
          </Col>
          <Col xs="12">
            <LightFileupload />
          </Col>
        </Row>
      </Container>
  );
};

export default FileUploadPage;
