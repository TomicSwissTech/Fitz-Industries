import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">Über Uns</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Visionäre Führung.<br />
              <span className="text-white/50">Globale Präsenz.</span>
            </h3>
            
            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
              <p>
                Gegründet und geführt von Manuel Fitz, steht FITZ INDUSTRIES für ein diversifiziertes Portfolio an Premium-Unternehmen. Unsere Philosophie verbindet Schweizer Präzision mit internationalem Weitblick.
              </p>
              <p>
                Von Immobilien und Bau über Mode, Automotive und Energie bis hin zur Kosmetik – unsere Beteiligungen agieren in zukunftsweisenden Märkten. Wir investieren nicht nur in Unternehmen, sondern in nachhaltige Werte und herausragende Qualität.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-white font-medium tracking-wider">Manuel Fitz, Gründer</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-card border border-card-border p-8 flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-bold text-primary mb-2">11</span>
              <span className="text-sm text-white/50 uppercase tracking-widest">Unternehmen</span>
            </div>
            <div className="bg-card border border-card-border p-8 flex flex-col justify-center items-center text-center mt-12">
              <span className="text-5xl font-bold text-primary mb-2">6</span>
              <span className="text-sm text-white/50 uppercase tracking-widest">Länder</span>
            </div>
            <div className="col-span-2 bg-card border border-card-border p-8 mt-[-3rem]">
              <span className="text-sm text-white/50 uppercase tracking-widest block mb-4">Globale Standorte</span>
              <div className="flex flex-wrap gap-3">
                {['Schweiz', 'Österreich', 'England', 'USA', 'Spanien', 'VAE'].map((country) => (
                  <span key={country} className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-sm">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
