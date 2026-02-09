import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { XLogo } from './ui/XLogo';
import logo from '../../assets/logo-pas.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Facebook, 
      url: 'https://www.facebook.com/partidosinaloense', 
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: XLogo, 
      url: 'https://twitter.com/pas_sinaloa', 
      label: 'X (Twitter)',
      color: 'hover:bg-black'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/partidosinaloense', 
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    },
    { 
      icon: Youtube, 
      url: 'https://www.youtube.com/partidosinaloense', 
      label: 'YouTube',
      color: 'hover:bg-red-600'
    },
  ];

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Quiénes Somos', path: '/quienes-somos' },
    { name: 'Transparencia', path: '/transparencia' },
    { name: 'Afiliación', path: '/afiliacion' },
    { name: 'Noticias', path: '/#noticias' },
    { name: 'Contacto', path: '/#contacto' },
  ];

  const serviceLinks = [
    { name: 'Asesoría Legal', path: '#' },
    { name: 'Servicios de Salud', path: '#' },
    { name: 'Atención Ciudadana', path: '#' },
    { name: 'Trámites', path: '#' },
    { name: 'Capacitación', path: '#' },
    { name: 'Agenda tu Cita', path: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a0033] to-[#0a1f44] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-1">
                <img src={logo} alt="Logo PAS" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Partido Sinaloense</div>
                <div className="text-[#00d4ff] text-xs">Unidos por Sinaloa</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Comprometidos con el desarrollo y bienestar de todos los sinaloenses. 
              Trabajamos cada día para construir un mejor futuro para nuestra comunidad.
            </p>
            <Link
              to="/afiliacion"
              className="inline-block bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Afíliate Ahora
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#00d4ff] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#e91e8c] rounded-full mr-2 group-hover:bg-[#00d4ff] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#00d4ff] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#e91e8c] rounded-full mr-2 group-hover:bg-[#00d4ff] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#e91e8c] mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-white mb-1">Sede Central</p>
                  <p>Av. Insurgentes 123, Col. Centro</p>
                  <p>Culiacán, Sinaloa, C.P. 80000</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-[#e91e8c] mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-white mb-1">Teléfono</p>
                  <a href="tel:+526671234567" className="hover:text-[#00d4ff] transition-colors">
                    (667) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-[#e91e8c] mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a href="mailto:contacto@partidosinaloense.mx" className="hover:text-[#00d4ff] transition-colors">
                    contacto@partidosinaloense.mx
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3 text-white">Síguenos</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${social.color} transition-all duration-200 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Partido Sinaloense. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                Aviso de Privacidad
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                Centro de Transparencia
              </Link>
              <a 
                href="https://www.ine.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00d4ff] transition-colors flex items-center"
              >
                Portal INE
                <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}