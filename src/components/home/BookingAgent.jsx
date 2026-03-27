import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Smartphone, X, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BookingAgent({ isOpen, onClose }) {
  const [phase, setPhase] = useState(1);
  const [booking, setBooking] = useState({
    date: new Date().toISOString().split('T')[0],
    adults: 2,
    area: 'interior',
    name: '',
    phone: ''
  });

  const handleWhatsApp = () => {
    const message = `*Reserva Confirmada - En Que Paco*%0A%0A📅 *Fecha:* ${booking.date}%0A👥 *Pax:* ${booking.adults}%0A📍 *Zona:* ${booking.area.toUpperCase()}%0A👤 *Cliente:* ${booking.name}%0A📞 *Tel:* ${booking.phone}%0A%0A_Digital Host via EnQuePaco.com_`;
    window.open(`https://wa.me/34684790308?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-200 flex items-center justify-center p-6 bg-neutral-dark/95 backdrop-blur-xl"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 100 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.95, opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl bg-pearl-white rounded-[4rem] shadow-[-60px_60px_120px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[75vh]"
          >
            {/* Minimal Header */}
            <div className="flex justify-between items-center px-12 py-8 border-b border-black/5">
              <div className="flex items-center gap-12">
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-dark/20">Digital Host</span>
                 <div className="flex gap-4">
                    {[1, 2, 3].map(s => (
                      <div key={s} className={cn("w-2 h-2 rounded-full transition-all", phase >= s ? "bg-sierra-gold scale-125" : "bg-neutral-dark/10")} />
                    ))}
                 </div>
              </div>
              <button onClick={onClose} className="p-3 hover:bg-black/5 rounded-full transition-colors"><X size={24} /></button>
            </div>

            {/* Inmersive Content */}
            <div className="flex-1 px-12 py-16 overflow-y-auto">
               <AnimatePresence mode="wait">
                 {phase === 1 && (
                   <motion.div key="p1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center text-center">
                     <h2 className="text-6xl font-serif font-black mb-12">¿Cuándo <span className="italic font-normal text-terracotta-mid">unimos</span> ritmos?</h2>
                     <div className="grid md:grid-cols-2 gap-12 w-full max-w-2xl">
                        <div className="flex flex-col items-start gap-4">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Fecha Preferida</span>
                           <input type="date" value={booking.date} onChange={e => setBooking({...booking, date: e.target.value})} className="w-full bg-black/5 p-8 rounded-3xl text-2xl font-serif font-bold focus:ring-2 focus:ring-sierra-gold/20 outline-none" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Número de Personas</span>
                           <div className="flex items-center justify-between w-full bg-black/5 p-8 rounded-3xl">
                              <button onClick={() => setBooking({...booking, adults: Math.max(1, booking.adults-1)})} className="text-3xl font-serif opacity-30 hover:opacity-100 transition-opacity">-</button>
                              <span className="text-3xl font-serif font-bold">{booking.adults}</span>
                              <button onClick={() => setBooking({...booking, adults: booking.adults+1})} className="text-3xl font-serif opacity-30 hover:opacity-100 transition-opacity">+</button>
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 )}
                 
                 {phase === 2 && (
                   <motion.div key="p2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center">
                     <h2 className="text-6xl font-serif font-black mb-12">Elige tu <span className="italic font-normal text-terracotta-mid">escenario.</span></h2>
                     <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
                        {['Interior', 'Terraza', 'Barra'].map(area => (
                          <div 
                            key={area} 
                            onClick={() => setBooking({...booking, area: area.toLowerCase()})}
                            className={cn("p-10 rounded-[3rem] border-2 cursor-pointer transition-all flex flex-col items-center justify-center gap-4",
                              booking.area === area.toLowerCase() ? "border-sierra-gold bg-sierra-gold/5 shadow-2xl" : "border-black/5 bg-white hover:border-sierra-gold/30")}
                          >
                             <span className="text-base font-serif font-black uppercase tracking-widest">{area}</span>
                             <div className={cn("w-2 h-2 rounded-full", booking.area === area.toLowerCase() ? "bg-sierra-gold" : "bg-neutral-dark/5")} />
                          </div>
                        ))}
                     </div>
                   </motion.div>
                 )}

                 {phase === 3 && (
                   <motion.div key="p3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center max-w-md mx-auto w-full text-center">
                     <h2 className="text-6xl font-serif font-black mb-4">Casi <span className="italic font-normal text-terracotta-mid">listo.</span></h2>
                     <p className="text-neutral-dark/40 font-serif italic mb-12">Danos tu nombre y contacto para sellar el encuentro.</p>
                     <div className="w-full space-y-6">
                        <input placeholder="Nombre Completo" value={booking.name} onChange={e => setBooking({...booking, name: e.target.value})} className="w-full bg-black/5 p-6 rounded-2xl text-xl font-serif font-bold placeholder:opacity-20 outline-none focus:ring-2 focus:ring-sierra-gold/20 transition-all" />
                        <input placeholder="WhatsApp de Contacto" value={booking.phone} onChange={e => setBooking({...booking, phone: e.target.value})} className="w-full bg-black/5 p-6 rounded-2xl text-xl font-serif font-bold placeholder:opacity-20 outline-none focus:ring-2 focus:ring-sierra-gold/20 transition-all" />
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Layout Footer */}
            <div className="px-12 py-12 flex justify-between items-center bg-white border-t border-black/5">
               <button disabled={phase === 1} onClick={() => setPhase(p => p-1)} className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-dark/20 disabled:opacity-0 transition-opacity">Atrás</button>
               {phase < 3 ? (
                 <button onClick={() => setPhase(p => p+1)} className="group flex items-center gap-6 text-neutral-dark">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Continuar</span>
                    <div className="w-16 h-16 rounded-full bg-sierra-gold flex items-center justify-center text-white scale-125 group-hover:scale-135 transition-transform"><ArrowRight size={24} /></div>
                 </button>
               ) : (
                 <button onClick={handleWhatsApp} className="group flex items-center gap-6 text-green-600">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Finalizar WhatsApp</span>
                    <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white scale-125 group-hover:scale-135 transition-transform"><Smartphone size={24} /></div>
                 </button>
               )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
