import { Link } from "react-router-dom";
import "./index.css";

const ChangePassword = (props) => (
  <div class="register-photo">
    <div class="form-container">
      <div class="image-holder"></div>
      <form method="post">
        <h2 class="text-center">
          <strong>Change Your Password</strong>
        </h2>
        <div class="form-group">
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
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            id="NewPassword"
            name="NewPassword"
            placeholder="New Password"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            id="ConfirmNewPassword"
            name="ConfirmNewPassword"
            placeholder="Confirm New Password"
            required
          />
        </div>

        <div class="form-group">
          <button
            class="btn btn-primary btn-block"
            type="submit"
          >
            Change
          </button>
        </div>
        <Link class="already" to="login">
          Back to Login Page
        </Link>
      </form>
    </div>
  </div>
);

export default ChangePassword;
