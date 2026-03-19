import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Trophy, Code, Users, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Participant - Code-A-Haunt 3.o',
    desc: 'Reached the final round of this prestigious National Level Hackathon and emerged as the Runner-up, competing against top talent across the country.',
    icon: <Trophy />,
    color: 'bg-yellow-500'
  },
  {
    title: '200+ DSA Problems Solved',
    desc: 'Successfully solved over 200 data structures and algorithms problems across various platforms like LeetCode and HackerRank.',
    icon: <Code />,
    color: 'bg-blue-500'
  },
  {
    title: 'Silver Medalist - NPTEL',
    desc: 'Awarded a Silver Medal in the SWAYAM NPTEL course on Internet of Things (IoT), demonstrating mastery in smart connected systems.',
    icon: <Star />,
    color: 'bg-slate-400'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="section-container">
        <SectionTitle 
          title="Achievements" 
          subtitle="Honors, awards, and notable milestones I've reached." 
        />
        
        <div className="grid sm:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border-l-4 border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors"
            >
              <div className={`p-4 rounded-xl text-white ${item.color} shadow-lg shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic text-sm">
                  "{item.desc}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
