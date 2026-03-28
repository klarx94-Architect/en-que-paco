import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Music, Globe, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const Logo = ({ isScrolled }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <Link to="/" className="flex items-center gap-4 group no-underline">
      <img 
        src="/assets/bar_tapas/group-4-2814581.png" 
        alt="ENCAPACO Logo" 
        className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
  </motion.div>
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
    { name: 'Nuestro Menú', href: '/menu', icon: <Utensils size={14} /> },
    { name: 'Ritmo', href: '/#services', icon: <Music size={14} /> },
    { name: 'Nosotros', href: '/nosotros', icon: <Globe size={14} /> },
    { name: 'Llegar', href: '/llegar', icon: <Phone size={14} /> },
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
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="group relative"
            >
              <Link
                to={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-dark/60 hover:text-neutral-dark transition-colors no-underline block"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sierra-gold group-hover:w-full transition-all duration-500 ease-in-out" />
              </Link>
            </motion.div>
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
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-5xl font-serif font-black text-neutral-dark hover:text-sierra-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
