import { Button, Card, Row } from "react-bootstrap";

import { IconPhotoHeart, IconUser } from "@tabler/icons-react";

const ProfileCard = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="profile-container g-0">
          <div className="image-details">
            <div className="profile-image mb-2"></div>
            <div className="profile-pic">
              <div className="avatar-upload position-relative">
                <div className="avatar-edit position-absolute top-0 end-0">
                  <input
                    type="file"
                    id="imageUpload"
                    accept=".png, .jpg, .jpeg"
                    className="d-none"
                  />
                  <label htmlFor="imageUpload" className="cursor-pointer">
                    <IconPhotoHeart size={16} />
                  </label>
                </div>
                <div className="avatar-preview mt-3">
                  <div id="imgPreview"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="person-details">
            <h5 className="fw-semibold">
              Ninfa Monaldo
              <img
                width={20}
                height={20}
                src="/images/profile-app/01.png"
                alt="instagram-check-mark"
                className="ms-1"
              />
            </h5>
            <p>Web designer &amp; Developer</p>

            <div className="details g-0">
              <div>
                <h4 className="text-primary">10</h4>
                <p className="text-secondary">Post</p>
              </div>
              <div>
                <h4 className="text-primary">3.4k</h4>
                <p className="text-secondary">Follower</p>
              </div>
              <div>
                <h4 className="text-primary">1k</h4>
                <p className="text-secondary">Following</p>
              </div>
            </div>

            <div className="my-2">
              <Button variant="primary" className="rounded-pill">
                <IconUser size={16} className="me-1" />
                Follow
              </Button>
            </div>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
