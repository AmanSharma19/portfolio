import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Briefcase, Calendar, Terminal, Link as LinkIcon } from 'lucide-react';

const experiences = [
  {
    title: 'Data Analytics Essentials',
    company: 'Centre of Professional Enhancement LPU',
    location: 'Jalandhar, Punjab',
    period: "Jun' 25 - Jul' 25",
    link: 'https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12309783_896_20_08_2025.pdf?_gl=1*1l5jui0',
    description: [
      'Conducted comprehensive data extraction, cleaning, and preprocessing activities using SQL and Python, ensuring well-structured and high-quality datasets for further analytical workflows.',
      'Designed, developed, and refined interactive dashboards and visual analytics reports in Power BI and Tableau to present insights clearly and support data-driven decision-making.',
      'Utilized advanced Excel functions, pivot tables, data modeling features, and visualization tools to analyze large datasets, identify patterns, and communicate findings effectively.'
    ],
    techStack: 'Python, SQL, Tableau, Power BI, Excel'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/20">
      <div className="section-container">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="A summary of my professional journey and hands-on training." 
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-sky-500 before:to-transparent"
            >
              {/* Timeline Bullet */}
              <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />

              <div className="glass p-8 rounded-[2rem] border border-slate-700/50 shadow-xl relative overflow-hidden group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white italic tracking-tight">{exp.title}</h3>
                    <div className="flex items-center text-sky-400 font-bold mt-1">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                      <span className="mx-2 text-slate-700">|</span>
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center hover:text-white transition-colors"
                      >
                        <LinkIcon size={14} className="mr-1" />
                        LINK
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-bold">
                    <Calendar size={16} className="mr-2 text-sky-400" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-400 leading-relaxed font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 mt-2.5 mr-3 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center pt-6 border-t border-slate-800">
                  <Terminal size={18} className="text-sky-400 mr-3" />
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest mr-2">Tech Stack:</span>
                    <span className="text-sm font-bold text-slate-300 italic">{exp.techStack}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
