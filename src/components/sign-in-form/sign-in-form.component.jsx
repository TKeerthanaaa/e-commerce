import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utiles/firebase/index.js";
// import { useUser } from "../../context/user.context.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setUser } = useUser();

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    setUser(user.email, user.displayName);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("hit");
    if (email && password) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log({ user });
        setFormFields({ email: "", password: "", confirmPassword: "" });
        if (user) {
          setUser(user.email, user.displayName);

          console.log(user.email);
        }
      } catch (err) {
        // console.log("Error Occurd while Login", err.message);
        // console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
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
