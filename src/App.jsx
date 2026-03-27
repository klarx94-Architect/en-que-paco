import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import DigitalMenu from './components/home/DigitalMenu';
import ServicesSection from './components/home/ServicesSection';
import EventCard from './components/home/EventCard';
import AgentButton from './components/layout/AgentButton';

function App() {
  return (
    <div className="bg-charcoal min-h-screen selection:bg-gold selection:text-charcoal font-sans antialiased text-white">
      <Navbar />
      
      <main>
        <Hero />
        
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
                Eventos exclusivos diseñados para elevar los sentidos. Desde catas privadas hasta conciertos íntimos bajo las estrellas.
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
              <EventCard 
                category="Cata Exclusiva"
                title="Secretos de la Dehesa"
                date="02 de Noviembre, 2024"
                time="19:00h"
                location="Terraza Mirador"
                image="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
              />
              <EventCard 
                category="Masterclass"
                title="El Arte del Corte y la Brasa"
                date="15 de Noviembre, 2024"
                time="11:00h"
                location="Cocina de Autor"
                image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
          </div>
        </section>

        <DigitalMenu />

        {/* PROXIMOS DESPLIEGUES: Services section following Protocol */}
        <ServicesSection />

        {/* Call to Action Section */}
        <section id="contact" className="py-24 px-6 bg-wood relative overflow-hidden">
          <div className="absolute inset-0 bg-charcoal/20 backdrop-blur-[2px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-brand font-bold text-white mb-8">
              ¿Listo para el próximo <br /> 
              <span className="italic font-normal text-gold">despliegue gastronómico?</span>
            </h2>
            <p className="text-white/70 mb-12 text-lg">
              Reserva tu mesa o consulta disponibilidad para eventos privados. Nuestra IA Concierge te asistirá en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-charcoal text-white px-12 py-4 rounded-full font-bold hover:bg-black transition-all">
                Reserva Online
              </button>
              <button className="bg-gold text-charcoal px-12 py-4 rounded-full font-bold hover:bg-gold/90 transition-all">
                Llamar Directo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Basic Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs tracking-widest uppercase mb-4">© 2024 EN QUE PACO - RURAL LUXURY RESTAURANT</p>
        <div className="flex justify-center gap-6 text-white/40">
          <a href="#" className="hover:text-gold transition-colors font-medium">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors font-medium">Facebook</a>
          <a href="#" className="hover:text-gold transition-colors font-medium">TripAdvisor</a>
        </div>
      </footer>

      <AgentButton />
    </div>
  );
}

export default App;
