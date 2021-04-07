import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Route } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      

      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>News Portal</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/business">
                <Nav.Link>Business</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sports">
                <Nav.Link>Sports</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/entertainment">
                <Nav.Link>Entertainment</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/login">
                <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
