import React from 'react';
import GlassCard from '../UI/GlassCard';
import { PORTFOLIO_ITEMS } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-40 relative z-10">
      <div className="container mx-auto px-6 md:px-8 max-w-[1100px]">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6"
            >
               Selected Work.
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent origin-left mb-8" 
            />
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#86868b] text-xl md:text-2xl font-normal leading-relaxed"
            >
               Case studies in interface architecture and interaction design.
            </motion.p>
          </div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="#" 
            className="text-[14px] text-white hover:text-[#0071e3] transition-colors flex items-center gap-2 group"
          >
            View Archive <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <a 
              key={item.id} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard delay={index * 0.15} className="p-0 !bg-[#111111] hover:!bg-[#151515] group cursor-pointer border-0 h-full flex flex-col">
                
                {/* Image Container with Monochrome Filter */}
                <div className="aspect-[4/3] overflow-hidden bg-[#050505] relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      grayscale opacity-60 scale-100
                      group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                  
                  {/* View Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                <div className="p-8 relative -mt-12 flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-4 self-start">
                      <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">
                      {item.category}
                      </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#0071e3] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-[14px] text-[#86868b] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;