import { useState } from "react";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaDesktop,
  FaApple,
  FaAndroid,
  FaClock,
  FaEye,
  FaChartBar,
  FaFilter,
  FaDownload,
  FaExternalLinkAlt,
  FaLock,
  FaUserShield,
  FaChild,
  FaStar,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ControlParental = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Datos de las apps de control parental
  const apps = [
    {
      name: "Norton Family",
      description:
        "Supervisa y administra el tiempo de pantalla, bloquea contenido inapropiado y rastrea ubicaciones con tecnología avanzada de seguridad.",
      android:
        "https://play.google.com/store/apps/details?id=com.symantec.familypremier",
      ios: "https://apps.apple.com/us/app/norton-family-parental-control/id482896221",
      pc: "https://family.norton.com/web/",
      logo: "/img/Parental/norton.png",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      rating: 4.7,
      features: [
        "Filtrado Web",
        "Ubicación GPS",
        "Reportes Detallados",
        "App Blocker",
      ],
    },
    {
      name: "Qustodio",
      description:
        "Filtra contenido, limita tiempo de uso, monitorea redes sociales y rastrea ubicación con paneles de control intuitivos.",
      android:
        "https://play.google.com/store/apps/details?id=com.qustodio.qustodioapp",
      ios: "https://apps.apple.com/us/app/qustodio-best-parental-control/id802101371",
      pc: "https://www.qustodio.com/",
      logo: "/img/Parental/qustodio.jpg",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      rating: 4.6,
      features: [
        "Redes Sociales",
        "Filtro YouTube",
        "Modo Emergencia",
        "SMS Monitor",
      ],
    },
    {
      name: "Google Family Link",
      description:
        "Administra aplicaciones, supervisa tiempo de uso y establece límites de pantalla directamente desde tu cuenta Google.",
      android:
        "https://play.google.com/store/apps/details?id=com.google.android.apps.kids.familylink",
      ios: "https://apps.apple.com/us/app/family-link-for-parents/id1415818207",
      pc: "https://families.google.com/familylink/",
      logo: "/img/Parental/Gfamily.png",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      rating: 4.5,
      features: [
        "Gratuito",
        "Integración Google",
        "Control Remoto",
        "App Approvals",
      ],
    },
    {
      name: "Kids Guard Pro",
      description:
        "Monitoreo avanzado de actividades, mensajes, llamadas y ubicación en tiempo real con geofencing inteligente.",
      android:
        "https://play.google.com/store/apps/details?id=com.kidsguard.pro",
      ios: "https://apps.apple.com/us/app/kidsguard-pro-parental-control/id1446486128",
      pc: "https://www.kidsguard.pro/",
      logo: "/img/Parental/KidsGuard.png",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      rating: 4.8,
      features: [
        "GPS Tracking",
        "Keylogger",
        "Screen Recording",
        "Call Monitor",
      ],
    },
  ];

  // Funcionalidades del control parental
  const features = [
    {
      title: "Filtrado de Contenido Inteligente",
      description:
        "Bloquea automáticamente sitios web y aplicaciones inapropiadas usando IA para categorizar contenido según edad y preferencias.",
      icon: FaFilter,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
      points: [
        "Categorías por edad",
        "Bloqueo de apps",
        "Filtro YouTube",
        "Web Segura",
      ],
    },
    {
      title: "Gestión de Tiempo Inteligente",
      description:
        "Establece horarios de uso personalizados y límites diarios que se adaptan automáticamente a días escolares y fines de semana.",
      icon: FaClock,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
      points: [
        "Horarios flexibles",
        "Límites diarios",
        "Tiempo educativo",
        "Break reminders",
      ],
    },
    {
      title: "Monitoreo en Tiempo Real",
      description:
        "Accede a información actualizada sobre qué aplicaciones usan, búsquedas web y tiempo de pantalla con actualizaciones en tiempo real.",
      icon: FaEye,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
      points: [
        "Activity Dashboard",
        "Screen Time",
        "App Usage",
        "Search History",
      ],
    },
    {
      title: "Reportes y Análisis",
      description:
        "Recibe informes semanales detallados con estadísticas, tendencias y recomendaciones para una mejor gestión digital familiar.",
      icon: FaChartBar,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
      points: [
        "Weekly Reports",
        "Usage Trends",
        "Recommendations",
        "Progress Tracking",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20" />

        <div className="relative container mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-6 border border-white/50 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-red-500 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">
                SEGURIDAD DIGITAL FAMILIAR
              </span>
            </div>
            <FaShieldAlt className="text-blue-500 w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              Control Parental
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            Protege a tu familia en el mundo digital con herramientas de{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              control parental premium
            </span>
            . Gestión inteligente para mentes en crecimiento.
          </motion.p>
        </div>
      </div>

      {/* Apps Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Aplicaciones Recomendadas
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Las mejores herramientas de control parental para cada necesidad
              familiar
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app, index) => {
              const isActive = activeApp === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-blue-500 shadow-2xl"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => setActiveApp(isActive ? null : index)}
                  >
                    {/* App Header */}
                    <div className={`${app.bgColor} p-6`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 bg-white rounded-2xl p-2 shadow-lg">
                            <img
                              src={app.logo}
                              alt={app.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800 text-lg">
                              {app.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < Math.floor(app.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-gray-600 ml-1">
                                {app.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        {!isActive && (
                          <FaDownload className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                        )}
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {app.description}
                      </p>

                      {/* Quick Features */}
                      <div className="flex flex-wrap gap-2">
                        {app.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/50 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Download Options - Show when active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white p-6 border-t border-gray-100"
                      >
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-700 mb-3">
                            Descargar para:
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            <a
                              href={app.android}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group/btn"
                            >
                              <FaAndroid className="w-5 h-5 transform group-hover/btn:scale-110 transition-transform" />
                              <span>Android</span>
                            </a>
                            <a
                              href={app.ios}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group/btn"
                            >
                              <FaApple className="w-5 h-5 transform group-hover/btn:scale-110 transition-transform" />
                              <span>iOS</span>
                            </a>
                            {app.pc && (
                              <a
                                href={app.pc}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group/btn"
                              >
                                <FaDesktop className="w-5 h-5 transform group-hover/btn:scale-110 transition-transform" />
                                <span>Versión Web</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Selection Hint */}
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <FaHeart className="text-red-400" />
              <span>
                Selecciona una aplicación para ver opciones de descarga
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Funcionalidades Avanzadas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre todo lo que puedes hacer para proteger a tu familia
              digitalmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  {/* Feature Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`p-5 rounded-2xl bg-gradient-to-r ${feature.color} text-white`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <div
                        className={`h-1 w-16 rounded-full bg-gradient-to-r ${feature.color}`}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Points */}
                  <div className="space-y-3">
                    {feature.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 text-center p-12 md:p-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
            >
              <FaUserShield className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              La Seguridad Digital Comienza Aquí
            </h3>

            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              En la era digital, el control parental no es una opción, es una
              necesidad. Protege a tus seres queridos mientras exploran el mundo
              en línea con confianza.
            </p>

            {/* Tips Section */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <h4 className="text-white font-semibold mb-4">
                Consejos de Seguridad:
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Dialoga con tus hijos sobre seguridad en línea",
                  "Establece reglas claras de uso digital",
                  "Revisa regularmente los reportes de actividad",
                  "Mantén actualizadas las apps de control",
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <FaLock className="w-3 h-3 text-white" />
                    <span className="text-sm text-white">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlParental;
