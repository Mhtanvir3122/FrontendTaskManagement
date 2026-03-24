import { Card } from "react-bootstrap";

import { GoogleDrive } from "iconoir-react";
import { FileArrowDown, Folder } from "phosphor-react";

import FileUploader from "@/components/apps/profile/FileUploader.tsx";

const Ticketfileupload = () => {
  return (
    <div>
      <Card>
        <Card.Header>
          <h5>File Upload</h5>
        </Card.Header>
        <Card.Body>
          <FileUploader />

          {/* File Upload Buttons */}
          <div className="file-upload-btn mt-3">
            <div className="d-flex">
              <span className="bg-danger h-40 w-40 d-flex align-items-center justify-content-center rounded-circle me-3 heartBtn">
                <GoogleDrive className="fa-6" />
              </span>
              <span className="bg-success h-40 w-40 d-flex align-items-center justify-content-center rounded-circle me-3 heartBtn">
                <Folder size={18} />
              </span>
            </div>
            <div>
              <span className="bg-warning h-40 w-40 d-flex align-items-center justify-content-center rounded-circle me-3 heartBtn">
                <FileArrowDown size={18} />
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Ticketfileupload;
