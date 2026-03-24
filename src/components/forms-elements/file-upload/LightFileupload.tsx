import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
// FilePond Plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
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

const LightFileupload: React.FC = () => {
  const lightUploaders = [
    { id: "light1", className: "filepondlight1 file-light-primary" },
    { id: "light2", className: "filepondlight2 file-light-secondary" },
    { id: "light3", className: "filepondlight3 file-light-success" },
    { id: "light4", className: "filepondlight4 file-light-danger" },
  ];

  return (
    <Card>
      <Card.Header>
        <h5>Light Style</h5>
      </Card.Header>
      <Card.Body>
        <Row className="file-uploader-box">
          {lightUploaders.map((uploader) => (
            <Col key={uploader.id} sm={6} md={3} xl={3}>
              <FilePond
                allowMultiple={true}
                name="files"
                className={`filelight ${uploader.className}`}
                data-allow-reorder="true"
                labelIdle={
                  `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i>` +
                  `<div class="filepond--label-action text-decoration-none">Upload Your Files</div>`
                }
              />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LightFileupload;
