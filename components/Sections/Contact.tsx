import React, { useState } from 'react';
import GlassCard from '../UI/GlassCard';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-40 relative z-10 mb-20">
      <div className="container mx-auto px-6 md:px-8 max-w-[640px]">
        
        <GlassCard className="p-10 md:p-12 !bg-[#1c1c1e]/60 !border-white/[0.06] backdrop-blur-xl">
          <div className="text-center mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-semibold text-white mb-3 tracking-tight"
            >
                Get in Touch
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#86868b] text-[16px]"
            >
              Available for collaborations and consulting.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
               <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-[#0a0a0a]/50 border border-white/[0.1] rounded-[12px] px-5 py-4 text-[15px] text-white placeholder:text-[#636366] focus:outline-none focus:border-white/30 focus:bg-[#1c1c1e] transition-all duration-300"
                  required
               />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
               <textarea 
                  rows={5} 
                  placeholder="Message"
                  className="w-full bg-[#0a0a0a]/50 border border-white/[0.1] rounded-[12px] px-5 py-4 text-[15px] text-white placeholder:text-[#636366] focus:outline-none focus:border-white/30 focus:bg-[#1c1c1e] transition-all duration-300 resize-none"
                  required
               ></textarea>
            </motion.div>

            <motion.button 
              type="submit"
              disabled={status !== 'idle'}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`
                w-full py-4 rounded-[12px] font-medium text-[15px] transition-all duration-300
                ${status === 'success' 
                    ? 'bg-[#30d158] text-white shadow-[0_0_20px_rgba(48,209,88,0.3)]' 
                    : 'bg-[#0071e3] text-white hover:bg-[#0077ED] active:scale-[0.99] shadow-[0_0_20px_rgba(0,113,227,0.4)]'
                }
              `}
            >
              {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Sending...' : 'Sent'}
            </motion.button>
          </form>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 pt-8 border-t border-white/[0.08] text-center"
          >
             <a href="mailto:anjneykumar@gmail.com" className="text-[13px] text-[#86868b] hover:text-white transition-colors duration-300 tracking-wide">
                anjneykumar@gmail.com
             </a>
          </motion.div>
        </GlassCard>

      </div>
    </section>
  );
};

export default Contact;