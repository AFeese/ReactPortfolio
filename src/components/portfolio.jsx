import React from 'react';
import RedPlanet from "../img/rpv.png";
import FuelUp from "../img/fuelup.jpg";
import TemplateEng from "../img/templateENG.png";
import NoteTaker from "../img/notetaker.png";
import ReadMe from "../img/cliReadme.png";
import Scheduler from "../img/wdsched.jpg";

import Project from "./project"


// This is where I know that I need to make a Portfolio component itself and render multiple instances.
// I only rendered one single return here instead of 6 but I am still getting familiar with it :(

const URLs = {
  redPlanetLive: "https://team-5-project-2.herokuapp.com/",
  redPlanetCode: "https://github.com/AFeese/RedPlanetVoyagers"
}

class Portfolio extends React.Component {
 
  render() {
    return (

      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
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
          </div>
          <div className="row">
            <Project image={RedPlanet} 
                     liveUrl={URLs.redPlanetLive} 
                     codeUrl={URLs.redPlanetCode}
                     title="Red Planet Voyagers - A Mars Pre-Travel Hub"
                     technologies="HTML5, CSS3, Bootstrap, MySQL, NASA APIs, Charts.js"
                     hasWebsite={true}
                    />

            <Project image=
            <div className="col-md-4">
              <div className="work-box">
                <a href={FuelUp} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={FuelUp} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">FuelUp! Fuel and Charging Station Locator</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML5, CSS3, Bootstrap, MySQL, NASA APIs, Charts.js</span>
                          <div>
                            <span className="w-ctegory">
                              <a href="https://team6diamondplatipi.github.io/TechnicallyAMammal/" target="_blank">Live Site |</a>
                              <a href="https://github.com/Team6DiamondPlatipi/TechnicallyAMammal" target="_blank"> View Code </a>
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
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={TemplateEng} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={TemplateEng} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Team Template Engine - CLI</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML5, CSS3, Bootstrap, MySQL, NASA APIs, Charts.js</span>
                          <div>
                            <span className="w-ctegory">
                              <a href="https://github.com/AFeese/EmployeeTemplateEngine" target="_blank"> View Code in Your Terminal</a>
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
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={NoteTaker} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={NoteTaker} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">EXPRESS Note Taker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML5, CSS3, Bootstrap, MySQL, NASA APIs, Charts.js</span>
                          <div>
                            <span className="w-ctegory">
                              <a href="https://afeese-note-taker.herokuapp.com/" target="_blank">Live Site |</a>
                              <a href="https://github.com/AFeese/NoteTaker" target="_blank"> View Code </a>
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
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={ReadMe} data-lightbox="gallery-amtbw">
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
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={Scheduler} data-lightbox="gallery-mf">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;