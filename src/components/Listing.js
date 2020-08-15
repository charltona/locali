import React from 'react';
import "./Listing.scss";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { covidSafeOptions, generateRandomCapacity } from "../helpers/capacity";
import { Link } from "../util/router";

export default function Listing(props) {
  const result = props.result
  let prettyName = result.name.toString().replace(/\(.*\)/gi, "").toLowerCase();
  const capacity = generateRandomCapacity();
  let image;
  switch (result.locationType) {
    case "business":
      image = "/images/cafe.png"
      break;
    case "art":
    case "historic":
      image = "/images/art.png"
      break;
    case "park":
    case "playground":
      image = "/images/park.png"
      break;
    default:
      image = "/images/park.png"
  }

  return (
    <Card className="listing-card">
      <div className="card-icon">
        <img src={image} width="75px"/>
      </div>
      <Card.Body>
        <Card.Title>
          {prettyName}
        </Card.Title>
        <Card.Text>

          <div className="card-col-left">
            <p className="address">🌏 {result.address.toLowerCase()} {result.address && "-"} {result.suburb.charAt(0).toUpperCase() + result.suburb.slice(1).toLowerCase()}</p>
            <p dangerouslySetInnerHTML={{__html: result.description}}></p>
            {result.locationType === "business" && <p><strong>COVIDSafe Procedures:</strong> {result.type === "Cafes" && covidSafeOptions.cafe.join(", ")} {result.type !== "Cafes" && covidSafeOptions.other.join(", ")}</p>}
            {result.specialOffer && <p className="special-offer"><strong>Special Offers:</strong> 🎁 {result.specialOffer}</p>}
          </div>
          <div className="card-col-right">
            <Link to={"/location/" + result.id}> <Button>☑ Check In </Button></Link>
            <div className="capacity">{result.locationType === "business" && <span className={capacity > 75 && "capacity-warning"}>👨‍👩‍👧 Capacity: {capacity}% </span>}</div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}