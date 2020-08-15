import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Features
          items={[
            {
              title: "Stay safe & support local businesses",
              description:
                "Locali is the ultimate staycation. Stay COVID-safe while finding hidden gems in your area and earning badges! Register once and use Locali's secure, one touch check-in.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
            }
          ]}
        />
      </Container>
    </Section>
  );
}

export default FeaturesSection;
