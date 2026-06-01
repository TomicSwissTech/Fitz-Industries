import React from "react";
import { companies } from "@/data/companies";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter text-white">
                FITZ
              </span>
              <span className="text-xs font-medium tracking-[0.3em] text-white/50 uppercase">
                Industries
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Eine globale Unternehmensgruppe vereint unter dem Dach bedingungsloser Qualität und weitsichtiger Exzellenz.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/50 hover:text-primary transition-colors text-sm">Über Uns</a></li>
              <li><a href="#companies" className="text-white/50 hover:text-primary transition-colors text-sm">Unternehmen</a></li>
              <li><a href="#foundation" className="text-white/50 hover:text-primary transition-colors text-sm">Stiftung</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-primary transition-colors text-sm">Kontakt</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Portfolio</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {companies.map(c => (
                <span key={c.id} className="text-white/50 text-sm truncate" title={c.name}>
                  {c.name}
                </span>
              ))}
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} FITZ INDUSTRIES. Gründer: Manuel Fitz.
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-xs uppercase tracking-widest">fitz.li</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
