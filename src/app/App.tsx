import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { ServicesSection } from './components/ServicesSection';
import { MultimediaSection } from './components/MultimediaSection';
import { StatsSection } from './components/StatsSection';
import { Footer } from './components/Footer';
import { Afiliacion } from './pages/Afiliacion';
import { QuienesSomos } from './pages/QuienesSomos';
import { Transparencia } from './pages/Transparencia';
import { Servicios } from './pages/Servicios';
import { Contactanos } from './pages/Contactanos';
import { Noticias } from './pages/Noticias';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsSection limit={3} />
      <ServicesSection />
      <MultimediaSection />
      <StatsSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/afiliacion" element={<Afiliacion />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/nuestro-partido" element={<QuienesSomos />} />
      </Routes>
    </Router>
  );
}