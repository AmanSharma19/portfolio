import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import waterLevelImg from '../assets/projects/water_level.png';
import libraryImg from '../assets/projects/library.png';
import automobileImg from '../assets/projects/automobile_dashboard.png';

const projects = [
  {
    num: '01',
    date: 'FEB 2026',
    title: 'Library Management System',
    description: 'A robust desktop application designed to streamline library operations including book tracking and member management using Java.',
    tech: ['Java', 'Swing', 'OOP'],
    github: 'https://github.com/AmanSharma19/Library-Management-System',
    image: libraryImg
  },
  {
    num: '02',
    date: 'NOV 2025',
    title: 'Automobiles Dashboard',
    description: 'A comprehensive Power BI dashboard analyzing automobile sales and performance trends. Transformed raw data into interactive insights using DAX and SQL.',
    tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
    github: 'https://github.com/AmanSharma19/Automobile-data-analytics-dashboard',
    image: automobileImg
  },
  {
    num: '03',
    date: 'MAR 2024',
    title: 'Water Level Indicator',
    description: 'A custom hardware project leveraging IoT principles to measure and indicate water levels efficiently. Built using C++ and Arduino for realtime sensor integration.',
    tech: ['C++', 'Arduino', 'IoT'],
    image: waterLevelImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="section-container relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore my latest laboratory work and data science applications."
        />

        <div className="flex flex-col gap-12 lg:gap-20 mt-12">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
              >
                
                {/* Text Content (Left Half) */}
                <div className="w-full lg:w-7/12 flex flex-col space-y-6 lg:pr-10">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-500 opacity-50">
                      {project.num}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 shadow-xl relative z-20 hover:bg-[#1a1a1a] transition-colors">
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono font-bold text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-slate-300 hover:text-purple-400 font-semibold transition-colors"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-slate-300 hover:text-pink-400 font-semibold transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Preview (Right Half) - Smaler Container */}
                <div className="w-full lg:w-4/12 relative">
                   <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/5 group-hover:border-[#3a3a3a] transition-colors duration-500">
                     
                     {/* Floating Date Badge */}
                     <div className="absolute top-4 right-4 z-20 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                       {project.date}
                     </div>

                     <div className="absolute inset-0 bg-purple-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                     
                     <img
                       src={project.image}
                       alt={project.title}
                       className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                     />
                   </div>
                   
                   {/* Background Decorative Glow */}
                   <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
                </div>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
