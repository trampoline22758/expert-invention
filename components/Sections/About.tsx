import React from 'react';
import GlassCard from '../UI/GlassCard';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 relative z-10">
      <div className="container mx-auto px-6 md:px-8 max-w-[1100px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative h-[500px] flex items-center justify-center">
             {/* Abstract Stack Visual */}
             {[0, 1, 2].map((i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.8, y: 40 }}
                 whileInView={{ opacity: 1 - i * 0.2, scale: 1 - i * 0.05, y: -i * 30 }}
                 viewport={{ once: true }}
                 transition={{ 
                    duration: 1, 
                    delay: i * 0.2, 
                    ease: [0.16, 1, 0.3, 1] 
                 }}
                 className="absolute w-full max-w-sm aspect-[4/5] rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#202022] to-[#101010] shadow-2xl backdrop-blur-3xl"
                 style={{ 
                    zIndex: 3 - i,
                    transformOrigin: 'bottom center' 
                 }}
               >
                 {i === 0 && (
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="w-full h-1/2 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05]" />
                        <div className="space-y-3">
                            <div className="h-2 w-3/4 bg-white/[0.08] rounded-full" />
                            <div className="h-2 w-1/2 bg-white/[0.08] rounded-full" />
                        </div>
                    </div>
                 )}
               </motion.div>
             ))}
          </div>

          {/* Content Side */}
          <div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8"
            >
               The Architect.
            </motion.h2>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 text-[#86868b] text-lg font-normal leading-relaxed"
            >
                <p>
                    I believe the best interfaces are the ones you don't notice. They feel like an extension of your thought process—immediate, responsive, and clear.
                </p>
                <p>
                    With over 8 years of engineering experience, I specialize in the intersection of design systems and frontend infrastructure. My work is grounded in the belief that performance is a feature, and aesthetics are a function.
                </p>
                <p>
                    Currently obsessed with: Rust-based tooling, WebGL shaders, and the pursuit of the perfect 60fps scroll.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 flex flex-wrap gap-4"
            >
               <GlassCard className="px-6 py-3 !rounded-full !bg-white/[0.05] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                  <span className="text-[13px] text-white font-medium tracking-wide">Available for new projects</span>
               </GlassCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;