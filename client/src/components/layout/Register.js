import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="container-box-login">
        <h1 className="heading main-color-text">Register</h1>
        <form className="form">
          <input
            className="form-input"
            type="text"
            name="login"
            placeholder="&#xf007;   Login"
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="&#xf0e0;   Email"
          />
          <input
            className="form-input"
            type="password"
            name="passwprd"
            placeholder="&#xf084;   Password"
          />
          <input
            className="form-input"
            type="password2"
            name="passwprd2"
            placeholder="&#xf084;  Confirm Password"
          />
          <input type="submit" value="Register" className="form-input-login" />
        </form>
        <div className="alert-box">
          <div className="error">Invalid credentials</div>
        </div>
        <small className="switch">
          Have already an account?
          <Link to="/login">CLICK HERE TO LOG IN!</Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
