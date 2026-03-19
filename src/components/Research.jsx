import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { BookOpen, FileText, Globe } from 'lucide-react';

const publications = [
  {
    title: 'Optimizing Resource Allocation in Fog Computing using Meta-Heuristics',
    journal: 'International Journal of Distributed Computing',
    year: '2024',
    type: 'Research Paper',
    link: '#',
    abstract: 'This paper presents a novel approach to resource management in edge environments, reducing latency by 15% through optimized task scheduling.'
  },
  {
    title: 'Privacy-Preserving Data Aggregation for IoT Networks',
    journal: 'IEEE Conference on Communications',
    year: '2023',
    type: 'Publication',
    link: '#',
    abstract: 'Exploring cryptographic techniques to ensure data integrity and user privacy in low-power wide-area networks.'
  }
];

const Research = () => {
  return (
    <section id="research" className="py-20">
      <div className="section-container">
        <SectionTitle 
          title="Research & Publications" 
          subtitle="Academic investigations and published contributions to the scientific community." 
        />
        
        <div className="space-y-8">
          {publications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative background number */}
              <div className="absolute -right-4 -bottom-4 text-9xl font-bold text-slate-100 dark:text-slate-800/50 -z-0 pointer-events-none group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                    <BookOpen size={16} className="mr-2" />
                    {item.journal}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-4xl italic">
                    {item.abstract}
                  </p>
                </div>
                <div className="shrink-0">
                  <a href={item.link} className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all hover:rotate-12">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
