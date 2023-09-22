import React from 'react';
import {useState,useEffect } from 'react'
import './App.css';
import HeroSection from './components/Section/HeroSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import WorkExperince from './components/Companies/WorkExperince';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import NavButton from './components/Nav/NavButton';

const App: React.FC = () => {
    const [width,setWidth] = useState(window.innerWidth)
    const [isOpen,setIsOpen] = useState(false)

    useEffect(() => {
      
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    
    /* 
      projects links 
    */

  return (
    <div className={`App ${width>1200?"grid1To4":""}`}>
      <div className='nav_parent'>
      <Nav width={width} isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <main className='main'>
      <NavButton width={width} isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
      <About />
      <Skills />
      <Services />
      <Education/>
      <WorkExperince />
      <Projects />
      <Contact />
      </main>
    </div>
  );
}

export default App;
