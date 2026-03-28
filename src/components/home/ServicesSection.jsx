import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VIBES = [
  { 
    id: 1, 
    title: 'El Jazz de la Tarde', 
    desc: 'Selección curada de clásicos que envuelven la atmósfera mientras disfrutas de una copa bien puesta.',
    img: '/assets/nosotros/img-20211112-142457-original.jpg' 
  },
  { 
    id: 2, 
    title: 'Esencia Güéjar', 
    desc: 'Donde la montaña se encuentra con el diseño. Un refugio acogedor para el viajero contemporáneo.',
    img: '/assets/nosotros/img-4389.jpg' 
  },
  { 
    id: 3, 
    title: 'Tardeo & Tapas', 
    desc: 'La tradición granadina elevada. Cañas frías, conversaciones infinitas y el mejor producto local.',
    img: '/assets/bar_tapas/img-5691.jpg' 
  }
];

export default function ServicesSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-dark">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Architectural Background Text */}
        <div className="absolute top-10 left-10 z-0">
           <span className="text-pearl-white/5 text-[15vw] font-serif font-black leading-none uppercase">Ritmo</span>
        </div>

        <motion.div style={{ x }} className="flex gap-12 md:gap-20 px-10 md:px-20 relative z-10 overscroll-x-contain">
          {/* Introductory Card */}
          <div className="flex-shrink-0 w-full max-w-[300px] md:w-[500px] flex flex-col justify-center">
             <span className="text-sierra-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6">La Atmósfera</span>
             <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-8">Mucho más <br /><span className="italic font-normal text-sierra-gold">que un bar.</span></h2>
             <p className="text-pearl-white/40 font-serif italic text-base md:text-lg leading-relaxed">
               "Güéjar Sierra es el escenario, Paco es el director de orquesta. Un espacio donde cada detalle ha sido pensado para ser vivido."
             </p>
          </div>

          {/* Horizontal Gallery */}
          {VIBES.map((vibe) => (
            <div key={vibe.id} className="flex-shrink-0 w-[85vw] md:w-[600px] group">
              <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl mb-8 border border-white/5">
                 <img 
                   src={vibe.img} 
                   alt={vibe.title} 
                   className="w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-neutral-dark/10 md:bg-neutral-dark/20 group-hover:bg-transparent transition-colors" />
                 
                 {/* Numbering UI */}
                 <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-pearl-white/20 flex items-center justify-center text-pearl-white font-bold text-xs">
                    0{vibe.id}
                 </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-black text-pearl-white mb-4 group-hover:text-sierra-gold transition-colors">{vibe.title}</h3>
              <p className="text-pearl-white/40 text-xs md:text-sm leading-relaxed max-w-sm">{vibe.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
