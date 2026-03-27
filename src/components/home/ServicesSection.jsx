import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Star, Calendar, Music } from 'lucide-react';

const EXPERIENCES = [
  { 
    id: 1, 
    name: 'Cena de Autor', 
    price: '75€', 
    desc: 'Menú degustación de 5 tiempos con productos de km 0 y maridaje sugerido.',
    icon: <Utensils className="text-gold" size={32} />,
    features: ['Selección del Chef', 'Maridaje incluido', 'Mesa con vistas']
  },
  { 
    id: 2, 
    name: 'Gala Gourmet & Jazz', 
    price: '95€', 
    desc: 'Cena exclusiva amenizada con jazz en directo en nuestra bodega centenaria.',
    icon: <Music className="text-gold" size={32} />,
    features: ['Música en vivo', 'Cóctel de bienvenida', 'Postre especial En Que Paco'],
    featured: true
  },
  { 
    id: 3, 
    name: 'Evento Privado', 
    price: 'Consultar', 
    desc: 'Diseñamos tu celebración a medida en un entorno rural incomparable.',
    icon: <Calendar className="text-gold" size={32} />,
    features: ['Espacio exclusivo', 'Menú personalizado', 'Servicio de Concierge']
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-wood/5 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">Experiencias Exclusivas</span>
          <h2 className="text-4xl md:text-6xl font-brand font-bold text-white mb-6">Sabores con Historia</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Más que una cena, una inmersión en la cultura rural de lujo. Cada plato es un capítulo de nuestra tradición.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${exp.featured ? 'border-gold bg-wood/20 shadow-[0_0_30px_rgba(197,160,89,0.1)]' : 'border-white/10 bg-charcoal'} flex flex-col`}
            >
              <div className="mb-6">{exp.icon}</div>
              <h3 className="text-2xl font-brand font-bold text-white mb-2">{exp.name}</h3>
              <div className="text-3xl font-bold text-gold mb-4">{exp.price}</div>
              <p className="text-white/60 text-sm mb-8 leading-relaxed flex-grow">{exp.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {exp.features.map(f => (
                  <li key={f} className="text-xs text-white/80 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${exp.featured ? 'bg-gold text-charcoal hover:bg-gold/90' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                Reservar Experiencia
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
