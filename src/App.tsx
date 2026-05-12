/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Download, 
  Send, 
  Cpu, 
  Code, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Globe,
  Award,
  Clock,
  User,
  CheckCircle2,
  Phone,
  Eye
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

// Fixed TypingEffect naming conflict and implementation
const TypEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <span className="font-heading">
      {displayText}
      <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

const SectionHeading = ({ children, title }: { children?: ReactNode, title: string }) => (
  <div className="mb-12 relative">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold font-heading mb-2 text-white"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: '100px' }}
      viewport={{ once: true }}
      className="h-1.5 bg-primary rounded-full"
    />
    {children}
  </div>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePortal, setActivePortal] = useState<'default' | 'about' | 'skills' | 'exp' | 'edu' | 'contact'>('default');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="floating-orb w-[500px] h-[500px] bg-primary top-[-10%] left-[-10%] animate-float" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-[400px] h-[400px] bg-turquoise bottom-[-10%] right-[-10%] animate-float" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-[300px] h-[300px] bg-red mid-y left-[40%] animate-float" style={{ animationDelay: '4s' }} />
        <div className="floating-orb w-[350px] h-[350px] bg-gold top-[20%] right-[10%] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-heading text-white tracking-tighter"
          >
            DOUGLAS<span className="text-primary">.</span>K
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {section.name}
              </a>
            ))}
            <a 
              href="mailto:kanyugadouglas@gmail.com"
              className="px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`}
                  className="text-2xl font-heading font-bold text-gray-300 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section.name}
                </a>
              ))}
              <a 
                href="mailto:kanyugadouglas@gmail.com"
                className="w-full py-4 text-center bg-primary text-white font-bold rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[90vh] flex items-center px-6 relative">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Available for Remote Opportunities</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-heading text-white mb-4 leading-none tracking-tighter">
                Douglas <br />
                <span className="text-primary">Kanyuga</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-400 mb-8 font-light max-w-lg">
                <TypEffect text="AI Data Annotation Specialist & Operations Support" />
              </div>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center text-gray-400">
                  <MapPin size={18} className="mr-2 text-turquoise" />
                  <span>Ngong, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail size={18} className="mr-2 text-red" />
                  <span>kanyugadouglas@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPreviewOpen(true)}
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  <Eye size={20} />
                  View CV
                </motion.button>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/uc?export=download&id=1cSwRjlk1Uy77Fzu1emZ_m9SaBYpq_Hqq"
                  download
                  className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  <Download size={20} />
                  Download
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="mt-12 flex space-x-6">
                {[
                  { icon: Github, url: 'https://github.com/douglaskanyuga' },
                  { icon: Linkedin, url: 'https://linkedin.com/in/douglaskanyuga' },
                  { icon: Twitter, url: 'https://x.com/douglaskanyuga' }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.2, color: '#FF6B35' }}
                    href={social.url}
                    target="_blank"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-[450px] mx-auto relative z-10">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -rotate-6" />
                <div className="absolute inset-0 border-2 border-turquoise/20 rounded-3xl rotate-3" />
                <div className="w-full h-full bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden relative group">
                  {/* Placeholder for Profile Photo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                    <User size={120} className="text-white/20" />
                  </div>
                  <img 
                    src="https://drive.google.com/thumbnail?id=1yoGy5zvD_GdhfXIcbFwSLONoOJpcs1nu&sz=w1000" 
                    alt="Douglas Kanyuga" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                </div>

                {/* Floating Stat Cards */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-8 top-10 glass-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">3+ Years</div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Experience</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -left-8 bottom-10 glass-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-turquoise/20 flex items-center justify-center text-turquoise">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">2 Languages</div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">English & Swahili</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="About Douglas">
              <p className="text-gray-400 text-lg max-w-2xl mt-4">
                Versatile professional with over 3 years of hands-on experience in high-impact operations and administrative roles.
              </p>
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { count: '3+', label: 'Years Experience', color: 'primary' },
                { count: '5', label: 'Professional Roles', color: 'turquoise' },
                { count: '98+', label: 'Project Accuracy', color: 'red' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 text-center"
                >
                  <div className={`text-5xl font-black text-${stat.color} mb-2`}>{stat.count}</div>
                  <div className="text-gray-400 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 p-8 md:p-12">
                  <div className="prose prose-invert">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Hi, I'm Douglas. I specialize in <span className="text-white font-semibold">AI Data Annotation</span>, where I bridge the gap between raw data and machine learning intelligence. My background ranges from customer service and sales at Airtel, to managing M-Pesa operations and providing computer instruction.
                    </p>
                    <div className="h-0.5 w-full bg-white/5 my-8" />
                    <p className="text-lg text-gray-400 leading-relaxed">
                      I bring a unique combination of technical skills and operational excellence. Whether I'm labeling speaker datasets for AI projects or assisting computer students with basic packages, my focus is always on precision, efficiency, and delivering value. Based in Ngong, Nairobi, I am ready to collaborate with international teams on projects that demand high-quality data and dedicated support.
                    </p>
                  </div>
                </div>
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1v8WF8h2KkgbuMRew0YV67OD9V_aHMQ5Y&sz=w1000" 
                    alt="Douglas Kanyuga" 
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent lg:hidden" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Core Competencies">
              <p className="text-gray-400 text-lg max-w-2xl">
                A multidisciplinary skill set optimized for accuracy and modern operations.
              </p>
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Cpu,
                  title: 'AI & Data',
                  color: 'text-primary',
                  skills: ['Transcription', 'Image Annotation', 'Prompt Evaluation', 'Dataset QA', 'Text Classification', 'Speaker Labeling']
                },
                {
                  icon: Code,
                  title: 'Technology',
                  color: 'text-turquoise',
                  skills: ['HTML/CSS/JS', 'React Basics', 'GitHub & Netlify', 'Annotation Tools', 'Troubleshooting', 'System Admin']
                },
                {
                  icon: Briefcase,
                  title: 'Productivity',
                  color: 'text-red',
                  skills: ['MS Excel/Word', 'PowerPoint', 'Google Docs', 'Deep Research', 'Documentation', 'Market Analysis']
                },
                {
                  icon: Globe,
                  title: 'Operations',
                  color: 'text-gold',
                  skills: ['Customer Service', 'Sales & CRM', 'M-Pesa Ops', 'Packaging/Logistics', 'Cash Management', 'Lab Instruction']
                }
              ].map((category, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 flex flex-col h-full"
                >
                  <div className={`p-3 w-12 h-12 rounded-xl bg-white/5 ${category.color} mb-6 flex items-center justify-center`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="space-y-2 flex-grow">
                    {category.skills.map((skill, j) => (
                      <div key={j} className="flex items-center text-gray-400 text-sm">
                        <ChevronRight size={14} className="mr-2 text-white/20" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Professional Journey" />

            <div className="space-y-12 relative before:absolute before:left-[17px] md:before:left-1/2 before:w-[2px] before:h-full before:bg-white/5">
              {[
                {
                  title: 'AI Transcription & Image Annotation Specialist',
                  company: 'Freelance Projects',
                  date: '2026 - Present',
                  side: 'left',
                  color: 'primary',
                  bullets: [
                    'Produced verbatim transcripts with strict speaker labeling and punctuation standards.',
                    'Corrected segmentation and attribution errors in audio-to-text annotation workflows.',
                    'Aligned transcript timing to source audio for precise dataset synchronization.',
                    'Completed fine-detail image comparison tasks with consistent 98%+ accuracy.',
                    'Evaluated and ranked AI prompts and responses for relevance, safety, and quality.'
                  ]
                },
                {
                  title: 'Assistant Computer Instructor',
                  company: 'Fr. John Hannon Memorial Computer College',
                  date: '2022 - Present (Part-time)',
                  side: 'right',
                  color: 'turquoise',
                  bullets: [
                    'Train students on core computer packages including Windows, Word, and Excel.',
                    'Assist in lab management and troubleshooting software/hardware issues.',
                    'Guided over 50+ students through certification exams with 100% pass rate.',
                    'Developed lesson plans to simplify complex technical concepts for beginners.'
                  ]
                },
                {
                  title: 'Sales & SIM Registration Agent',
                  company: 'Airtel Kenya',
                  date: 'May - June 2023',
                  side: 'left',
                  color: 'red',
                  bullets: [
                    'Registered new SIM cards with full regulatory compliance.',
                    'Assisted customers with onboarding and basic troubleshooting.',
                    'Executed daily sales targets for diverse telecommunication products.',
                    'Managed customer data entry using secure corporate handheld devices.'
                  ]
                },
                {
                  title: 'Packaging Assistant',
                  company: 'Ngong Veg Ltd Export Division',
                  date: 'Oct 2022',
                  side: 'right',
                  color: 'gold',
                  bullets: [
                    'Sorted, graded, and packed horticultural produce to international export standards.',
                    'Met tight production timelines while maintaining hygiene and quality requirements.',
                    'Ensured strict compliance with international food hygiene and safety standards.',
                    'Coordinated with logistics teams to ensure timely dispatch of goods.'
                  ]
                },
                {
                  title: 'M-Pesa Agent',
                  company: 'Self-Managed Operations',
                  date: 'Feb - May 2022',
                  side: 'left',
                  color: 'primary',
                  bullets: [
                    'Handled customer deposits, withdrawals, and transaction processing with 100% accuracy.',
                    'Maintained accurate ledger records and performed daily float reconciliations.',
                    'Provided exceptional customer support for transaction reversals and queries.',
                    'Safeguarded business float and reconciled accounts to maintain financial integrity.'
                  ]
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-start md:justify-center ${item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Dot */}
                  <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-[#0a0a0a] border-4 border-${item.color} z-10 hidden md:block`} />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] flex ${item.side === 'left' ? 'md:justify-end' : 'md:justify-start'} ml-10 md:ml-0`}>
                    <div className="glass-card p-6 md:p-8 w-full group">
                      <div className={`text-${item.color} font-bold text-sm uppercase tracking-widest mb-2 flex items-center`}>
                        <Clock size={14} className="mr-2" />
                        {item.date}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <div className="text-turquoise font-medium mb-6">{item.company}</div>
                      <ul className="space-y-3">
                        {item.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start text-gray-400 text-sm leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full bg-${item.color} mt-1.5 mr-3 shrink-0 opacity-50`} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Education & Training" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'KCSE Certificate',
                  institution: 'Waithaka Riverside Secondary',
                  date: '2019 - 2021',
                  detail: 'Kenya Certificate of Secondary Education',
                  icon: GraduationCap,
                  color: 'text-primary'
                },
                {
                  title: 'Computer Packages',
                  institution: 'Fr. John Hannon Memorial College',
                  date: 'Oct - Nov 2022',
                  detail: 'Comprehensive IT Skills Certification',
                  icon: Award,
                  color: 'text-turquoise'
                },
                {
                  title: 'Driving License',
                  institution: 'Karengata Driving School',
                  date: 'May 2021',
                  detail: 'Professional Class B Certification',
                  icon: Globe,
                  color: 'text-red'
                },
                {
                  title: 'KCPE Certificate',
                  institution: 'Kahia Academy',
                  date: '2007 - 2015',
                  detail: '356 Marks Score',
                  icon: GraduationCap,
                  color: 'text-gold'
                }
              ].map((edu, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 text-center relative overflow-hidden h-full group"
                >
                  <div className={`mx-auto w-16 h-16 rounded-full bg-white/5 ${edu.color} mb-6 flex items-center justify-center`}>
                    <edu.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">{edu.date}</div>
                  <div className="text-turquoise font-medium text-sm mb-2">{edu.institution}</div>
                  <p className="text-gray-400 text-xs italic">{edu.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black font-heading text-white mb-8 leading-tight">
                Ready to <span className="text-primary tracking-tighter">Collaborate?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                I am currently looking for new opportunities to leverage my skills in AI annotation and operations. If you have a project or task, let's talk.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
                <div className="glass-card p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Me</div>
                      <div className="text-white font-bold">kanyugadouglas@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-turquoise/20 flex items-center justify-center text-turquoise">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Call Me</div>
                      <div className="text-white font-bold">+254 741 820 560</div>
                      <div className="text-white/60 text-sm italic">+254 757 315 757</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red/20 flex items-center justify-center text-red">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Location</div>
                      <div className="text-white font-bold">Ngong, Nairobi, Kenya</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Availability</div>
                      <div className="text-white font-bold">Full-Time / Freelance / Remote</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPreviewOpen(true)}
                  className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-2xl shadow-primary/30"
                >
                  <Eye size={24} />
                  View Full CV
                </motion.button>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/uc?export=download&id=1cSwRjlk1Uy77Fzu1emZ_m9SaBYpq_Hqq"
                  download
                  className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-white/10"
                >
                  <Download size={24} />
                  Download PDF
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-medium">
              &copy; 2026 <span className="text-white">Douglas Kanyuga</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with passion from Nairobi, Kenya 🇰🇪
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {[
              { icon: Github, url: 'https://github.com/douglaskanyuga' },
              { icon: Linkedin, url: 'https://linkedin.com/in/douglaskanyuga' },
              { icon: Twitter, url: 'https://x.com/douglaskanyuga' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 flex flex-col shadow-2xl"
            >
              <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-[#1a1a1a]">
                <div>
                  <h3 className="text-xl font-bold text-white">Douglas Kanyuga - CV</h3>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">AI Data Annotation Specialist</p>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1cSwRjlk1Uy77Fzu1emZ_m9SaBYpq_Hqq"
                    download
                    className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                    title="Download PDF"
                  >
                    <Download size={20} />
                  </a>
                  <button 
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              <div className="flex-grow bg-[#2a2a2a] relative">
                <iframe 
                  src="https://drive.google.com/file/d/1cSwRjlk1Uy77Fzu1emZ_m9SaBYpq_Hqq/preview" 
                  className="w-full h-full border-none"
                  title="CV Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
