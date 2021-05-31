import "./index.css"

const Login = (props) => {
  return (
    <div className="login-dark">
      <form method="post">
        <h2 className="sr-only">Login Form</h2>
        <h5>Login to Continue</h5>
        <div className="illustration">
          <i className="icon ion-ios-locked-outline"></i>
        </div>
        <div className="form-group">
          <label for="Login">Login As:</label>{" "}
          <select name="LoginAs" id="LoginAs">
            <option value="Select Role">SelectRole</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>{" "}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="UserName"
            name="UserName"
            placeholder="UserName"
            required
          />
        </div>
        <input
          className="form-control"
          type="password"
          id="Password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <a className="forgot" href="ForgetPassword.html">
          Forgot your password?
        </a>
      </form>
    </div>
  );
};

export default Login;
