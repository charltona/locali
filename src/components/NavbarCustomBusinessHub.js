import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

function NavbarBusinessHub(props) {

  return (
    <Navbar className="NavbarBusinessHub">
      <Container>
          <Nav>
              <Nav.Item>
                <LinkContainer to="/business-hub">
                  <Nav.Link active={false}>Business Dashboard</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/auth/signin">
                  <Nav.Link active={false}>Regulations & Tips</Nav.Link>
                </LinkContainer>
              </Nav.Item>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarBusinessHub;
