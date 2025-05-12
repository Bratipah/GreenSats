import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TechStackSection } from './components/TechStackSection';
import { MarketsSection } from './components/MarketsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
import { ToolsSection } from './components/ToolsSection';
export function App() {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <ToolsSection />
        <MarketsSection />
        <RoadmapSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>;
}