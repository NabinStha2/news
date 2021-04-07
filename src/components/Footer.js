import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col xs={3} md={3}>
           <p id='footer-brand'>News Portal</p>
          </Col>
          <Col xs={1} md={6}></Col>
          <Col xs={7} md={3}>
            <Row>Email: admin@example.com</Row>
            <Row>Phone No: 98********</Row>
            <Row>Address: Bhw, Padsari-1</Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">Copyright &copy; News Portal</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
