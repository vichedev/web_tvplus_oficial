import {
  FaWifi,
  FaTv,
  FaUsers,
  FaStar,
  FaRocket,
  FaHeart,
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
  FaCrown,
  FaLightbulb,
  FaGlobeAmericas,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Nosotros = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const handlePlanesClick = () => {
    navigate("/planes-tvplus");
  };

  // Animaciones suaves y elegantes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Valores actualizados con iconos modernos
  const valores = [
    {
      title: "Innovación Constante",
      description:
        "Implementamos las últimas tecnologías en TV e Internet para mantenernos a la vanguardia del sector.",
      icon: <FaLightbulb className="w-6 h-6" />,
      color: "blue",
      delay: 0.1,
    },
    {
      title: "Satisfacción Total",
      description:
        "Cada cliente es único, nos enfocamos en superar expectativas con atención personalizada.",
      icon: <FaCrown className="w-6 h-6" />,
      color: "red",
      delay: 0.2,
    },
    {
      title: "Compromiso Real",
      description:
        "Talento humano dedicado y tecnología adecuada para un servicio de excelencia.",
      icon: <FaHeadset className="w-6 h-6" />,
      color: "purple",
      delay: 0.3,
    },
    {
      title: "Cobertura Confiable",
      description:
        "Infraestructura sólida que garantiza estabilidad en TV e Internet donde más nos necesites.",
      icon: <FaGlobeAmericas className="w-6 h-6" />,
      color: "cyan",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-red-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60" />

        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Encabezado Principal - Moderno y Limpio */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-8 border border-blue-100"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>TV + INTERNET • EXPERIENCIA PREMIUM</span>
            <FaStar className="w-4 h-4 text-yellow-400" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900">Conectamos</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Tus Momentos
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            En <span className="font-semibold text-blue-600">TVPLUS</span>,
            fusionamos tecnología de vanguardia con un compromiso genuino para
            transformar tu experiencia digital en algo extraordinario.
          </motion.p>
        </motion.div>

        {/* Sección Quiénes Somos */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl opacity-50 blur-xl" />
          <div className="relative p-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-red-500 text-white">
                <FaUsers className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  QUIÉNES SOMOS
                </h3>
                <p className="text-gray-600 text-lg">
                  Somos una empresa especializada en servicios de Internet y
                  Televisión, comprometida con la innovación, calidad y
                  satisfacción de nuestros usuarios.
                </p>
              </div>
            </div>

            {/* Misión y Visión en columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* MISIÓN */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 rounded-xl bg-white border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600">
                      <FaRocket className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">MISIÓN</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    TVPLUS está orientado a satisfacer las necesidades de
                    nuestros usuarios en forma oportuna, ofreciendo servicios de
                    Internet y Televisión, fomentando el entretenimiento y las
                    comunicaciones con una amplia gama de planes. Orientados a
                    la calidad en innovación de nuevos servicios, apoyando en
                    talento humano comprometido con tecnología adecuada por
                    medio de una gestión empresarial eficiente.
                  </p>
                </div>
              </motion.div>

              {/* VISIÓN */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 rounded-xl bg-white border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-red-100 to-red-200 text-red-600">
                      <FaChartLine className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">VISIÓN</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    TVPLUS será elegido por la calidad y variedad de sus
                    servicios, creando mayor confianza al momento de navegar o
                    mantenerse informado con nuestros servicios de Internet y
                    Televisión. Consolidarnos, posicionarnos y ser reconocidos
                    por nuestros usuarios actuales y futuros como una empresa
                    capacitada para brindar un servicio que cumpla con las
                    expectativas actuales. Ser una empresa en constante
                    crecimiento con una estructura organizacional sólida
                    orientada a los requerimientos del usuario para satisfacer
                    sus necesidades, manteniéndonos a la vanguardia de nuevas
                    tecnologías, que puedan ser explotadas por nuestros
                    usuarios.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Grid de Valores - Diseño Minimalista */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {valores.map(({ title, description, icon, color, delay }, idx) => (
            <motion.div
              key={idx}
              custom={delay}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="relative p-6 rounded-xl bg-white border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                {/* Línea superior con color */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${color}-500 to-${color}-600`}
                />

                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-${color}-100 to-${color}-200 text-${color}-600 mb-4`}
                  >
                    {icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>

                {/* Indicador sutil al hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-${color}-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que Ofrecemos
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una combinación perfecta de entretenimiento y conectividad para tu
              hogar o negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Servicio TV */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100/50"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  <FaTv className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Televisión Premium
                </h4>
              </div>
              <ul className="space-y-3">
                {[
                  "Canales en alta definición",
                  "Contenido exclusivo",
                  "Guía de programación interactiva",
                  "Grabación digital incluida",
                  "Variedad de paquetes personalizados",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Servicio Internet */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <FaWifi className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Internet de Alta Velocidad
                </h4>
              </div>
              <ul className="space-y-3">
                {[
                  "Fibra óptica de última generación",
                  "Velocidad simétrica garantizada",
                  "Conexión estable 24/7",
                  "Sin límites de consumo",
                  "Soporte técnico inmediato",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Por Qué Elegirnos */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-red-600">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-red-500/20" />
            <div className="relative p-10 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Por Qué TVPLUS?
                </h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                  Descubre las razones que nos convierten en la mejor opción
                  para tu entretenimiento y conectividad
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tecnología Avanzada",
                    desc: "Implementamos las últimas innovaciones para garantizar la mejor experiencia",
                    icon: "⚡",
                    color: "from-yellow-400 to-orange-400",
                  },
                  {
                    title: "Atención Personalizada",
                    desc: "Equipo especializado disponible para resolver todas tus consultas",
                    icon: "👨‍💻",
                    color: "from-blue-400 to-cyan-400",
                  },
                  {
                    title: "Precios Competitivos",
                    desc: "Planes flexibles que se adaptan a tus necesidades y presupuesto",
                    icon: "💰",
                    color: "from-green-400 to-emerald-400",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-blue-100 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Final - Elegante y Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800"
        >
          {/* Patrón geométrico sutil */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative z-10 text-center p-12 md:p-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Comienza tu Experiencia Premium
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Únete a miles de clientes satisfechos que ya disfrutan de la mejor
              combinación de TV e Internet
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePlanesClick}
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center shadow-lg group"
              >
                <FaRocket className="w-5 h-5 mr-3 transform group-hover:rotate-12 transition-transform duration-300" />
                Ver Planes Disponibles
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/593939963355"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center shadow-lg group"
              >
                <FaHeart className="w-5 h-5 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
                Contáctanos
              </motion.a>
            </motion.div>

            {/* Info de contacto adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-10 pt-8 border-t border-gray-700"
            >
              <p className="text-gray-400 text-sm">
                Servicio disponible 24/7 • Instalación profesional • Garantía de
                satisfacción
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nosotros;
