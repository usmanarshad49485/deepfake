import React from "react";

import "./index.css";

const Register = (props) => {
  return (
    <div Name="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
          <h2 className="text-center">
            <strong>Registration</strong>
          </h2>
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="FName"
              name="FName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="LName"
              name="LName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="UserName"
              name="UserName"
              placeholder="UserName"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="Password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="Purpose"
              name="Purpose"
              placeholder="Your Purpose to Use This App?"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </div>
          <a className="already" href="login.html">
            You already have an account? Login here.
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
