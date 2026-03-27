import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DISHES = [
  { 
    id: 1, 
    cat: 'tapas', 
    name: 'Empanada Casera Paco', 
    price: '4.50', 
    desc: 'Hojaldre artesano, secreto de carne serrana y especias.', 
    img: '/src/assets/paco/unnamed (1).webp' 
  },
  { 
    id: 2, 
    cat: 'hamburguesas', 
    name: 'The Country Gold', 
    price: '12.50', 
    desc: 'Vaca madurada, pan rústico y reducción de Oporto local.', 
    img: '/src/assets/paco/unnamed.webp' 
  },
  { 
    id: 3, 
    cat: 'tapas', 
    name: 'Surtido de la Sierra', 
    price: '16.00', 
    desc: 'Chacinas de Güéjar, quesos curados y olivas aliñadas.', 
    img: '/src/assets/paco/unnamed (2).jpg' 
  },
  { 
    id: 4, 
    cat: 'pizzas', 
    name: 'Pizza del Chef', 
    price: '13.50', 
    desc: 'Masa madre, tomate San Marzano y albahaca fresca.', 
    img: '/src/assets/paco/unnamed (3).jpg' 
  }
];

export default function InteractiveMenu() {
  const [hoveredDish, setHoveredDish] = useState(null);

  return (
    <section id="menu" className="py-40 px-10 bg-pearl-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
        
        {/* Left Side: Copy and Context */}
        <div className="sticky top-40">
           <span className="text-sierra-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Curaduría Gastronómica</span>
           <h2 className="text-7xl font-serif font-black text-neutral-dark mb-12">Nuestra <br /><span className="italic font-normal text-terracotta-mid underline decoration-terracotta-mid/10">Colección.</span></h2>
           <p className="text-neutral-dark/40 font-serif italic text-lg max-w-sm leading-relaxed mb-12">
             "Cada bocado es una nota musical. Hemos diseñado una carta breve pero contundente, enfocada en la calidad y el sabor real de la sierra."
           </p>
           
           <div className="space-y-4">
              <div className="flex items-center gap-4 text-neutral-dark/30 hover:text-neutral-dark transition-colors cursor-default">
                 <span className="text-[10px] font-bold">01</span>
                 <span className="h-[1px] w-8 bg-current opacity-20" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tapeo de Autor</span>
              </div>
              <div className="flex items-center gap-4 text-neutral-dark/30 hover:text-neutral-dark transition-colors cursor-default">
                 <span className="text-[10px] font-bold">02</span>
                 <span className="h-[1px] w-8 bg-current opacity-20" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Cenas Informales</span>
              </div>
           </div>
        </div>

        {/* Right Side: Kinetic List */}
        <div className="space-y-0">
          {DISHES.map((dish) => (
            <motion.div 
              key={dish.id}
              onMouseEnter={() => setHoveredDish(dish)}
              onMouseLeave={() => setHoveredDish(null)}
              className="py-10 border-b border-neutral-dark/5 group cursor-pointer relative"
            >
               <div className="flex justify-between items-end relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-sierra-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{dish.cat}</span>
                    <h3 className="text-3xl md:text-5xl font-serif font-black text-neutral-dark group-hover:translate-x-4 transition-transform duration-500">{dish.name}</h3>
                  </div>
                  <span className="text-2xl font-serif italic text-neutral-dark/20 group-hover:text-terracotta-mid group-hover:scale-110 transition-all duration-500 font-bold">{dish.price}€</span>
               </div>
               
               {/* Hover Preview Overlay (Senior Feature) */}
               <AnimatePresence>
                 {hoveredDish?.id === dish.id && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.8, x: -100 }}
                     animate={{ opacity: 1, scale: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0.8, x: -100 }}
                     className="absolute -left-64 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden xl:block"
                   >
                     <div className="w-48 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-[-5deg]">
                       <img src={dish.img} alt={dish.name} className="w-full h-full object-cover" />
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
