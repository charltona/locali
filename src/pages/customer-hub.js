import React from "react";
import properties from "../data/locali_master_data.json";
import _ from "lodash";

function CustomerHub(props) {
  let results = [];

  if (props.match.params.name) {
    results = _.filter(properties, function(a) {
      return a.suburb.toLowerCase().indexOf((props.match.params.name).toLowerCase()) !== -1;
    });
  }

  console.log(props);
  return (<>
    <div style={{ padding: "50px", width: "100%", textAlign: "center" }}>
      Customer Hub
    </div>

      {
        results.map(result => {
          return <h2>{result.name} - {result.locationType}</h2>
        })
      }

    {console.log(_.filter(properties, function(a) {
      return a.suburb.toLowerCase().indexOf((props.match.params.name).toLowerCase()) !== -1;
    }))};
    </>
  );
}

export default CustomerHub;
