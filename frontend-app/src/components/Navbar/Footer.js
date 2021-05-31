import "./index.css";

const Footer = (props) => (
  <div class="header-dark">
    <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
      <div class="container">
        ALL RIGHTS RESERVED. COPYRIGHTS @ 2021
        <button
          data-toggle="collapse"
          class="navbar-toggler"
          data-target="#navcol-1"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav"></ul>
          <form class="form-inline mr-auto" target="_self" />
        </div>
      </div>
    </nav>
  </div>
);

export default Footer;
