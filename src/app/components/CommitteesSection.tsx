import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight, User } from 'lucide-react';

interface Committee {
  id: string;
  name: string;
  president: string;
  address: string;
  phone: string;
  email: string;
}

const committees: Committee[] = [
  {
    id: 'culiacan',
    name: 'Culiacán',
    president: 'Dr. Víctor Antonio Corrales Burgueño',
    address: 'Av. Insurgentes 123, Col. Centro, C.P. 80000',
    phone: '(667) 123-4567',
    email: 'culiacan@partidosinaloense.mx'
  },
  {
    id: 'mazatlan',
    name: 'Mazatlán',
    president: 'Lic. América Carrasco Valenzuela',
    address: 'Calle 21 de Marzo 405, Col. Centro',
    phone: '(669) 987-6543',
    email: 'mazatlan@partidosinaloense.mx'
  },
  {
    id: 'ahome',
    name: 'Ahome',
    president: 'Mtra. Marysol Morales Valenzuela',
    address: 'Blvd. Rosendo G. Castro 123, Centro',
    phone: '(668) 812-3456',
    email: 'ahome@partidosinaloense.mx'
  },
  {
    id: 'guasave',
    name: 'Guasave',
    president: 'Lic. Gerardo Peñuelas Vargas',
    address: 'Av. Juan Carrasco 55, Centro',
    phone: '(687) 872-1098',
    email: 'guasave@partidosinaloense.mx'
  },
  {
    id: 'salvador-alvarado',
    name: 'Salvador Alvarado',
    president: 'C. Martha Olivia González Montoya',
    address: 'Calle Mariano Matamoros 100, Centro',
    phone: '(673) 732-5678',
    email: 'salvador.alvarado@partidosinaloense.mx'
  },
  {
    id: 'navolato',
    name: 'Navolato',
    president: 'Prof. Juan Carlos Ibarra',
    address: 'Calle Almada 45, Centro',
    phone: '(672) 722-9012',
    email: 'navolato@partidosinaloense.mx'
  },
  {
    id: 'el-fuerte',
    name: 'El Fuerte',
    president: 'Lic. Carlos Sarmienta',
    address: 'Calle 5 de Mayo, Centro',
    phone: '(698) 893-0234',
    email: 'elfuerte@partidosinaloense.mx'
  },
  {
    id: 'escuinapa',
    name: 'Escuinapa',
    president: 'Dra. Blanca Estela García',
    address: 'Calle Gabriel Leyva 22, Centro',
    phone: '(695) 953-2109',
    email: 'escuinapa@partidosinaloense.mx'
  }
];

export function CommitteesSection() {
  const [selectedCommittee, setSelectedCommittee] = useState<Committee>(committees[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2d1b69] mb-4">
            Comités Municipales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e91e8c] to-[#00d4ff] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra tu comité más cercano. Estamos presentes en todo Sinaloa para escucharte y atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List - Desktop: Left col, Mobile: Top section */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-[500px] flex flex-col">
            <div className="p-4 bg-[#1a0033] text-white font-bold text-lg">
              Selecciona tu Municipio
            </div>
            <div className="overflow-y-auto flex-1 p-2 space-y-1 custom-scrollbar">
              {committees.map((committee) => (
                <button
                  key={committee.id}
                  onClick={() => setSelectedCommittee(committee)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    selectedCommittee.id === committee.id
                      ? 'bg-gradient-to-r from-[#e91e8c]/10 to-[#e91e8c]/5 text-[#e91e8c] font-bold border-l-4 border-[#e91e8c]'
                      : 'hover:bg-gray-50 text-gray-600 hover:pl-5 border-l-4 border-transparent'
                  }`}
                >
                  <span className="truncate">{committee.name}</span>
                  {selectedCommittee.id === committee.id && (
                    <ChevronRight size={18} className="text-[#e91e8c]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details - Desktop: Right col, Mobile: Bottom section */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-[#1a0033] to-[#2d1b69] rounded-2xl shadow-xl overflow-hidden text-white relative min-h-[500px] flex flex-col justify-center p-8 md:p-12">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#e91e8c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

              <div className="relative z-10">
                <div className="inline-block bg-[#e91e8c] px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-lg">
                  Comité Municipal
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-8">
                  {selectedCommittee.name}
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start md:items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#e91e8c] transition-colors duration-300 flex-shrink-0">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Presidente(a)</p>
                      <p className="text-xl md:text-2xl font-semibold">{selectedCommittee.president}</p>
                    </div>
                  </div>

                  <div className="flex items-start md:items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00d4ff] transition-colors duration-300 flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Dirección</p>
                      <p className="text-lg md:text-xl text-gray-200">{selectedCommittee.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300 flex-shrink-0">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Teléfono</p>
                        <p className="text-lg font-medium">{selectedCommittee.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300 flex-shrink-0">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Correo</p>
                        <p className="text-lg font-medium">{selectedCommittee.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-white text-[#1a0033] py-3 px-6 rounded-xl font-bold hover:bg-[#e91e8c] hover:text-white transition-all duration-300 shadow-lg text-center">
                    Ver Ubicación en Mapa
                  </button>
                  <button className="flex-1 border-2 border-white/30 text-white py-3 px-6 rounded-xl font-bold hover:bg-white hover:text-[#1a0033] transition-all duration-300 text-center">
                    Contactar Comité
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
