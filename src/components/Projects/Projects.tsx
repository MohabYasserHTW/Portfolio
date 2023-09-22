import React, { useEffect } from "react";
import Section from "../Section/Section";
import "./Projects.css";
import "aos/dist/aos.css";
import Aos from "aos";
import ProjectCard from "./ProjectCard";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const imgs = [
    {
      title: "The School",
      src: "imgs/TheSchoolWebsite.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/carWebsite.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/pizaaShop.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/s3.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/elzero.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/notions.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/temp.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/backend.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/backend.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/backend.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
    {
      title: "The School",
      src: "imgs/backend.png",
      codeLink: "dsa",
      liveLink: "dsa",
    },
  ];
  return (
    <Section sectionTitle={"Projects"}>
      <div className="projects_list" id="projects">
        {imgs.map((img) => (
          <ProjectCard
            img={img.src}
            liveLink={img.liveLink}
            codeLink={img.codeLink}
            title={img.title}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
