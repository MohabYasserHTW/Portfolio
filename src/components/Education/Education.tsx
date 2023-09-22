import React,{useEffect} from "react";
import Section from "../Section/Section";
import "./Education.css";
import "aos/dist/aos.css"
import Aos from "aos"
function Education() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <Section sectionTitle={"Education"}>
      <ul className="education_list" id="education"
      data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100"
      >
        <li>
          <h1>Ain-Shams</h1>
          <ul className="education_inner_list">
            <li>
              <b>Degree:</b>  Bachelor's Degree in Computer Science
            </li>
            <li>
              <b>Grade:</b>  Very Good with Honor
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
