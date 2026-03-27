import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, Activity } from 'lucide-react';

const PACKS = [
  { 
    id: 1, 
    name: 'The Audit & Foundation', 
    price: '199€', 
    desc: 'Cimiento técnico innegociable. Mapeo de Google Maps y Bio-Link de alta conversión.',
    icon: <ShieldCheck className="text-gold" />,
    features: ['Auditoría de Cuellos de Botella', 'Ecosistema Bio-Link', 'Ficha Google Business Elite']
  },
  { 
    id: 2, 
    name: 'The Architect Catalyst', 
    price: '499€', 
    desc: 'Automatización pura. IA Concierge 24/7 y gestión de reservas sin intervención humana.',
    icon: <Zap className="text-gold" />,
    features: ['Incluye Pack Foundation', 'Aeterium AI Concierge', 'Agenda Autónoma Sincronizada'],
    featured: true
  },
  { 
    id: 3, 
    name: 'Transformación Total', 
    price: '1.500€+', 
    desc: 'Escalabilidad agresiva con CRM dedicado y anuncios de alta precisión.',
    icon: <Activity className="text-gold" />,
    features: ['Integración CRM Leads', 'Gestión Ads (Meta/Google)', 'Soporte Ingeniería 24/7']
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-wood/5 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">Arquitectura de Rentabilidad</span>
          <h2 className="text-4xl md:text-6xl font-brand font-bold text-white mb-6">Nuestros Sistemas</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            No vendemos webs. Construimos infraestructuras técnicas diseñadas para captar, retener y convertir tráfico en ingresos recurrentes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PACKS.map((pack, idx) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${pack.featured ? 'border-gold bg-wood/20' : 'border-white/10 bg-charcoal'} flex flex-col`}
            >
              {pack.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Más Demandado
                </div>
              )}
              
              <div className="mb-6">{pack.icon}</div>
              <h3 className="text-2xl font-brand font-bold text-white mb-2">{pack.name}</h3>
              <div className="text-3xl font-bold text-gold mb-4">{pack.price}</div>
              <p className="text-white/60 text-sm mb-8 leading-relaxed flex-grow">{pack.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {pack.features.map(f => (
                  <li key={f} className="text-xs text-white/80 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${pack.featured ? 'bg-gold text-charcoal hover:bg-gold/90' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                Activar Despliegue
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
