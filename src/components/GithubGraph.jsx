import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Calendar } from 'lucide-react';

const GithubGraph = () => {
  // Mock data for the heatmap
  const rows = 7;
  const cols = 52;
  const cells = Array.from({ length: rows * cols });

  return (
    <section id="contributions" className="py-20">
      <div className="section-container">
        <SectionTitle 
          title="GitHub Contributions" 
          subtitle="A visualization of my consistent commitment to open-source and coding activity." 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-[2rem] border border-slate-700/50"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
               <div className="p-2 rounded-lg bg-slate-800 text-sky-400">
                  <Calendar size={20} />
               </div>
               <div>
                  <h3 className="font-bold text-lg dark:text-white">Active Repository History</h3>
                  <p className="text-xs text-slate-500 font-mono">STREAK: 124_DAYS</p>
               </div>
            </div>
            <div className="flex gap-1 text-[10px] text-slate-500 font-mono uppercase">
               <span>Less</span>
               <div className="w-3 h-3 bg-slate-800 rounded-sm" />
               <div className="w-3 h-3 bg-sky-900 rounded-sm" />
               <div className="w-3 h-3 bg-sky-700 rounded-sm" />
               <div className="w-3 h-3 bg-sky-500 rounded-sm" />
               <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[700px]">
              {cells.map((_, i) => {
                const opacity = [0.1, 0.3, 0.6, 1][Math.floor(Math.random() * 4)];
                return (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm transition-all hover:scale-150 cursor-pointer"
                    style={{ 
                      backgroundColor: opacity > 0.1 ? '#38bdf8' : '#1e293b',
                      opacity: opacity 
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700/30 grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
               { label: 'Total Commits', val: '1,422' },
               { label: 'PRs Merged', val: '84' },
               { label: 'Issues Solved', val: '210' },
               { label: 'Longest Streak', val: '45 Days' }
             ].map((stat, i) => (
               <div key={i}>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">{stat.label}</p>
                  <p className="text-xl font-bold dark:text-white font-mono">{stat.val}</p>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubGraph;
