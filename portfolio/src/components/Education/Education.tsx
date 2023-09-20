import React from "react";
import Section from "../Section/Section";
import "./Education.css";
function Education() {
  return (
    <Section sectionTitle={"Education"}>
      <ul className="education_list">
        <li>
          <h1>Ain-Shmas</h1>
          <ul className="education_inner_list">
            <li>
              <b>Degree:</b> : Bachelor's Degree in Computer Science
            </li>
            <li>
              <b>Grade:</b> : Very Good with Honor
            </li>
            <li>
              <b>Date:</b> July 2018 - July 2022
            </li>
            <li>
              <b>Graduation Project:</b> Received an "A" grade for the
              graduation project
            </li>
          </ul>
        </li>
       
      </ul>
    </Section>
  );
}

export default Education;
