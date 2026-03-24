import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";
import { IconArrowBarToDown, IconPrinter, IconSend } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const InvoicePage = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Invoice"
          title="Apps"
          path={["Invoice"]}
          Icon={StackIcon}
        />
        <div className="container-lg">
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <div className="table-responsive app-scroll">
                    <Table className="mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <Table className="table-lg w-100 invoice-header mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="mb-3">
                                      <div className="mb-3">
                                        <img
                                          src="/images/logo/1.png"
                                          className="w-200"
                                          alt=""
                                        />
                                      </div>
                                      <div>
                                        <address>
                                          35 O&#39;Connor, Ottawa Ontario <br />
                                          K1P 5M4 ,Canada <br />
                                          theme@gmail.com
                                        </address>
                                        (613) 233-1222
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-end">
                                      <div className="mb-1">
                                        <h3 className="text-primary">
                                          INVOICE
                                        </h3>
                                      </div>
                                      <p>
                                        Invoice <strong>#800123</strong>
                                      </p>
                                      <p>
                                        Invoice Date{" "}
                                        <strong>Apr 18,2024</strong>
                                      </p>
                                      <p>
                                        Invoice Due{" "}
                                        <strong>July 18,2024</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>
                            <Table className="invoice-details-table table-lg w-100">
                              <tbody>
                                <tr>
                                  <td>
                                    <div>
                                      <h6 className="fw-semibold">Bill From</h6>
                                      Mark McKenzie
                                      <address>
                                        35 O&#39;Connor, Ottawa Ontario <br />
                                        K1P 5M4 ,Canada <br />
                                        theme@gmail.com
                                      </address>
                                      (613) 233-1222
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <h6 className="fw-semibold">Bill To</h6>
                                      Fleta Walsh
                                      <address>
                                        255 E Flamingo Rd, Las Vegas,
                                        <br /> North Carolina, US-89169
                                        <br />
                                        theme@gmail.com
                                      </address>
                                      (702) 893-8933
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-end">
                                      <h6 className="fw-semibold">
                                        Payment Method
                                      </h6>
                                      <p>Bank : Bank of Us</p>
                                      <p>Card Holder : Fleta Walsh</p>
                                      <p>Card Number : xxx xxxx xxxx 8652</p>
                                      <p>Payment Method: Debit card </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td>
                            <Table className="table-lg table-bottom-border invoice-table w-100 mb-0">
                              <thead>
                                <tr>
                                  <th className="fw-semibold" scope="col">
                                    No
                                  </th>
                                  <th className="fw-semibold" scope="col">
                                    Item
                                  </th>
                                  <th className="fw-semibold" scope="col">
                                    Description
                                  </th>
                                  <th className="fw-semibold" scope="col">
                                    Quantity
                                  </th>
                                  <th className="fw-semibold" scope="col">
                                    Unit Cost
                                  </th>
                                  <th className="fw-semibold" scope="col">
                                    Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td className="fw-semibold">
                                    <h6>H & M Round Neck</h6>
                                  </td>
                                  <td className="fs-14 text-secondary">
                                    <p>
                                      Men&#39;s Graphic Tees & Printed T-shirts
                                    </p>
                                  </td>
                                  <td>2</td>
                                  <td>$400</td>
                                  <td>$200</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td className="fw-semibold">
                                    <h6>Mast & Harbour</h6>
                                  </td>
                                  <td className="fs-14 text-secondary">
                                    <p>
                                      Men Full Sleeve Solid Hooded Sweatshirt !
                                    </p>
                                  </td>
                                  <td>1</td>
                                  <td>$600</td>
                                  <td>$400</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td className="fw-semibold">
                                    <h6>Adidas</h6>
                                  </td>
                                  <td className="fs-14 text-secondary">
                                    <p>
                                      Jauntza M Running Shoes For Men (Blue)
                                    </p>
                                  </td>
                                  <td>5</td>
                                  <td>$500</td>
                                  <td>$250</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td className="fw-semibold">
                                    <h6>Stylist Jackets</h6>
                                  </td>
                                  <td className="fs-14 text-secondary">
                                    <p>Sky modern jacket for kid</p>
                                  </td>
                                  <td>1</td>
                                  <td>$200</td>
                                  <td>$150</td>
                                </tr>
                                <tr>
                                  <td colSpan={3}></td>
                                  <td colSpan={3}>
                                    <Table className="mb-0">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <h6>Sub Total</h6>
                                          </td>
                                          <td className="text-end">$2,150</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <h6>Tax</h6>
                                          </td>
                                          <td className="text-end">$100</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <h6>Shipping Charge</h6>
                                          </td>
                                          <td className="text-end">$500</td>
                                        </tr>

                                        <tr>
                                          <th className="border-0 pb-0">
                                            Total
                                          </th>
                                          <th className="border-0 text-end pb-0">
                                            $2,750
                                          </th>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>

              <div className="invoice-footer float-end mb-3">
                <Button
                  variant="primary"
                  className="m-1 rounded"
                  onClick={() => window.print()}
                >
                  <IconPrinter size={15} /> Print
                </Button>
                <Button variant="secondary" className="m-1 rounded">
                  <IconSend size={15} /> Send Invoice
                </Button>
                <Button variant="success" className="m-1 rounded">
                  <IconArrowBarToDown size={15} /> Download
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default InvoicePage;
