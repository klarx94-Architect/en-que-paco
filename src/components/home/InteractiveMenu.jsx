import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const DISHES = [
  { 
    id: 1, 
    cat: 'Cocina Tradicional', 
    name: 'Carne en Salsa', 
    price: '8.50', 
    desc: 'Nuestra receta tradicional a fuego lento. Un clásico de la sierra.', 
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600' 
  },
  { 
    id: 2, 
    cat: 'Para Compartir', 
    name: 'Surtido de la Sierra', 
    price: '16.00', 
    desc: 'Selección de embutidos ibéricos, quesos curados y aceite de oliva.', 
    img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600' 
  },
  { 
    id: 3, 
    cat: 'Especialidades', 
    name: 'Pincho Moruno', 
    price: '7.50', 
    desc: 'Marinado andaluz a la brasa con especias de la tierra.', 
    img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600' 
  },
  { 
    id: 4, 
    cat: 'Tapas', 
    name: 'Papas Bravas', 
    price: '6.00', 
    desc: 'Con salsa picante casera. La tapa más pedida del Valle del Genil.', 
    img: 'https://images.unsplash.com/photo-1630851840633-f96999247032?q=80&w=600' 
  }
];

export default function InteractiveMenu({ onReserve }) {
  return (
    <section id="menu" className="py-20 md:py-32 px-6 lg:px-12 bg-pearl-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <div className="lg:col-span-4 lg:sticky lg:top-32 relative z-10">
          <span className="text-sierra-gold uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-6 md:mb-8 block">Carta de Las Olivillas</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-neutral-dark mb-8 leading-[0.9]">
            Nuestra <br className="hidden md:block" />
            <span className="italic font-normal text-terracotta-mid underline decoration-terracotta-mid/20">Cocina.</span>
          </h2>
          <p className="text-neutral-dark/60 font-serif italic text-base md:text-lg max-w-sm leading-relaxed mb-12">
            "Productos frescos de la sierra, recetas de siempre y el cariño de quien cocina para los suyos."
          </p>
          <div className="hidden lg:flex flex-col gap-4">
            <Link to="/menu" className="group flex items-center justify-between bg-neutral-dark text-white px-8 py-5 rounded-full hover:bg-terracotta-mid transition-all duration-500 shadow-xl">
              <span className="text-[10px] uppercase tracking-widest font-bold">Ver Carta Completa</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <button onClick={onReserve} className="group flex items-center justify-between bg-transparent border border-black/10 text-neutral-dark px-8 py-5 rounded-full hover:border-sierra-gold hover:text-sierra-gold transition-all duration-300">
              <span className="text-[10px] uppercase tracking-widest font-bold">Reservar Mesa</span>
              <Calendar size={18} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
          {DISHES.map((dish, i) => (
            <motion.div key={dish.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center p-5 md:p-6 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-2xl hover:border-sierra-gold/30 transition-all duration-500 gap-6">
              <div className="w-full sm:w-32 md:w-40 h-48 sm:h-32 md:h-40 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex-1 w-full">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-sierra-gold mb-2 block">{dish.cat}</span>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3">
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-neutral-dark leading-tight">{dish.name}</h3>
                  <span className="text-xl md:text-2xl font-serif italic text-sierra-gold font-bold shrink-0">{dish.price}€</span>
                </div>
                <p className="text-sm font-serif italic text-neutral-dark/50 leading-relaxed line-clamp-3 md:line-clamp-none">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="flex flex-col gap-4 mt-8 lg:hidden">
            <Link to="/menu" className="flex items-center justify-center gap-4 bg-neutral-dark text-white px-8 py-5 rounded-[2rem] shadow-xl active:scale-95 transition-transform">
              <span className="text-[10px] uppercase tracking-widest font-bold">Ver Carta Completa</span>
              <ArrowRight size={16} />
            </Link>
            <button onClick={onReserve} className="flex items-center justify-center gap-4 bg-white border border-black/10 text-neutral-dark px-8 py-5 rounded-[2rem] active:scale-95 transition-transform">
              <span className="text-[10px] uppercase tracking-widest font-bold">Reservar Mesa</span>
              <Calendar size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
