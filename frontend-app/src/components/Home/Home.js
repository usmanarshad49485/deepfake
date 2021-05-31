const Home = (props) => (
  <div>
    <div className="photo-gallery">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">
            <br />
            Login/Register to Start
          </h2>
          <p className="text-center">
            Click on Login/Register on Top Right to Start Image Processing
          </p>
        </div>
        <div className="row photos">
          <div className="col-sm-6 col-md-4 col-lg-3 item">
            <a data-lightbox="photos" href="assets/img/1.jpg">
              <img className="img-fluid" src="assets/img/1.jpg" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 item">
            <a data-lightbox="photos" href="assets/img/5.jpg">
              <img className="img-fluid" src="assets/img/5.png" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 item">
            <a data-lightbox="photos" href="assets/img/4.jpg">
              <img className="img-fluid" src="assets/img/4.jpg" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 item">
            <a data-lightbox="photos" href="assets/img/3.jpg">
              <img className="img-fluid" src="assets/img/3.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="team-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">
            <br />
            <br />
            <br />
            <br />
            Our Team
          </h2>
          <p className="text-center">Developed with Great HardWork</p>
        </div>
        <div className="row people">
          <div className="col-md-6 col-lg-4 col-xl-4 item">
            <div className="box">
              <img className="rounded-circle" src="assets/img/usman.png" />
              <h3 className="name">USMAN ARSHAD</h3>
              <p className="title">Developer</p>
              <p className="description">
                BS.Hons SOFTWARE ENGINEERING (University of Gujrat)
              </p>
              <div className="social">
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <img className="rounded-circle" src="assets/img/junaid.jpeg" />
              <h3 className="name">
                <br />
                <br />
                JUNAID KHAN
              </h3>
              <p className="title">Requirements Engineer</p>
              <p className="description">
                <br />
                BS.Hons SOFTWARE ENGINEERING (University of Gujrat)
                <br />
                <br />
              </p>
              <div className="social">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <img className="rounded-circle" src="assets/img/2.jpg" />
              <h3 className="name">
                <br />
                FATIMA TAHIR
              </h3>
              <p className="title">Designer</p>
              <p className="description">
                <br />
                BS.Hons SOFTWARE ENGINEERING (University of Gujrat)
                <br />
                <br />
              </p>
              <div className="social">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
