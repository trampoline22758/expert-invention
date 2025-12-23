import React from 'react';
import LiquidBackground from './components/Layout/LiquidBackground';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Process from './components/Sections/Process';
import Portfolio from './components/Sections/Portfolio';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import AiAssistant from './components/Features/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-[#F5F5F7] font-sans selection:bg-[#007AFF]/30 selection:text-white antialiased">
      {/* Dynamic Wallpaper Layer */}
      <LiquidBackground />

      {/* Main Content Layer */}
      <main className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Contact />
      </main>

      {/* Floating AI Assistant */}
      <AiAssistant />

      {/* System Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#000000]/60 backdrop-blur-xl py-12 text-center">
        <p className="text-[#86868b] text-[11px] font-medium tracking-wide">
          Designed in California. Built with React.
        </p>
      </footer>
    </div>
  );
};

export default App;