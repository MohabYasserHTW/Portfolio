import React from "react";
import Section from "../Section/Section";
import "./Services.css";
function Services() {
  return (
    <Section sectionTitle={"Services"}>
      <div className="services_list">
        <div>
          <h2>Front-End</h2>
          <img src="/imgs/frontEnd.png" alt="frontend" />
        </div>
        <div>
        <h2>Back-End</h2>
          <img src="/imgs/backendIcon.png" alt="frontend" />
        </div>
        <div>
        <h2>Full-Stack</h2>
          <img src="/imgs/fullstack.png" alt="frontend" />
        </div>
      </div>
    </Section>
  );
}

export default Services;
