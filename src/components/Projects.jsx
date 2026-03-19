import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Water Level Indicator',
    description: 'A custom 3D rendering engine built from scratch using WebGL and TypeScript. Supports PBR and global illumination.',
    tech: ['C++', 'Arduino', 'IoT'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9479?w=800&q=80'
  },
  {
    title: 'Netflix Data Analytics Dashboard',
    description: 'Real-time monitoring dashboard for Kubernetes clusters with predictive node scaling using ML models.',
    tech: ['SQL', 'Excel', 'Power BI', 'Python'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    title: 'Library Management System',
    description: 'A high-performance design system component library with accessibility baked in at the core.',
    tech: ['Java', 'Swing', 'Object-Oriented Programming'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1541461985943-9e5a20f92476?w=800&q=80'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <SectionTitle
          title="Curated Work"
          subtitle="A selection of laboratory projects and professional contributions."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl glass"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono font-bold text-sky-400 px-2 py-0.5 rounded-full border border-sky-400/30 bg-sky-400/5">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-black text-white mb-2 flex items-center group/title">
                  {project.title}
                  <ArrowUpRight size={20} className="ml-2 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
                </h3>

                <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-800/80 text-white hover:bg-sky-500 transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-800/80 text-white hover:bg-sky-500 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
