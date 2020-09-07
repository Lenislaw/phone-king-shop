import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { clearFilter } from "../../actions/cart";
import { login } from "../../actions/auth";
import Alert from "./Alert";
import Spinner from "./Spinner";

const Login = ({ setAlert, clearFilter, login, isAuthenticated, loading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    clearFilter();
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="container-box-login">
        <h1 className="heading main-color-text">Login</h1>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            placeholder="&#xf007;   Email"
            onChange={onChange}
            pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
            required
          />
          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            placeholder="&#xf084;   Password"
            onChange={onChange}
            required
          />
          <input type="submit" value="Login" className="form-input-login" />
        </form>
        {loading ? <Spinner /> : <Alert />}

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
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { setAlert, clearFilter, login })(
  Login
);
