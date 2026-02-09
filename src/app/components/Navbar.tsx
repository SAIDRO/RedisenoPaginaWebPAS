import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from '../../assets/logo-pas.svg';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    // Elemento reintegrado de la versión 1
    { name: 'Quiénes Somos', path: '/quienes-somos' },
    { name: 'Noticias', path: '/noticias' },
    { name: 'Contactanos', path: '/contactanos' },
    { name: 'Transparencia', path: '/transparencia' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return false;
    }
    return location.pathname === path;
  };

  const handleLinkClick = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1a0033] via-[#2d1b69] to-[#0a1f44] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Logo Partido Sinaloense" 
              className="h-16 w-auto object-contain bg-white rounded-lg p-1"
            />
            <div className="hidden md:block">
              <div className="text-white font-bold text-xl">Partido Sinaloense</div>
              <div className="text-[#00d4ff] text-xs">Unidos por Sinaloa</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-white hover:text-[#00d4ff] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-[#00d4ff] bg-white/10'
                      : 'text-white hover:text-[#00d4ff]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/afiliacion"
              className="bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              AFÍLIATE
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a0033]/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-white hover:text-[#00d4ff] hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-[#00d4ff] bg-white/10'
                      : 'text-white hover:text-[#00d4ff] hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/afiliacion"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-3 py-2 rounded-full font-bold text-base text-center mt-4"
            >
              AFÍLIATE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}