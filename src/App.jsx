import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import InteractiveMenu from './components/home/InteractiveMenu';
import BookingAgent from './components/home/BookingAgent';
import EventCard from './components/home/EventCard';
import AgentButton from './components/layout/AgentButton';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-charcoal min-h-screen selection:bg-gold selection:text-charcoal font-sans antialiased text-white">
      <Navbar onReserve={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onStart={() => setIsBookingOpen(true)} />
        
        {/* Events Section */}
        <section id="events" className="py-24 px-6 bg-wood/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-gold uppercase tracking-[0.2em] text-sm mb-4 block">Próximos Encuentros</span>
                <h2 className="text-5xl font-brand font-bold text-white leading-tight">
                  Cultura & <br /> Gastronomía
                </h2>
              </div>
              <p className="text-white/40 max-w-md text-sm leading-relaxed">
                Eventos exclusivos diseñados para elevar los sentidos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard 
                category="Música Directo"
                title="Jazz & Wine: Noches de Cava"
                date="25 de Octubre, 2024"
                time="21:00h"
                location="Bodega Central"
                image="/src/assets/event-concert.png"
              />
              {/* ... other cards */}
            </div>
          </div>
        </section>

        <InteractiveMenu />

        {/* Call to Action Section */}
        <section id="contact" className="py-24 px-6 bg-wood relative overflow-hidden">
          <div className="absolute inset-0 bg-charcoal/20 backdrop-blur-[2px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-brand font-bold text-white mb-8">
              ¿Listo para el próximo <br /> 
              <span className="italic font-normal text-gold">despliegue gastronómico?</span>
            </h2>
            <button onClick={() => setIsBookingOpen(true)} className="bg-gold text-charcoal px-12 py-4 rounded-full font-bold hover:bg-gold/90 transition-all">
              Reserva con el Agente IA
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/20 text-xs">
        <p>© 2024 EN QUE PACO - RURAL LUXURY RESTAURANT</p>
      </footer>

      <BookingAgent isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <AgentButton />
    </div>
  );
}

export default App;
