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
    <div style={{ padding: "50px", width: "100%" }} className="CovidSafe">
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
      </Container>
    </div>
  );
}

export default CovidSafe;
