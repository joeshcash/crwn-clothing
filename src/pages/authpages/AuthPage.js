import React from "react";

import "./AuthPage.styles.scss";

import SignIn from "../../components/SignIn/SignIn";

const AuthPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default AuthPage;
