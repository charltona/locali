import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Features from "./Features";
import meeting from "./../assets/meeting.png";

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
              title: "The ultimate staycation",
              description:
                "Iso getting you down? Grab some friends and explore your own backyard. locali's live capacity indicator shows which businesses have space and which are at capacity. Never be turned away from brunch again!",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
            },
            {
              title: "Get swept away on an adventure",
              description:
                "Paris or Milan may be off the cards, but sometimes you don't need to travel far for a great adventure. Sign up for locali today!",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
            },
            {
              title: "Stay COVID-safe",
              description:
                "When you use locali you can easily see which measures businesses have in place, from outdoor dining to extra cleaning measures.",
              image: meeting,
              buttonLink: "/covid-safe",
              buttonText: "Read more"
            }
          ]}
        />
      </Container>
    </Section>
  );
}

export default FeaturesSection;
