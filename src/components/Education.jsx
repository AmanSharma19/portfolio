import { motion } from 'framer-motion';
import { MapPin, Cat } from 'lucide-react';

const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    duration: "Aug '23 – Present",
    gradeLabel: 'CGPA:',
    gradeValue: '8.12',
    location: 'Punjab, India'
  },
  {
    institution: 'M.D. Senior Secondary School',
    degree: 'Intermediate',
    duration: "Apr '21 – Mar '22",
    gradeLabel: 'Percentage:',
    gradeValue: '77.0',
    location: 'Haryana, India'
  },
  {
    institution: 'M.D. Senior Secondary School',
    degree: 'Matriculate',
    duration: "Apr '19 – Mar '20",
    gradeLabel: 'Percentage:',
    gradeValue: '79.2',
    location: 'Haryana, India'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-transparent">
      <div className="section-container relative z-10 max-w-4xl mx-auto">
        
        {/* Centered Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="mb-4 text-slate-300">
             <Cat size={36} />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg"
          >
            Academic foundations
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[5px] top-6 bottom-6 w-[2px] bg-white/5" />
          
          <div className="space-y-6 relative">
            {education.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-10 flex items-center"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 z-10" />
                
                {/* Card */}
                <div className="w-full bg-[#141414] border border-white/5 rounded-2xl p-6 hover:bg-[#1a1a1a] transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                      {item.institution}
                    </h3>
                    <span className="text-slate-400 text-sm font-medium whitespace-nowrap">
                      {item.duration}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 text-base mb-4 font-normal">
                    {item.degree}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium">
                    <span className="text-purple-400 tracking-wide">
                      {item.gradeLabel} {item.gradeValue}
                    </span>
                    
                    {item.location && (
                      <span className="flex items-center text-slate-400">
                        <MapPin size={16} className="mr-1 opacity-70" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
