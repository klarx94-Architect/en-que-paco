import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENUS = {
  gala: {
    title: 'Menú Gala En Que Paco',
    subtitle: 'Nuestra propuesta gastronómica más representativa.',
    price: 'Incluido en el Pase de 85€',
    courses: [
      {
        name: 'Entrantes Tradicionales',
        items: ['Sopa de picadillo con hierbabuena', 'Tabla de embutidos ibéricos de la zona', 'Ensalada trufada de temporada']
      },
      {
        name: 'Plato Principal',
        items: ['Carrillada braseada al vino tinto', 'Bacalao confitado con tomate rústico', 'Solomillo ibérico al Pedro Ximénez']
      }
    ]
  },
  brasas: {
    title: 'Especialidades a la Brasa',
    subtitle: 'El alma de nuestra cocina rústica.',
    price: 'A la carta',
    courses: [
      {
        name: 'Cortes Premium',
        items: ['Entrecot de ternera madurada', 'Chuletón de buey (leña de encina)', 'Secretos de cerdo ibérico']
      }
    ]
  },
};

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState('gala');

  return (
    <section id="menu" className="py-24 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">Experiencia Culinaria</span>
          <h2 className="text-5xl font-brand font-bold text-white mb-6 text-center">Explora la Carta</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 flex flex-col gap-3">
            {Object.keys(MENUS).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 font-bold ${activeTab === key ? 'bg-gold text-charcoal' : 'bg-white/5 text-white/40 hover:text-white'}`}
              >
                {MENUS[key].title}
              </button>
            ))}
          </div>

          <div className="md:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-wood/20 p-8 rounded-[2rem] border border-white/5"
              >
                <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-brand text-white mb-2">{MENUS[activeTab].title}</h3>
                    <p className="text-white/40">{MENUS[activeTab].subtitle}</p>
                  </div>
                  <span className="bg-gold/10 text-gold px-4 py-1 rounded-full text-xs font-bold border border-gold/20">
                    {MENUS[activeTab].price}
                  </span>
                </div>

                <div className="space-y-8">
                  {MENUS[activeTab].courses.map((course, idx) => (
                    <div key={idx}>
                      <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-gold" />
                        {course.name}
                      </h4>
                      <ul className="space-y-3">
                        {course.items.map((item, i) => (
                          <li key={i} className="text-white/80 text-lg border-b border-white/5 pb-2 last:border-0">{item}</li>
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
