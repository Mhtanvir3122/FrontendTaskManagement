import { tableData } from "@/data/table-page/BasicTable/BasicTableData"
import { Card, Col, Table } from "react-bootstrap"

const CertificationTable = () => {
 return (


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
                      <th scope="col" style={{width:420}}>Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col" style={{width:420}}>Id</th>
                      <th scope="col">Status</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Contact</th>
                      <th scope="col" style={{width:420}}>Id</th>
                      <th scope="col">Status</th>
                     
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

                )}

                export default CertificationTable