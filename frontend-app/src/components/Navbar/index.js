import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header = ({ loggedIn, isAdmin }) => (
  <div className="header-dark">
    <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Digital Image Processing <br /> Using DeepFake Technology
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              {isAdmin ? (
                <Link className="nav-link" to="/inbox">
                  Inbox
                </Link>
              ) : (
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              )}
            </li>
            <li className="nav-item" role="presentation">
              {isAdmin ? (
                <Link
                  className="nav-link"
                  onClick={() =>
                    (window.location.href = "http://localhost:8000/admin")
                  }
                >
                  User Management
                </Link>
              ) : (
                loggedIn && (
                  <Link className="nav-link" to="/user">
                    User Space
                  </Link>
                )
              )}
            </li>
          </ul>
          <form className="form-inline mr-auto" target="_self"></form>
          {loggedIn ? (
            <Fragment>
              <Link
                className="btn btn-light action-button"
                role="button"
                to="/change-password"
              >
                Change Password
              </Link>
              <Link
                className="btn btn-light action-button"
                role="button"
                to="/logout"
              >
                Logout
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <span className="navbar-text">
                <Link className="login" to="/login">
                  Log In
                </Link>
              </span>
              <Link
                className="btn btn-light action-button"
                role="button"
                to="/register"
              >
                Register
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
