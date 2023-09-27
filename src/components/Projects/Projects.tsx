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
      codeLink: "https://github.com/MohabYasserHTW/The_school_as_microServices",
    },
    {
      title: "Notes App",
      src: "imgs/notesApp.png",
      codeLink: "https://github.com/MohabYasserHTW/Simple-Note-Taking-App",
      liveLink: "https://mohabyasserhtw.github.io/Simple-Note-Taking-App/",
    },
    {
      title: "Users",
      src: "imgs/users.png",
      codeLink: "https://github.com/MohabYasserHTW/User-Data-Viewer",
      liveLink: "https://mohabyasserhtw.github.io/User-Data-Viewer/",
    },
    {
      title: "Pizaa Shop",
      src: "imgs/pizaaShop.png",
      codeLink: "https://github.com/MohabYasserHTW/pizaa_shop",
      liveLink: "https://mohabrageh.github.io/pizaa/",
    },
    {
      title: "Social Media",
      src: "imgs/s3.png",
      codeLink: "https://github.com/MohabYasserHTW/S3",
      liveLink: "https://mohabrageh.github.io/ss3/",
    },
    {
      title: "Car Company",
      src: "imgs/carWebsite.png",
      codeLink:
        "https://github.com/MohabYasserHTW/car_company/tree/main/%D8%A7%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B3%D9%8A%D9%88%D9%81%D9%8A",
    },

    {
      title: "elzero temp",
      src: "imgs/elzero.png",
    },
    {
      title: "notion app",
      src: "imgs/notions.png",
      codeLink: "https://github.com/MohabRageh/not_es_ion",
      liveLink: "https://mohabrageh.github.io/not_es_ion/",
    },
    {
      title: "elzero temp",
      src: "imgs/temp.png",
    },
    {
      title: "ToDo APIs",
      src: "imgs/backend.png",
      codeLink: "https://github.com/MohabYasserHTW/todo_API",
    },
    {
      title: "Vip Kid APIs",
      src: "imgs/backend.png",
      codeLink: "https://github.com/MohabYasserHTW/vip_kid",
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
