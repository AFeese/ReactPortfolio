import React from "react";
import Project from "./project";
import ProjectImg from "./projects_img";

//Images for parallax divs
import TriangleImg from "../img/projectsLrg.png";
// import imageOverlay from "../img/circuit.jpg";
import imageOverlay from "../img/triangle1.jpg";

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
  noteTakerCode: "https://github.com/AFeese/NoteTaker",

  readMeCode: "https://github.com/AFeese/README_Generator",

  schedulerLive: "https://afeese.github.io/Day-Planner/",
  schedulerCode: "https://github.com/AFeese/Day-Planner",
};

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
          <div className="container">
            <div className="row centering">
              <ProjectImg image={TriangleImg} />
            </div>
          </div>
        </section>

        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            {/* Start projects section */}
            <div className="row">
              <Project
                image={RedPlanet}
                liveUrl={URLs.redPlanetLive}
                codeUrl={URLs.redPlanetCode}
                title="Red Planet Voyagers - A Mars Pre-Travel Hub Ahead of the Space Race"
                technologies="HTML5, CSS, Bootstrap, MySQL, NASA APIs, Charts.js"
                hasWebsite={true}
              />
              <Project
                image={FuelUp}
                liveUrl={URLs.fuelUpLive}
                codeUrl={URLs.fuelUpCode}
                title="FuelUp! - Charger and Fuel Station Locator"
                technologies="HTML5, CSS, JavaScript, Bootstrap, Node, MaterializeCSS, Google Maps API, Openchargemap.io"
                hasWebsite={true}
              />
              <Project
                image={TemplateEng}
                codeUrl={URLs.templateEngCode}
                title="Employee Template Engine - Using CLI"
                technologies="HTML5, CSS, JavaScript, Bootstrap, Inquirer, Command Line Interface"
                hasWebsite={false}
              />
              <Project
                image={NoteTaker}
                liveUrl={URLs.noteTakerLive}
                codeUrl={URLs.noteTakerCode}
                title="EXPRESS Note Taker"
                technologies="HTML5, CSS, EXPRESS, Node.js, API Routing, JavaScript"
                hasWebsite={true}
              />
              <Project
                image={ReadMe}
                codeUrl={URLs.readMeCode}
                title="README Generator"
                technologies="HTML5, CSS, JavaScript, Axios, Inquirer, Command Line Interface"
                hasWebsite={false}
              />
              <Project
                image={Scheduler}
                liveUrl={URLs.schedulerLive}
                codeUrl={URLs.schedulerCode}
                title="Work Day Scheduler"
                technologies="HTML5, CSS, JavaScript, Moment.js, jQuery, Local Storage"
                hasWebsite={true}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
