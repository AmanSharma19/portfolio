import { motion } from 'framer-motion';

const achievements = [
  {
    stat: 'Finalist',
    title: 'Code-A-Haunt 3.o',
    desc: 'Reached the final round of this prestigious National Level Hackathon, competing against top talent.',
    emoji: '🎖️'
  },
  {
    stat: '200+',
    title: 'Problems Solved',
    desc: 'Across LeetCode, CodeChef, HackerRank',
    emoji: '🧩'
  },
  {
    stat: 'Silver',
    title: 'NPTEL Certification',
    desc: 'Awarded a Silver Medal in the SWAYAM NPTEL course on Internet of Things (IoT).',
    emoji: '🌟'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-transparent">
      <div className="section-container relative z-10 max-w-5xl mx-auto">
        
        {/* Centered Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight"
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg"
          >
            Numbers that tell the story
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#141414] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#1a1a1a] transition-colors"
            >
              {/* Special Cat Icon on the first card */}
              {idx === 0 && (
                <div className="absolute -top-7 left-8 text-4xl transform -rotate-12 animate-bounce hover:animate-none">
                  🐈
                </div>
              )}

              {/* Emoji */}
              <div className="text-4xl mb-4 filter drop-shadow-md">
                {item.emoji}
              </div>

              {/* Stat / Large Header (Purple) */}
              <h3 className="text-4xl font-extrabold text-[#c084fc] tracking-tight mb-2">
                {item.stat}
              </h3>

              {/* Title (White) */}
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>

              {/* Description (Gray) */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-[90%] mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
