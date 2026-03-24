import React, { useEffect, useState } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

import {
  allOptions,
  options,
  options2,
  publicFunctions,
} from "@/data/form-elements/DuelListBox/DuelListBox.ts";
import { Cardholder } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const DualListBoxesPage: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selected1, setSelected1] = useState<string[]>([]);
  const [selected2, setSelected2] = useState<string[]>([]);
  const [selected3, setSelected3] = useState<string[]>([]);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Dual List Boxes"
          title="Forms elements"
          path={["Dual list boxes"]}
          Icon={Cardholder}
        />
        <Row>
          <div className="col-xxl-6">
            <Card>
              <Card.Header className="code-header">
                <h5>Select by class</h5>
              </Card.Header>
              <Card.Body>
                <DualListBox
                  options={options}
                  selected={selected}
                  onChange={(value: string[]) => setSelected(value)}
                  showHeaderLabels
                  canFilter
                  lang={{
                    availableHeader: "Available options",
                    selectedHeader: "Selected options",
                  }}
                  icons={{
                    moveAllToSelected: "Add All",
                    moveToSelected: "Add",
                    moveToAvailable: "Remove",
                    moveAllToAvailable: "Remove All",
                  }}
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-xxl-6">
            <Card>
              <Card.Header className="code-header">
                <h5> Add options and add eventListeners </h5>
              </Card.Header>
              <Card.Body>
                <div className="selected-element d-flex mb-2 f-w-600">
                  <label>Selected element :&nbsp;</label>
                  <ul className="changed-element text-primary">
                    <li> Nothing yet</li>
                  </ul>
                </div>
                <DualListBox
                  options={options}
                  selected={selected1}
                  onChange={(value: string[]) => setSelected1(value)}
                  showHeaderLabels
                  canFilter
                  lang={{
                    availableHeader: "Available options",
                    selectedHeader: "Selected options",
                  }}
                  icons={{
                    moveToSelected: ">",
                    moveToAvailable: "<",
                    moveAllToSelected: ">>",
                    moveAllToAvailable: "<<",
                  }}
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-xxl-6">
            <Card>
              <Card.Header className="code-header">
                <h5>Select by class</h5>
              </Card.Header>
              <Card.Body>
                <DualListBox
                  options={options}
                  selected={selected2}
                  onChange={(value: string[]) => setSelected2(value)}
                  canFilter
                  showHeaderLabels
                  lang={{
                    availableHeader: "Available options",
                    selectedHeader: "Selected options",
                  }}
                  className="custom-dual-listbox"
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-xxl-6">
            <Card>
              <Card.Header className="code-header">
                <h5>Show the sort buttons</h5>
              </Card.Header>
              <Card.Body>
                <DualListBox
                  options={options2}
                  selected={selected3}
                  onChange={(value: string[]) => setSelected3(value)}
                  showHeaderLabels
                  canFilter
                  showOrderButtons
                  lang={{
                    availableHeader: "Available options",
                    selectedHeader: "Selected options",
                  }}
                  icons={{
                    moveAllToSelected: "Add All",
                    moveToSelected: "Add",
                    moveToAvailable: "Remove",
                    moveAllToAvailable: "Remove All",
                  }}
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-12">
            <Card>
              <Card.Header>
                <h5>All options</h5>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table className="table-bottom-border table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th>Default</th>
                        <th>Excepted values</th>
                        <th>Explanation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOptions.map(([opt, def, type, exp]) => (
                        <tr key={opt}>
                          <th>{opt}</th>
                          <td>
                            <code>{def}</code>
                          </td>
                          <td>
                            <code>{type}</code>
                          </td>
                          <td>{exp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>

            <Card className="mt-4">
              <Card.Header>
                <h5>Public functions</h5>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table className="table-bottom-border table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Function name</th>
                        <th>Arguments</th>
                        <th>Explanation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {publicFunctions.map(([name, args, desc]) => (
                        <tr key={name}>
                          <th>{name}</th>
                          <td>{args}</td>
                          <td>{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DualListBoxesPage;
