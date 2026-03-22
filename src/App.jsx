import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-200">
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Achievements />
        <Education />
        <CompetitiveProgramming />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
