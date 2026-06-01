import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">Kontakt</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Verbinden Sie sich mit uns.
              </h3>
              <p className="text-white/70 mb-10 leading-relaxed font-light">
                Für Presseanfragen, Investorenbeziehungen oder allgemeine geschäftliche Anliegen steht Ihnen unser zentrales Management zur Verfügung.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Headquarters</h4>
                    <p className="text-white/60 text-sm">St. Gallen, Schweiz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center shrink-0">
                    <Globe className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Group Domain</h4>
                    <p className="text-white/60 text-sm">fitz.li</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-white/60 text-sm">contact@fitz.li</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-card border border-card-border p-8">
                {status === 'success' ? (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <Mail className="text-primary w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Vielen Dank</h4>
                    <p className="text-white/60">Bitte beachten Sie: Dies ist eine Demonstration – es erfolgt kein Versand. Für eine echte Kontaktaufnahme schreiben Sie an contact@fitz.li.</p>
                    <button 
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-primary text-sm font-medium hover:text-white transition-colors"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Nachricht</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-primary text-black font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors disabled:opacity-50"
                    >
                      {status === 'submitting' ? 'Senden...' : 'Nachricht Senden'}
                    </button>
                  </div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
