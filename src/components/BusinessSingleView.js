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
  console.log(props);
  let result = props.result;

  const [checkedIn, setCheckedIn] = React.useState(false);
  const [showA, toggleShowA] = React.useState(false);

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
            <h1>{result.name}</h1>
            <div>
              {result.address}<br/>
              {result.suburb}<br/>
              {result.description}<br/>
              {result.locationType === "business" && <p><strong>COVIDSafe Procedures:</strong> {result.type === "Cafes" && covidSafeOptions.cafe.join(", ")} {result.type !== "Cafes" && covidSafeOptions.other.join(", ")}</p>}

            </div>
          </Col>
          <Col>
            {checkedIn ? <Button  variant="secondary" onClick={() => setCheckedIn(false)}>Check-out</Button>:<Button onClick={() => {setCheckedIn(true);toggleShowA(true)}}>Check-in</Button>}

          </Col>

          <Toast show={showA} onClose={() => toggleShowA(false)} style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}>
            <Toast.Header>
              <strong className="mr-auto">Thanks!</strong>

            </Toast.Header>
            <Toast.Body>You've securely checked in to {result.name}</Toast.Body>
          </Toast>
        </Row>
      </Container>
    </Section>
  );
}

export default BusinessSingleView;
