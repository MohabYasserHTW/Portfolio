import ProgressBar from "@ramonak/react-progress-bar";
import Section from "../Section/Section";
import "./skills.css";
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react";
function Skills() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <Section sectionTitle={"Skills"}>
      <p className="skills_text" id="skills" 
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="100">
        As a full stack developer i used to grow up my skills and techniques day
        by day to meet up with clients needs which gives me alot of skills wich
        i use to demonstrate websites as fast and efficient as poosible
      </p>
      <ul className="skills_div">
        <li data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          HTML
          {
            <ProgressBar
              customLabel="90%"
              completed={90}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          CSS
          {
            <ProgressBar
              customLabel="85%"
              completed={85}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          JS
          {
            <ProgressBar
              customLabel="100%"
              completed={100}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          React
          {
            <ProgressBar
              customLabel="80%"
              completed={80}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          NodeJs
          {
            <ProgressBar
              customLabel="90%"
              completed={90}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          MySql
          {
            <ProgressBar
              customLabel="75%"
              completed={75}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          MongoDB
          {
            <ProgressBar
              customLabel="80%"
              completed={80}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
      </ul>
    </Section>
  );
}

export default Skills;
