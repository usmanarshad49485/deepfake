import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { addMessage } from "../../store/actions/messageActions";

const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (name === "" || message === "" || email === "") {
      setError("All fields with * sign are mandatory.");
    } else {
      let obj = {
        name,
        email,
        message,
      };
      console.log(obj);
      // dispatch(addMessage(obj));
    }
  };

  return (
    <div class="register-photo">
      <div class="form-container">
        <div class="image-holder"></div>
        <form onSubmit={formSubmitHandler}>
          <h2 class="text-center">
            <strong>Contact Us</strong>
          </h2>

          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="Full Name*"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send Your Message Here"
              required
            />
          </div>
          <small style={{ color: "red" }}>{error}</small>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">
              Done
            </button>
          </div>
          <Link class="already" to="/">
            Back To HomePage.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
