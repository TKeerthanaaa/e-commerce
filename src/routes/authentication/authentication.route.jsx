import "./authentication.styles.scss";

import { SignInForm, SignUpForm } from "../../components";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
