import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { Scale, Heart, Users, FileText, Briefcase, Home } from 'lucide-react';

export function Servicios() {
  const services = [
    {
      icon: Scale,
      title: 'Asesoría Legal',
      description: 'Orientación jurídica gratuita en temas civiles, laborales, penales y trámites legales para afiliados y ciudadanos.',
      color: 'from-[#e91e8c] to-[#ff1493]',
      details: [
        'Consultas jurídicas gratuitas',
        'Orientación en trámites legales',
        'Mediación en conflictos',
        'Referencias a especialistas',
      ],
      schedule: 'Lunes a Viernes, 9:00 AM - 5:00 PM',
    },
    {
      icon: Heart,
      title: 'Gestión Social',
      description: 'Apoyo en trámites y gestiones ante instituciones oficiales para beneficio de familias y comunidades.',
      color: 'from-[#e91e8c] to-[#ff1493]',
      details: [
        'Apoyo en trámites oficiales',
        'Seguimiento ante autoridades',
        'Orientación ciudadana',
        'Gestión con autoridades',
      ],
      schedule: 'Lunes a Viernes, 8:00 AM - 6:00 PM',
    },
    {
      icon: Users,
      title: 'Programas de Salud',
      description: 'Jornadas médicas, consultas gratuitas y campañas de prevención para la salud de todas las comunidades.',
      color: 'from-[#e91e8c] to-[#ff1493]',
      details: [
        'Consultas médicas generales',
        'Jornadas de prevención',
        'Estudios de laboratorio',
        'Campañas de vacunación',
        'Jornadas de medicamentos',
      ],
      schedule: 'Jornadas Mensuales, programadas',
    },
    {
      icon: Briefcase,
      title: 'Bolsa de Trabajo',
      description: 'Conectamos a ciudadanos con oportunidades laborales y vinculamos a organizaciones afiliadas.',
      color: 'from-[#2d1b69] to-[#4a3599]',
      details: [
        'Vacantes actualizadas',
        'Orientación laboral',
        'Talleres de CV',
        'Preparación para entrevistas',
      ],
      schedule: 'Lunes a Viernes, 8:00 AM - 4:00 PM',
    },
    {
      icon: FileText,
      title: 'Becas Educativas',
      description: 'Programa de apoyo económico para estudiantes destacados en diferentes niveles educativos.',
      color: 'from-[#2d1b69] to-[#4a3599]',
      details: [
        'Becas escolares',
        'Apoyo para materiales',
        'Becas de capacitación',
        'Asesoría académica',
      ],
      schedule: 'Convocatorias semestrales',
    },
    {
      icon: Home,
      title: 'Vivienda Digna',
      description: 'Asesoría y gestión para programas de vivienda y mejoramiento del hogar.',
      color: 'from-[#2d1b69] to-[#4a3599]',
      details: [
        'Información sobre créditos',
        'Programas de mejoramiento',
        'Asesoría en trámites',
        'Seguimiento de solicitudes',
      ],
      schedule: 'Lunes a Viernes, 9:00 AM - 2:00 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#1a0033] via-[#2d1b69] to-[#0a1f44] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Servicios a la Comunidad
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              El Partido Sinaloense ofrece diversos programas y servicios diseñados para mejorar la calidad de vida de todos los sinaloenses
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#2d1b69] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#e91e8c] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Schedule */}
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">Horario:</span> {service.schedule}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="w-full bg-gradient-to-r from-[#1a0033] to-[#2d1b69] text-white py-3 px-6 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
                    Solicitar Servicio
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
