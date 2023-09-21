
import Section from "../Section/Section";
import "./Services.css";
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react";
function Services() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <Section sectionTitle={"Services"}>
      <div className="services_list">
        <div 
        data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-delay="100">
          <h2>Front-End</h2>
          <img src="imgs/frontEnd.png" alt="frontend" />
        </div>
        <div data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-delay="100">
        <h2>Back-End</h2>
          <img src="imgs/backendIcon.png" alt="frontend" />
        </div>
        <div data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-delay="100">
        <h2>Full-Stack</h2>
          <img src="imgs/fullstack.png" alt="frontend" />
        </div>
      </div>
    </Section>
  );
}

export default Services;
