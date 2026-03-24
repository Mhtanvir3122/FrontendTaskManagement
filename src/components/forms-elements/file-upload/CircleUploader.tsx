import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// FilePond styles
import "filepond/dist/filepond.min.css";

// Register FilePond plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const CircleUploader: React.FC = () => {
  return (
    <Card>
      <Card.Header>
        <h5>Circle File Uploader</h5>
      </Card.Header>
      <Card.Body>
        <Row className="file-uploader-box">
          <Col className="text-center">
            <FilePond
              allowMultiple={false}
              name="filepond"
              className="filepond-2 m-auto"
              acceptedFileTypes={["image/png", "image/jpeg", "image/gif"]}
              labelIdle="Upload Your Image"
              imagePreviewHeight={170}
              stylePanelLayout="compact circle"
              styleLoadIndicatorPosition="center bottom"
              styleProgressIndicatorPosition="right bottom"
              styleButtonRemoveItemPosition="left bottom"
              styleButtonProcessItemPosition="right bottom"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CircleUploader;
