import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Target, Sparkles, User, Lightbulb, Zap, TrendingUp, RefreshCw } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden">
      <div className="section-container max-w-6xl mx-auto">
        <SectionTitle 
          title="About Me"
          subtitle="My professional background and core philosophy."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Facts & Core Strengths */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Facts Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:bg-[#1a1a1a] hover:border-[#3a3a3a] transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Sparkles size={60} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-8 tracking-wide">Snapshot</h3>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin size={20} />, label: 'Location', value: 'Haryana, India' },
                  { icon: <GraduationCap size={20} />, label: 'University', value: 'Lovely Professional Univ.' },
                  { icon: <Briefcase size={20} />, label: 'Focus', value: 'DSA & Data Science' }
                ].map((fact, i) => (
                  <div key={i} className="flex items-center space-x-5">
                    <div className="p-3.5 rounded-xl bg-[#111111] text-[#c084fc] border border-white/5 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {fact.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{fact.label}</p>
                      <p className="text-sm text-slate-200 font-medium leading-tight">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Strengths Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141414] p-8 rounded-2xl border border-white/5 hover:bg-[#1a1a1a] hover:border-[#3a3a3a] transition-colors duration-500 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Core Strengths</h3>
              <div className="space-y-3">
                {[
                  { icon: <Lightbulb size={18} />, label: 'Problem Solving' },
                  { icon: <RefreshCw size={18} />, label: 'Adaptability' },
                  { icon: <TrendingUp size={18} />, label: 'Analytical Thinking' }
                ].map((strength, i) => (
                  <div key={i} className="flex items-center space-x-4 p-3 rounded-xl bg-[#111111] border border-white/5 group-hover:border-[#3a3a3a] transition-all cursor-default w-full">
                    <div className="text-[#c084fc] p-2 rounded-lg bg-[#141414] border border-white/5">
                      {strength.icon}
                    </div>
                    <span className="text-sm text-slate-300 font-medium tracking-wide">{strength.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Narrative Content */}
          <div className="lg:col-span-8 space-y-8">
             {/* Professional Summary Card */}
             <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:bg-[#1a1a1a] transition-colors duration-500"
            >
              <div className="absolute -top-10 -right-10 p-10 opacity-[0.02] group-hover:opacity-5 transition-opacity rotate-12">
                 <User size={200} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center tracking-wide">
                <Target size={22} className="mr-3 text-purple-400" />
                Professional Summary
              </h3>
              <div className="space-y-6 text-slate-400 leading-relaxed text-base font-normal relative z-10 text-justify">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#c084fc] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  I am a <span className="text-slate-200 font-semibold">Computer Science Engineering</span> student at <span className="text-[#c084fc] font-semibold">Lovely Professional University</span> with a strong interest in Data Structures & Algorithms, Data Analytics, and specialized Web Development.
                </p>
                <p>
                  I enjoy solving complex problems and building practical applications that combine data logic with elegant interfaces. My approach is centered on creating streamlined and robust solutions that bridge the gap between back-end infrastructure and real-world utility.
                </p>
              </div>
            </motion.div>

            {/* Philosophy & Narrative Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141414] p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:bg-[#1a1a1a] transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                 <Zap size={120} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center tracking-wide">
                <Sparkles size={22} className="mr-3 text-pink-400" />
                Philosophy & Approach
              </h3>
              <div className="space-y-6 text-slate-400 leading-relaxed text-base font-normal relative z-10 text-justify">
                <p>
                  I believe in living a highly disciplined and growth-oriented life. Cultivating a continuous balance between abstract learning, building physical features, and testing boundaries builds the consistency tracking necessary for high-end engineering. 
                </p>
                <p>
                   Exploring versatile algorithms and actively refining codebase logic constantly motivates me to push past basic implementations. I am highly adaptable and strictly self-motivated, allowing me to stay focused on deploying efficient, premium-tier applications while sharpening my analytical skills every single day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
