import React from 'react';
import './App.css';
import HeroSection from './components/Section/HeroSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import WorkExperince from './components/Companies/WorkExperince';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeroSection />
      <About />
      <Skills />
      <Education/>
      <WorkExperince />
    </div>
  );
}

export default App;
