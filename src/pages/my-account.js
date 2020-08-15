import React from "react";
import NavbarCustomer from "../components/NavbarCustomer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyAccount(props) {
  return (
    <div style={{ padding: "50px", width: "100%" }} className="MyAccount">
      <Container>
        <h1>My Account</h1>
        <NavbarCustomer />
        <div className="WelcomeCard">
          <h3>Welcome back, GovHacker!</h3>
          <p>Here's an overview of your locali account today...</p>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="Col">
            <Row>
              <label for="fname">First name</label>
              <input type="text" id="fname" name="fname"/>
            </Row>
            <Row>
              <label for="fname">Last name</label>
              <input type="text" id="fname" name="fname"/>
            </Row>

            </Col>
            <Col xs={12} lg={6} className="Col">
              asdfsdf
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default MyAccount;
