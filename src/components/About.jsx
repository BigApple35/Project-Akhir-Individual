import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-brand-violet/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display inline-block relative">
            About <span className="text-gradient-primary">Me</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base font-mono">
            / academic-profile & bio
          </p>
        </motion.div>

        {/* Content Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Side: Academic / Profile Info Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg border-white/5"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-brand-cyan/10 blur-xl group-hover:bg-brand-cyan/20 transition-all duration-500" />
            
            <div>
              {/* Decorative Tech Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                <span>Active Student</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-6">Academic Background</h3>
              
              {/* Detailed Specs List */}
              <div className="space-y-4">
                <div className="border-b border-white/5 pb-3">
                  <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">Institution</span>
                  <span className="text-slate-200 font-medium font-display text-lg">Universitas Brawijaya</span>
                </div>
                <div className="border-b border-white/5 pb-3">
                  <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">Faculty</span>
                  <span className="text-slate-200 font-medium font-display text-lg">Fakultas Ilmu Komputer (FILKOM)</span>
                </div>
                <div className="border-b border-white/5 pb-3">
                  <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">Program Study</span>
                  <span className="text-slate-200 font-medium font-display text-lg">Sistem Informasi</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">Specialization</span>
                  <span className="text-slate-200 font-medium font-display text-lg">Backend & Full-Stack Development</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-violet/20 transition-colors">
                <span className="text-gradient-primary font-black text-2xl block font-display">2025</span>
                <span className="text-xs text-slate-400 font-mono">Current Year</span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-cyan/20 transition-colors">
                <span className="text-gradient-primary font-black text-2xl block font-display">2+</span>
                <span className="text-xs text-slate-400 font-mono">Live Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Bio */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-center border-white/5"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-6">
              Passionate about engineering reliable web applications.
            </h3>
            
            <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                Hello! My name is <strong className="text-white">Daris Nur Rahmat</strong>. I am currently pursuing an Information Systems degree at Universitas Brawijaya. My academic journey has allowed me to cultivate a profound interest in software architecture, systems integration, and backend development.
              </p>
              <p>
                I thrive on building optimized server-side logic and architecting clean, maintainable relational and non-relational database structures. Whether working with <strong className="text-brand-cyan font-mono">Laravel</strong>, <strong className="text-brand-indigo font-mono">Golang</strong>, or <strong className="text-brand-violet font-mono">Node.js/Express</strong>, my ultimate goal is to write performant code that solves real-world challenges.
              </p>
              <p>
                Outside of curriculum-based learning, I dedicate my time to exploring modern tools and microservices methodologies. I value modular coding standards, secure API designs, and smooth deployment workflows. Let's work together to transform your digital concepts into dynamic, live platforms.
              </p>
            </div>

            {/* Quote Badge */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-brand-indigo/10 to-brand-cyan/10 border-l-4 border-brand-violet font-mono text-xs text-slate-400">
              "Simple is better than complex. Complex is better than complicated. I code with maintainability and performance in mind."
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
