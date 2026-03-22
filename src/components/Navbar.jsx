import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Training', to: 'training' },
  { name: 'Connect', to: 'connect' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed z-50 transition-all duration-500 w-full md:w-auto md:left-1/2 md:-translate-x-1/2 ${
          scrolled 
            ? 'top-0 md:top-6 bg-white/10 dark:bg-[#141414]/40 backdrop-blur-xl border md:border border-white/10 dark:border-white/5 md:rounded-full py-3 md:py-2 px-4 md:px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]' 
            : 'top-0 md:top-6 bg-transparent py-5 md:py-2 px-4 md:px-6'
        }`}
      >
        <div className="flex justify-between items-center gap-4 md:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-black font-mono tracking-tighter text-slate-900 dark:text-white cursor-pointer group hover:opacity-80 transition-opacity">
              &lt;AS /&gt;
            </h1>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-purple-500 font-bold dark:text-purple-400"
                className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all cursor-pointer text-xs font-semibold uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-3xl transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-slate-200 hover:text-purple-500 dark:hover:text-purple-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
