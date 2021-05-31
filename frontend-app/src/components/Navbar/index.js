import "./index.css";

const Header = (props) => (
  <div className="header-dark">
    <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
      <div className="container">
        <a className="navbar-brand" href="#">
          Digital Image Processing <br /> Using DeepFake Technology
        </a>
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
              <a className="nav-link" href="HomePage.html">
                HOME
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="ContactUs.html">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="form-inline mr-auto" target="_self"></form>
          <span className="navbar-text">
            <a className="login" href="Login.html">
              Log In
            </a>
          </span>
          <a
            className="btn btn-light action-button"
            role="button"
            href="Register.html"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
