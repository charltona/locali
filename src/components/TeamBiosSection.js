import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

function TeamBiosSection(props) {
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
        <TeamBios
          items={[
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Aaron Charlton",
              role: "Full Stack Developer",
              bio:
                "Fixer of things and lover of coffee, energy drinks and other things that make you a lil bit shakey when you need a buzz."
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Ivan von Christ",
              role: "UX/UI & Video Designer",
              bio:
                "Winner of the Australian Goodboy Awards 5 years running. The Picasso of After Effects. Curator of dreams and maker of memes."
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Genevieve Carter",
              role: "Front End Developer",
              bio:
                "Pro-cat overlord society. Friend of feathers. Absolute React BEAST. Full of life, laughs and love. (She'll hate me for this)."
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
