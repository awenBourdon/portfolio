import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#111111" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,149.3C640,149,800,171,960,170.7C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projets</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;