import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Terminal, Brain } from 'lucide-react';

const platforms = [
  { name: 'Codolio', rank: 'Solved: 193 | Consistent', link: 'https://codolio.com/profile/AmanSharma19', logo: 'https://codolio.com/favicon.ico' },
  { name: 'LeetCode', rank: 'Solved: 97 | Rating: 1366', link: 'https://leetcode.com/u/Aman_Sharma19/', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png' },
  { name: 'HackerRank', rank: '5 Star in C++', link: 'https://www.hackerrank.com/profile/amanjangra0210', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3628867-3029929.png' },
  { name: 'GeeksforGeeks', rank: 'Solved: 50+ | Practice', link: 'https://www.geeksforgeeks.org/profile/amanjangf2kf', logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png' }
];

const CompetitiveProgramming = () => {
  return (
    <section id="competitive" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="section-container">
        <SectionTitle 
          title="Competitive Programming" 
          subtitle="My problem-solving activity across various platforms." 
        />
        
        <div className="flex flex-wrap justify-center gap-8">
          {platforms.map((platform, idx) => (
            <motion.a
              key={idx}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 w-48 hover:shadow-xl transition-all"
            >
              <img src={platform.logo} alt={platform.name} className="w-16 h-16 mb-4 filter dark:brightness-110 grayscale hover:grayscale-0 transition-all duration-300" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">{platform.name}</h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{platform.rank}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
