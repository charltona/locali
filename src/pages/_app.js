import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import BusinessHub from "./business-hub";
import FaqPage from "./faq";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import MyAccount from "./my-account";
import SettingsPage from "./settings";
import AuthPage from "./auth";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
import CustomerHub from "./customer-hub";
import Location from "./location";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/my-account" component={MyAccount} />

            <Route exact path="/business-hub" component={BusinessHub} />

            <Route exact path="/search/:name" component={CustomerHub} />

            <Route exact path="/location/:id" component={Location} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="yellow"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description=""
            copyright="© 2020 locali"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
