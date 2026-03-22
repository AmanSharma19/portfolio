import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import profileImg from '../assets/aman.jpg';
import PlexusBackground from './PlexusBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      {/* Dynamic Tech Matrix Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
        <PlexusBackground />

        {/* Retain ambient glow spheres underneath */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none mix-blend-screen" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none dark:text-white">
               Hi, I'm <br /> 
               <span className="text-gradient">Aman.</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold text-slate-300 tracking-tight">
              Aspiring Data Scientist
            </h2>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              I specialize in extracting actionable insights from complex data. 
              Bridging the gap between raw data and strategic decisions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary space-x-2">
                <FileText size={20} />
                <span>Download CV</span>
              </a>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, link: 'https://github.com/AmanSharma19' },
                  { icon: <Linkedin />, link: 'https://www.linkedin.com/in/amans8/' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 flex items-center justify-center hover:text-purple-400 hover:border-purple-400/50 transition-all hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 flex items-center space-x-8 text-slate-500 font-mono text-xs">
               <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span>Available for hire</span>
               </div>
            </div>
          </motion.div>

          {/* New Image Section (Personalized Glass Card) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
             <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl glass group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Unified Studio Container */}
                <div className="relative w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden border border-white/10 z-20 transition-all duration-500 group-hover:border-purple-500/30 group-hover:scale-[1.02] shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-[#141414]">
                   <img 
                     src={profileImg} 
                     alt="Aman" 
                     className="w-full h-full object-cover transition-all duration-700 hover:scale-110 opacity-90 group-hover:opacity-100" 
                   />
                   {/* Subtle Inner Glow */}
                   <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
                </div>


             </div>

             {/* Dynamic background blobs */}
             <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-0 animate-pulse" />
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl -z-0 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
