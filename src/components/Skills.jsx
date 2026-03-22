import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaJava, FaAws, FaCss3Alt, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { 
  SiCplusplus, SiPython, SiC, SiReact, SiJavascript, 
  SiExpress, SiNodedotjs, SiMysql, SiMongodb 
} from 'react-icons/si';

const categories = ['All', 'Languages', 'Databases', 'Frameworks', 'Tools', 'Cloud'];

const allSkills = [
  { name: 'Java', category: 'Languages', level: 85, color: '#ED8B00', icon: FaJava },
  { name: 'C', category: 'Languages', level: 90, color: '#A8B9CC', icon: SiC },
  { name: 'C++', category: 'Languages', level: 95, color: '#00599C', icon: SiCplusplus },
  { name: 'JavaScript', category: 'Languages', level: 95, color: '#F7DF1E', icon: SiJavascript },
  { name: 'Python', category: 'Languages', level: 80, color: '#3776AB', icon: SiPython },
  { name: 'CSS', category: 'Languages', level: 85, color: '#1572B6', icon: FaCss3Alt },
  
  { name: 'MySQL', category: 'Databases', level: 90, color: '#4479A1', icon: SiMysql },
  { name: 'MongoDB', category: 'Databases', level: 85, color: '#47A248', icon: SiMongodb },
  
  { name: 'React JS', category: 'Frameworks', level: 90, color: '#61DAFB', icon: SiReact },
  { name: 'Express JS', category: 'Frameworks', level: 80, color: '#FFFFFF', icon: SiExpress },
  { name: 'Node JS', category: 'Frameworks', level: 90, color: '#339933', icon: SiNodedotjs },
  
  { name: 'Power BI', category: 'Tools', level: 85, color: '#F2C811', icon: FaChartBar },
  { name: 'Tableau', category: 'Tools', level: 80, color: '#E97627', icon: FaChartBar },
  { name: 'MS Excel', category: 'Tools', level: 95, color: '#217346', icon: FaFileExcel },
  
  { name: 'AWS', category: 'Cloud', level: 75, color: '#FF9900', icon: FaAws }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="section-container relative z-10">
        <SectionTitle 
          title="Tech Stack" 
          subtitle="A granular breakdown of my technical expertise and toolkit." 
        />
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
          <AnimatePresence>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/25'
                    : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatePresence>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center justify-between p-6 h-[120px] bg-[#141414] rounded-2xl border border-white/5 shadow-sm hover:bg-[#1a1a1a] transition-all group"
                >
                  <div className="flex-1 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <Icon size={46} color={skill.color} />
                  </div>
                  
                  {/* Skill level indicator line (matches the aesthetic of the reference) */}
                  <div className="w-[85%] h-[3px] bg-slate-800/80 rounded-full mt-4 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`, 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}80`
                      }}
                    />
                  </div>
                  
                  {/* Custom Tooltip for Name on Hover */}
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-[#1a1a1a] border border-white/10 text-slate-200 text-xs px-3 py-1.5 rounded-md transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl transform translate-y-2 group-hover:translate-y-0 z-10">
                    {skill.name}
                    {/* Tooltip arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a1a] border-b border-r border-white/10 rotate-45"></div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
