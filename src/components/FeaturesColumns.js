import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FeaturesColumns(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
            <Col xs={12} lg={6}>
                <img src="https://via.placeholder.com/350x150" />
                <h3>For Businesses</h3>
                <ul>
                    <li>Point one</li>
                    <li>Point two</li>
                    <li>Point three</li>
                </ul>
            </Col>
            <Col xs={12} lg={6}>
                <img src="https://via.placeholder.com/350x150" />
                <h3>For Residents</h3>
                <ul>
                    <li>Point one</li>
                    <li>Point two</li>
                    <li>Point three</li>
                </ul>
            </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesColumns;
