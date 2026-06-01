import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { companies } from "@/data/companies";
import { ExternalLink, MapPin, Building2, X } from "lucide-react";
import { geoEquirectangular, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 500;

// Single shared equirectangular projection: used for BOTH the land geography
// and the company markers, so pins always land on the correct continents.
const projection = geoEquirectangular()
  .scale(MAP_WIDTH / (2 * Math.PI))
  .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);

const pathGenerator = geoPath(projection);

// Pre-compute country land paths once.
const landPaths: string[] = (() => {
  const topology = worldData as any;
  const fc = feature(topology, topology.objects.countries) as any;
  return (fc.features as any[])
    .map((f) => pathGenerator(f))
    .filter((d): d is string => Boolean(d));
})();

export function CompaniesMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCompany = useMemo(
    () => companies.find((c) => c.id === selectedId),
    [selectedId]
  );

  // Project each company to a percentage position within the 2:1 map box.
  const points = useMemo(
    () =>
      companies.map((company) => {
        const projected = projection([
          company.coordinates[1],
          company.coordinates[0],
        ]);
        const [px, py] = projected ?? [0, 0];
        return {
          company,
          x: (px / MAP_WIDTH) * 100,
          y: (py / MAP_HEIGHT) * 100,
        };
      }),
    []
  );

  return (
    <section
      id="companies"
      className="py-24 md:py-32 bg-black relative border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            Unser Netzwerk
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Globale Präsenz
          </h3>
          <p className="text-white/50 mt-4 max-w-xl mx-auto font-light">
            Elf Unternehmen an internationalen Standorten – vereint unter dem
            Dach von FITZ INDUSTRIES.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Companies List */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1 flex flex-col lg:h-[600px]">
            <div className="flex-1 overflow-y-auto lg:pr-4 space-y-3 custom-scrollbar">
              {companies.map((company) => (
                <button
                  key={company.id}
                  onClick={() =>
                    setSelectedId(
                      company.id === selectedId ? null : company.id
                    )
                  }
                  aria-pressed={selectedId === company.id}
                  className={`w-full text-left p-5 transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    selectedId === company.id
                      ? "bg-primary/10 border-primary text-white"
                      : "bg-card border-card-border hover:border-primary/50 text-white/70 hover:text-white"
                  }`}
                >
                  <h4
                    className={`font-bold text-lg mb-1 ${
                      selectedId === company.id ? "text-primary" : ""
                    }`}
                  >
                    {company.name}
                  </h4>
                  <p className="text-sm opacity-70 mb-2">{company.sector}</p>
                  <div className="flex items-center gap-1.5 text-xs opacity-60">
                    <MapPin size={14} aria-hidden="true" />
                    <span>{company.location}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map & Detail Panel */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2 relative bg-card border border-card-border rounded-xl overflow-hidden">
            <div className="relative w-full aspect-[2/1]">
              {/* Dotted world geography (same projection as markers) */}
              <svg
                viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                className="absolute inset-0 w-full h-full"
                role="img"
                aria-label="Weltkarte mit den internationalen Standorten der Unternehmensgruppe"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <pattern
                    id="land-dots"
                    width="7"
                    height="7"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" />
                  </pattern>
                  <clipPath id="land-clip">
                    {landPaths.map((d, i) => (
                      <path key={i} d={d} />
                    ))}
                  </clipPath>
                </defs>

                {/* Subtle land fill */}
                <g className="text-white/[0.04]">
                  {landPaths.map((d, i) => (
                    <path key={i} d={d} fill="currentColor" />
                  ))}
                </g>
                {/* Dotted halftone overlay clipped to land */}
                <rect
                  x="0"
                  y="0"
                  width={MAP_WIDTH}
                  height={MAP_HEIGHT}
                  fill="url(#land-dots)"
                  clipPath="url(#land-clip)"
                  className="text-white/25"
                />
              </svg>

              {/* Markers */}
              {points.map(({ company, x, y }) => {
                const isSelected = selectedId === company.id;
                return (
                  <button
                    key={company.id}
                    onClick={() =>
                      setSelectedId(
                        company.id === selectedId ? null : company.id
                      )
                    }
                    aria-label={`${company.name} – ${company.location}`}
                    aria-pressed={isSelected}
                    title={`${company.name} – ${company.location}`}
                    className="absolute w-7 h-7 -ml-3.5 -mt-3.5 flex items-center justify-center group z-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <span
                      className={`absolute rounded-full transition-all duration-500 ${
                        isSelected
                          ? "w-full h-full bg-primary/40 animate-ping"
                          : "w-0 h-0 group-hover:w-full group-hover:h-full bg-primary/20"
                      }`}
                    />
                    <span
                      className={`rounded-full transition-all ${
                        isSelected
                          ? "w-3 h-3 bg-primary shadow-[0_0_15px_rgba(197,160,89,1)]"
                          : "w-2.5 h-2.5 bg-white/60 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(197,160,89,0.8)]"
                      }`}
                    />
                  </button>
                );
              })}

              {/* Floating Detail Panel */}
              <AnimatePresence>
                {selectedCompany && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-black/90 backdrop-blur-xl border border-primary/30 p-6 z-20"
                  >
                    <button
                      onClick={() => setSelectedId(null)}
                      aria-label="Schließen"
                      className="absolute top-4 right-4 text-white/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <X size={18} aria-hidden="true" />
                    </button>
                    <div className="flex items-center gap-2 text-primary mb-2 pr-6">
                      <Building2 size={16} aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {selectedCompany.sector}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {selectedCompany.name}
                    </h4>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {selectedCompany.description}
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} aria-hidden="true" />
                        <span>{selectedCompany.location}</span>
                      </div>
                    </div>
                    {selectedCompany.website ? (
                      <a
                        href={selectedCompany.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-white transition-colors"
                      >
                        Website besuchen
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-white/40 text-sm">
                        Kontakt über die Gruppe: fitz.li
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
