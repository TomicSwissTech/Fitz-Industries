import React from "react";
import { Link } from "wouter";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/50 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="group flex flex-col cursor-pointer">
        <span className="text-2xl md:text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
          FITZ
        </span>
        <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-white/70">
          INDUSTRIES
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest">
          Über Uns
        </a>
        <a href="#companies" className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest">
          Unternehmen
        </a>
        <a href="#foundation" className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest">
          Stiftung
        </a>
        <a href="#contact" className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest">
          Kontakt
        </a>
      </nav>
      
      {/* Mobile Menu Toggle (Simplified for showcase) */}
      <button className="md:hidden text-white/70 hover:text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </header>
  );
}
