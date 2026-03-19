import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Target, Code, Sparkles, User, Lightbulb, Zap, ShieldCheck, TrendingUp, RefreshCw } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 overflow-hidden">
      <div className="section-container">
        {/* Centered Title with Gradient Underline */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white inline-block relative"
          >
            About Me
            <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full mt-2" />
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Facts & Core Strengths */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Facts Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Sparkles size={60} />
              </div>
              <h3 className="text-xl font-black text-white mb-8 tracking-tight uppercase italic">Snapshot</h3>
              <div className="space-y-8">
                {[
                  { icon: <MapPin size={20} />, label: 'Location', value: 'Haryana, India' },
                  { icon: <GraduationCap size={20} />, label: 'University', value: 'Lovely Professional University' },
                  { icon: <Briefcase size={20} />, label: 'Focus', value: 'DSA & Data Science' }
                ].map((fact, i) => (
                  <div key={i} className="flex items-center space-x-5">
                    <div className="p-3.5 rounded-2xl bg-slate-800 text-sky-400 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform">
                      {fact.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-0.5">{fact.label}</p>
                      <p className="text-sm text-slate-200 font-bold leading-tight">{fact.value}</p>
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
              className="glass p-8 rounded-[2.5rem] border border-slate-700/50 shadow-2xl"
            >
              <h3 className="text-xl font-black text-white mb-8 tracking-tight uppercase italic">Core Strengths</h3>
              <div className="space-y-4">
                {[
                  { icon: <Lightbulb size={18} />, label: 'Problem Solving' },
                   { icon: <RefreshCw size={18} />, label: 'Adaptability' },
                  { icon: <Zap size={18} />, label: 'Self-Motivated' },
                  { icon: <TrendingUp size={18} />, label: 'Analytical Thinking' }
                ].map((strength, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-sky-500/50 group transition-all cursor-default">
                    <div className="text-sky-400 p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      {strength.icon}
                    </div>
                    <span className="text-sm text-slate-300 font-bold tracking-tight">{strength.label}</span>
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
              className="glass p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 p-10 opacity-5 rotate-12">
                 <User size={200} />
              </div>
              <h3 className="text-2xl font-black text-white mb-10 flex items-center tracking-tighter italic uppercase">
                <Target size={26} className="mr-4 text-sky-400" />
                Professional Summary
              </h3>
              <div className="space-y-8 text-slate-300 leading-relaxed text-xl font-medium relative z-10 text-justify">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-sky-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  I am a <span className="text-white font-black italic">Computer Science Engineering</span> student at <span className="text-sky-400 font-bold">Lovely Professional University</span> with a strong interest in Data Structures & Algorithms, Data Science, and Full-Stack Web Development.
                </p>
                <p>
                  I enjoy solving complex problems and building practical applications that combine data, logic, and modern web technologies. My approach is centered on creating efficient and impactful solutions that bridge the gap between abstract concepts and real-world utility.
                </p>
              </div>
            </motion.div>

            {/* Philosophy & Narrative Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 glass shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Zap size={120} />
              </div>
              <h3 className="text-2xl font-black text-white mb-8 flex items-center tracking-tighter italic uppercase">
                <Sparkles size={24} className="mr-4 text-sky-400" />
                My Philosophy & Approach
              </h3>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-medium relative z-10 text-justify">
                <p>
                  I believe in living a disciplined and growth-oriented life. I maintain a balance between learning, building projects, and improving myself every day. Consistency and curiosity drive my approach toward both academics and personal development.
                </p>
                <p>
                   I enjoy working on challenging problems and finding logical ways to solve them. Exploring different approaches and improving solutions motivates me to keep learning and growing. I am adaptable and self-motivated, which helps me stay focused on my goals and continuously strengthen my technical and analytical skills.
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
