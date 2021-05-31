const ContactUs = (props) => {
  return <div class="register-photo">
    <div class="form-container">
      <div class="image-holder"></div>
      <form method="post">
        <h2 class="text-center">
          <strong>Contact Us</strong>
        </h2>

        <div class="form-group">
          <input
            class="form-control"
            type="text"
            id="FullName"
            name="FullName"
            placeholder="Your Full Name"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            id="Email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            id="Message"
            name="Message"
            placeholder="Send Your Message Here"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">
            Done
          </button>
        </div>
        <a class="already" href="HomePage.html">
          Back To HomePage.
        </a>
      </form>
    </div>
  </div>;
};

export default ContactUs;
