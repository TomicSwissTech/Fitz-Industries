import React, { useState } from "react";
import { Link } from "wouter";

const LINKS = [
  { href: "#about", label: "Über Uns" },
  { href: "#companies", label: "Unternehmen" },
  { href: "#foundation", label: "Stiftung" },
  { href: "#contact", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <Link href="/" className="group flex flex-col cursor-pointer">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
            FITZ
          </span>
          <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-white/70">
            INDUSTRIES
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="md:hidden text-white/70 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-md px-6 py-5 flex flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
