import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// FilePond Plugins
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

// Register Plugins
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginImageExifOrientation
);

const FilepondUploader: React.FC = () => {
  return (
    <Card className="equal-card">
      <Card.Header>
        <h5>Filepond File Uploader</h5>
      </Card.Header>
      <Card.Body>
        <Row className="file-uploader-box">
          <Col sm={6}>
            <FilePond
              allowMultiple={false}
              name="file"
              className="filepond-file"
              labelIdle={
                '<i class="fa-solid fa-cloud-upload fa-fw f-s-60 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>'
              }
            />
          </Col>
          <Col sm={6}>
            <FilePond
              allowMultiple={true}
              name="files"
              className="filepond-1"
              allowReorder={true}
              labelIdle={
                '<i class="fa-solid fa-cloud-upload fa-fw f-s-60 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>'
              }
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FilepondUploader;
