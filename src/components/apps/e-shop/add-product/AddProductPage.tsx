import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";

import { StackIcon } from "@phosphor-icons/react";
import { IconPlus } from "@tabler/icons-react";

import UploadProduct from "@/components/apps/e-shop/add-product/UploadProduct.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import TextEditor from "@/components/editor/TextEditor.tsx";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "", label: "Select a category" },
  { value: "IN", label: "Industry" },
  { value: "FN", label: "Functionality" },
  { value: "CN", label: "Customer Needs" },
  { value: "CP", label: "Customer Preferences" },
  { value: "DE", label: "Demographics" },
];

const options2: Option[] = [
  { value: "Cl", label: "Clothing" },
  { value: "SH", label: "Shoes" },
  { value: "TO", label: "Toys" },
  { value: "IT", label: "Internet Of Things" },
  { value: "BS", label: "Books & Stationaries" },
  { value: "AS", label: "Art Supplies" },
];

const AddProductPage = () => {
  const [uiState, setUiState] = useState({
    modal: false,
    mounted : false
  });

  const toggle = () => setUiState((prev) => ({ ...prev, modal: !prev.modal }));

  React.useEffect(() => {
    setUiState((prev) => ({ ...prev, mounted: true }))
  }, []);

  if (!uiState.mounted) return null;

  return (
    <div className="container-fluid">
      <Container fluid>
        <Breadcrumbs
          mainTitle="Add Product"
          title="Apps"
          path={["E-shop", "Add Product"]}
          Icon={StackIcon}
        />
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Body>
                <div className="app-product-section">
                  {/* General Information */}
                  <div className="main-title mb-3">
                    <h6>General Information</h6>
                  </div>
                  <Form className="app-form">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="productTitle">
                        Product Title
                      </Form.Label>
                      <Form.Control type="text" id="productTitle" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="brandName">Brand Name</Form.Label>
                      <Form.Control type="text" id="brandName" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Product Description</Form.Label>
                      <TextEditor />
                    </Form.Group>
                  </Form>

                  <div className="app-divider-v dashed my-4" />

                  {/* Category */}
                  <div className="main-title mb-3">
                    <h6>Category</h6>
                  </div>
                  <Form className="app-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Product Category</Form.Label>
                          <Select
                            options={options}
                            isClearable
                            isSearchable
                            className="react-select-container"
                            classNamePrefix="react-select"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Product Tags</Form.Label>
                          <Select
                            options={options2}
                            isClearable
                            isSearchable
                            className="react-select-container"
                            classNamePrefix="react-select"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <div className="app-divider-v dashed my-4" />

                  {/* Inventory */}
                  <div className="main-title mb-3">
                    <h6>Inventory</h6>
                  </div>
                  <Form className="app-form">
                    <Row>
                      <Col md={3}>
                        <Form.Group className="mb-3">
                          <Form.Label>SKU (Optional)</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Barcode</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3">
                          <Form.Label>Quantity</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <div className="app-divider-v dashed my-4" />

                  {/* Shipping */}
                  <div className="main-title mb-3">
                    <h6>Shipping</h6>
                  </div>
                  <Form className="app-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Weight</Form.Label>
                          <Form.Control type="text" />
                          <Form.Text className="text-muted">
                            Package Size (The package you use to ship your
                            product)
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Shipping Days</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Length</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Breadth</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Width</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Buttons */}
                    <div className="mt-4 text-end">
                      <Button
                        type="button"
                        variant="light-secondary"
                        className="rounded me-2"
                      >
                        Discard
                      </Button>
                      <Link to="/apps/e-shop/product-details">
                        <Button variant="primary" className="rounded">
                          Add Product
                        </Button>
                      </Link>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <div className="app-product-section">
                  {/* Product Media */}
                  <div className="main-title">
                    <h6>Product Media</h6>
                  </div>
                  <UploadProduct />

                  <div className="app-divider-v dashed" />

                  {/* Pricing */}
                  <div className="main-title">
                    <h6>Pricing</h6>
                  </div>
                  <Form className="app-form">
                    <Row>
                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Price</Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text className="b-r-left">
                              $
                            </InputGroup.Text>
                            <Form.Control className="b-r-right" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Compare at price</Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text className="b-r-left">
                              $
                            </InputGroup.Text>
                            <Form.Control className="b-r-right" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Discount(%)</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Discount Type</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <div className="app-divider-v dashed" />

                  {/* Product Variants */}
                  <div className="main-title">
                    <h6>Product Variants</h6>
                  </div>
                  <div className="variants-box">
                    <a href="#" onClick={toggle} className="text-primary">
                      <IconPlus size={18} /> Add Variants
                    </a>
                  </div>

                  <Modal show={uiState.modal} onHide={toggle}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form className="app-form">
                        <Form.Group className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Select defaultValue="1">
                            <option>select Option</option>
                            <option value="1">Size</option>
                            <option value="2">Weight</option>
                            <option value="3">Color</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Product Height</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Number"
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={toggle}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={toggle}>
                        Add Variants
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <div className="app-divider-v dashed" />

                  {/* Visibility */}
                  <div className="main-title">
                    <h6>Visibility</h6>
                  </div>
                  <Form className="mt-2">
                    <Form.Check
                      type="radio"
                      id="Visibility_1"
                      label="Published"
                      name="flexRadioDefault"
                      className="d-flex align-items-center mt-2"
                    />
                    <Form.Check
                      type="radio"
                      id="Visibility_2"
                      label="Schedule"
                      name="flexRadioDefault"
                      className="d-flex align-items-center mt-2"
                    />
                    <Form.Check
                      type="radio"
                      id="Visibility_3"
                      label="Hidden"
                      name="flexRadioDefault"
                      className="d-flex align-items-center mt-2"
                    />
                  </Form>

                  <Form className="app-form mt-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Publish Date</Form.Label>
                      <Form.Control type="text" />
                      <Form.Text>
                        The category will not be visible until the specified
                        date.
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProductPage;
