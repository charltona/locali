import React, { Fragment } from "react";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <Fragment>
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team 🦐"
        subtitle=""
      />
    </Fragment>
  );
}

export default AboutPage;
