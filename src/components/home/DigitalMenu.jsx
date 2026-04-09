import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

const MENU_ITEMS = [
  { 
    id: 1, 
    name: 'Carne a la Brasa "Las Olivillas"', 
    price: '32€', 
    desc: 'Corte premium madurado 45 días, terminado en leña de encina.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  { 
    id: 2, 
    name: 'Pulpo de Roca Ahumado', 
    price: '24€', 
    desc: 'Sobre crema de patata rústica y aceite de pimentón de la Vera.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
    featured: false
  },
  { 
    id: 3, 
    name: 'Tabla de Quesos de la Región', 
    price: '18€', 
    desc: 'Selección artesanal con membrillo de casa y nueces.',
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=1000&auto=format&fit=crop',
    featured: false
  },
];

export default function DigitalMenu() {
  return (
    <section id="menu" className="py-24 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] uppercase tracking-[0.2em] text-sm mb-4 block">Nuestra Gastronomía</span>
          <h2 className="text-5xl font-serif font-bold text-white">Sabores de la Tierra</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
                <span className="text-[#C5A059] font-bold">{item.price}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
              
              {item.featured && (
                <div className="flex items-center gap-1 text-[#C5A059] text-[10px] uppercase font-bold tracking-widest">
                  <Star size={12} fill="currentColor" />
                  Recomendado por el Chef
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-white border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors inline-flex items-center gap-2 group">
            Ver la Carta Completa (PDF)
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
