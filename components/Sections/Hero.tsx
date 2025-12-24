import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from '../UI/GlassCard';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax optimized for 60fps - Slow, deliberate movement
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const foregroundY = useTransform(scrollY, [0, 1000], [0, -80]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 pb-24">
      
      {/* 
        Atmospheric Glow behind text 
        Very subtle white glow to lift text off the black background
      */}
      <motion.div 
        style={{ y: backgroundY, opacity: opacityFade }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[1200px] h-[800px] pointer-events-none"
      >
        <div className="w-full h-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.08)_0%,transparent_100%)] blur-[80px]" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-[980px] mx-auto">
          
          <motion.div
            style={{ y: foregroundY }}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Semantic Label - Monochrome */}
            <div className="flex justify-center mb-10">
               <motion.span 
                 whileHover={{ scale: 1.05 }}
                 className="px-3 py-1 rounded-full bg-[#1c1c1e] border border-white/[0.1] backdrop-blur-xl text-[12px] font-medium text-white/70 tracking-wide cursor-default"
               >
                 Interface Engineer
               </motion.span>
            </div>

            {/* Main Headline - Apple Pro Typography */}
            <h1 className="text-center text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
              Designed for depth. <br />
              <span className="text-[#86868b]">Engineered for precision.</span>
            </h1>

            {/* Subtext - Readable, constrained width */}
            <p className="text-center text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto font-normal leading-relaxed mb-14 tracking-tight">
              Building highly polished web interfaces that feel native. 
              Focusing on micro-interactions, spatial design, and system architecture.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a 
                href="#portfolio" 
                className="px-8 py-3 rounded-full bg-white text-black text-[15px] font-medium hover:bg-[#f5f5f7] transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                View Selected Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-[#1d1d1f] text-white text-[15px] font-medium border border-[#424245] hover:bg-[#2c2c2e] hover:border-white/20 transition-all duration-300"
              >
                Contact
              </a>
            </div>

          </motion.div>

          {/* Floating System Visual - Abstract Interface Stack */}
          <motion.div
             initial={{ opacity: 0, scale: 0.92, y: 60 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="mt-32 mx-auto max-w-4xl perspective-[2000px]"
          >
            <div className="relative transform-style-3d rotate-x-[10deg]">
                <GlassCard className="!rounded-[28px] aspect-[21/9] flex items-center justify-center !bg-[#0b0b0b]/80 !border-white/[0.08] !backdrop-blur-[60px] shadow-2xl relative z-20">
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
                    <div className="flex flex-col items-center gap-8 opacity-60 w-full px-12">
                        {/* Fake UI Header */}
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                            </div>
                            <div className="h-2 w-32 bg-white/10 rounded-full" />
                            <div className="w-4 h-4 rounded-full bg-white/10" />
                        </div>
                        {/* Fake UI Body */}
                        <div className="w-full grid grid-cols-3 gap-6">
                             <div className="col-span-2 h-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5" />
                             <div className="col-span-1 h-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5" />
                        </div>
                    </div>
                </GlassCard>
                
                {/* Back Layer for depth */}
                <div className="absolute inset-0 top-6 left-0 right-0 -z-10 bg-[#1c1c1e]/50 rounded-[28px] scale-[0.95] blur-sm border border-white/[0.05]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;