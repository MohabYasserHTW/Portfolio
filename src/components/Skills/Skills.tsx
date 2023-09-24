import ProgressBar from "@ramonak/react-progress-bar";
import Section from "../Section/Section";
import "./skills.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section sectionTitle={"Skills"}>
      <p
        className="skills_text"
        id="skills"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        As a full-stack developer, I am committed to continuously enhancing my
        skills and techniques day by day to meet the unique needs of my clients.
        This ongoing learning process has equipped me with a wide range of
        skills, enabling me to efficiently create and showcase websites.
      </p>
      <ul className="skills_div">
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
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
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
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
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          JS
          {
            <ProgressBar
              customLabel="90%"
              completed={90}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          BootStrap
          {
            <ProgressBar
              customLabel="75%"
              completed={75}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          React
          {
            <ProgressBar
              customLabel="85%"
              completed={85}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          Redux
          {
            <ProgressBar
              customLabel="75%"
              completed={75}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          ResponsiveDesign
          {
            <ProgressBar
              customLabel="90%"
              completed={90}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          NodeJs
          {
            <ProgressBar
              customLabel="85%"
              completed={85}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          ExpressJS
          {
            <ProgressBar
              customLabel="90%"
              completed={90}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
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
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          MySql
          {
            <ProgressBar
              customLabel="85%"
              completed={85}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          PostgressSql
          {
            <ProgressBar
              customLabel="85%"
              completed={85}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          Kafka
          {
            <ProgressBar
              customLabel="50%"
              completed={50}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          MicroServices
          {
            <ProgressBar
              customLabel="50%"
              completed={50}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          C++, Java, Dart, PHP
          {
            <ProgressBar
              customLabel="50%"
              completed={50}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          Algorithms & DataStructure
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
