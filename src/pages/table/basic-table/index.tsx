import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

import {
  Data,
  TwoWaTableData,
  headersDatas,
  nestedData,
  nestedDataSet,
  rowsDatas,
  simpleTableData,
  tableData,
} from "@/data/table-page/BasicTable/BasicTableData.ts";
import { Table2Columns } from "iconoir-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BasictablePage: React.FC = () => {
  const getPositionBadgeColor = (
    position: string
  ): "primary" | "success" | "info" | "danger" | "dark" => {
    switch (position.toLowerCase()) {
      case "architect":
        return "primary";
      case "accountant":
        return "success";
      case "technical":
        return "info";
      case "developer":
        return "danger";
      default:
        return "dark";
    }
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Basic Table"
        title="Table"
        path={["Basic table"]}
        Icon={Table2Columns}
      />
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader>
              <h5>Simple Table</h5>
              <p>
                Using the most basic table. Add <code>.table</code> class to
                table tag.
              </p>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <Table className="align-middle mb-0">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Status</th>
                    <th>Salary</th>
                    <th>Contact</th>
                  </tr>
                  </thead>
                  <tbody>
                  {simpleTableData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className={`rounded-circle overflow-hidden me-2 text-bg-${item.badgeColor} avatar-30`}
                          >
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="img-fluid"
                            />
                          </div>
                          <span className="fw-semibold txt-ellipsis-1">{item.name}</span>
                        </div>
                      </td>
                      <td className="fw-semibold">{item.position}</td>
                      <td className="text-secondary fw-semibold">
                        {item.office}
                      </td>
                      <td>
                        <span className={`badge bg-${item.badgeColor}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="text-success fw-semibold">
                        {item.salary}
                      </td>
                      <td className="text-nowrap">{item.contact}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Dark Table</h5>
              <p>
                Using the Dark table. Add <code>.table-dark</code> class to
                table tag.
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table className="table table-dark table-hover table-variants-striped-dark  align-middle mb-0">
                  <thead>
                  <tr className="bg-light-info">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Salary</th>
                  </tr>
                  </thead>
                  <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td className="text-nowrap">{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.office}</td>
                      <td>{item.age}</td>
                      <td>{item.salary}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Bordered Tables With Striped</h5>
              <p>
                Using the border table need to add{" "}
                <code> .table-bordered </code> class to table tag and
                <code> .table-striped </code> class for Strip table
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive mb-4">
                <Table bordered striped>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Status</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div
                              className={`rounded-circle overflow-hidden me-2 text-bg-${item.badgeColor}`}
                            >
                              <img
                                src={item.avatar}
                                alt={item.name}
                                className="img-fluid"
                              />
                            </div>
                            <span className="text-nowrap">{item.name}</span>
                          </div>
                        </td>
                        <td>{item.position}</td>
                        <td><p className="txt-ellipsis-1">{item.office}</p></td>
                        <td>
                          <span
                            className={`badge text-light-${item.badgeColor}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Tables Without Borders</h5>
              <p>
                Using the borderless table need to add{" "}
                <code> .table-borderless </code> class to table tag{" "}
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table className="table  table-borderless table-hover table-striped align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="text-dark f-w-600 text-nowrap">{item.name}</td>
                        <td>
                          <span
                            className={`badge text-light-${item.badgeColor}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="text-secondary f-w-500 text-nowrap">
                          {item.office}
                        </td>
                        <td>{item.age}</td>
                        <td className="text-success f-w-500">{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Hoverable Table</h5>
              <p>
                Using the Hoverable table need to add <code>.table-hover</code>{" "}
                class to the table tag{" "}
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover className="table-bottom-border align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Office</th>
                      <th scope="col">Status</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div
                              className={`h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-${item.badgeColor} me-2 avatar-30 rounded-circle`}
                            >
                              <img
                                src={item.avatar}
                                alt={item.name}
                                className="img-fluid w-100"
                              />
                            </div>
                            <p className="mb-0 f-w-500 text-nowrap">{item.name}</p>
                          </div>
                        </td>
                        <td className="f-w-500">{item.position}</td>
                        <td className="text-secondary f-w-600 text-nowrap">
                          {item.office}
                        </td>
                        <td>
                          <span
                            className={`badge text-light-${item.badgeColor}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="text-success f-w-500">{item.salary}</td>
                        <td className="text-nowrap">{item.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Small Table</h5>
              <p>
                Using the small table need to add <code> .table-sm </code> class
                to table tag
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table
                  hover
                  className="table-sm table-striped align-middle mb-0"
                >
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Office</th>
                      <th scope="col">Age</th>
                      <th scope="col">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="text-nowrap">{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.age}</td>
                        <td>{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Large Table</h5>
              <p>
                Using the large table need to add <code> .table-lg </code> class
                to table tag
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table
                  hover
                  className="table-lg table-striped align-middle mb-0"
                >
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Office</th>
                      <th scope="col">Status</th>
                      <th scope="col">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="text-nowrap">{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>
                          <span
                            className={`badge text-light-${item.status === "active" ? "success" : "danger"}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Table With Bottom Border</h5>
              <p>
                Using the bottom bordered table need to add{" "}
                <code>.table-bottom-border</code> class to table tag
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover className="table-bottom-border align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Office</th>
                      <th scope="col">Team</th>
                      <th scope="col">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="text-nowrap">{item.name}</td>
                        <td>
                          <span
                            className={`badge text-outline-${getPositionBadgeColor(item.position)}`}
                          >
                            {item.position.toLowerCase()}
                          </span>
                        </td>
                        <td>{item.office}</td>
                        <td>
                          <ul className="avatar-group justify-content-start">
                            {item.team.map((avatar, index) => (
                              <li
                                key={index}
                                className={`h-35 w-35 d-flex b-r-50 overflow-hidden text-bg-${avatar.bgColor}`}
                                data-bs-toggle="tooltip"
                                data-bs-title={avatar.title || ""}
                              >
                                <img
                                  src={avatar.img}
                                  alt="avatar"
                                  className="img-fluid"
                                />
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="text-success f-w-500">{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Table Striped Columns</h5>
              <p>
                Using the column strip table need to add{" "}
                <code>.table-striped-columns</code> class to table tag
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table
                  hover
                  className="table-bottom-border table-striped-columns align-middle mb-0"
                >
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Office</th>
                      <th scope="col">Age</th>
                      <th scope="col">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="text-nowrap">{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.age}</td>
                        <td>{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Table Variants</h5>
              <p>
                Using the Color Variants table need to add{" "}
                <code>.table-Variants</code> class to table tag
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover className="table-Variants align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Office</th>
                      <th scope="col">Age</th>
                      <th scope="col">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id} className={`table-${item.variant}`}>
                        <td>{item.id}</td>
                        <td className="text-nowrap">{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.age}</td>
                        <td>{item.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Nesting Table</h5>
              <p>
                Border styles, active styles, and table variants are not
                inherited by nested tables.
              </p>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table className="table table-striped table-bordered align-middle mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nestedDataSet.map((row) => (
                      <React.Fragment key={row.id}>
                        <tr>
                          <th scope="row">{row.id}</th>
                          <td>{row.first}</td>
                          <td>{row.last}</td>
                          <td>{row.handle}</td>
                        </tr>
                        {row.id === 1 && (
                          <tr>
                            <td colSpan={4}>
                              <Table className="mb-0">
                                <thead>
                                  <tr>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {nestedData.map((nestedRow, index) => (
                                    <tr key={index}>
                                      <th scope="row">{nestedRow.header}</th>
                                      <td>{nestedRow.first}</td>
                                      <td>{nestedRow.last}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Header>
              <h5>Two Way Table</h5>
              <p>
                Using the two direction table need to add <code>.text-end</code>{" "}
                class to last table head table data
              </p>
            </Card.Header>
            <Card.Body className="card-body p-0">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col" className="text-end">
                      Salary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TwoWaTableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td className="text-end">{row.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={8}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Always Responsive</h5>
              <p>
                Apply{" "}
                <code>
                  .table-responsive- &#34;sm&#34;,&#34;md&#34;,&#34;lg&#34;
                  ,&#34;xl&#34;,&#34;xxl&#34;
                </code>{" "}
                make tables scroll horizontally on smaller screens while
                displaying normally on larger ones.
              </p>
            </Card.Header>
            <Card.Body className="card-body p-0">
              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      {headersDatas.map((header, index) => (
                        <th key={index} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rowsDatas.map((row) => (
                      <tr key={row.id}>
                        <th scope="row">{row.id}</th>
                        {row.cells.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BasictablePage;
