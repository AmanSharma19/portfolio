import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Lovely Professional University',
    duration: "Aug' 23 - Present",
    coursework: 'Data Structures & Algorithms, Data Science, Web Development, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.',
    grade: 'CGPA: 8.12'
  },
  {
    degree: 'Intermediate',
    institution: 'M.D. Senior Secondary School',
    duration: "Apr' 21 - Mar' 22",
    coursework: 'Physics, Chemistry, Mathematics, English.',
    grade: 'Percentage: 77'
  },
  {
    degree: 'Matriculation',
    institution: 'M.D. Senior Secondary School',
    duration: "Apr' 19 - Mar' 20",
    coursework: 'Science, Mathematics, Social Science, English, Hindi.',
    grade: 'Percentage: 79.2'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and relevant coursework." 
        />
        
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon / Bullet */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap size={20} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.degree}</h3>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {item.duration}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{item.institution}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Relevant Coursework</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 italic">{item.coursework}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{item.grade}</p>
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

export default Education;
