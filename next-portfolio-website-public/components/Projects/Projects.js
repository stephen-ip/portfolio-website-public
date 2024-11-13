import React, { useEffect, useRef } from "react";
import styles from "../../styles/Projects.module.scss";
import Project from "./Project";
import { ProjectsData } from "./Content";
import animate from "../Utils/animate";

function Projects() {
  const titleRef = useRef(null);

  useEffect(() => {
    animate(titleRef);
  }, []);

  return (
    <div name="projects" className={styles.projects}>
      <div className={styles.header}>
        <h1 className={styles.title} ref={titleRef}>
          My Projects
        </h1>
      </div>
      <div className={styles.content}>
        {ProjectsData.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            features={project.features}
            techstack={project.techstack}
            github={project.github}
            external={project.external}
            img={project.img}
            assets={project.assets}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
