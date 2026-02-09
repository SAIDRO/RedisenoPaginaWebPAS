import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CheckCircle, UserPlus, Shield, Award } from 'lucide-react';

export function Afiliacion() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
    telefono: '',
    codigoPostal: '',
    ine: '',
    aceptaTerminos: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí se enviaría la información al servidor
    console.log('Formulario enviado:', formData);
  };

  const benefits = [
    {
      icon: UserPlus,
      title: 'Participación Activa',
      description: 'Forma parte de las decisiones del partido y propón iniciativas',
    },
    {
      icon: Shield,
      title: 'Servicios Exclusivos',
      description: 'Accede a asesorías, capacitaciones y eventos especiales',
    },
    {
      icon: Award,
      title: 'Desarrollo Político',
      description: 'Crece como líder en tu comunidad con nuestro apoyo',
    },
  ];

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 pt-32 pb-20">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-[#e91e8c] to-[#ff1493] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold text-[#2d1b69] mb-4">
                ¡Solicitud Recibida!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Gracias por tu interés en unirte al Partido Sinaloense. 
                Hemos recibido tu solicitud y pronto nos pondremos en contacto contigo.
              </p>
              <div className="bg-[#e91e8c]/10 border-2 border-[#e91e8c]/20 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-[#2d1b69] mb-3">Próximos Pasos:</h3>
                <ol className="text-left text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-[#e91e8c] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span>Recibirás un correo de confirmación en las próximas 24 horas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#e91e8c] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span>Nuestro equipo revisará tu información</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#e91e8c] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span>Te contactaremos para completar el proceso de afiliación</span>
                  </li>
                </ol>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-[#2d1b69] to-[#0a1f44] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1a0033] via-[#2d1b69] to-[#0a1f44] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Únete a Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Sé parte del cambio que Sinaloa necesita. Tu voz importa y juntos construiremos un mejor futuro.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#2d1b69] text-center mb-12">
              Beneficios de Afiliarte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#e91e8c] to-[#ff1493] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2d1b69] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#2d1b69] mb-8 text-center">
                Formulario de Afiliación
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre completo en una fila */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-[#2d1b69] mb-2">
                      Nombre*
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#e91e8c] outline-none transition-colors bg-transparent text-gray-700"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="apellidoPaterno" className="block text-sm font-semibold text-[#2d1b69] mb-2">
                      Apellido Paterno*
                    </label>
                    <input
                      type="text"
                      id="apellidoPaterno"
                      name="apellidoPaterno"
                      required
                      value={formData.apellidoPaterno}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#e91e8c] outline-none transition-colors bg-transparent text-gray-700"
                      placeholder="Apellido paterno"
                    />
                  </div>
                  <div>
                    <label htmlFor="apellidoMaterno" className="block text-sm font-semibold text-[#2d1b69] mb-2">
                      Apellido Materno*
                    </label>
                    <input
                      type="text"
                      id="apellidoMaterno"
                      name="apellidoMaterno"
                      required
                      value={formData.apellidoMaterno}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#e91e8c] outline-none transition-colors bg-transparent text-gray-700"
                      placeholder="Apellido materno"
                    />
                  </div>
                </div>

                {/* Contacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2d1b69] mb-2">
                      Correo Electrónico*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#e91e8c] outline-none transition-colors bg-transparent text-gray-700"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-[#2d1b69] mb-2">
                      Teléfono*
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#e91e8c] outline-none transition-colors bg-transparent text-gray-700"
                      placeholder="(667) 123-4567"
                    />
                  </div>
                </div>

                {/* Datos adicionales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="codigoPostal" className="block text-sm font-semibold text-[#2d1b69] mb-2">
                      Código Postal*
                    </label>
                    <input
                      type="text"
                      id="codigoPostal"
                      name="codigoPostal"
                      required
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#e91e8c] outline-none transition-colors bg-transparent text-gray-700"
                      placeholder="80000"
                    />
                  </div>
                  <div>
                    <label htmlFor="ine" className="block text-sm font-semibold text-[#2d1b69] mb-2">
                      Número de INE*
                    </label>
                    <input
                      type="text"
                      id="ine"
                      name="ine"
                      required
                      value={formData.ine}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#e91e8c] outline-none transition-colors bg-transparent text-gray-700"
                      placeholder="Clave de elector"
                    />
                  </div>
                </div>

                {/* Términos y condiciones */}
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <input
                    type="checkbox"
                    id="aceptaTerminos"
                    name="aceptaTerminos"
                    required
                    checked={formData.aceptaTerminos}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-[#e91e8c] rounded focus:ring-2 focus:ring-[#e91e8c]"
                  />
                  <label htmlFor="aceptaTerminos" className="text-sm text-gray-700">
                    Acepto el tratamiento de mis datos personales de acuerdo al{' '}
                    <a href="#" className="text-[#e91e8c] font-semibold hover:text-[#00d4ff]">
                      Aviso de Privacidad
                    </a>{' '}
                    y confirmo que la información proporcionada es verídica.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#e91e8c] to-[#ff1493] text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
                >
                  Enviar Solicitud
                </button>

                <p className="text-center text-sm text-gray-500">
                  * Campos obligatorios
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
