import { motion } from 'framer-motion';

export default function Projects() {
  const projectsList = [
    {
      title: "eSchool.id",
      status: "Live Project",
      description: "A comprehensive web-based school management platform designed to streamline administrative workflows, manage student records, coordinate academic grading systems, and enhance communication between parents and educators.",
      technologies: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      githubLink: "#",
      liveLink: "#",
      glowColor: "rgba(99, 102, 241, 0.15)",
      gradient: "from-brand-indigo to-brand-violet"
    },
    {
      title: "Coociezex",
      status: "Live Project",
      description: "An immersive e-commerce and interactive customization web platform for cookie configurations. Features secure checkout pipelines, dynamic custom order structures, and full database configurations for recipe and inventory controls.",
      technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
      glowColor: "rgba(6, 182, 212, 0.15)",
      gradient: "from-brand-cyan to-brand-indigo"
    }
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-brand-indigo/5 blur-3xl pointer-events-none" />

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
            Featured <span className="text-gradient-primary">Projects</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base font-mono">
            / real-world-implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Radial glow background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${project.glowColor} 0%, transparent 60%)`,
                  filter: 'blur(15px)'
                }}
              />

              <div>
                {/* Header Status & Icon */}
                <div className="flex items-center justify-between mb-6">
                  {/* Status Indicator */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                    {project.status}
                  </span>
                  
                  {/* Folder Icon */}
                  <svg 
                    className="w-6 h-6 text-slate-500 group-hover:text-brand-cyan transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>

                {/* Project Title (Gradient text) */}
                <h3 className={`text-2xl md:text-3xl font-bold font-display mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text -webkit-background-clip-text text-transparent`}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-slate-300 hover:text-white hover:border-brand-violet/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <i className="devicon-github-original text-lg"></i>
                    <span>Source Code</span>
                  </a>
                  
                  <a 
                    href={project.liveLink}
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-brand-cyan hover:text-white transition-colors group/link"
                  >
                    <span>Visit Live</span>
                    <svg 
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
