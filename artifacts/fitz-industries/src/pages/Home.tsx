import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CompaniesMap } from "@/components/sections/CompaniesMap";
import { Foundation } from "@/components/sections/Foundation";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <CompaniesMap />
        <Foundation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
