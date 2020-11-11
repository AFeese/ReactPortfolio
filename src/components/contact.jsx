import React from "react";
import imageOverlay from "../img/circuit.jpg";

// Comment for testing

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        {/* CONTACT Section */}
                        <h5 className="title-left">Contact</h5>
                      </div>
                      <div>
                        <h5>
                          <a href="mailto:ashleyfeese@outlook.com">
                            <span className="ion-email"></span>
                            <strong> ashleyfeese@outlook.com</strong>
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        {/* SOCIAL section */}
                        <h5 className="title-left">Social</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Proudly affiliated with{" "}
                          <a
                            href="https://www.womenwhocode.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <strong>Women Who Code </strong>
                          </a>
                          and{" "}
                          <a
                            href="https://swe.org/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <strong>Society of Women Engineers</strong>
                          </a>
                        </p>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/AFeese"
                              target="_blank"
                              rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/ashley-feese/"
                              target="_blank"
                              rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright">
                    2020 &copy; Copyright <strong>Ashley Feese</strong> -
                    Powered by Heroku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
