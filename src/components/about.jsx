import React from 'react';
import myImage from "../img/myImage.png";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: [
                { id: "HTML5_skill", content: "HTML5", percentage: "90%", value: "90" },
                { id: "CSS_skill", content: "CSS", percentage: "90%", value: "90" },
                { id: "JavaScript_skill", content: "JavaScript", percentage: "90%", value: "90" },
                { id: "ReactJS_skill", content: "ReactJS", percentage: "60%", value: "80" },
                { id: "Backend_server_skill", content: "Backend | Server", percentage: "75%", value: "75" },
                { id: "Digital_logo_design_skill", content: "Digital Logo Design", percentage: "95%", value: "95" },
                // {id:"VanillaJS_skill", content: "VanillaJS",percentage: "85%", value: "85"},
                // {id:"Wordpress_skill", content: "Wordpress",percentage: "80%", value: "80"}
            ],
            about_me: [
                { id: "first-p-about", content: "A former hospitality enthusiast turned ardent and creative developer - " },
                { id: "second-p-about", content: "Motivated by intellectual curiosity, developing software, team collaboration, solving challenges, and now has a new-found love for programming and design." },
                { id: "third-p-about", content: "How can I help you and your team?" }
            ]
        }
    }

    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route aboutContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            {/* <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }}>
                                                <div className="about-img" style={{ textAlign: "center" }}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt="" />
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Skill</p>
                                            {
                                                this.state.skills.map(skill => {
                                                    return (
                                                        <React.Fragment key={skill.id}>
                                                            <span>{skill.content}</span> <span className="pull-right">{skill.percentage}</span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{ width: skill.percentage }} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me-center pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="about-title-center">
                                                    About Me
                                                </h5>
                                            </div>
                                            {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                        </div>
                                        <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }}>
                                            <div className="about-img" style={{ textAlign: "center" }}>
                                                <img src={myImage} className="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;