import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const WelcomeModal: React.FC = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);

  if (location.pathname !== "/" && location.pathname !== "/dashboard/ecommerce")
    return null;

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      centered
      contentClassName="welcome-card"
    >
      <div className="modal-body p-0 position-relative">
        <div>
          <img
            alt="bg"
            className="img-fluid w-100"
            src="/images/modals/welcome-bg.png"
          />
          <div>
            <img
              src="/images/modals/welcome-rocket.png"
              className="modal-rocket img-fluid"
              alt="rocket"
            />
          </div>
        </div>

        <div className="text-end position-absolute end-0 top-0 p-3">
          <i
            className="ti ti-x fs-5 text-dark fw-semibold cursor-pointer"
            onClick={handleClose}
          />
        </div>

        <div className="text-center position-relative welcome-card-content z-1 p-3">
          <h2 className="fw-semibold">Welcome! 👋</h2>
          <h6 className="fs-6 text-dark fw-medium mx-0 mx-sm-5">
            Start Multipurpose, clean modern responsive bootstrap 5 admin
            template
          </h6>

          <ul className="modal-features-list list-unstyled d-flex flex-wrap justify-content-center gap-2 mt-3">
            {[
              "Fully Responsive",
              "Built with bootstrap 5",
              "scss support",
              "Light & Dark Mode",
              "Enjoy Started!",
            ].map((item, idx) => (
              <li key={idx} className="btn btn-light-primary flex-fill">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-3 mb-4">
            <Button variant="primary" size="lg" onClick={handleClose}>
              Get Started <i className="ti ti-chevrons-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeModal;
