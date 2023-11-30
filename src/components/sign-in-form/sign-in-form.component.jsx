import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {};

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            id: "email",
            name: "email",
            value: email,
          }}
          onChange={changeHandler}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            id: "password",
            name: "password",
            value: password,
          }}
          onChange={changeHandler}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>

          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SingInForm;
