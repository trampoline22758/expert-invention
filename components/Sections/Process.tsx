import React from 'react';
import GlassCard from '../UI/GlassCard';
import { PROCESS_STEPS } from '../../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-40 relative z-10">
      <div className="container mx-auto px-6 md:px-8 max-w-[1100px]">
        
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6"
          >
            The Methodology.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#86868b] text-xl md:text-2xl font-normal leading-relaxed"
          >
            From abstract concepts to shipped products. A rigorous four-stage pipeline ensuring quality at every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.1] to-transparent -translate-x-1/2" />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative flex 
                ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12 md:mt-24'}
              `}
            >
              {/* Connector Dot */}
              <div className={`
                hidden md:block absolute top-1/2 w-3 h-3 rounded-full bg-[#1c1c1e] border border-white/20 z-10
                ${index % 2 === 0 ? '-right-[6px] translate-x-1/2' : '-left-[6px] -translate-x-1/2'}
              `} />

              <GlassCard className="p-8 w-full max-w-[400px] !bg-[#151516]/80 hover:!bg-[#1a1a1c] transition-colors duration-500">
                <div className="flex items-start justify-between mb-6">
                   <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-white">
                      <step.icon size={20} strokeWidth={1.5} />
                   </div>
                   <span className="text-[#86868b] font-mono text-sm tracking-widest opacity-50">{step.id}</span>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-[15px] text-[#86868b] leading-relaxed font-normal">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;