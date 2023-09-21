import React from 'react'
import "./Section.css"
function Section({children,sectionTitle}:any) {
  return (
    <section className='section'>
    <h1 className='section_title'>{sectionTitle}</h1>
      {children}
    </section>
  )
}

export default Section
