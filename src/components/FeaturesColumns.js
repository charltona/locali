import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import barista from "../assets/business-barista.png";
import phone from "../assets/blobaustralia.png";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function FeaturesColumns(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="FeatureColumns">
        <Row className="align-items-center">
            <Col xs={12} md={6} className="Col">
                <img src={barista} />
                <h3><span>locali</span> for Businesses</h3>
                <ul>
                  <li>Promote your business to locals</li>
                  <li>Data tracking allows you gain insights into your customer base</li>
                  <li>Protect your business, your customers & their data</li>
                  <li>One touch check-in - no need to maintain lists or spreadsheets</li>
                  <li>100% free to sign up</li>
                </ul>
                <LinkContainer to="/business-hub"><Button>View demo</Button></LinkContainer>
            </Col>
            <Col xs={12} md={6} className="Col">
                <img src={phone} />
                <h3><span>locali</span> for Residents</h3>
                <ul>
                    <li>One touch check-in - no more forms!</li>
                    <li>Support local businesses</li>
                    <li>Uncover hidden gems & earn badges</li>
                    <li>Stay safe during COVID</li>
                    <li>Safe & secure - business don't see your data</li>
                </ul>
                <LinkContainer to="/search/new%20farm"><Button>View demo</Button></LinkContainer>
            </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesColumns;
