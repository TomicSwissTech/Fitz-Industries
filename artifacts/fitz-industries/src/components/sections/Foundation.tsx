import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Foundation() {
  return (
    <section id="foundation" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Heart className="text-primary w-8 h-8" />
            </div>
            
            <h2 className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">Engagement</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Fitz Foundation
            </h3>
            
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
              Erfolg verpflichtet. Mit der Fitz Foundation bündeln wir unser gesellschaftliches Engagement. Unser Fokus liegt auf der nachhaltigen Unterstützung von Tier- und Kinderheimen weltweit. Wir glauben daran, dass echte Größe sich nicht nur in geschäftlichen Zahlen, sondern im positiven Einfluss auf die Gesellschaft misst.
            </p>
            
            <div className="w-24 h-px bg-primary/50 mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
