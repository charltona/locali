import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "./../util/auth.js";
import { useForm } from "react-hook-form";
import { useRouter } from "./../util/router.js";

function AuthForm(props) {
  const auth = useAuth();
  const router = useRouter();

  const [pending, setPending] = useState(false);
  const { handleSubmit } = useForm();

  // Handle form submission
  const onSubmit = () => {
    // Show pending indicator
    setPending(true);
    router.push("/my-account");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Button
        variant="yellow"
        block={true}
        size={props.inputSize}
        type="submit"
        disabled={pending}
      >
        {!pending && <span>Sign in</span>}

        {pending && (
          <Spinner
            animation="border"
            size="sm"
            role="status"
            aria-hidden={true}
            className="align-baseline"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Button>
    </Form>
  );
}

export default AuthForm;
