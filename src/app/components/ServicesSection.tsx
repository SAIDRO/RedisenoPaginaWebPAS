import React from 'react';
import { Scale, Heart, Users, FileText, Briefcase, Home } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

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
      'Educación de laboratorio',
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

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
              Servicios a la Comunidad
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#e91e8c] to-[#00d4ff] mx-auto"></div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos comprometidos en brindarte el apoyo que necesitas. Conoce todos los servicios que tenemos para ti.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div
                  className="relative group h-full"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-gray-100 flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#2d1b69] mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Button */}
                    <div className="mt-auto">
                      <button className="text-[#e91e8c] font-semibold hover:text-[#00d4ff] transition-colors flex items-center group">
                        Solicitar servicio
                        <svg
                          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA Box */}
        <FadeIn direction="up" delay={0.4} className="mt-16">
          <div className="bg-gradient-to-r from-[#2d1b69] to-[#0a1f44] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Necesitas ayuda personalizada?
            </h3>
            <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible para atenderte. Agenda una cita o visítanos en nuestras oficinas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Agendar Cita
              </button>
              <button className="bg-white text-[#2d1b69] px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Ver Horarios
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}