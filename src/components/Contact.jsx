import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "drscity20@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      name: "Email Address",
      value: emailAddress,
      icon: "devicon-google-plain colored",
      href: `mailto:${emailAddress}`,
      action: handleCopyEmail,
      actionText: copied ? "Copied!" : "Copy",
      isCopy: true,
      color: "rgba(239, 68, 68, 0.15)",
      borderColor: "group-hover:border-red-500/30"
    },
    {
      name: "GitHub",
      value: "BigApple35",
      icon: "devicon-github-original text-white",
      href: "https://github.com/BigApple35",
      actionText: "Follow",
      isCopy: false,
      color: "rgba(139, 92, 246, 0.15)",
      borderColor: "group-hover:border-purple-500/30"
    },
    {
      name: "LinkedIn",
      value: "Daris Nur Rahmat",
      icon: "devicon-linkedin-plain colored",
      href: "https://www.linkedin.com/in/daris-nur-90409a264/",
      actionText: "Connect",
      isCopy: false,
      color: "rgba(59, 130, 246, 0.15)",
      borderColor: "group-hover:border-blue-500/30"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-surface/40">
      {/* Background Decorative glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-96 h-96 rounded-full bg-brand-indigo/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display inline-block relative">
            Get In <span className="text-gradient-primary">Touch</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base font-mono">
            / start-a-conversation
          </p>
        </motion.div>

        {/* Centralized Glassmorphic Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 border-white/5 relative overflow-hidden text-center shadow-xl"
        >
          {/* Neon Top Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan" />

          {/* Heading call to action */}
          <h3 className="text-2xl md:text-4xl font-bold font-display text-white mb-4">
            Let's build something together!
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10">
            I am always open to exploring new engineering roles, collaboration opportunities, or simply networking with fellow software enthusiasts. Feel free to reach out!
          </p>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-dark-base/50 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-slate-800 flex flex-col justify-between items-center h-48 overflow-hidden hover:-translate-y-1"
              >
                {/* Micro glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${item.color} 0%, transparent 80%)`,
                    filter: 'blur(10px)'
                  }}
                />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${item.icon} text-2xl`}></i>
                </div>

                {/* Text Context */}
                <div className="text-center">
                  <span className="text-xs font-mono text-slate-500 block mb-1 uppercase tracking-wider">{item.name}</span>
                  <span className="text-sm font-medium text-slate-200 block truncate max-w-[180px]">{item.value}</span>
                </div>

                {/* Call to action button */}
                {item.isCopy ? (
                  <button
                    onClick={item.action}
                    className={`mt-4 px-4 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 ${
                      copied 
                        ? 'bg-brand-cyan/20 border-brand-cyan/40 text-brand-cyan' 
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-brand-indigo/50'
                    }`}
                  >
                    {item.actionText}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 px-4 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-brand-indigo/50 transition-all duration-300"
                  >
                    {item.actionText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
