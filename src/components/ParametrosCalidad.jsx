import { useState } from "react";
import {
  FaFilePdf,
  FaDownload,
  FaChartLine,
  FaShieldAlt,
  FaCog,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaStar,
  FaTachometerAlt,
} from "react-icons/fa";

const ParametrosCalidad = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Datos de parámetros de calidad actualizados para TVPLUS
  const parametros = [
    {
      titulo: "Velocidad Garantizada",
      descripcion: "Ancho de banda simétrico según plan contratado",
      icono: FaTachometerAlt,
      color: "from-blue-500 to-cyan-500",
      metrica: "≥ 98% de la velocidad contratada",
      destacado: true,
    },
    {
      titulo: "Disponibilidad del Servicio",
      descripcion: "Tiempo de actividad y confiabilidad del servicio",
      icono: FaShieldAlt,
      color: "from-green-500 to-emerald-500",
      metrica: "99.7% de disponibilidad mensual",
      destacado: true,
    },
    {
      titulo: "Latencia Óptima",
      descripcion: "Rendimiento para gaming y streaming",
      icono: FaCog,
      color: "from-purple-500 to-pink-500",
      metrica: "< 30ms latencia, < 5ms jitter",
      destacado: false,
    },
    {
      titulo: "Respuesta Técnica",
      descripcion: "Soporte técnico especializado",
      icono: FaClock,
      color: "from-orange-500 to-amber-500",
      metrica: "Máximo 12 horas para resolución",
      destacado: false,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      {/* Encabezado */}
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-blue-600 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-blue-200 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          Estándares de Calidad Certificados
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
            Parámetros de Calidad
          </span>
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          Documento oficial de TVPLUS que establece los
          <span className="text-blue-600 font-semibold">
            {" "}
            estándares de calidad superior
          </span>{" "}
          para servicios de telecomunicaciones con garantía total.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Sección de parámetros */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestros Estándares de Excelencia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Parámetros técnicos que superan los requerimientos de
              <span className="text-green-600 font-semibold">
                {" "}
                ARCOTEL
              </span>{" "}
              garantizando la mejor
              <span className="text-blue-600 font-semibold">
                {" "}
                experiencia digital
              </span>
            </p>
          </div>

          {/* Grid de parámetros */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parametros.map((parametro, index) => {
              const Icono = parametro.icono;
              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-6 shadow-xl border transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                    parametro.destacado
                      ? "bg-gradient-to-br from-white to-blue-50 border-blue-200/50"
                      : "bg-gradient-to-br from-white to-gray-50 border-gray-200/50"
                  }`}
                >
                  {parametro.destacado && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center">
                        <FaStar className="w-3 h-3 mr-1" />
                        Premium
                      </div>
                    </div>
                  )}

                  {/* Icono con gradiente */}
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${parametro.color} text-white w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icono className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {parametro.titulo}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {parametro.descripcion}
                  </p>

                  <div className="flex items-center space-x-2 text-sm font-semibold text-green-600">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>{parametro.metrica}</span>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contenedor principal del PDF */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          {/* Barra de herramientas del PDF */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <FaFilePdf className="w-6 h-6 text-white" />
                <div>
                  <span className="text-white font-bold text-lg block">
                    Parámetros de Calidad TVPLUS
                  </span>
                  <span className="text-blue-200 text-sm">
                    Documento certificado y actualizado
                  </span>
                </div>
              </div>
            </div>

            {/* Botón de descarga */}
            <a
              href="/Documents/5PARAMETROS DE CALIDAD_TVPLUS.pdf"
              download="Parámetros_de_Calidad_TVPLUS.pdf"
              className="flex items-center space-x-3 bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 group/btn min-w-max"
            >
              <FaDownload className="w-5 h-5 transform group-hover/btn:scale-110 transition-transform" />
              <span>Descargar PDF Oficial</span>
            </a>
          </div>

          {/* Contenedor del PDF */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 w-full h-[70vh]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10">
                <div className="text-center">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaStar className="w-8 h-8 text-blue-400 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium mt-4">
                    Cargando documento oficial TVPLUS...
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Parámetros de Calidad Certificados
                  </p>
                </div>
              </div>
            )}

            {/* Visor del PDF */}
            <iframe
              src="/Documents/5PARAMETROS DE CALIDAD_TVPLUS.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              title="Parámetros de Calidad TVPLUS"
              style={{ minHeight: "600px" }}
            >
              <div className="p-8 text-center text-gray-600">
                <FaFilePdf className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="mb-4">
                  Tu navegador no soporta la visualización de PDFs.
                </p>
                <a
                  href="/Documents/5PARAMETROS DE CALIDAD_TVPLUS.pdf"
                  download="Parámetros_de_Calidad_TVPLUS.pdf"
                  className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Descargar documento completo</span>
                </a>
              </div>
            </iframe>
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 p-12 mt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-semibold mb-4">
              <FaStar className="w-4 h-4 mr-2" />
              Compromiso TVPLUS
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Excelencia en Cada Conexión
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En TVPLUS no solo cumplimos, superamos los estándares para
              ofrecerte la mejor experiencia de internet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="flex items-center space-x-3 mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Garantía de Calidad
                </h3>
              </div>
              <p className="text-gray-600 relative z-10">
                Todos nuestros servicios superan en más del 20% los parámetros
                mínimos establecidos por ARCOTEL y MINTEL, con certificación de
                calidad continua.
              </p>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="flex items-center space-x-3 mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                  <FaExclamationTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Monitoreo 24/7
                </h3>
              </div>
              <p className="text-gray-600 relative z-10">
                Sistema avanzado de monitoreo que supervisa en tiempo real todos
                los parámetros técnicos, garantizando estabilidad y rendimiento
                óptimo en cada conexión.
              </p>
            </div>
          </div>

          {/* Sello de calidad */}
          <div className="mt-12 pt-8 border-t border-gray-200/50 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-white px-6 py-3 rounded-2xl border border-gray-300 shadow-sm">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                <FaShieldAlt className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800">Certificado TVPLUS</p>
                <p className="text-gray-600 text-sm">
                  Parámetros verificados y certificados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParametrosCalidad;
