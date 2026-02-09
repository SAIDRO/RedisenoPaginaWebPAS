import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Target, Eye, Heart, Users, Scale, Award, Lightbulb, Shield } from 'lucide-react';

const timelineEvents = [
  {
    year: '1998',
    title: 'Fundación del Partido',
    description: 'Nace el Partido Sinaloense con la visión de representar genuinamente a los ciudadanos de Sinaloa.',
  },
  {
    year: '2002',
    title: 'Primeras Victorias Electorales',
    description: 'Obtenemos nuestros primeros triunfos en elecciones municipales, demostrando la confianza de la ciudadanía.',
  },
  {
    year: '2010',
    title: 'Consolidación Estatal',
    description: 'Expandimos nuestra presencia en todo Sinaloa con representación en el Congreso del Estado.',
  },
  {
    year: '2015',
    title: 'Programa de Servicios Comunitarios',
    description: 'Lanzamos nuestro programa permanente de atención y servicios a la ciudadanía.',
  },
  {
    year: '2020',
    title: 'Fortalecimiento Institucional',
    description: 'Renovamos nuestra estructura interna con más de 20,000 militantes activos.',
  },
  {
    year: '2026',
    title: 'Hacia el Futuro',
    description: 'Continuamos trabajando por un Sinaloa más justo, transparente y próspero.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Compromiso Social',
    description: 'Trabajamos por el bienestar de todas las familias sinaloenses.',
    color: 'from-[#e91e8c] to-[#ff1493]',
  },
  {
    icon: Shield,
    title: 'Transparencia',
    description: 'Rendimos cuentas claras y actuamos con total apertura.',
    color: 'from-[#00d4ff] to-[#0099cc]',
  },
  {
    icon: Scale,
    title: 'Justicia',
    description: 'Promovemos la equidad y el respeto a los derechos de todos.',
    color: 'from-[#2d1b69] to-[#1a0033]',
  },
  {
    icon: Users,
    title: 'Inclusión',
    description: 'Valoramos la diversidad y promovemos la participación ciudadana.',
    color: 'from-[#e91e8c] to-[#ff1493]',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Buscamos soluciones creativas para los desafíos de nuestra comunidad.',
    color: 'from-[#00d4ff] to-[#0099cc]',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Nos esforzamos por la calidad en cada acción que emprendemos.',
    color: 'from-[#2d1b69] to-[#1a0033]',
  },
];

export function QuienesSomos() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA2MDg2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Equipo Partido Sinaloense"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0033]/90 via-[#2d1b69]/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Quiénes Somos
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  Un partido comprometido con el desarrollo y bienestar de Sinaloa desde 1998
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              El <span className="font-bold text-[#2d1b69]">Partido Sinaloense (PAS)</span> es una institución política 
              comprometida con la democracia, la justicia social y el desarrollo integral de Sinaloa. 
              Durante más de dos décadas, hemos trabajado incansablemente por mejorar la calidad de vida 
              de todos los sinaloenses, promoviendo valores de transparencia, inclusión y servicio público.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Misión */}
              <div className="bg-gradient-to-br from-[#2d1b69] to-[#0a1f44] rounded-2xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                <p className="text-lg text-gray-100 leading-relaxed">
                  Ser el instrumento político que represente fielmente las aspiraciones de los sinaloenses, 
                  promoviendo políticas públicas que generen bienestar social, desarrollo económico y 
                  fortalecimiento democrático, siempre desde la transparencia y el compromiso ciudadano.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-gradient-to-br from-[#e91e8c] to-[#ff1493] rounded-2xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Eye size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
                <p className="text-lg text-gray-100 leading-relaxed">
                  Consolidarnos como la fuerza política líder en Sinaloa, reconocida por su efectividad, 
                  cercanía con la ciudadanía y capacidad de transformar positivamente la realidad estatal, 
                  siendo modelo de participación democrática y servicio público en México.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Historia - Timeline */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
                Nuestra Historia
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e91e8c] to-[#00d4ff] mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600">
                Más de 25 años de trabajo por Sinaloa
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2d1b69] via-[#e91e8c] to-[#00d4ff]"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <span className="inline-block bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold text-[#2d1b69] mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#e91e8c] to-[#ff1493] rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Empty space on the other side */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
                Nuestros Valores
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e91e8c] to-[#00d4ff] mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600">
                Los principios que guían nuestro actuar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2d1b69] mb-3 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-[#2d1b69] to-[#0a1f44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Te identificas con nuestros valores?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Únete a nuestra causa y sé parte del cambio que Sinaloa necesita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/afiliacion"
                className="bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                Afíliate Ahora
              </a>
              <a
                href="/#contacto"
                className="bg-white text-[#2d1b69] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
