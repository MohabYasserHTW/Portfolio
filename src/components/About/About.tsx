import React, { useEffect } from "react";
import Section from "../Section/Section";
import "./About.css";
import "aos/dist/aos.css";
import Aos from "aos";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section sectionTitle={"About"}>
      <p
        className="about_text"
        id="about"
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="100"
      >
        Hello, I'm Mohab Yasser Rageh, a dedicated Full Stack Developer with a
        proven track record of delivering impactful digital solutions. My
        passion for creating meaningful user experiences has driven me to
        continuously refine my skills in the field of Full Stack Development
        over the past year. My journey commenced with a comprehensive 4-year
        study of Computer Science at Ain-Shams University, culminating in an
        exceptional degree with honors.
      </p>
      <div className="about_hero">
        <img
          src="imgs/meOnAtos.jpg"
          className="about_img"
          alt="my img"
          width={"300px"}
          data-aos="flip-right"
          data-aos-duration="3000"
          data-aos-delay="100"
        />
        <div
          className="about_hero_info"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          <h2 className="about_title">Full stack developer</h2>
          <p>
            Throughout the past year, I've had the privilege of leveraging my
            expertise across a diverse range of projects. This experience has
            not only enhanced my problem-solving skills but also broadened my
            technical proficiency. Whether it's designing robust databases or
            creating user-friendly interfaces, I've had the good fortune to
            collaborate with skilled teams in transforming innovative concepts
            into reality.
          </p>
          <ul>
            <li>
              <b>BirthDate:</b> 12/8/2000
            </li>
            <li>
              <b>Phone:</b> +20 01050930033
            </li>
            <li>
              <b>City:</b> Cairo/Egy
            </li>
            <li>
              <b>Age:</b> 23
            </li>
            <li>
              <b>Degree:</b> bachelor's
            </li>
            <li>
              <b>Email:</b> MohabRageh3@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
