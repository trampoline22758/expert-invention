import React from 'react';
import { motion } from 'framer-motion';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* 
        Titanium Light Engine
        Simulates studio lighting on dark metallic surfaces.
        Strictly monochrome.
      */}
      
      {/* Primary Key Light - Top Center/Left - Soft White */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          opacity: [0.05, 0.08, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-white rounded-full blur-[180px] opacity-[0.05] mix-blend-screen"
      />

      {/* Fill Light - Bottom Right - Deep Graphite */}
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [50, -50, 50],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[90vw] h-[90vw] bg-[#3a3a3a] rounded-full blur-[160px] opacity-[0.15] mix-blend-plus-lighter"
      />

      {/* Ambient Rim Light - Center - Shifting Fog */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] bg-white rounded-full blur-[140px] opacity-[0.04] mix-blend-screen"
      />

      {/* Cinematic Grain - Essential for "Pro" feel to prevent banding on dark gradients */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Subtle Vignette to focus center content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] opacity-80" />
    </div>
  );
};

export default LiquidBackground;