import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Download, Eye, X } from 'lucide-react';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <SectionTitle 
          title="Resume" 
          subtitle="View my professional experience and download my detailed curriculum vitae." 
        />
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setIsModalOpen(true)}
              className="relative aspect-[1/1.414] bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group shadow-lg cursor-zoom-in"
            >
               <img 
                 src="/resume_preview.png" 
                 alt="Resume Preview" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/20 backdrop-blur-[2px]">
                  <div className="bg-white/90 dark:bg-slate-900/90 p-3 rounded-full shadow-xl">
                    <Eye size={24} className="text-blue-600" />
                  </div>
               </div>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold dark:text-white">Ready for New <span className="text-blue-600">Opportunities</span></h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                My resume provides a comprehensive overview of my technical skills, academic performance, and professional contributions. I am always open to discussing new roles where I can apply my expertise in software engineering.
              </p>
              
              <div className="space-y-4 pt-4">
                 <div className="flex items-center space-x-3 text-sm text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Open to Summer Internships (2025/2026)</span>
                 </div>
                 <div className="flex items-center space-x-3 text-sm text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Open to Full-time Roles (Post June 2026)</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary space-x-2">
                    <Download size={20} />
                    <span>Download CV</span>
                 </a>
                 <a href="/placed.docx" download className="btn-secondary space-x-2 border-emerald-500/50 text-emerald-600 hover:bg-emerald-500 hover:text-white">
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full h-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Full Image */}
              <div className="w-full h-full overflow-auto scrollbar-hide py-10 px-4 flex justify-center bg-slate-100">
                <img 
                  src="/resume_preview.png" 
                  alt="Full Resume" 
                  className="max-w-full h-auto shadow-2xl rounded-sm"
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
