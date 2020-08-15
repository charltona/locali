import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import takeaway from "./../assets/takeaway.png";
import sanitiser from "./../assets/sanitiser.png";
import masks from "./../assets/masks.png";
import outdoor from "./../assets/outdoor.png";
import distancing from "./../assets/distancing.png";
import cleaning from "./../assets/cleaning.png";

function CovidSafe(props) {

  return (
    <div style={{ width: "100%" }} className="CovidSafe PageYeet">
      <Container>
        <h1>COVID Safe Practices</h1>
        <p>Businesses registered with locali undertake precautions to keep our local communities safe. Learn more about the practices locali endorses...</p>
        <Row>
          <Col xs={12} lg={4} className="Col">
            <div className="img-container">
              <img src={takeaway} />
            </div>
            <p>Businesses should offer takeaway options in an environmentally friendly way, if feasible, to help keep communities safe</p>
          </Col>
          <Col xs={12} lg={4} className="Col">
            <div className="img-container">
              <img src={distancing} />
            </div>
            <p>The 1.5 metre rule must be adhered to at all times. Business must put measures in place to allow this, such as capacity limits</p>
          </Col>
          <Col xs={12} lg={4} className="Col">
            <div className="img-container">
              <img src={outdoor} />
            </div>
            <p>Outdoor dining should be offered, if possible, to reduce the risk of contracting COVID-19</p>
          </Col>
          <Col xs={12} lg={4} className="Col">
            <div className="img-container">
              <img src={sanitiser} />
            </div>
            <p>Hand sanitiser should be offered free of charge to keep employee and customers happy and healthy</p>
          </Col>
          <Col xs={12} lg={4} className="Col">
            <div className="img-container">
              <img src={masks} />
            </div>
            <p>Businesses should support employees and customers who choose to wear a mask. Businesses may require customers to wear masks</p>
          </Col>
          <Col xs={12} lg={4} className="Col">
            <div className="img-container">
              <img src={cleaning} />
            </div>
            <p>Additional care should be taken during the cleaning of the premises of each business to reduce the risk of illness</p>
          </Col>
        </Row>
          <h2>Tips for Businesses</h2>
          <p>COVID has had a huge impact on local businesses. Small businesses are a major employer in the private sector within Australia.</p>
          <p>Here are some helpful tips that will give your small business a boost during times of lockdowns, isolation and social distancing.</p>
          <ul>
            <li>Sign up for locali! Customers sign up once and are fully verified using green ID</li>
            <li>Set your capacity limit using your locali dashboard</li>
            <li>Display a locali sticker on the door or window of your business</li>
            <li>Considering adding discounts or specials when users check in using locali</li>
            <li>Set any additional measures you're taking using the COVID-safe measures in your locali dashboard</li>
            <li>Educate your staff about government regulations and requirements (see the below section for more info)</li>
            <li>Be accepting of customer's choices if they choose to wear a mask inside your premises</li>
          </ul>
          <p>The above tips will help assist you in operating in COVID-safe way!</p>
          <h2>Resources for Businesses</h2>
          <ul className="resources">
            <li><a href="https://business.gov.au/Risk-management/Emergency-management/Coronavirus-information-and-support-for-business" target="_blank">Coronavirus information and support for business</a></li>
            <li><a href="https://www.safeworkaustralia.gov.au/collection/covid-19-resource-kit" target="_blank">COVID-19 Resource Kit - Safe Work Australia</a></li>
            <li><a href="https://www.ato.gov.au/general/covid-19/support-for-businesses-and-employers/" target="_blank">Support for businesses and employers</a></li>
            <li><a href="https://www.ato.gov.au/General/JobKeeper-Payment/Employers/" target="_blank">JobKeeper Information for Employers</a></li>
            <li><a href="https://www.ato.gov.au/General/JobKeeper-Payment/In-detail/Employers--frequently-asked-JobKeeper-questions/" target="_blank">JobKeeper FAQS</a></li>
            </ul>
        </Container>
    </div>
  );
}

export default CovidSafe;
