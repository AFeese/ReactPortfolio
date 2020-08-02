import React from 'react';
import Project from "./project";

//Image for parallax div
import imageOverlay from "../img/circuit.jpg";


import RedPlanet from "../img/rpv.png";
import FuelUp from "../img/fuelup.jpg";
import TemplateEng from "../img/templateENG.png";
import NoteTaker from "../img/notetaker.png";
import ReadMe from "../img/cliReadme.png";
import Scheduler from "../img/wdsched.jpg";


const URLs = {
  redPlanetLive: "https://team-5-project-2.herokuapp.com/",
  redPlanetCode: "https://github.com/AFeese/RedPlanetVoyagers",

  fuelUpLive: "https://team6diamondplatipi.github.io/TechnicallyAMammal/",
  fuelUpCode: "https://github.com/Team6DiamondPlatipi/TechnicallyAMammal",

  templateEngCode: "https://github.com/AFeese/EmployeeTemplateEngine",

  noteTakerLive: "https://afeese-note-taker.herokuapp.com/",
  noteTakerCode: "https://github.com/AFeese/NoteTaker"
}

class Portfolio extends React.Component {

  render() {
    return (
      <>
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright">2020 &copy; Copyright <strong>Ashley Feese</strong> - Powered by Heroku</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">

            {/* Top title box */}
            {/* <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                      </h3>
                    <p className="subtitle-a">
                    </p>
                    <div className="line-mf"></div>
                </div>
              </div>
            </div> */}
            {/* End top title box */}

            {/* Start projects section */}
            <div className="row">

              <Project image={RedPlanet}
                liveUrl={URLs.redPlanetLive}
                codeUrl={URLs.redPlanetCode}
                title="Red Planet Voyagers - A Mars Pre-Travel Hub"
                technologies="HTML5, CSS, Bootstrap, MySQL, NASA APIs, Charts.js"
                hasWebsite={true}
              />
              <Project image={FuelUp}
                liveUrl={URLs.fuelUpLive}
                codeUrl={URLs.fuelUpCode}
                title="FuelUp! - Charger and Fuel Station Locator"
                technologies="HTML5, CSS, JavaScript, Bootstrap, Node, MaterializeCSS, Google Maps API, Openchargemap.io"
                hasWebsite={true}
              />
              <Project image={TemplateEng}
                codeUrl={URLs.templateEngCode}
                title="Employee Template Engine - Using CLI"
                technologies="HTML5, CSS, JavaScript, Bootstrap, Node, MaterializeCSS, Google Maps API, Openchargemap.io"
                hasWebsite={false}
              />
              <Project image={NoteTaker}
              liveUrl={URLs.noteTakerLive}
              codeUrl={URLs.noteTakerCode}
              title="EXPRESS Note Taker"
              technologies="HTML5, CSS, EXPRESS, Node.js, API Routing, JavaScript"
              hasWebsite={true}
              />

              <div className="col-md-4">
                <div className="work-box">
                  {/* <a href={ReadMe} data-lightbox="gallery-amtbw"> */}
                  <div>
                    <div className="work-img">
                      <img src={ReadMe} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">README Generator - CLI</h2>
                          <div className="w-more">
                            <span className="w-ctegory">HTML5, CSS3, Bootstrap, MySQL, NASA APIs, Charts.js</span>
                            <div>
                              <span className="w-ctegory">
                                <a href="https://github.com/AFeese/READMEgenerator" target="_blank"> View Code in Your CLI</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  {/* <a href={Scheduler} data-lightbox="gallery-mf"> */}
                  <div>
                    <div className="work-img">
                      <img src={Scheduler} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Workday Scheduler</h2>
                          <div className="w-more">
                            <span className="w-ctegory">HTML5, CSS3, Bootstrap, MySQL, NASA APIs, Charts.js</span>
                            <div>
                              <span className="w-ctegory">
                                <a href="https://afeese.github.io/Day-Planner/" target="_blank">Live Site |</a>
                                <a href="https://github.com/AFeese/Day-Planner" target="_blank"> View Code </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;