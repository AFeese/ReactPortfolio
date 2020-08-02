import React from 'react';

function ProjectImg(props) {

    return (
        <div className="col-sm-12">
            <div className="copyright-box">
                <p className="projectsIcon"><img src={props.image} alt="projects" className="responsive"/></p>
            </div>
        </div>
    )
};

export default ProjectImg;