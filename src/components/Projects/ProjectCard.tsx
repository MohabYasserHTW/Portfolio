import React, { useState } from 'react'

function ProjectCard({img,codeLink,liveLink,title}:any) {

    const [isOpen,setIsOpen] = useState(false)


  return (
    <div className='project_card' onClick={() => setIsOpen(!isOpen)}
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-delay="100"
    >
        {
            isOpen?<div className='project_div'>
                <h3>
                    {title}
                </h3>
                <a href={codeLink} target='blank'>
                    GitHub Repo
                </a>
                <a href={liveLink} target='blank'>
                    Live
                </a>
            </div>
            :<img src={img} alt='projectImg' />
        }
    </div>
  )
}

export default ProjectCard
