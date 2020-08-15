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

function BusinessSingleView(props) {
  let result = props.result;

  const [checkedIn, setCheckedIn] = React.useState(false);
  const [showA, toggleShowA] = React.useState(false);
  const [showB, toggleShowB] = React.useState(false);

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
          <Col>
            <h1 style={{display:"inline-block", verticalAlign: "middle", marginRight: "20px"}}>{result.name}</h1> {checkedIn ? <Button  variant="secondary" onClick={() => {setCheckedIn(false); toggleShowB(true); toggleShowA(false)}}>Check-out</Button>:<Button onClick={() => {setCheckedIn(true);toggleShowA(true)}}>Check-in</Button>}

            <div>
              {result.address}<br/>
              {result.suburb}<br/>
              {result.description}<br/>
              {result.locationType === "business" && <p><strong>COVIDSafe Procedures:</strong> {result.type === "Cafes" && covidSafeOptions.cafe.join(", ")} {result.type !== "Cafes" && covidSafeOptions.other.join(", ")}</p>}

            </div>
          </Col>
          <Col>


          </Col>

          <Toast show={showA} onClose={() => toggleShowA(false)} style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}>
            <Toast.Header>
              <strong className="mr-auto">Thanks!</strong>

            </Toast.Header>
            <Toast.Body>You've securely checked in to {result.name}<br/>
            Remember to checkout to earn your badge!</Toast.Body>
          </Toast>
          <Toast show={showB} onClose={() => toggleShowB(false)} style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}>
            <Toast.Header>
              <strong className="mr-auto">See you again soon!</strong>

            </Toast.Header>
            <Toast.Body>You've securely checked out of {result.name} and <br/>
              earned your first badge! 🌟</Toast.Body>
          </Toast>
        </Row>
      </Container>
    </Section>
  );
}

export default BusinessSingleView;
