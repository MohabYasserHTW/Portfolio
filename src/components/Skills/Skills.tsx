
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
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          CSS
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          JS
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          BootStrap
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          React
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          Redux
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          ResponsiveDesign
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          NodeJs
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          ExpressJS
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          MongoDB
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          MySql
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          PostgressSql
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          Kafka
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          MicroServices
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          C++, Java, Dart, PHP
        </li>
        <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          Algorithms & DataStructure
        </li>
      </ul>
    </Section>
  );
}

export default Skills;
