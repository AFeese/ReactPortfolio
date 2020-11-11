import React from "react";

function ProjectImg(props) {
  return (
    <div>
      <img
        src={props.image}
        alt="projects"
        className="responsive projectsIcon"
      />
    </div>
  );
}

export default ProjectImg;
