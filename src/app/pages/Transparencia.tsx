import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Shield, Eye, FileText, CheckCircle, Users, FileCheck, Download, Info } from 'lucide-react';
import { motion } from 'motion/react';

export function Transparencia() {
  const [activeTab, setActiveTab] = useState('todos');

  const stats = [
    {
      icon: Users,
      value: '12,458',
      label: 'Afiliados Activos',
      change: '+8.2%',
      color: 'from-[#e91e8c] to-[#ff1493]',
    },
    {
      icon: FileText,
      value: '156',
      label: 'Documentos Publicados',
      change: '+12.5%',
      color: 'from-[#2d1b69] to-[#4a3599]',
    },
    {
      icon: Shield,
      value: '94%',
      label: 'Transparencia',
      change: '+2.3%',
      color: 'from-[#e91e8c] to-[#c71585]',
    },
    {
      icon: CheckCircle,
      value: '100%',
      label: 'Cumplimiento Legal',
      change: 'Constante',
      color: 'from-[#00d4ff] to-[#0099cc]',
      changeColor: 'text-[#00d4ff]',
    },
  ];

  const principles = [
    {
      icon: Eye,
      title: 'Acceso a la Información',
      description: 'Todos los ciudadanos tienen derecho a acceder a información sobre nuestras actividades, decisiones y uso de recursos.',
      color: 'from-[#e91e8c]/20 to-[#ff1493]/20',
      iconColor: 'text-[#e91e8c]',
    },
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Actuamos con honestidad e integridad, garantizando coherencia entre nuestros valores declarados y nuestras acciones diarias.',
      color: 'from-[#2d1b69]/20 to-[#4a3599]/20',
      iconColor: 'text-[#2d1b69]',
    },
    {
      icon: FileCheck,
      title: 'Rendición de Cuentas',
      description: 'Publicamos informes detallados sobre nuestras finanzas, proyectos y resultados alcanzados.',
      color: 'from-[#e91e8c]/20 to-[#c71585]/20',
      iconColor: 'text-[#e91e8c]',
    },
  ];

  const allDocuments = [
    {
      id: 1,
      title: 'Informe Anual 2025',
      date: '31 de Enero, 2025',
      size: '2.4 MB',
      format: 'PDF',
      category: 'informes',
      badge: 'Reciente',
      badgeColor: 'bg-[#e91e8c]',
    },
    {
      id: 2,
      title: 'Estados Financieros Q4 2025',
      date: '15 de Enero, 2025',
      size: '1.8 MB',
      format: 'PDF',
      category: 'finanzas',
      badge: 'Finanzas',
      badgeColor: 'bg-[#e91e8c]',
    },
    {
      id: 3,
      title: 'Estatutos del Partido',
      date: '10 de Enero, 2025',
      size: '956 KB',
      format: 'PDF',
      category: 'legal',
      badge: 'Legal',
      badgeColor: 'bg-[#00d4ff]',
    },
    {
      id: 4,
      title: 'Código de Ética',
      date: '5 de Enero, 2026',
      size: '654 KB',
      format: 'PDF',
      category: 'legal',
      badge: 'Legal',
      badgeColor: 'bg-[#00d4ff]',
    },
    {
      id: 5,
      title: 'Registro de Afiliados 2025',
      date: '28 de Diciembre, 2025',
      size: '3.2 MB',
      format: 'PDF',
      category: 'informes',
      badge: 'Informes',
      badgeColor: 'bg-[#e91e8c]',
    },
    {
      id: 6,
      title: 'Presupuesto 2026',
      date: '20 de Diciembre, 2025',
      size: '2.1 MB',
      format: 'PDF',
      category: 'finanzas',
      badge: 'Finanzas',
      badgeColor: 'bg-[#e91e8c]',
    },
  ];

  const filteredDocuments = activeTab === 'todos' 
    ? allDocuments 
    : allDocuments.filter(doc => doc.category === activeTab);

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transparencia y Rendición de Cuentas
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprometidos con la claridad y la honestidad. Aquí encontrarás toda la información sobre nuestras actividades, finanzas y decisiones.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-sm font-semibold ${stat.changeColor || 'text-green-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Principios de Transparencia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Operamos bajo estrictos estándares de transparencia y rendición de cuentas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-[#e91e8c]"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${principle.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentos Oficiales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descarga y consulta nuestros informes, estados financieros y documentos legales
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'informes', label: 'Informes' },
              { id: 'finanzas', label: 'Finanzas' },
              { id: 'legal', label: 'Legal' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e91e8c]/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#e91e8c]" />
                  </div>
                  <span className={`${doc.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {doc.badge}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600 mb-1">Fecha: {doc.date}</p>
                <p className="text-sm text-gray-600 mb-4">Tamaño: {doc.size} • {doc.format}</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-[#1a0033] to-[#2d1b69] text-white py-2.5 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Descargar
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                    <Info className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#1a0033] to-[#2d1b69] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Cargar Más Documentos
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a0033] via-[#2d1b69] to-[#0a1f44]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas Más Información?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Si no encuentras la información que buscas o tienes alguna solicitud específica, contáctanos. Estamos comprometidos a responder todas tus inquietudes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Solicitar Información
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
              Contactar Oficina de Transparencia
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}