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
        <Features
          items={[
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default FeaturesSection;
