import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import Alert from "../../components/layout/Alert";

const Register = ({ register, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    password2: "",
  });
  const { password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    password !== password2
      ? setAlert("Passwords are different!", "error")
      : register(formData);
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="container">
      <div className="container-box-login">
        <h1 className="heading main-color-text">Register</h1>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="form-input"
            type="text"
            name="login"
            placeholder="&#xf007;   Login"
            onChange={onChange}
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="&#xf0e0;   Email"
            onChange={onChange}
          />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="&#xf084;   Password"
            onChange={onChange}
          />
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="&#xf084;  Confirm Password"
            onChange={onChange}
          />
          <input type="submit" value="Register" className="form-input-login" />
        </form>
        <Alert />
        <small className="switch">
          Have already an account?
          <Link to="/login">CLICK HERE TO LOG IN!</Link>
        </small>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, setAlert })(Register);
