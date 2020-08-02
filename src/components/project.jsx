import React from 'react';

function Project(props) {

    return(
    <div className="col-md-4">
              <div className="work-box">
                <div>
                  <div className="work-img">
                    <img src={props.image} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{props.title}</h2>
                        <div className="w-more">
                        <span className="w-ctegory">{props.technologies}</span>
                          <div>
                            <span className="w-ctegory">
                                {props.hasWebsite ? 
                                <>
                                    <a href={props.liveUrl} target="_blank">Live Site |</a>
                                    <a href={props.codeUrl} target="_blank"> View Code </a> 
                                </>
                                : <a href={props.codeUrl} target="_blank">View Code in Your Terminal</a>
                                }
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
    )
};

export default Project;