import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { logout, loadUser, deleteAccount } from "../../actions/auth";
import Spinner from "../layout/Spinner";
const Dashboard = ({ user, loading, logout, loadUser, deleteAccount }) => {
  useEffect(() => {
    loadUser();
  }, []);
  const logoutAccount = () => {
    logout();
  };
  const delAccount = () => {
    deleteAccount();
  };

  return (
    <Fragment>
      {user === null || loading === true ? (
        <Spinner />
      ) : (
        <div className="dashboard">
          <h2 className="heading">
            Hello {user.login}! Here is your purchase history!
          </h2>
          <div className="buttons">
            <button className="btn btn-logout" onClick={logoutAccount}>
              Logout
            </button>
            <button className="btn btn-delete-account" onClick={delAccount}>
              Delete Account
            </button>
          </div>
          {user.history.length > 0 ? (
            <ul className="history-list">
              {user.history.map((p) => (
                <li key={`${p.data}-history`} className="history-list-item">
                  <div className="image">
                    <img
                      className="image-photo"
                      src={`./imgs/${p.id}.png`}
                      alt="phone"
                    />
                  </div>
                  <div className="info">
                    <div className="name">
                      <h3>{p.shortName}</h3>
                    </div>

                    <div className="price">{p.price}$</div>
                    <div className="date">
                      Bought date:
                      <br />
                      {p.data}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty">Your history is empty!</div>
          )}
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { logout, loadUser, deleteAccount })(
  Dashboard
);
