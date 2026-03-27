import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Music, Globe, Phone, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const Logo = ({ isScrolled }) => (
  <motion.a 
    href="/" 
    className="flex items-center gap-4 group no-underline"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <div className="relative">
      <div className="w-12 h-12 bg-terracotta-deep rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-xl overflow-hidden">
        <span className="text-pearl-white font-serif font-black text-2xl relative z-10">P</span>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-50" />
      </div>
      <div className="absolute -inset-1 border border-sierra-gold/20 rounded-xl group-hover:scale-110 transition-transform duration-500" />
    </div>
    
    <div className="flex flex-col">
      <span className={cn(
        "text-xl font-serif font-black tracking-tighter transition-colors duration-500 uppercase",
        isScrolled ? "text-neutral-dark" : "text-neutral-dark"
      )}>
        En Que <span className="text-sierra-gold">Paco</span>
      </span>
      <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase opacity-40 -mt-1">
        Güéjar Sierra
      </span>
    </div>
  </motion.a>
);

export default function Navbar({ onReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sabores', href: '#menu', icon: <Utensils size={14} /> },
    { name: 'Ritmo', href: '#services', icon: <Music size={14} /> },
    { name: 'Nosotros', href: '#about', icon: <Globe size={14} /> },
    { name: 'Llegar', href: '#contact', icon: <Phone size={14} /> },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-100 transition-all duration-700 ease-in-out px-10 py-6",
      isScrolled ? "bg-pearl-white/80 backdrop-blur-2xl py-4 border-b border-black/5" : "bg-transparent"
    )}>
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <Logo isScrolled={isScrolled} />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="group relative text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-dark/60 hover:text-neutral-dark transition-colors no-underline"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sierra-gold group-hover:w-full transition-all duration-500 ease-in-out" />
            </motion.a>
          ))}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReserve}
            className="bg-neutral-dark text-pearl-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-terracotta-deep transition-all duration-500"
          >
            Reservar Mesa
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-neutral-dark"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Curtain Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed inset-0 bg-pearl-white z-[90] flex flex-col items-center justify-center gap-10 overflow-hidden lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-5xl font-serif font-black text-neutral-dark hover:text-sierra-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
