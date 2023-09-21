import React from "react";
import Section from "../Section/Section";
import "./About.css";
export default function About() {
  return (
    <Section sectionTitle={"About"}>
      <p className="about_text">
        Hello, I'm Mohab Yasser Rageh, a dedicated Full Stack Developer with a
        proven track record of delivering impactful digital solutions. With a
        strong passion for crafting meaningful user experiences, I've spent the
        past year refining my skills in the world of Full Stack Development. My
        journey began with a 4-year immersive study of Computer Science at
        Ain-Shams University, where I earned an exceptional degree with honors.
        
      </p>
      <div className="about_hero">
        <img src="/imgs/meOnAtos.jpg" className="about_img" alt="my img"  width={"300px"}/>
        <div className="about_hero_info">
          <h2 className="about_title">Full stack developer</h2>
            <p>Over the past year, I've had the privilege to contribute my expertise to a range of projects, each of which has deepened my problem-solving abilities and expanded my technical prowess. From architecting robust databases to crafting intuitive user interfaces, I've been fortunate to collaborate with talented teams to bring innovative ideas to life.</p>
            <ul>
              <li><b>BirthDate:</b> 12/8/2000</li>
              <li><b>Phone:</b> +20 01050930033</li>
              <li><b>City:</b> Cairo/Egy</li>
              <li><b>Age:</b> 23</li>
              <li><b>Degree:</b> bachelor's</li>
              <li><b>Email:</b> MohabRageh3@gmail.com</li>
            </ul>
          
        </div>
      </div>
    </Section>
  );
}
