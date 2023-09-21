import React,{useEffect} from 'react'
import "./Section.css"
import "aos/dist/aos.css"
import Aos from "aos"
function Section({children,sectionTitle}:any) {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='section'>
    <h1 className='section_title'
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-delay="100">{sectionTitle}</h1>
      {children}
    </section>
  )
}

export default Section
