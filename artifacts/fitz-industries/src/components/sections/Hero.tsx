import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={`${import.meta.env.BASE_URL}fitz-gold-particles.jpg`}
          className="w-full h-full object-cover opacity-50"
        >
          <source src={`${import.meta.env.BASE_URL}fitz-brand.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase mb-2">
            FITZ
          </h1>
          <span className="text-sm md:text-lg font-medium tracking-[0.5em] text-white/70 mb-8 uppercase">
            Industries
          </span>
          
          <div className="w-12 h-px bg-primary mb-8" />
          
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
            Eine globale Unternehmensgruppe vereint unter dem Dach bedingungsloser Qualität und weitsichtiger Exzellenz.
          </p>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Entdecken</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
