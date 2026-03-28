import { Instagram, Share2, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-pearl-white pt-32 pb-16 px-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Architectural Text */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none">
         <span className="text-[25vw] font-serif font-black leading-none uppercase">PACO</span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Column */}
          <div className="space-y-10">
            <div className="flex flex-col gap-4">
               <img src="/assets/bar_tapas/group-4-2814581.png" alt="ENCAPACO Logo" className="h-16 w-auto object-contain" />
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-pearl-white/40">Güejar Sierra · 2024</span>
            </div>
            <p className="text-pearl-white/40 font-serif italic text-sm leading-relaxed max-w-xs">
              "Donde la madera cruje al ritmo del jazz y el sabor de la sierra invita a quedarse."
            </p>
            <div className="flex gap-6 items-center">
               <a href="#" className="text-pearl-white/40 hover:text-sierra-gold transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-pearl-white/40 hover:text-sierra-gold transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sierra-gold mb-10">Navegación</h4>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-pearl-white/60">
              <li><a href="#menu" className="hover:text-pearl-white transition-colors">Nuestros Sabores</a></li>
              <li><a href="#services" className="hover:text-pearl-white transition-colors">El Ritmo Local</a></li>
              <li><a href="#about" className="hover:text-pearl-white transition-colors">Nuestra Herencia</a></li>
              <li><a href="#" className="hover:text-pearl-white transition-colors">Reservar Mesa</a></li>
            </ul>
          </div>

          {/* Traditional Info Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sierra-gold mb-10">Tradición</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                 <MapPin size={18} className="text-sierra-gold shrink-0" />
                 <span className="text-sm font-serif italic text-pearl-white/60">C. de la Sierra, 18190 <br /> Güéjar Sierra, Granada</span>
              </li>
              <li className="flex items-center gap-4">
                 <Phone size={18} className="text-sierra-gold shrink-0" />
                 <span className="text-sm font-serif italic text-pearl-white/60">+34 958 000 000</span>
              </li>
              <li className="flex items-center gap-4">
                 <Mail size={18} className="text-sierra-gold shrink-0" />
                 <span className="text-sm font-serif italic text-pearl-white/60">hola@encapaco.com</span>
              </li>
            </ul>
          </div>

          {/* Legals Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sierra-gold mb-10">Legal</h4>
            <ul className="space-y-6 text-[10px] font-bold uppercase tracking-widest text-pearl-white/40">
              <li><a href="#" className="hover:text-pearl-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-pearl-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-pearl-white transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-pearl-white transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        {/* Closing Line */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-pearl-white/20">
             © 2024 ENCAPACO · PROYECTO SENIOR GASTRO
           </p>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-pearl-white/40">Güejar Sierra Online</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
