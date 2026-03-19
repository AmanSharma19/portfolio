import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
              Aman<span className="text-sky-500">.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xs text-[10px] font-black uppercase tracking-widest">
              Data Scientist extracting value from complexity.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com/AmanSharma19" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/amans8/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:amanjangra0210@gmail.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Mail size={20} /></a>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Made by <span className="text-slate-900 dark:text-white">Aman</span> with <span className="text-sky-500">React</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
