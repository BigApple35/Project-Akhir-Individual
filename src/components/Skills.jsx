import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Laravel", icon: "devicon-laravel-original colored", color: "rgba(244, 63, 94, 0.4)", tag: "Framework" },
        { name: "Golang", icon: "devicon-go-original-wordmark colored", color: "rgba(6, 182, 212, 0.4)", tag: "Language" },
        { name: "React", icon: "devicon-react-original colored", color: "rgba(56, 189, 248, 0.4)", tag: "Library" },
        { name: "Vite", icon: "devicon-vitejs-plain colored", color: "rgba(168, 85, 247, 0.4)", tag: "Build Tool" },
        { name: "Java", icon: "devicon-java-plain colored", color: "rgba(234, 88, 12, 0.4)", tag: "Language" }
      ]
    },
    {
      title: "Runtime & Backend",
      skills: [
        { name: "Express.js", icon: "devicon-express-original text-slate-300", color: "rgba(255, 255, 255, 0.25)", tag: "Runtime/Backend" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored", color: "rgba(0, 117, 143, 0.4)", tag: "Database" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored", color: "rgba(16, 185, 129, 0.4)", tag: "Database" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-surface/40">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-indigo/5 blur-3xl pointer-events-none" />

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
            My <span className="text-gradient-primary">Skills</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base font-mono">
            / technologies-i-work-with
          </p>
        </motion.div>

        {/* Categories Loop */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category Title */}
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl font-bold font-display text-slate-200 mb-6 flex items-center gap-3"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-violet shadow-[0_0_8px_#8B5CF6]"></span>
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8, 
                      transition: { duration: 0.2, ease: "easeOut" } 
                    }}
                    style={{
                      '--glow-color': skill.color
                    }}
                    className="group relative glass-card rounded-2xl p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 border-white/5 hover:border-white/10"
                  >
                    {/* Radial Glow Highlight on Hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`,
                        filter: 'blur(10px)'
                      }}
                    />

                    {/* Tech Tag / Badge */}
                    <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {skill.tag}
                    </div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 flex items-center justify-center mb-4 mt-2 transition-transform duration-300 group-hover:scale-110">
                      <i className={`${skill.icon} text-4xl md:text-5xl`}></i>
                    </div>

                    {/* Skill Name */}
                    <span className="font-mono text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
