import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-[#0f172a] min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Certificates />
        <Achievements />
        <CompetitiveProgramming />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
