import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utiles/firebase/index.js";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      setFormFields(formFields);
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
      if (err.code === "auth/email-already-in-use") {
        alert("Email Already Exists Please use alternate Email");
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            id: "display-name",
            name: "displayName",

            value: displayName,
          }}
          onChange={changeHandler}
        />

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
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            id: "confirm-password",
            name: "confirmPassword",
            value: confirmPassword,
          }}
          onChange={changeHandler}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
