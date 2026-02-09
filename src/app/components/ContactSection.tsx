import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      email: '',
      servicio: '',
      mensaje: '',
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="bg-gradient-to-br from-[#1a0033] via-[#2d1b69] to-[#0a1f44] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Ayuda?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Nuestro equipo está disponible para atender tus necesidades y brindarte apoyo que requieras. Contáctanos por cualquiera de estos medios:
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                  <p className="text-gray-300">+52 (667) 123-4567</p>
                  <p className="text-sm text-gray-400 mt-1">Lun-Vie: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#e91e8c]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Correo Electrónico</h3>
                  <p className="text-gray-300">servicios@pas.org.mx</p>
                  <p className="text-sm text-gray-400 mt-1">Respuesta en 24-48 horas</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Oficinas</h3>
                  <p className="text-gray-300">Av. Principal #123, Col. Centro</p>
                  <p className="text-gray-300">Culiacán, Sinaloa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre..."
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 outline-none transition-all"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="servicio" className="block text-sm font-semibold text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="asesoria-legal">Asesoría Legal</option>
                  <option value="gestion-social">Gestión Social</option>
                  <option value="programas-salud">Programas de Salud</option>
                  <option value="bolsa-trabajo">Bolsa de Trabajo</option>
                  <option value="becas-educativas">Becas Educativas</option>
                  <option value="vivienda-digna">Vivienda Digna</option>
                  <option value="informacion-general">Información General</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
