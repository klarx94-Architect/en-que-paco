import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENUS = {
  gala: {
    title: 'Menú Gala "En Que Paco"',
    subtitle: 'Nuestra propuesta más refinada para noches inolvidables.',
    price: '75€',
    courses: [
      {
        name: 'Aperitivos de Bienvenida',
        items: ['Esferificación de aceituna cordobesa', 'Crujiente de jamón ibérico con crema de almendras', 'Mini chupito de salmorejo con toque de albahaca']
      },
      {
        name: 'Platos Principales (A elegir)',
        items: ['Lomo de bacalao confitado sobre cama de pisto rústico', 'Presa ibérica a la brasa con reducción de higos', 'Arroz meloso de setas de temporada y trufa']
      },
      {
        name: 'Postre Especial',
        items: ['Texturas de chocolate y frutos rojos del bosque']
      }
    ]
  },
  brasas: {
    title: 'Nuestra Brasa de Encina',
    subtitle: 'El auténtico sabor del fuego y la leña.',
    price: 'A la carta',
    courses: [
      {
        name: 'Cortes Seleccionados',
        items: ['Chuletón de vaca vieja (maduración 45 días)', 'Entrecot de ternera del valle', 'Secreto ibérico con escamas de sal negra', 'Cordero lechal a la brasa']
      },
      {
        name: 'Guarniciones Rústicas',
        items: ['Patatas al montón con pimientos', 'Verduras de temporada a la brasa', 'Ensalada de la huerta']
      }
    ]
  },
  maridaje: {
    title: 'Bodega y Maridaje',
    subtitle: 'Vinos con alma seleccionados por nuestro sumiller.',
    price: 'Desde 18€',
    courses: [
      {
        name: 'Tintos de la Región',
        items: ['Reserva de la Casa (D.O. Tierras de Granada)', 'Selección Ribera del Duero', 'Rioja de Autor']
      },
      {
        name: 'Blancos y Cavas',
        items: ['Verdejo Selección Especial', 'Cava Brut Nature Reserva']
      }
    ]
  }
};

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState('gala');

  return (
    <section id="menu" className="py-24 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-sm mb-4 block font-sans">Gastronomía de Autor</span>
          <h2 className="text-5xl md:text-7xl font-brand font-bold text-white mb-8">Nuestra Carta</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {Object.keys(MENUS).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-left px-8 py-6 rounded-2xl transition-all duration-500 font-brand text-xl border ${
                  activeTab === key 
                  ? 'bg-gold text-charcoal border-gold shadow-[0_10px_30px_rgba(197,160,89,0.2)]' 
                  : 'bg-white/5 text-white/40 border-white/5 hover:border-gold/30 hover:text-white'
                }`}
              >
                {MENUS[key].title}
              </button>
            ))}
            
            <div className="mt-8 p-6 bg-wood/20 rounded-2xl border border-gold/20">
              <p className="text-xs text-gold/60 uppercase tracking-widest font-bold mb-2">Nota del Chef</p>
              <p className="text-white/60 text-sm italic italic leading-relaxed font-serif">
                "Cocinamos con respeto al producto y pasión por la brasa. Cada ingrediente es seleccionado personalmente en los mercados locales."
              </p>
            </div>
          </div>

          {/* Menu Display */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-wood/10 p-10 lg:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold/50" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-white/10 pb-8 mb-10 gap-6">
                  <div>
                    <h3 className="text-4xl font-brand text-white mb-2">{MENUS[activeTab].title}</h3>
                    <p className="text-white/40 font-light italic">{MENUS[activeTab].subtitle}</p>
                  </div>
                  <span className="bg-gold text-charcoal px-6 py-2 rounded-full text-sm font-bold self-start md:self-auto">
                    {MENUS[activeTab].price}
                  </span>
                </div>

                <div className="space-y-12">
                  {MENUS[activeTab].courses.map((course, idx) => (
                    <div key={idx}>
                      <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-gold/50" />
                        {course.name}
                      </h4>
                      <ul className="space-y-4">
                        {course.items.map((item, i) => (
                          <li key={i} className="text-white group flex items-baseline justify-between border-b border-white/5 pb-3 last:border-0">
                            <span className="text-xl font-brand group-hover:text-gold transition-colors">{item}</span>
                            <span className="w-full border-b border-dotted border-white/10 mx-4 mb-1 hidden md:block" />
                            <span className="text-gold/60 text-xs font-bold">✦</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
