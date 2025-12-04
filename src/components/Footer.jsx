import {
  FaFacebook,
  FaInstagram,
  FaFileAlt,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaEnvelope,
  FaHome,
  FaExternalLinkAlt,
  FaBroadcastTower,
  FaHeart,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/img/tvplus_logo_blanco.png"
                alt="TVPlus Logo"
                className="h-20 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed border-l-4 border-blue-400 pl-4 italic">
              "Conectando comunidades con tecnología de vanguardia y servicio
              excepcional."
            </p>

            {/* Redes Sociales y Speedtest */}
            <div className="space-y-3">
              {/* Speedtest */}
              <a
                href="https://www.speedtest.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-xl p-3 transition-all duration-300 transform hover:scale-[1.02] group border border-gray-700"
              >
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                  <FaBroadcastTower className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">
                    Test de Velocidad
                  </p>
                  <p className="text-gray-400 text-xs">Verifica tu conexión</p>
                </div>
                <FaExternalLinkAlt className="w-3 h-3 text-gray-500 group-hover:text-blue-400" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Tvplusec/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/30 hover:to-blue-700/30 rounded-xl p-3 transition-all duration-300 transform hover:scale-[1.02] group border border-blue-800/30"
              >
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <FaFacebook className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">Facebook</p>
                  <p className="text-blue-200 text-xs">@Tvplusec</p>
                </div>
                <FaExternalLinkAlt className="w-3 h-3 text-blue-400 group-hover:text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tvplus.ec1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/30 hover:to-purple-600/30 rounded-xl p-3 transition-all duration-300 transform hover:scale-[1.02] group border border-pink-800/30"
              >
                <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white">
                  <FaInstagram className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">Instagram</p>
                  <p className="text-pink-200 text-xs">@tvplus.ec1</p>
                </div>
                <FaExternalLinkAlt className="w-3 h-3 text-pink-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Enlaces de Interés */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-3">
                <FaExternalLinkAlt className="w-4 h-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Enlaces de Interés
              </span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: "ARCOTEL", url: "https://www.arcotel.gob.ec" },
                {
                  name: "Reglamento Telecomunicaciones",
                  url: "/Documents/REGLAMENTO-PARA-LA-PRESTACION-DE-SERVICIOS-DE-TELECOMUNICACIONES1.pdf",
                },
                {
                  name: "Calidad de Servicios",
                  url: "/Documents/valor agregado.pdf",
                },
                { name: "Normas SVA", url: "/Documents/qos sva.pdf" },
                {
                  name: "Ley Telecomunicaciones",
                  url: "/Documents/ley_organica_de_telecomunicaciones.pdf",
                },
                {
                  name: "Ley Discapacidades",
                  url: "/Documents/ley_organica_discapacidades.pdf",
                },
                {
                  name: "Ley Adulto Mayor",
                  url: "/Documents/LEY ORGANICA DE LAS PERSONAS ADULTOS MAYORES (2).pdf",
                },
                {
                  name: "MINTEL",
                  url: "https://www.telecomunicaciones.gob.ec/",
                },
                {
                  name: "Presidencia Ecuador",
                  url: "https://www.presidencia.gob.ec/",
                },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.url.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group py-2 px-1 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <FaFileAlt className="w-3 h-3 text-cyan-400 mr-2 opacity-70" />
                    <span className="text-sm leading-tight flex-1 truncate">
                      {link.name}
                    </span>
                    <FaExternalLinkAlt className="w-3 h-3 text-gray-600 ml-2 group-hover:text-cyan-400 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zona de Clientes */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-3">
                <FaUsers className="w-4 h-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Zona de Clientes
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Control Parental",
                  url: "/control-parental",
                  icon: FaShieldAlt,
                  gradient: "from-orange-500 to-red-500",
                  bg: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
                },
                {
                  name: "Consejos de Seguridad",
                  url: "/Documents/13Consejos_de_seguridad 2.pdf",
                  icon: FaShieldAlt,
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
                },
                {
                  name: "Parámetros de Calidad",
                  url: "/parametros-calidad",
                  icon: FaStar,
                  gradient: "from-emerald-500 to-green-500",
                  bg: "bg-gradient-to-r from-emerald-500/20 to-green-500/20",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.url}
                      target={
                        item.url.startsWith("/Documents") ? "_blank" : "_self"
                      }
                      className="group flex items-center p-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div
                        className={`relative overflow-hidden rounded-lg p-2 ${item.bg} border border-gray-700`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                        ></div>
                        <Icon className="w-4 h-4 relative z-10 text-white" />
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                <FaHome className="w-4 h-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Navegación
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Sobre Nosotros",
                  url: "/nosotros",
                  icon: FaUsers,
                  gradient: "from-purple-500 to-pink-500",
                  bg: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
                },
                {
                  name: "Documentos Legales",
                  url: "/documentos",
                  icon: FaFileAlt,
                  gradient: "from-blue-500 to-indigo-500",
                  bg: "bg-gradient-to-r from-blue-500/20 to-indigo-500/20",
                },
                {
                  name: "Contactos",
                  url: "/contactos",
                  icon: FaEnvelope,
                  gradient: "from-cyan-500 to-blue-500",
                  bg: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.url}
                      className="group flex items-center p-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div
                        className={`relative overflow-hidden rounded-lg p-2 ${item.bg} border border-gray-700`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                        ></div>
                        <Icon className="w-4 h-4 relative z-10 text-white" />
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Pie inferior */}
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TVPlus. Todos los derechos reservados.
          </p>

          <div className="flex items-center justify-center space-x-6 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <FaHeart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>Hecho con</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCode className="w-4 h-4 text-blue-400" />
              <span>por</span>
              <span className="text-cyan-400 font-semibold">
                Inigualitysoft
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-xs max-w-2xl mx-auto leading-relaxed">
            Cumpliendo con los requisitos de la Agencia de Regulación y Control
            de las Telecomunicaciones (ARCOTEL) y el Ministerio de
            Telecomunicaciones (MINTEL).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
