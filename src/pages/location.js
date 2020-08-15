import React from 'react';
import properties from "../data/locali_master_data.json";
import _ from "lodash";
import Container from "react-bootstrap/Container";
import BusinessSingleView from "../components/BusinessSingleView";

export default function Location(props) {
  let result;

  if (props.match.params.id) {
    result = _.find(properties, function (a) {
      return a.id.indexOf(props.match.params.id) !== -1;
    });
  }
  else {
    result = _.find(properties, function (a) {
      return a.id.indexOf("1") !== -1;
    });
  }

  return (
    <Container>
        <BusinessSingleView result={result}/>
    </Container>
  );

}