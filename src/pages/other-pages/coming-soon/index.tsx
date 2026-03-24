import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadlineDate = new Date(2025, 12, 31, 23, 59, 59).getTime();

    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = deadlineDate - currentDate;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light-primary maintenance ">
      <Container fluid>
        <Row>
          <Col className="p-0">
            <div className="coming-soon">
              <div className="coundown-timmer p-5">
                <div className="content text-center">
                  <h2 className="text-dark">ki-admin Coming Soon</h2>
                  <p className="font-coming-p">
                    Our Website Under Construction, We Are Working on it, We
                    Will Ready to Lunch it After
                  </p>
                </div>
                <div className="timmer-content justify-content-center align-items-center gap-3 mt-4">
                  <div className="time">
                    <span id="days" className="numbers">
                      {timeLeft.days}
                    </span>
                    <span>Days</span>
                  </div>
                  <div className="time">
                    <span id="hours" className="numbers">
                      {timeLeft.hours}
                    </span>
                    <span>Hours</span>
                  </div>
                  <div className="time">
                    <span id="minutes" className="numbers">
                      {timeLeft.minutes}
                    </span>
                    <span>Minutes</span>
                  </div>
                  <div className="time">
                    <span id="seconds" className="numbers">
                      {timeLeft.seconds}
                    </span>
                    <span>Seconds</span>
                  </div>
                </div>

                <div className="app-form mb-3 mt-4">
                  <input
                    className="form-control form-control-lg m-auto text-center coming-soon-input"
                    id="username"
                    placeholder="Enter an Email"
                    type="email"
                  />
                </div>
                <Link
                  to="/dashboard/ecommerce"
                  className="btn btn-lg btn-primary mt-3  d-inline-flex align-items-center justify-content-center gap-1"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComingSoon;
