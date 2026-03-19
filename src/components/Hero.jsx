import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowDown, Code, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/aman.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
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
               Aspiring <br /> 
               <span className="text-gradient">Data Scientist.</span>
            </h1>

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
                    className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 flex items-center justify-center hover:text-sky-400 hover:border-sky-400/50 transition-all hover:scale-110"
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
             <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden border border-slate-700/50 shadow-2xl glass group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Professional Studio-Style Container for Aman */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-[6px] border-slate-800 z-20 transition-all duration-500 group-hover:border-sky-500/50 group-hover:scale-[1.02] shadow-[0_0_50px_rgba(0,0,0,0.5)] -translate-y-12 bg-[#111827]">
                   <img 
                     src={profileImg} 
                     alt="Aman" 
                     className="w-full h-full object-cover transition-all duration-700 hover:scale-110" 
                   />
                   {/* Subtle Inner Glow Overlay */}
                   <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[82%] p-5 rounded-2xl glass border border-white/5 z-30 flex flex-col items-center text-center transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-2xl">
                   <h4 className="font-black text-white text-xl md:text-2xl tracking-tighter mb-1">Aman</h4>
                   <p className="text-[10px] md:text-xs text-sky-400 font-mono font-black uppercase tracking-[0.2em] bg-sky-400/5 px-3 py-1 rounded-full border border-sky-400/20">
                      ASPIRING_DATA_SCIENTIST
                   </p>
                </div>
             </div>

             {/* Background blobs */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl -z-0" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
