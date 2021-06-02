import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { changePassword } from "../../store/actions/authActions";
import "./index.css";

const ChangePassword = (props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const success = useSelector((state) => state.auth.success);


  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password === "" || confirmPassword === "") {
      setError("All fields with * sign are mandatory.");
    } else {
      if (password !== confirmPassword) {
        debugger;
        setError("Password and confirm Password don't match.");
      } else {
        dispatch(changePassword(password));
      }
    }
  };

  return (
    <div class="register-photo">
    {success && <Redirect to="/" />}
      <div class="form-container">
        <div class="image-holder"></div>
        <form onSubmit={formSubmitHandler}>
          <h2 class="text-center">
            <strong>Change Your Password</strong>
          </h2>
          {/* <div class="form-group">
          <input
            class="form-control"
            type="text"
            id="UserName"
            name="UserName"
            placeholder="UserName"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            id="CurrentPassword"
            name="CurrentPassword"
            placeholder="Current Password"
            required
          />
        </div>
         */}
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password*"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              required
            />
          </div>
          <small style={{ color: "red" }}>{error}</small>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">
              Change
            </button>
          </div>
          <Link class="already" to="/login">
            Back to Login Page
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
