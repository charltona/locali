import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import "./HeroSection2.scss";

function HeroSection2(props) {
  return (
    <Section
      className="HeroSection2"
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="hero2-section-container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        />
        <Button
          variant={props.buttonOneColor}
          size="lg"
          onClick={props.buttonOneClick}
        >
          {props.buttonOneText}
        </Button>
        <Button
          variant={props.buttonTwoColor}
          size="lg"
          onClick={props.buttonTwoClick}
        >
          {props.buttonTwoText}
        </Button>
      </Container>
    </Section>
  );
}

export default HeroSection2;
