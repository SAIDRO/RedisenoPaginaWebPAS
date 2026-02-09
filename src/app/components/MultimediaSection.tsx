import React from 'react';
import { Play, ExternalLink, Youtube, Newspaper } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Propuesta de Reformas a las Leyes Electorales',
    thumbnail: 'https://images.unsplash.com/photo-1730303905185-5d86f03907fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMHJhbGx5fGVufDF8fHx8MTc3MDYwODY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '12:34',
    views: '2.3k',
  },
  {
    id: 2,
    title: 'Jornada de Atención Ciudadana en Culiacán',
    thumbnail: 'https://images.unsplash.com/photo-1760992003927-96ac55e57296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NzA2MDg2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '8:15',
    views: '1.8k',
  },
  {
    id: 3,
    title: 'Foro: Una vida sin Violencia Política para Mujeres',
    thumbnail: 'https://images.unsplash.com/photo-1680407470509-44b8c229b1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwbWV4aWNvfGVufDF8fHx8MTc3MDYwODY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '45:20',
    views: '5.1k',
  },
];

const newsLinks = [
  {
    id: 1,
    source: 'El Debate',
    title: 'PAS presenta nuevas propuestas legislativas en el Congreso de Sinaloa',
    date: '5 Feb 2026',
    logo: 'https://via.placeholder.com/40x40/e91e8c/ffffff?text=ED',
    url: 'https://debate.com.mx',
  },
  {
    id: 2,
    source: 'Noroeste',
    title: 'Partido Sinaloense fortalece presencia en municipios del norte',
    date: '3 Feb 2026',
    logo: 'https://via.placeholder.com/40x40/00d4ff/ffffff?text=NO',
    url: 'https://noroeste.com.mx',
  },
  {
    id: 3,
    source: 'Línea Directa',
    title: 'Entrevista exclusiva con la dirigencia del PAS',
    date: '1 Feb 2026',
    logo: 'https://via.placeholder.com/40x40/2d1b69/ffffff?text=LD',
    url: 'https://lineadirectaportal.com',
  },
  {
    id: 4,
    source: 'Ríodoce',
    title: 'Análisis: El crecimiento del Partido Sinaloense en 2026',
    date: '28 Ene 2026',
    logo: 'https://via.placeholder.com/40x40/e91e8c/ffffff?text=RD',
    url: 'https://riodoce.mx',
  },
];

export function MultimediaSection() {
  return (
    <section id="multimedia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
            Multimedia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e91e8c] to-[#00d4ff] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Videos, entrevistas y cobertura mediática
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-[#2d1b69] flex items-center">
              <Youtube className="mr-3 text-[#e91e8c]" size={28} />
              Videos Destacados
            </h3>
            <button className="text-[#e91e8c] font-semibold hover:text-[#00d4ff] transition-colors flex items-center">
              Ver canal completo
              <ExternalLink size={16} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-[#e91e8c] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="font-bold text-[#2d1b69] line-clamp-2 group-hover:text-[#e91e8c] transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{video.views} visualizaciones</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News in Media Section */}
        <div>
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold text-[#2d1b69] flex items-center">
              <Newspaper className="mr-3 text-[#e91e8c]" size={28} />
              PAS en los Medios
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsLinks.map((news) => (
              <a
                key={news.id}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-r hover:from-[#2d1b69]/5 hover:to-[#e91e8c]/5 hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-[#e91e8c]/20"
              >
                <div className="flex items-start space-x-4">
                  {/* Logo */}
                  <img
                    src={news.logo}
                    alt={news.source}
                    className="w-12 h-12 rounded-lg flex-shrink-0"
                  />
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#e91e8c] font-bold text-sm">{news.source}</span>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-[#e91e8c] transition-colors flex-shrink-0" />
                    </div>
                    <h4 className="font-bold text-[#2d1b69] mb-2 line-clamp-2 group-hover:text-[#e91e8c] transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-500">{news.date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All News Button */}
          <div className="text-center mt-8">
            <button className="bg-white border-2 border-[#2d1b69] text-[#2d1b69] px-8 py-3 rounded-full font-bold hover:bg-[#2d1b69] hover:text-white transition-all duration-200">
              Ver todas las menciones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
