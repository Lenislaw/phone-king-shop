import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import Alert from "./Alert";

const Login = ({ setAlert }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    setAlert("logujesz sie", "error");
  };
  return (
    <div className="container">
      <div className="container-box-login">
        <h1 className="heading main-color-text">Login</h1>
        <form className="form" onSubmit={onSubmit}>
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
        <Alert />

        <small className="switch">
          Don't have an account? <Link to="/register">Register HERE!</Link>
        </small>
      </div>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Login);
