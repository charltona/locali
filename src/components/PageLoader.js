import React from "react";
import Section from "./Section";
import Spinner from "react-bootstrap/Spinner";

function PageLoader(props) {
  const { style, ...otherProps } = props;

  return (
    <Section
      bg="white"
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "400px",
        ...style,
      }}
      {...otherProps}
    >
      <Spinner animation="border" variant="primary" />
    </Section>
  );
}

export default PageLoader;
