import React, { useState } from "react";
import {
  FaWhatsapp,
  FaCopy,
  FaClock,
  FaPhone,
  FaMapMarkerAlt,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaCity,
  FaEnvelope,
  FaMap,
} from "react-icons/fa";

const Contactos = () => {
  const [copied, setCopied] = useState({});

  const copyToClipboard = (text, identifier) => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [identifier]: true }));
    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [identifier]: false }));
    }, 2000);
  };

  // Datos de contacto por ubicación
  const contactLocations = [
    {
      name: "La Mana",
      numbers: [
        { type: "Fijo", number: "(03) 268 8300" },
        { type: "Móvil", number: "098 909 0285" },
      ],
      icon: FaCity,
      color: "from-blue-500 to-cyan-500",
      description: "Zona central - Atención completa",
      mapLink: "https://maps.app.goo.gl/Rm84qbETw6ajjLYp8",
    },
    {
      name: "Valencia",
      numbers: [
        { type: "Fijo", number: "(05) 294 8705" },
        { type: "Móvil", number: "099 9412860" },
      ],
      icon: FaCity,
      color: "from-purple-500 to-pink-500",
      description: "Atención empresarial y residencial",
      mapLink: "https://maps.app.goo.gl/FoizkSR1tUN7mzPLA",
    },
    {
      name: "La Esperanza",
      numbers: [{ type: "Móvil", number: "099 008 3234" }],
      icon: FaCity,
      color: "from-green-500 to-emerald-500",
      description: "Cobertura especializada",
      mapLink: "https://maps.app.goo.gl/Nw81BdDFVAAiwm76A",
    },
    {
      name: "San Camilo",
      numbers: [{ type: "Móvil", number: "098 293 9363" }],
      icon: FaCity,
      color: "from-orange-500 to-amber-500",
      description: "Servicio personalizado",
      mapLink: "https://maps.app.goo.gl/mCuhpTwzVPhaMhTh8",
    },
  ];

  const services = [
    {
      icon: FaRocket,
      title: "Internet de Alta Velocidad",
      description: "Fibra óptica simétrica para hogares y empresas",
    },
    {
      icon: FaShieldAlt,
      title: "Conexión Segura",
      description: "Protección y estabilidad garantizada",
    },
    {
      icon: FaUsers,
      title: "Soporte Personalizado",
      description: "Atención especializada para cada cliente",
    },
    {
      icon: FaStar,
      title: "Calidad Comprobada",
      description: "Los mejores parámetros de servicio",
    },
  ];

  const email = "tvplusec@gmail.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      {/* Encabezado */}
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-blue-600 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-blue-200 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          Conectamos tu Mundo
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
            Contáctanos
          </span>
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          Estamos aquí para brindarte la
          <span className="text-blue-600 font-semibold">
            {" "}
            mejor experiencia de internet
          </span>
          . Contáctanos en tu localidad más cercana.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Tarjetas de contacto por ubicación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLocations.map((location, index) => {
            const Icon = location.icon;
            const locationKey = location.name.replace(/\s+/g, "_");

            return (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 transition-all duration-500 hover:scale-105 hover:shadow-3xl"
              >
                {/* Icono y header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-4 bg-gradient-to-r ${location.color} text-white`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {location.description}
                  </p>
                </div>

                {/* Números de teléfono */}
                <div className="space-y-4 mb-6">
                  {location.numbers.map((num, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 border border-gray-200">
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">
                            {num.type}
                          </div>
                          <span className="text-lg font-bold text-gray-800 font-mono">
                            {num.number}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(num.number, locationKey + idx)
                          }
                          className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-gray-200 ml-2"
                          title="Copiar número"
                        >
                          <FaCopy className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>

                      {copied[locationKey + idx] && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-xl shadow-lg animate-fadeIn">
                          ¡Copiado!
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Botones de acción */}
                <div className="space-y-3">
                  {/* Botón de WhatsApp */}
                  {location.numbers.find((n) => n.type === "Móvil") && (
                    <a
                      href={`https://wa.me/593${location.numbers
                        .find((n) => n.type === "Móvil")
                        .number.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:scale-105 bg-gradient-to-r ${location.color} hover:opacity-90 text-white`}
                    >
                      <FaWhatsapp className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  )}

                  {/* Botón de Mapa */}
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-2xl font-medium text-sm transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:scale-105 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 border border-gray-300"
                  >
                    <FaMap className="w-4 h-4 mr-2" />
                    Ver en Google Maps
                  </a>
                </div>

                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Información de servicios y horarios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Horarios de atención y correo */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl text-white">
                <FaClock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Horarios de Atención
                </h2>
                <p className="text-gray-600">
                  Estamos disponibles para atenderte
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <span className="text-gray-700 font-semibold">
                  Lunes a Viernes
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  8:00 - 17:00
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <span className="text-gray-700 font-semibold">Sábados</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  9:00 - 13:00
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <span className="text-gray-700 font-semibold">
                  Soporte 24/7
                </span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Vía WhatsApp
                </span>
              </div>

              {/* Sección de correo */}
              <div className="mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Correo Electrónico
                    </h3>
                    <p className="text-gray-600">
                      Escríbenos para consultas generales
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 border border-gray-200">
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">Email</div>
                      <span className="text-lg font-bold text-gray-800 font-mono">
                        {email}
                      </span>
                    </div>
                    <div className="flex space-x-2 ml-2">
                      <a
                        href={`mailto:${email}`}
                        className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 text-white"
                        title="Enviar correo"
                      >
                        <FaEnvelope className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => copyToClipboard(email, "email")}
                        className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-gray-200"
                        title="Copiar correo"
                      >
                        <FaCopy className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {copied.email && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-xl shadow-lg animate-fadeIn">
                      ¡Correo copiado!
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <p className="text-cyan-700 text-sm font-medium">
                <span className="font-bold">Nota:</span> Para emergencias
                técnicas fuera de horario, contacta al número móvil de tu
                localidad vía WhatsApp.
              </p>
              {/* Logo debajo de la nota */}
              <div className="mt-4 flex justify-center">
                <img
                  src="/img/tvplus_logo.png"
                  alt="Logo TVPlus"
                  className="h-100 object-contain opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Mapa de cobertura */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Nuestra Cobertura
                </h2>
                <p className="text-gray-600">
                  Ubicaciones y mapas de nuestras sedes
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {contactLocations.map((location, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-xl bg-gradient-to-r ${location.color} text-white`}
                        >
                          <FaMapMarkerAlt className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {location.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            Tvplus {location.name}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {location.numbers.find((n) => n.type === "Fijo")
                          ? "Fijo y Móvil"
                          : "Solo Móvil"}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
                      >
                        <FaMap className="w-3 h-3" />
                        <span>Abrir en Maps</span>
                      </a>
                      {location.numbers.find((n) => n.type === "Móvil") && (
                        <a
                          href={`https://wa.me/593${location.numbers
                            .find((n) => n.type === "Móvil")
                            .number.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
                        >
                          <FaWhatsapp className="w-3 h-3" />
                          <span>Contactar</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Mini preview del mapa (enlace visual) */}
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-3 border-t border-gray-300">
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-xs text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FaMap className="w-3 h-3" />
                      <span>Ver ubicación exacta en Google Maps →</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
              <p className="text-green-700 text-sm font-medium">
                <span className="font-bold">
                  📍 ¿No encuentras tu localidad?
                </span>{" "}
                Contáctanos en la ubicación más cercana para verificar cobertura
                en tu área o escríbenos a{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-bold text-blue-600 hover:underline"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Servicios destacados */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos el mejor servicio de internet en cada una de nuestras
              localidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Llamada a la acción final */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para mejorar tu conectividad?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contáctanos en tu localidad más cercana y descubre cómo podemos
              llevar tu experiencia digital al siguiente nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/593${contactLocations[0].numbers
                  .find((n) => n.type === "Móvil")
                  .number.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center space-x-2 border-2 border-white text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white hover:text-blue-600 transform hover:scale-105"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Enviar Correo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
