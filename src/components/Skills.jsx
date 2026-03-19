import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Terminal, Cpu, Globe, Database, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Terminal size={20} />,
    skills: [
      { name: 'C++', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 90 }
    ]
  },
  {
    title: 'Frontend',
    icon: <Globe size={20} />,
    skills: [
      { name: 'React JS', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'CSS', level: 85 }
    ]
  },
  {
    title: 'Backend/Infra',
    icon: <Cpu size={20} />,
    skills: [
      { name: 'Express JS', level: 80 },
      { name: 'Node JS', level: 90 },
      { name: 'AWS', level: 75 }
    ]
  },
  {
    title: 'Databases',
    icon: <Database size={20} />,
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 85 }
    ]
  },
  {
    title: 'Data Visualization',
    icon: <BarChart3 size={20} />,
    skills: [
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 80 },
      { name: 'MS Excel', level: 95 },
      { name: 'Python', level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="section-container">
        <SectionTitle 
          title="Tech Stack" 
          subtitle="A granular breakdown of my technical expertise and toolkit." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  {category.icon}
                </div>
                <h3 className="font-bold text-xl dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-2 bg-slate-800/30 px-3 py-2 rounded-xl border border-slate-700/50 hover:border-sky-500/30 transition-all hover:bg-slate-800/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
