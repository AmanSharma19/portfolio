import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    title: 'Winter PEP Training',
    company: 'Test Yantra',
    period: "Jan '26 – Feb '26",
    description: [
      'Completed intensive full-stack training covering Core Java and Advanced Java concepts',
      'Developed backend applications using Hibernate, Spring MVC, Spring JPA, and Spring Boot',
      'Gained hands-on experience with AWS services including EC2, S3, RDS, Lambda, and IAM',
      'Deployed and managed applications on cloud infrastructure with secure access control using IAM',
      'Trained under domain experts across Java backend frameworks and cloud technologies'
    ],
    stats: [
      { value: '150+', label: 'Hours' },
      { value: 'Java Full Stack', label: 'Stack' },
      { value: 'EC2, S3, RDS, Lambda, IAM', label: 'AWS' }
    ]
  },
  {
    title: 'Summer Training',
    company: 'LPU',
    period: "Jun '25 – Jul '25",
    description: [
      'Conducted comprehensive data extraction, cleaning, and preprocessing activities using SQL and Python, ensuring well-structured datasets.',
      'Designed, developed, and refined interactive dashboards and visual analytics reports in Power BI and Tableau to present insights clearly.',
      'Utilized advanced Excel functions, pivot tables, data modeling features, and visualization tools to analyze large datasets and identify patterns.'
    ],
    stats: [
      { value: '80+', label: 'Hours' },
      { value: 'Data Analytics', label: 'Stack' },
      { value: 'Tableau, Power BI, SQL', label: 'Tools' }
    ]
  }
];

const Experience = () => {
  return (
    <section id="training" className="py-24 bg-transparent">
      <div className="section-container relative z-10 max-w-4xl mx-auto">
        <SectionTitle 
          title="Training" 
          subtitle="A summary of my hands-on training and technical development journey." 
        />

        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-[5px] top-6 bottom-6 w-[2px] bg-white/5" />

          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12 flex"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-[2.25rem] -translate-y-1/2 w-3 h-3 rounded-full bg-[#8b5cf6] z-10" />

                {/* Card */}
                <div className="w-full bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#161616] transition-colors">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 rounded bg-[#2b1836] text-[#c084fc] text-xs font-semibold tracking-wide">
                        {exp.company}
                      </span>
                    </div>
                    <div className="text-slate-400 text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  {/* Description List */}
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start text-slate-300 font-normal leading-relaxed text-sm">
                        <span className="text-[#a855f7] text-[10px] mt-1 mr-3 shrink-0 selection-none">
                          ▷
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Stats Footer */}
                  <div className="pt-6 border-t border-white/5">
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-12 lg:gap-16">
                      {exp.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col text-left">
                          <span className="text-[#a855f7] font-bold text-lg md:text-xl tracking-tight mb-1">
                            {stat.value}
                          </span>
                          <span className="text-slate-400 text-xs font-medium tracking-wide">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default Experience;
