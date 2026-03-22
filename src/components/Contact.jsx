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
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending message...' });

    // Using your provided access_key
    const submissionData = {
      ...formData,
      access_key: "b9639a92-f26b-40c0-83e4-241d00f1eb36",
      from_name: formData.name,
      to_email: "amanjangra0210@gmail.com"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        setStatus({ state: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset state after 5 seconds
        setTimeout(() => setStatus({ state: 'idle', message: '' }), 5000);
      } else {
        alert("Error: " + data.message);
        setStatus({ state: 'error', message: "Error: " + data.message });
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="connect" className="py-24 bg-transparent">
      <div className="section-container relative z-10">
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
            <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
               <h3 className="text-2xl font-black mb-6 text-white tracking-tight">Contact Information</h3>
               
               <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                   <a 
                     href="https://mail.google.com/mail/?view=cm&fs=1&to=amanjangra0210@gmail.com" 
                     target="_blank"
                     rel="noreferrer"
                     className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/5 text-blue-500 flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     <Mail size={24} />
                   </a>
                   <div>
                     <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Me</p>
                     <p className="text-lg font-medium dark:text-slate-200">amanjangra0210@gmail.com</p>
                   </div>
                 </div>

                 <div className="flex items-center space-x-4">
                   <a href="tel:+918950864892" className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-[#262626] text-purple-400 flex items-center justify-center hover:scale-110 transition-transform">
                     <Phone size={24} />
                   </a>
                   <div>
                     <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call Me</p>
                     <p className="text-lg font-medium dark:text-slate-200">+91 8950864892</p>
                   </div>
                 </div>
               </div>

               <div className="mt-8 pt-8 border-t border-[#262626]">
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
                        className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] text-slate-400 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110"
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
            <form onSubmit={handleSubmit} className="bg-[#141414] p-8 rounded-2xl border border-white/5 space-y-6">
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
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-[#0a0a0a] text-white focus:outline-none focus:border-purple-500 transition-all autofill:bg-[#0a0a0a] autofill:text-white [-webkit-box-shadow:0_0_0_50px_#0a0a0a_inset] [-webkit-text-fill-color:#fff]"
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
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-[#0a0a0a] text-white focus:outline-none focus:border-purple-500 transition-all autofill:bg-[#0a0a0a] autofill:text-white [-webkit-box-shadow:0_0_0_50px_#0a0a0a_inset] [-webkit-text-fill-color:#fff]"
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
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-[#0a0a0a] text-white focus:outline-none focus:border-purple-500 transition-all autofill:bg-[#0a0a0a] autofill:text-white [-webkit-box-shadow:0_0_0_50px_#0a0a0a_inset] [-webkit-text-fill-color:#fff]"
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
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-[#0a0a0a] text-white focus:outline-none focus:border-purple-500 transition-all resize-none autofill:bg-[#0a0a0a] autofill:text-white [-webkit-box-shadow:0_0_0_50px_#0a0a0a_inset] [-webkit-text-fill-color:#fff]"
                ></textarea>
              </div>
              {status.state === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full py-6 rounded-xl bg-green-500/10 border border-green-500/20 flex flex-col items-center justify-center space-y-2 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white mb-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-black text-white tracking-tight">Success!</h4>
                  <p className="text-green-400 font-bold text-sm tracking-tight px-4">Your message has been delivered to Aman.</p>
                </motion.div>
              ) : (
                <button 
                  type="submit" 
                  disabled={status.state === 'loading'}
                  className={`btn-primary w-full justify-center space-x-2 py-4 text-lg font-bold shadow-purple-500/20 shadow-xl flex items-center group transition-all duration-300 ${status.state === 'loading' ? 'opacity-70 scale-95' : 'hover:scale-[1.02]'}`}
                >
                  {status.state === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              )}
              
              {status.state === 'error' && (
                 <p className="text-red-400 text-sm text-center font-bold tracking-tight animate-pulse mt-4">{status.message}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
