import React, { useEffect } from "react";
import PageLoader from "./PageLoader";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";
import { redirectToBilling } from "./../util/stripe.js";

function SettingsBilling(props) {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (auth.user.planIsActive) {
      // If user has an active plan then
      // take them to Stripe billing
      redirectToBilling();
    } else {
      // Otherwise go to pricing so they can
      // purchase a plan
      router.push("/pricing");
    }
  }, [auth.user.planId]);

  return (
    <PageLoader
      style={{
        height: "50px",
      }}
    />
  );
}

export default SettingsBilling;
