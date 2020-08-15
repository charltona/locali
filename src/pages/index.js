import React, { Fragment } from "react";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection from "./../components/FeaturesSection";
import FeaturesSectionTwo from "./../components/FeaturesSectionTwo";
import NewsletterSection from "./../components/NewsletterSection";
import FeaturesColumns from "./../components/FeaturesColumns";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <Fragment>
      <HeroSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="locali"
        subtitle="shop, play & explore"
        buttonOneText="I'm a Business"
        buttonTwoText="I'm a Resident"
        buttonOneColor="yellow"
        buttonTwoColor="purple"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOneClick={() => {
          router.push("/business-hub");
        }}
        buttonTwoClick={() => {
          router.push("/my-account");
        }}
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <FeaturesColumns
        bg="purple"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
      <FeaturesSectionTwo
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="yellow"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </Fragment>
  );
}

export default IndexPage;
