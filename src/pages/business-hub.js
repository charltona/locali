import React from "react";
import NavbarBusinessHub from "./../components/NavbarCustomBusinessHub";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chart from "../assets/chart.svg";
import Button from "react-bootstrap/Button";

function BusinessHub(props) {
  return (
    <div style={{ padding: "50px", width: "100%" }} className="BusinessHub">
      <Container>
        <h1>Business Dashboard</h1>
        <NavbarBusinessHub />
        <div className="WelcomeCard">
          <h3>Welcome back, Test Cafe!</h3>
          <p>Your locali data insights are below...</p>
          <Container className="Data">
            <Row className="align-items-center">
              <Col xs={12} lg={4} className="Col">
                <img className="bounce" src="https://via.placeholder.com/140x100" />
                <h3>156</h3>
                <p>check-ins</p>
              </Col>
              <Col xs={12} lg={4} className="Col">
                <img className="grow" src="https://via.placeholder.com/140x100" />
                <h3>12/50</h3>
                <p>current capacity</p>
              </Col>
              <Col xs={12} lg={4} className="Col">
                <img className="gelatine" src="https://via.placeholder.com/140x100" />
                <h3>22 mins</h3>
                <p>average time in store</p>
              </Col>
            </Row>
          </Container>
          <Container className="Graph">
            <Row>
              <Col>
                <img src={chart} />
                <h3>Today's check-ins</h3>
                <table>
                  <tr>
                    <th>Check-in time</th>
                    <th>Check-out time</th>
                    <th>Time in store</th>
                  </tr>
                  <tr>
                    <td>7:00am</td>
                    <td>7:30am</td>
                    <td>30 minutes</td>
                  </tr>
                  <tr>
                    <td>7:02am</td>
                    <td>7:40am</td>
                    <td>38 minutes</td>
                  </tr>
                  <tr>
                    <td>7:09am</td>
                    <td>7:30am</td>
                    <td>21 minutes</td>
                  </tr>
                  <tr>
                    <td>7:10am</td>
                    <td>7:40am</td>
                    <td>30 minutes</td>
                  </tr>
                  <tr>
                    <td>7:17am</td>
                    <td>7:37am</td>
                    <td>30 minutes</td>
                  </tr>
                </table>
                <Button variant="yellow">See more analytics...</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default BusinessHub;
