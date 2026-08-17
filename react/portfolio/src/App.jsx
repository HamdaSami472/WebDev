import React from 'react'
import Hero from './components/Hero'
import './app.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App
