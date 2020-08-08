import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="container-box-login">
        <h1 className="heading main-color-text">Login</h1>
        <form className="form">
          <input
            className="form-input"
            type="text"
            name="login"
            placeholder="&#xf007;   Login or Email"
          />
          <input
            className="form-input"
            type="password"
            name="passwprd"
            placeholder="&#xf084;   Password"
          />
          <input type="submit" value="Login" className="form-input-login" />
        </form>
        <div className="alert-box">
          <div className="error">Invalid credentials</div>
        </div>
        <small className="switch">
          Don't have an account? <Link to="/register">Register HERE!</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
