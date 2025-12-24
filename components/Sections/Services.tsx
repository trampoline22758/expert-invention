import React from 'react';
import GlassCard from '../UI/GlassCard';
import { SERVICES } from '../../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 relative z-10">
      <div className="container mx-auto px-6 md:px-8 max-w-[1100px]">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6"
          >
            Expertise.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#86868b] text-xl md:text-2xl font-normal leading-relaxed max-w-3xl"
          >
            A disciplined approach to digital product development, bridging the gap between rigorous engineering and organic design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <GlassCard key={index} delay={index * 0.1} hoverEffect={true} className="p-8 flex flex-col h-full min-h-[320px] justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center mb-8 text-white">
                  <service.icon size={22} strokeWidth={1} />
                </div>
                
                <h3 className="text-[17px] font-medium text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-[14px] text-[#86868b] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-white text-lg leading-none mb-1">→</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;