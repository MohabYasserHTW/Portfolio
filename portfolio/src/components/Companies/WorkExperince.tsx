import React from "react";
import Section from "../Section/Section";
import "../Education/Education.css";
function WorkExperince() {
  return (
    <Section sectionTitle={"Work Experinces"}>
      <ul className="education_list">
        <li>
          <h1>FreeLancer "Front & Back End"</h1>
          <ul className="education_inner_list">
            <li>
              <b>Date:</b> July 2023 - currently
            </li>
            <li>
              Collaborated with clients to understand project requirements and
              goals, ensuring successful project outcomes.
            </li>
            <li>
              Developed responsive and user-friendly web interfaces using React,
              HTML, and CSS .
            </li>
            <li>
              Developed secure and efficent server side apps  using NodeJs,
              Express, RelationalDB, No-SqlDB.
            </li>
            <li>
            Communicated regularly with clients, providing
updates on project progress and incorporating
feedback effectively.

            </li>
          </ul>
        </li>
        <li>
          <h1>ATOS-GROUP</h1>
          <ul className="education_inner_list">
            <li>
              <b>Date:</b> April 2023 - July 2023
            </li>
            <li>
              During my internship at Atos, I gained valuable handson experience
              in a professional software development environment. This immersive
              opportunity allowed me to focus on several important aspects:
            </li>
            <li>
              Full-Stack Exposure: I had the chance to work on both front-end
              and back-end components of the project, gaining exposure to the
              entire development process. This experience has solidified my
              understanding of how the different layers of a web application
              interact and collaborate.
            </li>
            <li>
              Practical Application of Skills: Through this internship, I
              practically applied my knowledge of algorithms and data structures
              to solve real-world challenges, showcasing my problem-solving
              abilities and technical acumen.
            </li>
            <li>
              Adaptability and Learning: Working on a live project taught me to
              adapt to changing requirements and learn new technologies
              efficiently. This adaptability is crucial in the ever-evolving
              field of software development.
            </li>
          </ul>
        </li>
      </ul>
    </Section>
  );
}

export default WorkExperince;
