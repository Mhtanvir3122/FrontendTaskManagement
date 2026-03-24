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
// FilePond Styles
import "filepond/dist/filepond.min.css";

// Register plugins once
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginImageExifOrientation
);

const SolidFileupload: React.FC = () => {
  const fileUploaders = [
    { id: "solid1", className: "filepondsolid1 file-primary" },
    { id: "solid2", className: "filepondsolid2 file-secondary" },
    { id: "solid3", className: "filepondsolid3 file-success" },
    { id: "solid4", className: "filepondsolid4 file-danger" },
  ];

  return (
    <Card>
      <Card.Header>
        <h5>Solid Style</h5>
      </Card.Header>
      <Card.Body>
        <Row className="file-uploader-box">
          {fileUploaders.map((uploader) => (
            <Col key={uploader.id} sm={6} md={3} xl={3}>
              <FilePond
                allowMultiple={true}
                name="files"
                className={`filesolid ${uploader.className}`}
                data-allow-reorder="true"
                labelIdle={
                  `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> ` +
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

export default SolidFileupload;
