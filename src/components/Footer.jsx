export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-base py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Attribution */}
        <div className="text-slate-400 text-sm font-display text-center md:text-left">
          Built with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-white font-medium">Daris Nur Rahmat</span>
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <span className="text-xs font-mono text-slate-600">
            Copyright &copy; 2025
          </span>
          
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-slate-400 hover:text-white hover:bg-white/10 hover:border-brand-violet/30 transition-all duration-300 group"
          >
            <span>Back to top</span>
            <svg 
              className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
