import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onReserve }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen pt-40 px-10 pb-20 overflow-hidden ceramic-gradient">
      {/* Background Architectural Text (Senior Layout) */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fluid-text-hero font-serif font-black text-neutral-dark/[0.03] pointer-events-none whitespace-nowrap">
        TRADICIÓN GÜÉJAR
      </h2>

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center h-full relative z-10">
        {/* Copy Column */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-sierra-gold mb-8 px-4 py-2 border border-sierra-gold/20 rounded-full">
              Est. Sierra Nevada
            </span>
            <h1 className="text-7xl md:text-9xl font-serif font-black text-neutral-dark leading-[0.85] mb-10">
              Sabor de la <br />
              <span className="italic font-normal text-terracotta-mid">Sierra</span>, alma <br />
              del <span className="text-sierra-gold underline decoration-sierra-gold/20">Mundo.</span>
            </h1>
            <p className="max-w-md text-lg text-neutral-dark/60 font-serif italic mb-12 leading-relaxed">
              "Un rincón peculiar en Güéjar Sierra donde la tapa tradicional se funde con el ritmo del Jazz y la artesanía culinaria."
            </p>
            
            <div className="flex items-center gap-8">
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={onReserve}
                 className="bg-neutral-dark text-pearl-white px-12 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl"
               >
                 Reservar Experiencia
               </motion.button>
               <div className="flex flex-col">
                  <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-neutral-dark/30">Música hoy</span>
                  <span className="text-xs font-bold text-neutral-dark tracking-widest">Jazz & Country Classics</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Column - Asymmetric Layout (Senior Standard) */}
        <div className="relative pt-20">
          {/* Main Floating Image */}
          <motion.div 
            style={{ y: y1 }}
            className="relative z-20 w-full max-w-md ml-auto"
          >
            <div className="relative overflow-hidden rounded-[4rem] shadow-[-40px_40px_80px_rgba(0,0,0,0.1)] border-[12px] border-white">
              <img 
                src="/src/assets/paco/unnamed.webp" 
                alt="El Sabor de Paco" 
                className="w-full aspect-[4/5] object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* Secondary Floating Image */}
          <motion.div 
            style={{ y: y2, rotate: -5 }}
            className="absolute -bottom-20 -left-20 z-30 w-full max-w-[280px] hidden md:block"
          >
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-[10px] border-white ring-1 ring-black/5">
              <img 
                src="/src/assets/paco/unnamed (1).webp" 
                alt="Tardeo en Güéjar" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta-deep/40 to-transparent" />
            </div>
          </motion.div>

          {/* Decorative Floating Card */}
          <motion.div
            style={{ y: rotate }}
            className="absolute top-10 -right-10 z-10 w-48 h-48 bg-sierra-gold rounded-[2.5rem] flex items-center justify-center p-8 text-white text-center shadow-xl rotate-12"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
              Tapas con <br /> Herencia <br /> Granadina
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - Minimal Senior Style */}
      <div className="absolute bottom-10 left-10 flex flex-col items-center gap-4 opacity-20">
         <div className="w-[1px] h-20 bg-neutral-dark" />
         <span className="text-[8px] font-black uppercase tracking-[0.8em] vertical-text">Scroll</span>
      </div>
    </section>
  );
}
