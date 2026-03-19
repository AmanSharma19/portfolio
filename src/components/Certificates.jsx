import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { ExternalLink, Award } from 'lucide-react';

const certificates = [
  { 
    title: 'OCI - Data Science professional', 
    issuer: 'Oracle Cloud Infrastructure', 
    year: '2025',
    description: 'Advanced professional certification covering cloud data science, machine learning, and AI implementation on OCI.',
    link: 'https://drive.google.com/file/d/1-SYhZYTbN7yO3d-S5ZTO5Z0H27SyBpHa/view',
    image: '/oci_cert.png'
  },
  { 
    title: 'Introduction to Internet of Things', 
    issuer: 'NPTEL', 
    year: '2025',
    description: 'Comprehensive course on IoT architecture, protocols, and smart systems integration with real-world applications.',
    link: 'https://drive.google.com/file/d/1FY-8y2dF-hUubCGb5_Mvk0z2SgqqsyjP/view?usp=drive_link',
    image: '/nptel_cert.png'
  },
  { 
    title: 'Java Programming', 
    issuer: 'Lovely Professional University', 
    year: '2025',
    description: 'Intensive course on Java programming fundamentals, object-oriented concepts, and application development on iamneo platform.',
    link: 'https://verify.iamneo.ai/c/24bL5DM3dj70k8Al0Bm1',
    image: '/lpu_java.png'
  },
  {
    title: 'Tata Data Visualization',
    issuer: 'Forage',
    year: '2025',
    description: 'Practical job simulation focusing on data visualization strategies, insights extraction, and stakeholder presentation.',
    link: 'https://drive.google.com/file/d/1Mkye7d-laBZCUmJxcRmrqpJ7bJsqKuyo/view?usp=sharing',
    image: '/tata_cert.png'
  },
  {
    title: 'Deloitte Data Analytics',
    issuer: 'Forage',
    year: '2025',
    description: 'Data analytics job simulation certificate focusing on data analysis and forensic technology application.',
    link: 'https://drive.google.com/file/d/1LW0q0Ar96hqBJaIEss4F-jaRovs56eIq/view?usp=sharing',
    image: '/deloitte_cert.png'
  },
  {
    title: 'Computer Networking',
    issuer: 'Google',
    year: '2024',
    description: 'The Bits and Bytes of Computer Networking - covering network protocols, DNS, DHCP, and troubleshooting.',
    link: 'https://coursera.org/verify/XTS1ELYKAMB9',
    image: '/google_networking.png'
  },
  {
    title: 'Hardware and Operating Systems',
    issuer: 'IBM',
    year: '2024',
    description: 'Introduction to Hardware and Operating Systems - covering computer components and OS architectures.',
    link: 'https://coursera.org/verify/73TUSBKY2EN6',
    image: '/ibm_hardware_os.png'
  },
  {
    title: 'Unlocking DSA with C',
    issuer: 'CSE Pathshala',
    year: '2024',
    description: 'In-depth mastery of Data Structures and Algorithms using C programming, focusing on efficiency and logic.',
    link: 'https://drive.google.com/file/d/1ubHaH78kpAExM-uyWbU7jPTifKIL74E5/view?usp=drive_link',
    image: '/cse_pathshala_cert.png'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2023',
    description: 'Foundational certification covering HTML5, CSS3, Flexbox, and Grid through project-based learning.',
    link: 'https://freecodecamp.org/certification/fccd13c6312-3a83-423f-81f1-3c563ded1c96/responsive-web-design',
    image: '/fcc_responsive_web_design.png'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-slate-900/10">
      <div className="section-container">
        <SectionTitle 
          title="Certifications" 
          subtitle="A showcase of my professional credentials and specialized training." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#111827] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-sky-500/10"
            >
              {/* Top Thumbnail Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />
                
                {/* Issuer Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                    {cert.issuer}
                  </span>
                </div>

                {/* Date Overlay */}
                <div className="absolute bottom-4 right-4 text-white/80 font-bold text-xs">
                  {cert.year}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-black text-sky-400 leading-tight group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h3>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-500 hover:text-white transition-colors pt-1"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow italic">
                  {cert.description}
                </p>

                {/* Footer Info */}
                <div className="flex justify-between items-center pt-6 border-t border-slate-800">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Award size={14} className="text-sky-500" />
                    {cert.issuer}
                  </div>
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                    {cert.year}
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

export default Certificates;
