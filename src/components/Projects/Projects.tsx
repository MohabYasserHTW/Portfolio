import React,{useEffect} from 'react'
import Section from '../Section/Section'
import "./Projects.css"
import "aos/dist/aos.css"
import Aos from "aos"
function Projects() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <Section sectionTitle={"Projects"}>
      <div className="projects_list" id='projects'>
        <img src="imgs/TheSchoolWebsite.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/carWebsite.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/pizaaShop.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/s3.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="100"/>
        <img src="imgs/elzero.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/notions.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/temp.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/backend.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/backend.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        <img src="imgs/backend.png" className="about_img" alt="my img"  width={"300px"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"/>
        </div>
    </Section>
  )
}

export default Projects
