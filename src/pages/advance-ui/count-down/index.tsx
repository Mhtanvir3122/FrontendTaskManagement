import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const CountDownPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("December 31, 2025 23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(timerId);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const timerId = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(timerId);
  }, []);

  const countdownSections = [
    {
      title: "With Seconds",
      desc: "You can add only seconds countdown using",
      className: "countdown-seconds",
      labelClass: "text-danger",
      label: "countdown-seconds",
      layout: (
        <ul className="timer">
          <li className="seconds fw-bold">{timeLeft.seconds}</li>
          <li className="timer-countdown">seconds</li>
        </ul>
      ),
      colSize: "md",
    },
    {
      title: "With minutes",
      desc: "You can add minutes countdown style using",
      className: "app-countdown-min",
      labelClass: "text-danger",
      label: "app-countdown-min",
      layout: (
        <ul className="timer">
          <li className="countdown">
            <span className="minutes time-value fw-bold">
              {timeLeft.minutes}
            </span>
            <span className="timer-countdown f-s-14 f-w-400">Minutes</span>
          </li>
          <li className="app-line">:</li>
          <li className="countdown">
            <span className="seconds fw-bold">{timeLeft.seconds}</span>
            <span className="timer-countdown f-s-14 f-w-400">Seconds</span>
          </li>
        </ul>
      ),
      colSize: "md",
    },
    {
      title: "With Hours",
      desc: "You can add hours countdown using",
      className: "app-countdown-hours",
      labelClass: "text-danger",
      label: "app-countdown-hours",
      layout: (
        <ul className="timer">
          <li className="app-countdown countdown-border">
            <span className="Hours f-s-20 fw-bold">{timeLeft.hours}</span>
            <span className="timer-countdown">Hours</span>
          </li>
          <li className="app-countdown">
            <span className="minutes f-s-20 fw-bold">{timeLeft.minutes}</span>
            <span className="timer-countdown">Minutes</span>
          </li>
          <li className="app-countdown countdown-border-1">
            <span className="seconds f-s-20 fw-bold">{timeLeft.seconds}</span>
            <span className="timer-countdown">Seconds</span>
          </li>
        </ul>
      ),
      colSize: "xl",
    },
    {
      title: "Countdown Styles",
      desc: "You can add countdown using",
      className: "app-countdown-background",
      labelClass: "text-danger",
      label: "app-countdown-background",
      layout: (
        <ul className="timer">
          <li className="countdown">
            <h6 className="days mb-0 f-s-20 fw-bold">{timeLeft.days}</h6>
            <p className="timer-countdown">Days</p>
          </li>
          <li className="countdown">
            <h6 className="hours mb-0 f-s-20 fw-bold">{timeLeft.hours}</h6>
            <p className="timer-countdown">Hours</p>
          </li>
          <li className="countdown">
            <h6 className="minutes mb-0 f-s-20 fw-bold">{timeLeft.minutes}</h6>
            <p className="timer-countdown">Min</p>
          </li>
          <li className="countdown">
            <h6 className="seconds mb-0 f-s-20 fw-bold">{timeLeft.seconds}</h6>
            <p className="timer-countdown">Sec</p>
          </li>
        </ul>
      ),
      colSize: "lg",
    },
    {
      title: "Countdown Styles",
      desc: "You can add countdown using",
      className: "app-countdown-circle",
      labelClass: "text-danger",
      label: "app-countdown-circle",
      layout: (
        <ul className="timer">
          <li className="countdown">
            <span className="days fw-medium f-s-20 bg-light-primary">
              {timeLeft.days}
            </span>
            <span className="timer-countdown bg-primary">Day</span>
          </li>
          <li className="countdown">
            <span className="hours fw-medium f-s-20 bg-light-secondary">
              {timeLeft.hours}
            </span>
            <span className="timer-countdown bg-secondary">Hour</span>
          </li>
          <li className="countdown">
            <span className="minutes fw-medium f-s-20 bg-light-success">
              {timeLeft.minutes}
            </span>
            <span className="timer-countdown bg-success">Minutes</span>
          </li>
          <li className="countdown">
            <span className="seconds fw-medium f-s-20 bg-light-info">
              {timeLeft.seconds}
            </span>
            <span className="timer-countdown bg-info">Seconds</span>
          </li>
        </ul>
      ),
      colSize: "xl",
    },
    {
      title: "Background Countdown",
      desc: "You can add countdown with background using",
      className: "app-countdown-square",
      labelClass: "text-danger",
      label: "app-countdown-square",
      layout: (
        <ul className="timer">
          <li className="countdown">
            <span className="days f-s-20 fw-bold">{timeLeft.days}</span>
            <span className="day">Day</span>
          </li>
          <li className="countdown">
            <span className="hours f-s-20 fw-bold">{timeLeft.hours}</span>
            <span className="hour">Hour</span>
          </li>
          <li className="countdown">
            <span className="minutes f-s-20 fw-bold">{timeLeft.minutes}</span>
            <span className="min">Min</span>
          </li>
          <li className="countdown">
            <span className="seconds f-s-20 fw-bold">{timeLeft.seconds}</span>
            <span className="sec">Sec</span>
          </li>
        </ul>
      ),
      colSize: "lg",
      center: true,
    },
  ];

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="count-down"
        title="Advance Ui"
        path={["count-down"]}
        Icon={BriefcaseMetal}
      />

      <Row>
        {countdownSections.map((section, idx) => (
          <Col key={idx} {...{ [section.colSize]: 6 }}>
            <Card className="mb-4 equal-card">
              <Card.Header>
                <h5>{section.title}</h5>
                <p>
                  {section.desc}{" "}
                  <span className={section.labelClass}>{section.label}</span>{" "}
                  class.
                </p>
              </Card.Header>
              <Card.Body
                className={
                  section.center ? "d-flex justify-content-center" : ""
                }
              >
                <div className={section.className}>{section.layout}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CountDownPage;
