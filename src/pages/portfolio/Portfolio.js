import React from "react";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import project1 from "../../../src/images/project1.png";
import project2 from "../../../src/images/project2.png";
import project3 from "../../../src/images/project3.png";
import project4 from "../../../src/images/project4.png";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => {
      let image;

      if (i === 0) {
        image = project4;
      } else if (i === 1) {
        image = project3;
      }
      else if (i === 2) {
        image = project1;
      }
      else if (i === 3) {
        image = project2;
      }

      return (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          technologies={project.technologies}
          image={image}
          color={project.bgcolor}
          github={project.github}
          deployed={project.deployed}
          description={project.description}
        />
      );
    });

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;