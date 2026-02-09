import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const newsItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1730303905185-5d86f03907fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMHJhbGx5fGVufDF8fHx8MTc3MDYwODY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'PAS presenta iniciativa para fortalecer la transparencia en el uso de recursos públicos',
    date: '10 de Febrero, 2026',
    readTime: '5 min lectura',
    excerpt: 'Nueva propuesta busca mejorar el acceso a la información pública y rendición de cuentas con herramientas digitales y participación ciudadana.',
    category: 'Política',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1760992003927-96ac55e57296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NzA2MDg2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Programa de becas escolares alcanza a 5,000 estudiantes en todo el estado',
    date: '8 de Febrero, 2026',
    readTime: '4 min lectura',
    excerpt: 'El partido amplía su programa de apoyo educativo beneficiando a familias de escasos recursos con útiles y uniformes.',
    category: 'Educación',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1680407470509-44b8c229b1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwbWV4aWNvfGVufDF8fHx8MTc3MDYwODY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'PAS inaugura centro comunitario en zona rural de Sinaloa',
    date: '5 de Febrero, 2026',
    readTime: '6 min lectura',
    excerpt: 'Nuevo espacio brindará servicios médicos, educativos y de capacitación a comunidades alejadas, fortaleciendo el tejido social.',
    category: 'Desarrollo Social',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1657772990151-b0b9a2b77f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBtZXhpY298ZW58MXx8fHwxNzcwNjA4NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Propuesta para impulsar MIPYMES locales genera apoyo en el congreso',
    date: '3 de Febrero, 2026',
    readTime: '7 min lectura',
    excerpt: 'Iniciativa incluye créditos accesibles y capacitación empresarial gratuita para emprendedores sinaloenses.',
    category: 'Economía',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA2MDg2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Campaña de reforestación planta 10,000 árboles en Culiacán',
    date: '1 de Febrero, 2026',
    readTime: '4 min lectura',
    excerpt: 'Voluntarios del PAS y ciudadanos participan en jornada ambiental masiva para combatir el cambio climática.',
    category: 'Medio Ambiente',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1619301912381-76a94f8b28c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZmxhZyUyMHBhdHJpb3RpY3xlbnwxfHx8fDE3NzA2MDg2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Jornada médica gratuita atiende a más de 2,000 personas',
    date: '28 de Enero, 2026',
    readTime: '5 min lectura',
    excerpt: 'Consultas generales, estudios de laboratorio y medicamentos sin costo para la comunidad en situación vulnerable.',
    category: 'Salud',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzcwNjA4NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Lanzamiento de programa de liderazgo juvenil del PAS',
    date: '25 de Enero, 2026',
    readTime: '6 min lectura',
    excerpt: 'Capacitación en habilidades políticas y sociales para jóvenes de 18 a 29 años que buscan transformar su entorno.',
    category: 'Juventud',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcwNjA4NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'PAS propone mejoras en infraestructura vial de zonas olvidadas',
    date: '22 de Enero, 2026',
    readTime: '5 min lectura',
    excerpt: 'Proyecto contempla pavimentación y alumbrado público en 15 colonias populares durante el primer semestre.',
    category: 'Infraestructura',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsfGVufDF8fHx8MTc3MDYwODY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Festival cultural del PAS reúne a más de 5,000 asistentes',
    date: '20 de Enero, 2026',
    readTime: '4 min lectura',
    excerpt: 'Música, danza y exposiciones artísticas celebran la identidad sinaloense y promueven la convivencia.',
    category: 'Cultura',
  },
];

export function NewsSection({ limit }: { limit?: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Logic for displaying news
  const displayedNews = limit 
    ? newsItems.slice(0, limit) 
    : newsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById('noticias');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <FadeIn direction="up">
            {!limit && (
                <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
                 Noticias del PAS
                </h2>
            )}
             {limit && (
                <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
                 Noticias Recientes
                </h2>
            )}
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            {!limit && (
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Mantente informado sobre las últimas actividades, logros y propuestas del Partido Sinaloense
                </p>
            )}
            {limit && (
                 <>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#e91e8c] to-[#00d4ff] mx-auto"></div>
                  <p className="mt-4 text-lg text-gray-600">
                      Mantente informado sobre nuestras últimas actividades y logros
                  </p>
                 </>
            )}
          </FadeIn>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1} className="h-full">
              <article
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#e91e8c] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                      <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {item.date}
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                           <Clock size={14} className="mr-1" />
                           {item.readTime}
                      </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a0033] mb-3 line-clamp-3 leading-tight group-hover:text-[#e91e8c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-6 line-clamp-3 text-sm flex-grow">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto">
                      <button className="flex items-center text-[#e91e8c] font-bold text-sm hover:text-[#ff1493] transition-colors group/btn">
                      Leer más
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* View All Button - Home Page */}
        {limit && (
          <FadeIn direction="up" delay={0.4} className="text-center mt-12">
            <a href="/noticias" className="inline-block bg-gradient-to-r from-[#2d1b69] to-[#0a1f44] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Ver todas las noticias
            </a>
          </FadeIn>
        )}

        {/* Pagination - News Page */}
        {!limit && (
            <FadeIn direction="up" delay={0.2} className="flex justify-center items-center mt-16 space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
                        currentPage === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#1a0033] text-white hover:bg-[#2d1b69]'
                    }`}
                >
                    Anterior
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-lg font-bold text-sm flex items-center justify-center transition-colors ${
                            currentPage === page
                            ? 'bg-[#e91e8c] text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
                        currentPage === totalPages
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#1a0033] text-white hover:bg-[#2d1b69]'
                    }`}
                >
                    Siguiente
                </button>
            </FadeIn>
        )}
      </div>
    </section>
  );
}
