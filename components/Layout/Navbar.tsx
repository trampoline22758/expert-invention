import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for switching navbar state
      setIsScrolled(window.scrollY > 20);
    };
    
    // Add passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled ? 'py-4' : 'py-6'}
        `}
      >
        <div className="flex justify-center">
          <div 
            className={`
              relative flex items-center px-2
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isScrolled || mobileMenuOpen
                ? 'bg-[#1d1d1f]/80 backdrop-blur-[30px] backdrop-saturate-[180%] rounded-full py-2 pl-3 pr-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border border-white/[0.1]' 
                : 'bg-transparent py-2 pl-3 pr-2'}
            `}
          >
            {/* Brand */}
            <a href="#home" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f7] text-black mr-2 hover:scale-105 transition-transform duration-300 shadow-md">
              <span className="font-bold text-[11px] tracking-tight">AK</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-[13px] font-medium text-[#e8e8ed] hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Button - Premium Finish */}
            <div className="hidden md:block ml-2">
               <a 
                href="#contact" 
                className="
                  group relative flex items-center justify-center
                  px-5 py-2 rounded-full 
                  bg-[#0071e3] text-white text-[13px] font-medium tracking-wide
                  overflow-hidden transition-all duration-300
                  hover:bg-[#0077ED] shadow-[0_0_15px_rgba(0,113,227,0.4)]
                  active:scale-[0.98]
                "
               >
                  {/* Subtle sheen effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Connect</span>
               </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden ml-2 p-2 text-white/90 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      <div 
        className={`
          fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] z-50 md:hidden
          transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}
      >
           <div className="bg-[#1c1c1e]/90 backdrop-blur-[40px] backdrop-saturate-[180%] rounded-[24px] border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.6)] p-2 flex flex-col gap-1 overflow-hidden">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: `${i * 50}ms` }}
                  className={`
                    text-center text-[16px] font-medium text-white/90 p-4 hover:bg-white/[0.08] rounded-[18px] transition-all
                    ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                  `}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/[0.08] my-1 mx-4" />
              <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center text-[16px] font-semibold text-[#0071e3] p-4 hover:bg-[#0071e3]/10 rounded-[18px] transition-colors"
                >
                  Connect
              </a>
           </div>
      </div>
    </>
  );
};

export default Navbar;