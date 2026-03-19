import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center space-x-3 mb-2"
      >
        <div className="h-0.5 w-12 bg-sky-500 rounded-full" />
        <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">{title}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black mb-4 dark:text-white tracking-tighter"
      >
        {subtitle || title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
