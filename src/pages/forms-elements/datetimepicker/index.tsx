import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const DatetimePickerPage: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [range, setRange] = useState<Date[]>([]);
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);
  const [humanDates, setHumanDates] = useState<Date | null>(null);
  const [weekNumbers, setWeekNumbers] = useState<Date | null>(null);
  const [timeWithLimits, setTimeWithLimits] = useState<Date | null>(null);
  const [hourTime, setHourTime] = useState<Date | null>(null);
  const [inlineDate, setInlineDate] = useState<Date | null>(null);

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Datetimepicker"
          title="Forms elements"
          path={["Datetimepicker"]}
          Icon={Cardholder}
        />
        <Row>
          {/* Basic Date */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Basic</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={date || []}
                    onChange={(selectedDates) => setDate(selectedDates[0])}
                    options={{ dateFormat: "Y-m-d" }}
                    placeholder="YYYY-MM-DD"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Time Picker */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Time Picker</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={time || []}
                    onChange={(selectedDates) => setTime(selectedDates[0])}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "H:i",
                    }}
                    placeholder="12:00"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Datetime Picker */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Datetime Picker</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={dateTime || []}
                    onChange={(selectedDates) => setDateTime(selectedDates[0])}
                    options={{ dateFormat: "Y-m-d" }}
                    placeholder="YYYY-MM-DD"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Range Picker */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Range Picker</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={range || []}
                    onChange={(dates) => setRange(dates)}
                    options={{ mode: "range", dateFormat: "Y-m-d" }}
                    placeholder="YYYY-MM-DD to YYYY-MM-DD"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Human-friendly Dates */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Human-friendly Dates</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={humanDates || []}
                    onChange={(date) => setHumanDates(date[0])}
                    options={{ dateFormat: "m-d-Y" }}
                    placeholder="MM-DD-YYYY"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Multiple Dates */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Multiple Dates</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={multipleDates || []}
                    onChange={(dates) => setMultipleDates(dates)}
                    options={{ mode: "multiple", dateFormat: "Y-m-d" }}
                    placeholder="YYYY-MM-DD"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Week Numbers */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Week Numbers</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={weekNumbers || []}
                    onChange={(date) => setWeekNumbers(date[0])}
                    options={{ weekNumbers: true, dateFormat: "Y-m-d" }}
                    placeholder="YYYY-MM-DD"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Time Picker with Limits */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Time Picker with Limits</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={timeWithLimits || []}
                    onChange={(dates) => setTimeWithLimits(dates[0])}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "H:i",
                      minTime: "08:00",
                      maxTime: "18:00",
                    }}
                    placeholder="08:00 to 18:00"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* 24 Hour Time Picker */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>24 Hour Time Picker</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control"
                    value={hourTime || []}
                    onChange={(dates) => setHourTime(dates[0])}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "H:i",
                    }}
                    placeholder="HH:mm"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Inline Picker */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Inline</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <Flatpickr
                    className="form-control mb-2"
                    value={inlineDate || []}
                    onChange={(date) => setInlineDate(date[0])}
                    options={{
                      inline: true,
                      dateFormat: "Y-m-d",
                    }}
                    placeholder="YYYY-MM-DD"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DatetimePickerPage;
