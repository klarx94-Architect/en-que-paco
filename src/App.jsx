import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import InteractiveMenu from './components/home/InteractiveMenu';
import ServicesSection from './components/home/ServicesSection';
import BookingAgent from './components/home/BookingAgent';
import { Smartphone } from 'lucide-react';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-pearl-white min-h-screen text-neutral-dark selection:bg-terracotta-deep selection:text-white antialiased">
      {/* Scroll-triggered grain overlay (Senior detail) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[200] contrast-150 grayscale mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <Navbar onReserve={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onReserve={() => setIsBookingOpen(true)} />

        {/* The Legacy Statement */}
        <section id="about" className="py-60 px-10 bg-white relative overflow-hidden">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
              <div className="relative group">
                 <div className="absolute -inset-10 bg-sierra-gold/5 rounded-full blur-[120px] group-hover:bg-sierra-gold/10 transition-colors duration-1000" />
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-1000">
                    <img src="/src/assets/paco/unnamed (2).jpg" alt="Paco's Heritage" className="w-full h-[600px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                 </div>
              </div>

              <div>
                 <span className="text-sierra-gold uppercase tracking-[0.6em] text-[10px] font-black mb-10 block">Nuestra Herencia</span>
                 <h2 className="text-7xl md:text-9xl font-serif font-black leading-[0.85] mb-12">
                   Tradición <br />
                   <span className="italic font-normal text-terracotta-mid">que suena.</span>
                 </h2>
                 <p className="text-xl md:text-2xl font-serif italic text-neutral-dark/60 leading-relaxed mb-16">
                   "Más que un bar, somos un encuentro. En Güéjar Sierra, la madera cruje al ritmo del jazz mientras el aroma de la cocina casera invade cada rincón."
                 </p>
                 
                 <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-dark/20">Ubicación</span>
                       <p className="font-serif font-bold text-lg">Güejar Sierra, <br /> Granada.</p>
                    </div>
                    <div className="space-y-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-dark/20">Selección</span>
                       <p className="font-serif font-bold text-lg">Jazz, Country <br /> & Pop Classics.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <InteractiveMenu />
        
        <ServicesSection />

        {/* Experience Closing */}
        <section className="py-60 px-10 bg-neutral-dark text-pearl-white relative overflow-hidden text-center">
           <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/paco/unnamed (4).jpg')] bg-cover bg-fixed grayscale pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-7xl md:text-9xl font-serif font-black mb-16 leading-tight">
                El viaje <br /> <span className="italic font-normal text-sierra-gold">continúa hoy.</span>
              </h2>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-pearl-white text-neutral-dark px-16 py-8 rounded-full font-black uppercase tracking-[0.5em] text-[10px] hover:bg-sierra-gold hover:text-white transition-all duration-700 shadow-2xl"
              >
                Confirmar Reserva
              </button>
           </div>
        </section>
      </main>

      <footer className="py-20 px-10 border-t border-black/5 flex flex-col items-center gap-8 bg-white">
         <div className="text-[10px] font-black uppercase tracking-[1em] text-neutral-dark/20">
           En Que Paco · 2024
         </div>
         <div className="w-[1px] h-12 bg-neutral-dark/10" />
         <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-neutral-dark/40">Güejar Sierra · Granada · Sierra Nevada</p>
      </footer>

      <BookingAgent isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Floating Digital Concierge (Minimal) */}
      <button 
        onClick={() => setIsBookingOpen(true)}
        className="fixed bottom-10 right-10 z-100 bg-neutral-dark text-white p-6 rounded-full shadow-[-20px_20px_40px_rgba(0,0,0,0.2)] hover:bg-terracotta-deep transition-all duration-500 scale-110 hover:scale-125 group overflow-hidden"
      >
        <Smartphone size={24} className="relative z-10" />
        <div className="absolute inset-0 bg-sierra-gold opacity-0 group-hover:opacity-20 transition-opacity" />
      </button>
    </div>
  );
}

export default App;
