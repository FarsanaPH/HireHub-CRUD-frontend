import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer  className="bg-dark text-light pt-4 pb-3 ">
      <Container className="mb-3">
        <Row className="text-center text-md-start">
          <Col md={3} className="mb-3">
            <h5 className="text-primary fw-bold">YOUR JOB</h5>
            <p>Find your dream job. Post openings. Connect talent with opportunity.</p>
          </Col>
          <Col md={3} className="mb-3">
            <h6 className="text-primary">JOBS</h6>
            <p>Browse Jobs</p>
            <p>Post a Job</p>
            <p>Job Categories</p>
          </Col>
          <Col md={3} className="mb-3">
            <h6 className="text-primary">EMPLOYERS</h6>
            <p>Dashboard</p>
            <p>Pricing Plans</p>
            <p>Support</p>
          </Col>
          <Col md={3} className="mb-3">
            <h6 className="text-primary">CANDIDATES</h6>
            <p>My Profile</p>
            <p>Saved Jobs</p>
            <p>Applied Jobs</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} HireHub. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
