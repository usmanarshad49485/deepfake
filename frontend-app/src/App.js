import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./assets/bootstrap/css/bootstrap.min.css";
// import "./assets/js/jquery.min.js";
// import "./assets/bootstrap/js/bootstrap.min.js";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import AdminMenu from "./components/AdminMenu/AdminMenu";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Header from "./components/Navbar";
import Footer from "./components/Navbar/Footer";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import UserMenu from "./components/UserMenu/UserMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={AdminMenu} />
        <Route path="/user" component={UserMenu} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/contact" component={ContactUs} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
