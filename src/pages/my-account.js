import React from "react";
import NavbarCustomer from "../components/NavbarCustomer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import explorer from "./../assets/explorer-badge.png";
import scout from "./../assets/scout-badge.png";
import pioneer from "./../assets/pioneer-badge.png";
import heritage from "./../assets/heritage-badge.png";
import staycation from "./../assets/staycation-badge.png";
import historian from "./../assets/historian-badge.png";
import curator from "./../assets/curator-badge.png";
import buzzed from "./../assets/buzzed-badge.png";
import greenthumb from "./../assets/greenthumb-badge.png";
import Lottie from "react-lottie";
import * as animationData from "./../assets/example.json";

function MyAccount(props) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [claimed, toggleClaimed] = React.useState(false);

  return (
    <div style={{ width: "100%" }} className="MyAccount PageYeet">
      <Container>
        <h1>My Account</h1>
        <NavbarCustomer />
        <div className="WelcomeCard">
          <h3>Welcome back, Jane!</h3>
          <p>Here's an overview of your locali account today...</p>
          <Button href="/search/new%20farm" className="explore">Show me what's nearby</Button>
        </div>
        <Container>
          <Row className="">
            <Col xs={12} lg={6} className="Col AccountDetails">
              <h4>My Details</h4>
              <div className="Verification">
                <h6>✔️ Your account has been verified</h6>
              </div>
              <form>
                  <label for="fname">First name</label>
                  <input type="text" id="fname" name="fname" value="Jane" disabled="disabled"/>
                  <label for="lname">Last name</label>
                  <input type="text" id="lname" name="lname" value="Doe" disabled="disabled"/>
                  <label for="address">Address</label>
                  <input type="text" id="address" name="address" value="14 Lime Street, New Farm QLD 4005" disabled="disabled"/>
                  <label for="phone">Phone number</label>
                  <input type="text" id="phone" name="phone" value="1234 1324" disabled="disabled"/>
                  <label for="phone">Subscribe me to emails and updates</label>
                  <input type="checkbox" checked></input>
                  <Button variant="yellow" className="update">Verify with greenID✅</Button>
              </form>
              <div className="Disclaimer">
                <em>We never share your personal data with businesses.</em>
              </div>
            </Col>
            <Col xs={12} lg={6} className="Col Badges">
              <h4>My Badges</h4>
              <Row>
                <Col sm={4} xs={6} className="Badge">
                  <img src={pioneer} className="grow" title="Visit 1 place"></img>
                </Col>
                <Col sm={4} xs={6} className="Badge">
                  <img src={scout} className="grow" title="Visit 5 places"></img>
                </Col>
                <Col sm={4} xs={6} className="Badge">
                  <img src={explorer} className="grow" title="Visit 10 places"></img>
                </Col>
                <Col sm={4} xs={6} className="Badge">
                  <img src={heritage} className="grow" title="Visit a place of indigenous culture"></img>
                </Col>
                <Col sm={4} xs={6} className="Badge">
                  <img src={curator} className="grow" title="Visit a place of art"></img>
                </Col>
                {claimed && <Col sm={4} xs={6} className="Badge">
                  <Lottie
                    options={defaultOptions}
                    height={144}
                    width={144}
                    isStopped={false}
                    isPaused={false}
                    title="Visit a café"
                  />
                </Col>
                }
              </Row>
              {!claimed && <div className="Unclaimed">
                <p>You have (1) unclaimed badge</p>
                <Button variant="yellow" onClick={() => toggleClaimed(true)}>Claim your badge!</Button>
              </div>}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default MyAccount;
