import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  ModalFooter,
  Row,
} from "react-bootstrap";

import {
  IconArrowBigRight,
  IconArrowBigRightLines,
  IconArrowRight,
  IconCaretRight,
  IconChevronRight,
} from "@tabler/icons-react";
import { BriefcaseMetal } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const Modals: React.FC = () => {
  const [uiState, setUiState] = useState({
    modalOpen: false,
    largeModalOpen: false,
    extralargeModalOpen: false,
    centerModalOpen: false,
    scrollModalOpen: false,
    fullscreenModalOpen: false,
    fullscreenSmModalOpen: false,
    fullscreenLgModalOpen: false,
    fullscreenXlModalOpen: false,
    fullscreenXxlModalOpen: false,
    primaryModalOpen: false
  })
  const [modalVariant, setModalVariant] = useState<
    "primary" | "success" | "warning" | "danger" | "secondary" | "info" | "dark"
  >("primary");
  const toggle = () => setUiState((prev) => ({...prev, modalOpen : !uiState.modalOpen}));

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Modals"
          title="Advance UI "
          path={["Modals"]}
          Icon={BriefcaseMetal}
        />
        <Row>
          <Col sm="12" md="6">
            <Card className="equal-card">
              <Card.Header>
                <h5>Default Modal</h5>
                <p className="mb-0 text-secondary">
                  If you want to keep the default modal, you can keep it using{" "}
                  <span className="text-danger">modal-dialog</span>
                </p>
              </Card.Header>
              <Card.Body>
                <Button variant="primary" onClick={toggle} className="rounded">
                  Default Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <Card.Header>
                <h5>Small Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger">
                    modal-dialog or app_modal_sm
                  </span>
                </p>
              </Card.Header>
              <Card.Body className="modal-btn">
                <Button variant="primary" onClick={toggle} className="rounded">
                  Small Modal
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setUiState((prev) => ({...prev, largeModalOpen : true}))}
                  className="rounded"
                >
                  Open Large Modal
                </Button>
                <Button
                  variant="success"
                  onClick={() => setUiState((prev) => ({...prev, extralargeModalOpen : true}))}
                  className="rounded"
                >
                  Open Extra Large Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card className="equal-card">
              <Card.Header>
                <h5>Center Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger">modal-dialog-centered</span>
                </p>
              </Card.Header>
              <Card.Body>
                <Button
                  variant="danger"
                  onClick={() => setUiState((prev) => ({...prev, centerModalOpen : true}))}
                  className="rounded"
                >
                  Center Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <Card.Header>
                <h5>Scrollable Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger">
                    modal-dialog-centered or modal-dialog-scrollable
                  </span>
                </p>
              </Card.Header>
              <Card.Body className="card-body">
                <Button
                  variant="info"
                  onClick={() => setUiState((prev) => ({...prev, scrollModalOpen : true}))}
                  className="rounded"
                >
                  Open Scrollable Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card className="equal-card">
              <Card.Header>
                <h5>Full Screen Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using <span className="text-danger">modal-fullscreen</span>
                </p>
              </Card.Header>
              <Card.Body className="card-body">
                <Button
                  variant="dark"
                  onClick={() => setUiState((prev) => ({...prev, fullscreenModalOpen : true}))}
                  className="rounded"
                >
                  Fullscreen Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <Card.Header>
                <h5>Full Screen Sm Down Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger"> modal-fullscreen-sm-down</span>
                </p>
              </Card.Header>
              <Card.Body className="card-body">
                <Button
                  color="light-secondary"
                  onClick={() => setUiState((prev) => ({...prev, fullscreenSmModalOpen : true}))}
                  className="rounded"
                >
                  Fullscreen Below SM Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <Card.Header>
                <h5>Full-Screen Md Down Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger">modal-fullscreen-md-down</span>
                </p>
              </Card.Header>
              <Card.Body>
                <Button
                  variant="success"
                  onClick={() => setUiState((prev) => ({...prev, fullscreenSmModalOpen : true}))}
                  className="rounded"
                >
                  Fullscreen Below SM Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card className="equal-card">
              <Card.Header>
                <h5>Full Screen Lg Down Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger">modal-fullscreen-lg-down</span>
                </p>
              </Card.Header>
              <Card.Body>
                <Button
                  variant="danger"
                  onClick={() => setUiState((prev) => ({...prev, fullscreenLgModalOpen : true}))}
                  className="rounded"
                >
                  Fullscreen Below LG Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card className="equal-card">
              <Card.Header>
                <h5>Full Screen Xl Down Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger">modal-fullscreen-Xl-down</span>
                </p>
              </Card.Header>
              <Card.Body className="card-body">
                <Button
                  variant="info"
                  onClick={() => setUiState((prev) => ({...prev, fullscreenXlModalOpen : true}))}
                  className="rounded"
                >
                  Fullscreen Below XL Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <Card.Header>
                <h5>Full Screen Xxl Down Modal</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it
                  using{" "}
                  <span className="text-danger">modal-fullscreen-Xxl-down</span>
                </p>
              </Card.Header>
              <Card.Body className="card-body">
                <Button
                  variant="warning"
                  onClick={() => setUiState((prev) => ({...prev, fullscreenXxlModalOpen : true}))}
                  className="rounded"
                >
                  Open Fullscreen Below XXL Modal
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h4 className="">Themes Modal</h4>
                <p>You can use custom modals with themes colors.</p>
              </Card.Header>
              <Card.Body className="card-body">
                <Button
                  variant="outline-primary"
                  className="rounded"
                  onClick={() => {
                    setModalVariant("primary");
                    setUiState((prev) => ({...prev, primaryModalOpen: true}));
                  }}
                >
                  Primary
                </Button>{" "}
                <Button
                  variant="outline-secondary"
                  className="rounded"
                  onClick={() => {
                    setModalVariant("secondary");
                    setUiState((prev) => ({...prev, primaryModalOpen: true}));
                  }}
                >
                  Secondary
                </Button>{" "}
                <Button
                  variant="outline-success"
                  className="rounded"
                  onClick={() => {
                    setModalVariant("success");
                    setUiState((prev) => ({...prev, primaryModalOpen: true}));
                  }}
                >
                  success
                </Button>{" "}
                <Button
                  variant="outline-warning"
                  className="rounded"
                  onClick={() => {
                    setModalVariant("warning");
                    setUiState((prev) => ({...prev, primaryModalOpen: true}));
                  }}
                >
                  warning
                </Button>{" "}
                <Button
                  variant="outline-info"
                  className="rounded"
                  onClick={() => {
                    setModalVariant("info");
                    setUiState((prev) => ({...prev, primaryModalOpen: true}));
                  }}
                >
                  info
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  className="rounded"
                  onClick={() => {
                    setModalVariant("danger");
                    setUiState((prev) => ({...prev, primaryModalOpen: true}));
                  }}
                >
                  danger
                </Button>{" "}
                <Button
                  variant="outline-dark"
                  className="rounded"
                  onClick={() => {
                    setModalVariant("dark");
                    setUiState((prev) => ({...prev, primaryModalOpen: true}));
                  }}
                >
                  dark
                </Button>
                {/*box-1-start*/}
                <Modal
                  show={uiState.primaryModalOpen}
                  onHide={() => setUiState((prev) => ({...prev, primaryModalOpen: false}))}
                  centered
                >
                  <div className="modal-content overflow-hidden">
                    {/* Dynamic Header */}
                    <Modal.Header
                      closeButton
                      className={`bg-${modalVariant} d-flex justify-content-between text-white`}
                    >
                      {modalVariant.charAt(0).toUpperCase() +
                        modalVariant.slice(1)}{" "}
                      Modal
                    </Modal.Header>
                    <Modal.Body>
                      <h5 className={`mt-0 text-${modalVariant}`}>
                        Quos modi tempora illo fuga blanditiis voluptatum atque.
                      </h5>
                    </Modal.Body>
                    <ModalFooter>
                      <Button
                        type="button"
                        color={modalVariant}
                        className="badge text-light-primary fs-6"
                      >
                        Save changes
                      </Button>
                      <Button
                        type="button"
                        color="light-secondary"
                        onClick={() => setUiState((prev) => ({...prev, primaryModalOpen: false}))}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                {/*box-1-end*/}
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={uiState.primaryModalOpen}
            onHide={() => setUiState((prev) => ({...prev, primaryModalOpen: false}))}
            centered
          >
            <div className="modal-content overflow-hidden">
              <Modal.Header
                closeButton
                className={`bg-${modalVariant} d-flex justify-content-between text-white fs-5`}
              >
                {modalVariant.charAt(0).toUpperCase() + modalVariant.slice(1)}{" "}
                Modal
                <Button
                  type="button"
                  onClick={() => setUiState((prev) => ({...prev, primaryModalOpen: false}))}
                  className="btn-close m-0 fs-5 bg-none border-0"
                  aria-label="Close"
                />
              </Modal.Header>
              <Modal.Body>
                <h5 className={`mt-0 text-${modalVariant}`}>
                  Quos modi tempora illo fuga blanditiis voluptatum atque.
                </h5>
              </Modal.Body>
              <Modal.Footer>
                <Button variant={`light-${modalVariant}`} className="fs-6">
                  Save changes
                </Button>
                <Button
                  variant="light-secondary"
                  onClick={() => setUiState((prev) => ({...prev, primaryModalOpen: false}))}
                >
                  Close
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </Row>

        {/* Small Modal Start */}
        <Modal show={uiState.modalOpen} onHide={toggle}>
          <Modal.Header
            closeButton
            className="modal-title fs-5  bg-primary-800"
          >
            Small Modal
          </Modal.Header>

          <Modal.Body className="text-center">
            <div className="d-flex gap-2">
              <img
                src="/images/modals/06.jpg"
                alt="Content marketing"
                width={90}
                height={90}
                className="rounded-pill object-fit-cover h-90 w-90"
              />
              <div className="text-start d-flex flex-column gap-2">
                <h5>Content marketing</h5>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="light-secondary" onClick={toggle}>
              Close
            </Button>
            <Button variant="light-primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>

        {/* Large Modal */}
        <Modal
          show={uiState.largeModalOpen}
          onHide={() => setUiState((prev) => ({...prev, largeModalOpen: uiState.largeModalOpen}))}
        >
          <Modal.Header
            closeButton
            className="modal-title fs-5  bg-primary-800"
          >
            Large Modal
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-4 text-center">
                <img
                  src="/images/modals/05.png"
                  alt="Large Modal"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-8 align-self-center">
                <div className="error-content text-center">
                  <h4 className="mb-3">DO NOT ENTER</h4>
                  <button type="button" className="btn btn-light-primary">
                    Back to Dashboard
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="secondary" onClick={() => setUiState((prev) => ({...prev, largeModalOpen: false}))}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Extra Large Modal */}
        <Modal
          show={uiState.extralargeModalOpen}
          onHide={() => setUiState((prev) => ({...prev, extralargeModalOpen: false}))}
        >
          <div className="modal-content overflow-hidden">
            <Modal.Header
              closeButton
              className="modal-title fs-5  bg-primary-800"
            >
              Extra Large Modal
            </Modal.Header>
            <Modal.Body>
              <p>
                In a professional context it often happens that private or
                corporate clients order a publication to be made and presented
                with the actual content still not being ready. Think of a news
                blog that&#39;s filled with content hourly on the day of going
                live.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button color="light-primary">Save changes</Button>
              <Button
                color="light-secondary"
                onClick={() => setUiState((prev) => ({...prev, extralargeModalOpen: false}))}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        {/*center modal start */}
        <Modal
          show={uiState.centerModalOpen}
          onHide={() => setUiState((prev) => ({...prev, centerModalOpen: false}))}
          centered
        >
          <div className="modal-content overflow-hidden">
            <Modal.Header
              closeButton
              className="modal-title fs-5  bg-primary-800"
            >
              Center Modal
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-3 text-center align-self-center">
                  <img
                    src="/images/modals/04.png"
                    alt="Web designer"
                    className="img-fluid b-r-10"
                  />
                </div>
                <div className="col-lg-9 ps-4">
                  <h5>Web designer</h5>
                  <ul className="mt-3 mb-0 list-disc">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light-primary">Save changes</Button>
              <Button
                variant="light-secondary"
                onClick={() => setUiState((prev) => ({...prev, centerModalOpen: false}))}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        {/*scrollbar model start */}
        <Modal
          show={uiState.scrollModalOpen}
          onHide={() => setUiState((prev) => ({...prev, scrollModalOpen: false}))}
          scrollable
          centered
        >
          <div className="modal-content">
            <Modal.Header
              closeButton
              className="modal-title fs-5  bg-primary-800"
            >
              Scroll Modal
            </Modal.Header>

            {/* Modal Body */}
            <Modal.Body className="h-90">
              <p>
                <IconChevronRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                However, reviewers tend to be distracted by comprehensible
                content, say, a random text copied from a newspaper or the
                internet. They are likely to focus on the text, disregarding the
                layout and its elements.
              </p>

              <p>
                <IconChevronRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                It was found by Richard McClintock, a philologist, director of
                publications at Hampden-Sydney College in Virginia; he searched
                for citings of <em>consectetur</em> in classical Latin
                literature, a term of remarkably low frequency in that literary
                corpus.
              </p>
            </Modal.Body>

            {/* Modal Footer */}
            <Modal.Footer>
              <Button variant="light-primary">Save changes</Button>
              <Button
                variant="light-secondary"
                onClick={() => setUiState((prev) => ({...prev, scrollModalOpen: false}))}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        {/*full screen modal start */}
        <Modal
          show={uiState.fullscreenModalOpen}
          onHide={() => setUiState((prev) => ({...prev, fullscreenModalOpen: false}))}
          fullscreen
          scrollable
        >
          <div className="modal-content">
            <Modal.Header
              closeButton
              className="d-flex justify-content-between"
            >
              Full screen modal
            </Modal.Header>
            <Modal.Body>
              <p>
                <IconChevronRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born, and I will give you a
                complete account of the system...
              </p>
              <p>
                <IconChevronRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born, and I will give you a
                complete account of the system...
              </p>
              <p>
                <IconChevronRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born, and I will give you a
                complete account of the system...
              </p>
              <p>
                <IconChevronRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born, and I will give you a
                complete account of the system...
              </p>
            </Modal.Body>
            <ModalFooter>
              <Button
                variant="light-secondary"
                onClick={() => setUiState((prev) => ({...prev, fullscreenModalOpen: false}))}
              >
                Close
              </Button>
              <Button variant="light-primary">Save changes</Button>
            </ModalFooter>
          </div>
        </Modal>

        {/*Full-screen-sm-down modal start */}
        <Modal
          show={uiState.fullscreenSmModalOpen}
          onHide={() => setUiState((prev) => ({...prev, fullscreenSmModalOpen: false}))}
          className="modal-fullscreen-sm-down"
        >
          <div className="modal-content">
            <Modal.Header
              closeButton
              className="modal-title fs-5  bg-primary-800"
            >
              Full screen below sm
            </Modal.Header>
            <Modal.Body>
              <p>
                <IconCaretRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system...
              </p>
              <p>
                <IconCaretRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system...
              </p>
            </Modal.Body>

            {/* Footer */}
            <ModalFooter>
              <Button
                variant="light-secondary"
                size="sm"
                onClick={() => setUiState((prev) => ({...prev, fullscreenSmModalOpen: false}))}
              >
                Close
              </Button>
            </ModalFooter>
          </div>
        </Modal>

        {/*Full-screen-lg-down modal start  */}
        <Modal
          show={uiState.fullscreenLgModalOpen}
          onHide={() => setUiState((prev) => ({...prev, fullscreenLgModalOpen: false}))}
          className="modal-fullscreen-lg-down"
        >
          <div className="modal-content">
            <Modal.Header
              closeButton
              className="d-flex justify-content-between"
            >
              Full screen below lg
            </Modal.Header>
            <Modal.Body>
              <p>
                <IconArrowRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system...
              </p>
              <p>
                <IconArrowRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system...
              </p>
              <p>
                <IconArrowRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system...
              </p>
            </Modal.Body>
            <ModalFooter>
              <Button
                variant="light-secondary"
                size="sm"
                onClick={() => setUiState((prev) => ({...prev, fullscreenLgModalOpen: false}))}
              >
                Close
              </Button>
            </ModalFooter>
          </div>
        </Modal>

        {/*Full-screen-xl-down modal start  */}
        <Modal
          show={uiState.fullscreenXlModalOpen}
          onHide={() => setUiState((prev) => ({...prev, fullscreenXlModalOpen: false}))}
          className="modal-fullscreen-xl-down"
        >
          <div className="modal-content">
            <Modal.Header
              closeButton
              className="d-flex justify-content-between"
            >
              Full screen below xl
            </Modal.Header>
            <Modal.Body>
              <p>
                <IconArrowBigRight
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness.
              </p>
            </Modal.Body>

            {/* Footer */}
            <ModalFooter>
              <Button
                color="light-secondary"
                size="sm"
                onClick={() => setUiState((prev) => ({...prev, fullscreenXlModalOpen: false}))}
              >
                Close
              </Button>
            </ModalFooter>
          </div>
        </Modal>
        {/*Full-screen-xl-down modal end */}

        {/*Full-screen-xxl-down modal start */}
        <Modal
          show={uiState.fullscreenXxlModalOpen}
          onHide={() => setUiState((prev) => ({...prev, fullscreenXxlModalOpen: false}))}
          className="modal-fullscreen-xxl-down"
        >
          <div className="modal-content">
            <Modal.Header
              closeButton
              className="d-flex justify-content-between"
            >
              Full screen below xxl
            </Modal.Header>
            <Modal.Body>
              <p>
                <IconArrowBigRightLines
                  size={22}
                  className="text-secondary fw-semibold"
                />{" "}
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness.
              </p>
            </Modal.Body>
            <ModalFooter>
              <Button
                color="light-secondary"
                size="sm"
                onClick={() => setUiState((prev) => ({...prev, fullscreenXxlModalOpen: false}))}
              >
                Close
              </Button>
            </ModalFooter>
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default Modals;
