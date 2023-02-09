import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects)

  const projectItems = projects.map(project => <li key={project.id} > {project.name} </li>);
  // console.log(projectItems)

  const techList = projects.map(technology => {
  return(
  <ProjectItem key={technology.name} name={technology.name} about={technology.about} technologies={technology.technologies} />)
  })
  // console.log(techList);

  return(
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> {/* render ProjectItem components here */}
      {/* {projectItems} */}
      {techList}
      </div>
    </div>
  );
}

export default ProjectList;

