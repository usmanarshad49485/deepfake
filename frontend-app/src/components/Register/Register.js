import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
// import { signup } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const reduxError = useSelector((state) => state.auth.error);
  const loggedIn = useSelector((state) => state.auth.object !== null);

  useEffect(() => {
    setError(reduxError);
  }, [reduxError]);

  const formSubmitHandler = (e) => {
    debugger;
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("All fields with * sign are mandatory.");
    } else {
      if (password !== confirmPassword) {
        debugger;
        setError("Password and confirm Password don't match.");
      } else {
        let obj = {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          username,
        };
        // dispatch(signup(obj));
      }
    }
  };

  return (
    <div Name="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form>
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
              placeholder="First Name*"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Last Name*"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="UserName*"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password*"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="confirmpassword*"
              placeholder="Confirm Password*"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Your Purpose to Use This App?"
            />
          </div>
          <small style={{ color: "red" }}>{error}</small>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit" onClick={formSubmitHandler}>
              Sign Up
            </button>
          </div>
          <Link className="already" to="login">
            You already have an account? Login here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
