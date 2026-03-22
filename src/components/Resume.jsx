import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Download, Eye, X } from 'lucide-react';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="py-24 bg-transparent">
      <div className="section-container">
        
        {/* Added the missing Title/Subtitle block here instead of hardcoding inside div. */}
        <SectionTitle 
          title="Resume" 
          subtitle="View my professional experience and download my detailed curriculum vitae." 
        />
        
        <div className="mt-12 bg-[#141414] rounded-[2rem] shadow-2xl overflow-hidden border border-white/5 p-8 md:p-12 relative group hover:bg-[#1a1a1a] hover:border-[#3a3a3a] transition-colors duration-500">
          
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setIsModalOpen(true)}
              className="relative aspect-[1/1.414] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 shadow-2xl cursor-zoom-in group/img hover:border-purple-500/50 transition-all duration-300"
            >
               <img 
                 src="/resume_preview.png" 
                 alt="Resume Preview" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100"
               />
               <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover/img:opacity-100 transition-opacity mix-blend-overlay" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-[#0a0a0a]/40 backdrop-blur-sm">
                  <div className="bg-[#141414] p-4 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-500/30">
                    <Eye size={28} className="text-purple-400" />
                  </div>
               </div>
            </motion.div>

            <div className="space-y-8">
              <h3 className="text-4xl font-black text-white leading-tight">
                Ready for New <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 line-clamp-2 pb-2">Opportunities</span>
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-lg">
                My resume provides a comprehensive overview of my technical skills, academic performance, and professional contributions. I am always open to discussing new roles where I can apply my expertise in software engineering.
              </p>
              
              <div className="space-y-5 p-6 rounded-2xl bg-[#111111] border border-white/5">
                 <div className="flex items-center space-x-4 text-sm font-semibold tracking-wide text-slate-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                    <span>Open to Summer Internships (2025/2026)</span>
                 </div>
                 <div className="flex items-center space-x-4 text-sm font-semibold tracking-wide text-slate-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                    <span>Open to Full-time Roles (Post June 2026)</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary space-x-2 w-full sm:w-auto justify-center">
                    <Download size={20} />
                    <span>Download CV</span>
                 </a>
                 <a href="/placed.docx" download className="btn-secondary space-x-2 border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 hover:border-pink-500/50 w-full sm:w-auto justify-center">
                    <Download size={20} />
                    <span>Placement Doc</span>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#0a0a0a]/95 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full h-full max-h-[90vh] bg-[#141414] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-40 p-3 bg-[#0a0a0a]/80 hover:bg-purple-600 border border-white/10 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              {/* Full Image */}
              <div className="w-full h-full overflow-auto scrollbar-hide py-10 px-4 flex justify-center bg-[#111111]">
                <img 
                   src="/resume_preview.png" 
                   alt="Full Resume" 
                   className="max-w-full min-h-[100vh] h-auto shadow-2xl rounded-lg border border-white/10 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
