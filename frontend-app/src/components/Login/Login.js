import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
// import { login } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const reduxError = useSelector((state) => state.auth.error);
  const loggedIn = useSelector((state) => state.auth.object !== null);


  useEffect(() => {
    setError(reduxError);
  }, [reduxError]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("username and password are required.");
    } else {
      // dispatch(login(username, password));
      setUsername("");      
    }
    setPassword("");
  };

  return (
    <div className="login-dark">
      <form onSubmit={formSubmitHandler}>
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
            placeholder="username*"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <input
          className="form-control"
          type="password"
          id="Password"
          name="password"
          placeholder="password*"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small style={{ color: "red" }}>{error}</small>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <Link className="forgot" to="/change-password">
          Forgot your password?
        </Link>
      </form>
    </div>
  );
};

export default Login;
