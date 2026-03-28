import React from 'react';
import { motion } from 'framer-motion';

export default function Nosotros() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 px-10 min-h-screen bg-pearl-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-sierra-gold uppercase tracking-[0.6em] text-[10px] font-black mb-6 block">Nuestra Historia</span>
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-tight">
            El Origen de <br />
            <span className="italic font-normal text-terracotta-mid">ENCAPACO</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h3 className="text-4xl font-serif font-black">Una Tradición Viva</h3>
            <p className="font-serif text-lg leading-relaxed text-neutral-dark/70">
              En el corazón de Güéjar Sierra, ENCAPACO nació de la pasión por la buena comida y los acordes inolvidables. Durante años hemos sido el refugio de viajeros y locales que buscan experiencias auténticas.
            </p>
            <p className="font-serif text-lg leading-relaxed text-neutral-dark/70">
              Nuestro compromiso es simple: ingredientes de la tierra, brasas encendidas y música que acaricia el alma. 
            </p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
            <img src="/assets/comida/img-0010-original.jpg" alt="Historia ENCAPACO" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Amigos Placeholder */}
        <div className="bg-neutral-dark text-pearl-white rounded-[4rem] p-20 text-center relative overflow-hidden">
           <div className="relative z-10">
              <span className="text-sierra-gold uppercase tracking-[0.6em] text-[10px] font-black mb-6 block">Familias y Amigos</span>
              <h3 className="text-5xl font-serif font-black mb-8">Nuestra Comunidad</h3>
              <p className="font-serif italic text-xl text-pearl-white/60 max-w-2xl mx-auto">
                Pronto compartiremos en este espacio las sonrisas, historias y momentos mágicos que nuestros clientes y amigos han vivido entre estas paredes.
              </p>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
