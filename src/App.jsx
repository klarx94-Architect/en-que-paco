import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import InteractiveMenu from './components/home/InteractiveMenu';
import ServicesSection from './components/home/ServicesSection';
import EventCard from './components/home/EventCard';
import AgentButton from './components/layout/AgentButton';

function App() {
  return (
    <div className="bg-charcoal min-h-screen selection:bg-gold selection:text-charcoal font-sans antialiased text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Gallery Section - Preview */}
        <section id="about" className="py-24 px-6 bg-charcoal">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-[4rem] group">
                <img 
                  src="/src/assets/chef-dish.png" 
                  alt="La cocina de Paco" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay pointer-events-none" />
             </div>
             <div>
                <span className="text-gold uppercase tracking-[0.4em] text-sm mb-6 block font-bold">Nuestra Historia</span>
                <h2 className="text-5xl md:text-7xl font-brand font-bold text-white mb-8 leading-tight">Tradición que <br /><span className="italic font-normal text-gold">arde lenta.</span></h2>
                <p className="text-xl text-white/50 leading-relaxed font-serif italic mb-8">
                  "En Que Paco no es solo un restaurante. Es el legado de una familia que ha hecho del fuego su lenguaje y de la hospitalidad su religión."
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                      <h4 className="text-gold font-bold mb-1 text-2xl">45 Días</h4>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">Maduración de carne</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                      <h4 className="text-gold font-bold mb-1 text-2xl">Encina</h4>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">Leña seleccionada</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <InteractiveMenu />
        
        <ServicesSection />

        {/* Events Gallery */}
        <section id="events" className="py-24 px-6 bg-wood/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold uppercase tracking-[0.2em] text-sm mb-4 block">Eventos Exclusivos</span>
              <h2 className="text-5xl font-brand font-bold text-white mb-6">Bodega Cultural</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <EventCard 
                category="Directo"
                title="Jazz & Wine"
                date="Octubre 2024"
                time="21:00h"
                location="La Cueva"
                image="/src/assets/event-concert.png"
              />
              {/* ... other events using generic images if needed or duplicates for draft */}
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-24 px-6 bg-charcoal text-center border-t border-white/5">
           <h2 className="text-4xl md:text-6xl font-brand font-bold text-white mb-8 italic">Le esperamos en la brasa.</h2>
           <button className="bg-gold text-charcoal px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all">
             Contactar Ahora
           </button>
        </section>
      </main>

      <footer className="py-12 px-6 text-center text-white/10 text-[10px] uppercase tracking-[0.5em] font-bold">
        © 2024 EN QUE PACO · SACROMONTE LUXURY
      </footer>

      <AgentButton />
    </div>
  );
}

export default App;
