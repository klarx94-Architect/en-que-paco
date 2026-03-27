import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gold font-sans font-bold tracking-[0.6em] uppercase mb-6 block text-sm opacity-80">
            Sacromonte · Granada · España
          </span>
          
          <h1 className="text-7xl md:text-[9rem] font-brand font-bold text-white mb-8 leading-[0.8] tracking-tighter">
            EN <span className="text-gold italic font-normal">QUE</span> PACO
          </h1>
          
          <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white/60 font-serif italic leading-relaxed">
              "Donde la brasa de encina se encuentra con el alma rústica del Sacromonte."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <button 
                onClick={scrollToMenu}
                className="bg-gold text-charcoal px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-[0_20px_40px_rgba(197,160,89,0.3)] group flex items-center gap-3"
              >
                Reservar Mesa 
                <div className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center group-hover:rotate-90 transition-transform">
                   <ChevronDown size={18} />
                </div>
              </button>
              
              <button className="flex items-center gap-3 text-white/50 hover:text-white transition-all group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-charcoal transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                <span className="font-bold tracking-widest text-xs uppercase">Ver Experiencia</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
