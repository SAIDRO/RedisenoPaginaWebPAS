import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';

export function Contactanos() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contacto Partido Sinaloense"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0033]/90 via-[#2d1b69]/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Contáctanos
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  Estamos aquí para escucharte y trabajar juntos por Sinaloa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
