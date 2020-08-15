import React from "react";
import properties from "../data/locali_master_data.json";
import _ from "lodash";
import CardDeck from "react-bootstrap/CardDeck";
import Listing from "../components/Listing"
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import BusinessSearch from "../components/BusinessSearch";

function CustomerHub(props) {
  let results = [];

  if (props.match.params.name) {
    results = _.filter(properties, function(a) {
      return a.suburb.toLowerCase().indexOf((props.match.params.name).toLowerCase()) !== -1;
    });
  }
  else {
    results = _.filter(properties, function(a) {
      return a.suburb.toLowerCase().indexOf(("Annerley").toLowerCase()) !== -1;
    });
  }

  return (<Container>
    <div style={{ padding: "50px", width: "100%", textAlign: "center" }}>
      <h1 className="logo">Customer Hub</h1>
      <p>Browse over 9,000 places to visit in your community<br/>
      Remember to check-in and check-out when you leave</p>
      <BusinessSearch />
    </div>

      {
        results.map((result, key) => {
          return <Listing result={result} key={key}/>
        })
      }

    </Container>
  );
}

export default CustomerHub;
