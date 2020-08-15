import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import "./BusinessSingleView.scss";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { covidSafeOptions } from "../helpers/capacity";
import Toast from "react-bootstrap/Toast";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

function BusinessSingleView(props) {
  let result = props.result;

  const [checkedIn, setCheckedIn] = React.useState(false);
  const [showToast, toggleToast] = React.useState(false);

  const checkedInToast = ( <><Toast.Header>
    <strong className="mr-auto">Thanks!</strong>

  </Toast.Header>
  <Toast.Body>You've securely checked in to {result.name}<br/>
    Remember to checkout to earn your badge!</Toast.Body></>)

  const checkedOutToast = (<>
    <Toast.Header>
      <strong className="mr-auto">See you again soon!</strong>

    </Toast.Header>
    <Toast.Body>You've securely checked out of {result.name} and
      earned your first badge! 🌟
      <LinkContainer to="/my-account">
        <Nav.Link active={false}>View My Account</Nav.Link>
      </LinkContainer>
    </Toast.Body>
    </>)

  return (
    <Section
      className="business-single-view"
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="business-view-section-container">
        <Row>
          <Col xs={12} sm={6}>
            <h1 style={{display:"inline-block", verticalAlign: "middle", marginRight: "20px"}}>{result.name}</h1> {checkedIn ? <Button  variant="secondary" onClick={() => {setCheckedIn(false); toggleToast(true)}}>Check-out</Button>:<Button onClick={() => {setCheckedIn(true);toggleToast(true)}}>Check-in</Button>}

            <div>
              {result.address}<br/>
              {result.suburb}<br/>
              {result.description}<br/>
              {result.locationType === "business" && <p><strong>COVIDSafe Procedures:</strong> {result.type === "Cafes" && covidSafeOptions.cafe.join(", ")} {result.type !== "Cafes" && covidSafeOptions.other.join(", ")}</p>}

            </div>
          </Col>
          <Col>


          </Col>


        </Row>
      </Container>
      <Toast show={showToast} onClose={() => {toggleToast(false); console.log('closeA');}} style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
      }}>
        {checkedIn ? checkedInToast : checkedOutToast}
      </Toast>

    </Section>
  );
}

export default BusinessSingleView;
