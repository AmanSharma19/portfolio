import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=amanjangra0210@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's connect." 
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
               <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
               
               <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                   <a 
                     href="https://mail.google.com/mail/?view=cm&fs=1&to=amanjangra0210@gmail.com" 
                     target="_blank"
                     rel="noreferrer"
                     className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     <Mail size={24} />
                   </a>
                   <div>
                     <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Me</p>
                     <p className="text-lg font-medium dark:text-slate-200">amanjangra0210@gmail.com</p>
                   </div>
                 </div>

                 <div className="flex items-center space-x-4">
                   <a href="tel:+918950864892" className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center hover:scale-110 transition-transform">
                     <Phone size={24} />
                   </a>
                   <div>
                     <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call Me</p>
                     <p className="text-lg font-medium dark:text-slate-200">+91 8950864892</p>
                   </div>
                 </div>
               </div>

               <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                 <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Social Profiles</h4>
                 <div className="flex space-x-4">
                    {[
                      { icon: <Github size={20} />, link: 'https://github.com/AmanSharma19' },
                      { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/amans8/' },
                      { icon: <Mail size={20} />, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=amanjangra0210@gmail.com' }
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href={social.link} 
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                      >
                        {social.icon}
                      </a>
                    ))}
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center space-x-2 py-4 text-lg font-bold shadow-blue-500/20 shadow-xl flex items-center">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
