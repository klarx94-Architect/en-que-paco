import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import InteractiveMenu from '../components/home/InteractiveMenu';
import ServicesSection from '../components/home/ServicesSection';

export default function Home({ onReserve }) {
  return (
    <>
      <Hero onReserve={onReserve} />

      {/* The Heritage Statement */}
      <section id="about" className="py-60 px-10 bg-white relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
               <div className="absolute -inset-10 bg-sierra-gold/5 rounded-full blur-[120px] group-hover:bg-sierra-gold/10 transition-colors duration-1000" />
               <div className="relative rounded-[4rem] overflow-hidden shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-1000">
                  <img src="https://images.unsplash.com/photo-1542601039-29adde52b96c?q=80&w=1200&auto=format&fit=crop" alt="Las Olivillas Heritage" className="w-full h-[600px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
               </div>
            </div>

            <div>
               <span className="text-sierra-gold uppercase tracking-[0.6em] text-[10px] font-black mb-10 block">Nuestra Herencia</span>
               <h2 className="text-7xl md:text-9xl font-serif font-black leading-[0.85] mb-12">
                 Tradición <br />
                 <span className="italic font-normal text-terracotta-mid">natural.</span>
               </h2>
               <p className="text-xl md:text-2xl font-serif italic text-neutral-dark/60 leading-relaxed mb-16">
                 "En el corazón de Güéjar Sierra, Las Olivillas ofrece una experiencia donde la tradición culinaria granadina se encuentra con las vistas impresionantes de Sierra Nevada."
               </p>
               
               <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-dark/20">Ubicación</span>
                     <p className="font-serif font-bold text-lg">Güejar Sierra, <br /> Granada.</p>
                  </div>
                  <div className="space-y-4">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-dark/20">Experiencia</span>
                     <p className="font-serif font-bold text-lg">Entorno Natural <br /> & Vistas Únicas.</p>
                  </div>
               </div>

               <div className="mt-16">
                  <Link 
                    to="/menu"
                    className="inline-block bg-neutral-dark text-pearl-white px-12 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-sierra-gold transition-colors duration-500 shadow-xl no-underline"
                  >
                    Ver Nuestra Carta
                  </Link>
               </div>
            </div>
         </div>
      </section>

      <InteractiveMenu />
      
      <ServicesSection />

      {/* Experience Closing */}
      <section className="py-40 md:py-60 px-10 bg-neutral-dark text-pearl-white relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[80vh]">
         {/* Expanded background with high-quality placeholders */}
         <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop" 
              alt="Las Olivillas Atmosphere" 
              className="w-full h-full object-cover scale-125 opacity-40"
            />
            {/* Vertical gradients to create a seamless flow between sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark via-neutral-dark/20 to-neutral-dark opacity-100" />
            <div className="absolute inset-0 bg-neutral-dark/30" />
         </div>

         <div className="relative z-10 max-w-4xl mx-auto pt-10">
            <h2 className="text-6xl md:text-9xl font-serif font-black mb-12 md:mb-16 leading-tight drop-shadow-2xl">
              El viaje <br /> <span className="italic font-normal text-sierra-gold">continúa hoy.</span>
            </h2>
            <button 
              onClick={onReserve}
              className="bg-pearl-white text-neutral-dark px-12 md:px-16 py-6 md:py-8 rounded-full font-black uppercase tracking-[0.5em] text-[10px] hover:bg-sierra-gold hover:text-white transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              Confirmar Reserva
            </button>
         </div>
      </section>
    </>
  );
}
