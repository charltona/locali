import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

function NavbarCustomer(props) {

  return (
    <Navbar className="NavbarCustomer">
      <Container>
          <Nav>
              <Nav.Item>
                <LinkContainer to="/my-account">
                  <Nav.Link active={false}>My Account</Nav.Link>
                </LinkContainer>
              </Nav.Item>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarCustomer;
