import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NewsSection } from '../components/NewsSection';

export function Noticias() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Noticias Partido Sinaloense"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0033]/90 via-[#2d1b69]/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Noticias del PAS
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  Mantente informado sobre las últimas actividades, logros y propuestas del Partido Sinaloense
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* News Content - Show all news */}
        <NewsSection />
      </div>
      <Footer />
    </>
  );
}
