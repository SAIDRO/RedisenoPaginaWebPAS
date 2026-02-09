import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Asamblea General de Militantes',
    date: '15 de Febrero, 2026',
    time: '10:00 AM',
    location: 'Sede Central PAS, Culiacán',
    image: 'https://images.unsplash.com/photo-1648880177235-f433abeaf1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY28lMjBwb2xpdGljYWwlMjBnYXRoZXJpbmclMjBjcm93ZHxlbnwxfHx8fDE3NzA2MDg2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 250,
    category: 'Asamblea',
  },
  {
    id: 2,
    title: 'Taller de Liderazgo Político para Jóvenes',
    date: '18 de Febrero, 2026',
    time: '4:00 PM',
    location: 'Universidad Autónoma de Sinaloa',
    image: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA2MDg2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 120,
    category: 'Capacitación',
  },
  {
    id: 3,
    title: 'Foro: "Una Vida sin Violencia Política para las Mujeres"',
    date: '22 de Febrero, 2026',
    time: '9:00 AM',
    location: 'Salón Gara Eventos, Mazatlán',
    image: 'https://images.unsplash.com/photo-1680407470509-44b8c229b1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwbWV4aWNvfGVufDF8fHx8MTc3MDYwODY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 180,
    category: 'Foro',
  },
  {
    id: 4,
    title: 'Jornada Comunitaria de Servicios',
    date: '25 de Febrero, 2026',
    time: '8:00 AM',
    location: 'Plaza Cívica Municipal, Los Mochis',
    image: 'https://images.unsplash.com/photo-1760992003927-96ac55e57296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NzA2MDg2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 500,
    category: 'Servicio',
  },
];

export function EventsSection() {
  return (
    <section id="eventos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
            Próximos Eventos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e91e8c] to-[#00d4ff] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Únete a nuestras actividades y forma parte del cambio
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#e91e8c] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#2d1b69] mb-4 line-clamp-2">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start text-gray-600">
                        <Calendar size={18} className="mr-3 mt-0.5 text-[#e91e8c] flex-shrink-0" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <Clock size={18} className="mr-3 mt-0.5 text-[#e91e8c] flex-shrink-0" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <MapPin size={18} className="mr-3 mt-0.5 text-[#e91e8c] flex-shrink-0" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <Users size={18} className="mr-3 mt-0.5 text-[#e91e8c] flex-shrink-0" />
                        <span className="text-sm">{event.attendees} personas interesadas</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-4 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-200">
                      Registrarse
                    </button>
                    <button className="flex-1 border-2 border-[#2d1b69] text-[#2d1b69] px-4 py-2 rounded-full font-bold text-sm hover:bg-[#2d1b69] hover:text-white transition-all duration-200">
                      Más info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#2d1b69] to-[#0a1f44] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
            Ver Calendario Completo
          </button>
        </div>
      </div>
    </section>
  );
}