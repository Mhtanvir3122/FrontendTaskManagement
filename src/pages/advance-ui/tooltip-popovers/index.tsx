import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface TooltipItem {
  id: string;
  label: string;
  placement: "top" | "right" | "bottom" | "left";
  color: string;
}
const tooltipItems: TooltipItem[] = [
  {
    id: "TooltipTop",
    label: "Tooltip on top",
    placement: "top",
    color: "primary",
  },
  {
    id: "TooltipRight",
    label: "Tooltip on right",
    placement: "right",
    color: "secondary",
  },
  {
    id: "TooltipBottom",
    label: "Tooltip on bottom",
    placement: "bottom",
    color: "success",
  },
  {
    id: "TooltipLeft",
    label: "Tooltip on left",
    placement: "left",
    color: "danger",
  },
];
interface TooltipColorItem {
  id: string;
  label: string;
  color: string;
  tooltipColor: string;
  textColor?: string;
}
const colorTooltips: TooltipColorItem[] = [
  {
    id: "TooltipPrimary",
    label: "Primary",
    color: "primary",
    tooltipColor: "#0f626a",
  },
  {
    id: "TooltipSecondary",
    label: "Secondary",
    color: "secondary",
    tooltipColor: "#626262",
  },
  {
    id: "TooltipSuccess",
    label: "Success",
    color: "success",
    tooltipColor: "#0ab964",
  },
  {
    id: "TooltipDanger",
    label: "Danger",
    color: "danger",
    tooltipColor: "#e14e5a",
  },
  {
    id: "TooltipWarning",
    label: "Warning",
    color: "warning",
    tooltipColor: "#f9c123",
    textColor: "#000",
  },
  { id: "TooltipInfo", label: "Info", color: "info", tooltipColor: "#4196fa" },
  {
    id: "TooltipLight",
    label: "Light",
    color: "light",
    tooltipColor: "#c8b9d2",
    textColor: "#000",
  },
  { id: "TooltipDark", label: "Dark", color: "dark", tooltipColor: "#28232d" },
];

const TooltipPopoverPage: React.FC = () => {
  return (
    <Container fluid className="ui-section">
      <Breadcrumbs
        mainTitle="Tooltip & Popovers"
        title="Advance Ui"
        path={["Tooltip & Popovers"]}
        Icon={BriefcaseMetal}
      />

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Default Tooltips</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap gap-3">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-default">Custom tooltip</Tooltip>
                  }
                >
                  <Button variant="primary" type="button">
                    Custom tooltip
                  </Button>
                </OverlayTrigger>

                <Button variant="secondary" type="button" disabled>
                  Disabled Tooltips
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Placement</h5>
            </Card.Header>
            <Card.Body className="d-flex flex-wrap gap-3">
              {tooltipItems.map(({ id, label, placement, color }) => (
                <OverlayTrigger
                  key={id}
                  placement={placement}
                  overlay={<Tooltip id={id}>Custom tooltip</Tooltip>}
                >
                  <Button variant={color} type="button">
                    {label}
                  </Button>
                </OverlayTrigger>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>HTML Tooltip</h5>
            </Card.Header>
            <Card.Body>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-html">
                    <em>Tooltip</em> <u>with</u> <b>HTML</b>
                  </Tooltip>
                }
              >
                <Button variant="warning" type="button">
                  Tooltip with HTML
                </Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Colors Tooltips</h5>
            </Card.Header>
            <Card.Body className="d-flex flex-wrap gap-2">
              {colorTooltips.map(
                ({ id, label, color, tooltipColor, textColor }) => (
                  <OverlayTrigger
                    key={id}
                    placement="top"
                    overlay={
                      <Tooltip
                        id={id}
                        style={
                          {
                            "--bs-tooltip-bg": tooltipColor,
                            "--bs-tooltip-color": textColor || "#fff",
                            "--bs-tooltip-opacity": 1,
                          } as React.CSSProperties
                        }
                      >
                        {`${label} tooltip`}
                      </Tooltip>
                    }
                  >
                    <Button variant={color}>{label}</Button>
                  </OverlayTrigger>
                )
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Custom Popovers</h5>
            </Card.Header>
            <Card.Body>
              <OverlayTrigger
                trigger="focus"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-focus">Dismissible popover</Tooltip>
                }
              >
                <Button variant="warning" type="button">
                  Dismissible popover
                </Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TooltipPopoverPage;
