import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";

import React from "react";
import { useHistory } from "../util/router";
import { useForm } from "react-hook-form";


export default function BusinessSearch(props){
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();


  const onSubmit = ({value}) => {

    history.push("/search/" + value);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="BusinessSearch">
      <Form.Row>
        <Col>
          <FormField
            size={"25"}
            name="value"
            type="text"
            placeholder="Search by suburb"
            error={errors.email}
            inputRef={register({
              required: "Please enter a suburb",
            })}
          />
        </Col>
        <Col xs="auto">
          <Button
            variant={props.buttonColor}
            size={props.size}
            type="submit"
          >
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

