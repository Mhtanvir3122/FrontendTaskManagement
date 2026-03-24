import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {House} from "phosphor-react";



const MaintenancePage: React.FC = () => {
    return (
        <div className="bg-light-primary maintenance py-5">
            <Container fluid>
                <div className="overlay-maintenance-card text-center">
                    <img
                        alt="Maintenance Image"
                        className="img-fluid"
                        src="/images/pages/objects.png"
                    />
                    <h1 className="text-dark fw-semibold mt-4">
                        We are <br />
                        under Maintenance
                    </h1>
                    <p className="text-secondary">
                        Someone has kidnapped our site. We are negotiating ransom and will
                        resolve this issue in 24/7 hours
                    </p>
                    <Link
                      to="/dashboard/ecommerce"
                      className="btn btn-lg btn-danger mt-3 rounded-pill d-inline-flex align-items-center justify-content-center gap-1"
                    >
                        <House size={18} weight="bold" />
                        Back To Home
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default MaintenancePage;