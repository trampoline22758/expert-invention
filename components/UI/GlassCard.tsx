import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0, hoverEffect = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Apple System Ease
      }}
      className={`
        relative overflow-hidden
        rounded-[24px]
        /* 
          TITANIUM MATERIAL FORMULA
          - Background: Almost black with a hint of metallic grey
          - Border: Extremely subtle, responding to light
          - Shadow: Deep, diffused ambient occlusion
        */
        bg-[#111111]/80
        backdrop-blur-[40px] backdrop-saturate-[180%]
        border border-white/[0.08]
        shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]
        group
        ${hoverEffect ? 'hover:bg-[#1a1a1a]/90 transition-colors duration-500' : ''}
        ${className}
      `}
    >
      {/* 
        Specular Highlight 
        A subtle gradient washing over the top-left to simulate a studio light source.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-100 pointer-events-none" />
      
      {/* 
        Inner Bevel 
        Creates the feeling of thickness.
      */}
      <div className="absolute inset-0 rounded-[24px] border border-white/[0.05] pointer-events-none" />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;