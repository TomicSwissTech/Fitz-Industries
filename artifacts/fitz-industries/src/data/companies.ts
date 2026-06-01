export type Company = {
  id: string;
  name: string;
  sector: string;
  description: string;
  location: string;
  coordinates: [number, number]; // [lat, lng]
  website?: string;
};

export const companies: Company[] = [
  {
    id: "fhg",
    name: "Fitz Holding Group AG (FHG.AG)",
    sector: "Holding / Muttergesellschaft",
    description: "Die Dachgesellschaft der Gruppe. Zentrale Steuerung und strategische Ausrichtung aller Tochtergesellschaften unter der Führung von Manuel Fitz.",
    location: "St. Gallen, Schweiz",
    coordinates: [47.4245, 9.3767],
    website: "https://fhg.ag"
  },
  {
    id: "rlh",
    name: "Riverside Lifestyle AG (RLH.AG)",
    sector: "Lifestyle & Immobilien",
    description: "Entwicklung und Management von Premium-Immobilien und exklusiven Lifestyle-Konzepten.",
    location: "Zürich, Schweiz",
    coordinates: [47.3769, 8.5417],
    website: "https://rlh.ag"
  },
  {
    id: "riedt-bau",
    name: "Riedt Bau",
    sector: "Bau & Konstruktion",
    description: "Hochwertige Bauausführung und Konstruktion für anspruchsvolle Architekturprojekte.",
    location: "Basel, Schweiz",
    coordinates: [47.5596, 7.5886]
  },
  {
    id: "solar-concept",
    name: "Solar Concept",
    sector: "Solar & Energie",
    description: "Zukunftsweisende Solarenergielösungen für eine nachhaltige Energieversorgung.",
    location: "Luzern, Schweiz",
    coordinates: [47.0502, 8.3093]
  },
  {
    id: "capital-1",
    name: "Capital 1 AG",
    sector: "Finanzen & Beteiligungen",
    description: "Strategische Finanzierungen, Asset Management und globale Unternehmensbeteiligungen.",
    location: "Zug, Schweiz",
    coordinates: [47.1662, 8.5155]
  },
  {
    id: "qualitycars",
    name: "Qualitycars",
    sector: "Automobil / Premiumfahrzeuge",
    description: "Handel und Vermittlung von Premium- und Luxusfahrzeugen auf höchstem Niveau.",
    location: "Salzburg, Österreich",
    coordinates: [47.8095, 13.0550]
  },
  {
    id: "fish-cloth",
    name: "F.I.S.H. Cloth",
    sector: "Mode & Bekleidung",
    description: "Exklusive Modemarke mit Fokus auf zeitloses Design und erstklassige Materialien.",
    location: "London, England",
    coordinates: [51.5074, -0.1278]
  },
  {
    id: "usimport24",
    name: "USimport24",
    sector: "Import & Handel",
    description: "Spezialisierter Import und globaler Handel mit exklusiven Gütern aus Nordamerika.",
    location: "Miami / New York, USA",
    coordinates: [25.7617, -80.1918]
  },
  {
    id: "cannacul",
    name: "CannaCul",
    sector: "Cannabis & Cultivation",
    description: "Forschung, Anbau und Entwicklung von hochwertigen Cannabis-Produkten.",
    location: "Madrid, Spanien",
    coordinates: [40.4168, -3.7038]
  },
  {
    id: "skin-supply",
    name: "Skin Supply",
    sector: "Beauty & Supply",
    description: "Premium Beauty-Produkte und dermatologische Versorgungslösungen.",
    location: "Dubai, VAE",
    coordinates: [25.2048, 55.2708]
  },
  {
    id: "fitz-foundation",
    name: "Fitz Foundation",
    sector: "Stiftung",
    description: "Gemeinnütziger Arm der Gruppe. Dedizierte Unterstützung von Tier- und Kinderheimen weltweit.",
    location: "St. Gallen, Schweiz",
    coordinates: [47.4245, 9.3768] // Slightly offset from holding
  }
];
