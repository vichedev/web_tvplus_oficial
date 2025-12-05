import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PlanesTVPLUS = () => {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState("laMana");
  const topRef = useRef(null);

  // Efecto para hacer scroll al tope del componente cuando se carga
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Manejar modal
  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  // Toggle para expandir/contraer características
  const toggleExpandCard = (planKey) => {
    setExpandedCards((prev) => ({
      ...prev,
      [planKey]: !prev[planKey],
    }));
  };

  // Números de WhatsApp según ubicación (SOLO LOS ESPECÍFICOS)
  const numerosWhatsApp = {
    laMana: {
      nombre: "La Mana",
      numero: "593989090285",
      display: "098 909 0285",
    },
    valencia: {
      nombre: "Valencia",
      numero: "593999412860",
      display: "099 9412860",
    },
    laEsperanza: {
      nombre: "La Esperanza",
      numero: "593990083234",
      display: "099 008 3234",
    },
    sanCamilo: {
      nombre: "San Camilo",
      numero: "593982939363",
      display: "098 293 9363",
    },
  };

  // Imágenes de planes (8 imágenes diferentes)
  const planImages = {
    tv: "/img/planes/plan-tv.png",
    licht: "/img/planes/plan-light.png",
    start: "/img/planes/plan-start.png",
    plus: "/img/planes/plan-plus.png",
    prime: "/img/planes/plan-prime.png",
    mega: "/img/planes/plan-mega.png",
    ultra: "/img/planes/plan-ultra.png",
    max: "/img/planes/plan-max.png",
  };

  // Datos de planes actualizados con 8 planes según la imagen
  const planesData = {
    tv: {
      nombre: "PLAN TV",
      velocidad: "75",
      unidad: "CANALES SD + 10 HD",
      precio: 12.0,
      descripcion: "Televisión digital con la mejor programación",
      caracteristicas: [
        "75 canales SD + 10 HD",
        "Precio fijo incluye IVA",
        "Instalación GRATIS",
        "Soporte técnico 24/7",
        "Sin contratos forzosos",
        "Calidad garantizada",
        "Actualizaciones mensuales",
        "Guía electrónica incluida",
        "Sin cargos ocultos",
      ],
      color: "red",
      popular: false,
      icon: "📺",
      incluyeTV: true,
      soloTV: true,
    },
    licht: {
      nombre: "LIGHT",
      velocidad: "150",
      unidad: "MEGAS",
      precio: 17.5,
      descripcion: "Ideal para navegación básica y redes sociales",
      caracteristicas: [
        "150 Mbps velocidad",
        "Relación 2:1 garantizada",
        "Internet ilimitado",
        "Fibra óptica simétrica",
        "Modem WiFi incluido",
        "Instalación sin costo",
        "Soporte prioritario",
        "Sin límite de datos",
        "Precio incluye IVA",
      ],
      color: "blue",
      popular: false,
      icon: "⚡",
      incluyeTV: false,
      soloTV: false,
    },
    start: {
      nombre: "START",
      velocidad: "250",
      unidad: "MEGAS",
      precio: 20.0,
      descripcion: "Perfecto para streaming y teletrabajo",
      caracteristicas: [
        "250 Mbps velocidad",
        "Relación 2:1 garantizada",
        "Streaming HD simultáneo",
        "Fibra óptica premium",
        "Modem WiFi 6 incluido",
        "Instalación GRATIS",
        "Soporte VIP",
        "Ilimitado sin cuentas bancarias",
        "Precio incluye IVA",
      ],
      color: "green",
      popular: true,
      icon: "🚀",
      incluyeTV: false,
      soloTV: false,
    },
    plus: {
      nombre: "PLUS",
      velocidad: "350",
      unidad: "MEGAS",
      precio: 23.0,
      descripcion: "Familia digital completa con alta velocidad",
      caracteristicas: [
        "350 Mbps velocidad",
        "Relación 2:1 garantizada",
        "4K Streaming sin buffering",
        "Home office avanzado",
        "Smart home compatible",
        "30+ dispositivos simultáneos",
        "Prioridad en la red",
        "Soporte 24/7 premium",
        "Precio incluye IVA",
      ],
      color: "purple",
      popular: false,
      icon: "⭐",
      incluyeTV: false,
      soloTV: false,
    },
    prime: {
      nombre: "PRIME",
      velocidad: "450",
      unidad: "MEGAS",
      precio: 25.0,
      descripcion: "Experiencia premium con TV incluida",
      caracteristicas: [
        "450 Mbps velocidad",
        "Relación 2:1 garantizada",
        "TV DIGITAL INCLUIDA",
        "8K Streaming disponible",
        "Gaming competitivo",
        "VPN corporativa incluida",
        "Cloud backup 100GB",
        "Soporte VIP 24/7",
        "Precio incluye IVA",
      ],
      color: "orange",
      popular: false,
      icon: "👑",
      incluyeTV: true,
      soloTV: false,
    },
    mega: {
      nombre: "MEGA",
      velocidad: "650",
      unidad: "MEGAS",
      precio: 30.0,
      descripcion: "Velocidad empresarial con TV premium",
      caracteristicas: [
        "650 Mbps velocidad",
        "Relación 2:1 garantizada",
        "TV DIGITAL PREMIUM",
        "Home studio profesional",
        "Video conferencias 4K",
        "Servidores locales",
        "Red mesh incluida",
        "Garantía 99.9% uptime",
        "Precio incluye IVA",
      ],
      color: "cyan",
      popular: false,
      icon: "💎",
      incluyeTV: true,
      soloTV: false,
    },
    ultra: {
      nombre: "ULTRA",
      velocidad: "850",
      unidad: "MEGAS",
      precio: 40.0,
      descripcion: "Conexión ultra rápida con TV completa",
      caracteristicas: [
        "850 Mbps velocidad",
        "Relación 2:1 garantizada",
        "TV COMPLETA INCLUIDA",
        "Edición profesional",
        "Renderizado en la nube",
        "IoT ilimitado",
        "Seguridad avanzada",
        "Asesor personalizado",
        "Precio incluye IVA",
      ],
      color: "pink",
      popular: false,
      icon: "✨",
      incluyeTV: true,
      soloTV: false,
    },
    max: {
      nombre: "MAX",
      velocidad: "1000",
      unidad: "MEGAS",
      precio: 50.0,
      descripcion: "Máxima velocidad con TV y servicios premium",
      caracteristicas: [
        "1000 Mbps velocidad",
        "Relación 2:1 garantizada",
        "TV + INTERNET PREMIUM",
        "Empresa familiar completa",
        "Data center personal",
        "Redundancia incluida",
        "Equipo profesional",
        "Garantía 99.99% uptime",
        "Precio incluye IVA",
      ],
      color: "gold",
      popular: false,
      icon: "🏆",
      incluyeTV: true,
      soloTV: false,
    },
  };

  // Colores para los planes
  const colorClasses = {
    red: {
      bg: "from-red-50 to-red-100",
      border: "border-red-200",
      text: "text-red-600",
      button:
        "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800",
      gradient: "from-red-500 to-red-600",
      card: "bg-white",
    },
    blue: {
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      text: "text-blue-600",
      button:
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
      gradient: "from-blue-500 to-blue-600",
      card: "bg-white",
    },
    green: {
      bg: "from-green-50 to-green-100",
      border: "border-green-200",
      text: "text-green-600",
      button:
        "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
      gradient: "from-green-500 to-green-600",
      card: "bg-white",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      text: "text-purple-600",
      button:
        "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
      gradient: "from-purple-500 to-purple-600",
      card: "bg-white",
    },
    orange: {
      bg: "from-orange-50 to-orange-100",
      border: "border-orange-200",
      text: "text-orange-600",
      button:
        "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
      gradient: "from-orange-500 to-orange-600",
      card: "bg-white",
    },
    cyan: {
      bg: "from-cyan-50 to-cyan-100",
      border: "border-cyan-200",
      text: "text-cyan-600",
      button:
        "bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800",
      gradient: "from-cyan-500 to-cyan-600",
      card: "bg-white",
    },
    pink: {
      bg: "from-pink-50 to-pink-100",
      border: "border-pink-200",
      text: "text-pink-600",
      button:
        "bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800",
      gradient: "from-pink-500 to-pink-600",
      card: "bg-white",
    },
    gold: {
      bg: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
      text: "text-yellow-600",
      button:
        "bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800",
      gradient: "from-yellow-500 to-yellow-600",
      card: "bg-white",
    },
  };

  // Datos de Planes Corporativos según la imagen
  const planesCorporativos = [
    {
      nombre: "ADV. PLUS",
      velocidad: "200",
      unidad: "MEGAS",
      precio: 50.0,
      color: "blue",
      icon: "💼",
      caracteristicaEspecial: "INCLUIDO IVA",
    },
    {
      nombre: "ADV. PRIME",
      velocidad: "500",
      unidad: "MEGAS",
      precio: 60.0,
      color: "purple",
      icon: "👑",
      caracteristicaEspecial: "INCLUIDO IVA",
    },
    {
      nombre: "ADV. MEGA",
      velocidad: "700",
      unidad: "MEGAS",
      precio: 70.0,
      color: "cyan",
      icon: "💎",
      caracteristicaEspecial: "INCLUIDO IVA",
    },
    {
      nombre: "ADV. ULTRA",
      velocidad: "850",
      unidad: "MEGAS",
      precio: 80.0,
      color: "pink",
      icon: "✨",
      caracteristicaEspecial: "INCLUIDO IVA",
    },
    {
      nombre: "ADV. MAX",
      velocidad: "1000",
      unidad: "MEGAS",
      precio: 90.0,
      color: "gold",
      icon: "🏆",
      caracteristicaEspecial: "INCLUIDO IVA",
    },
  ];

  // Función para enviar mensaje por WhatsApp
  const solicitarInformacion = (planKey) => {
    const plan = planesData[planKey];
    const numeroSeleccionado = numerosWhatsApp[ubicacionSeleccionada];
    const mensaje = `¡Hola TVPLUS! Estoy interesado en el plan ${
      plan.nombre
    } - ${
      plan.soloTV ? plan.unidad : plan.velocidad + " " + plan.unidad
    } por $${plan.precio}/mes. Por favor, envíenme más información.`;

    const whatsappUrl = `https://wa.me/${
      numeroSeleccionado.numero
    }?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Función para enviar mensaje de planes corporativos
  const solicitarPlanCorporativo = (plan) => {
    const numeroSeleccionado = numerosWhatsApp[ubicacionSeleccionada];
    const mensaje = `¡Hola TVPLUS! Estoy interesado en el PLAN CORPORATIVO ${plan.nombre} - ${plan.velocidad} ${plan.unidad} por $${plan.precio}/mes. Necesito información sobre configuraciones personalizadas, accesos a puertos e IP pública.`;

    const whatsappUrl = `https://wa.me/${
      numeroSeleccionado.numero
    }?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Función para el botón de WhatsApp
  const contactarWhatsApp = () => {
    const numeroSeleccionado = numerosWhatsApp[ubicacionSeleccionada];
    const whatsappUrl = `https://wa.me/${numeroSeleccionado.numero}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-100"
      ref={topRef}
    >
      {/* Fondo animado con partículas */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-50"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <img
                src={modalImage}
                alt="Vista ampliada del plan"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Encabezado Mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-blue-600 bg-blue-100 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            TVPLUS - INTERNET Y TELEVISIÓN DIGITAL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              NUESTROS PLANES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-light mb-4 text-gray-600"
          >
            Planes de{" "}
            <span className="font-semibold text-blue-600">
              Internet y Televisión
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-blue-600 font-semibold"
          >
            Todos los precios incluyen IVA • Relación 2:1 • Instalación GRATIS •
            Soporte 24/7
          </motion.p>

          {/* Badge de características especiales */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              ✅ PLANES CON TV INCLUIDA
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🔒 RELACIÓN 2:1 GARANTIZADA
            </span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              📺 75 CANALES + 10 HD
            </span>
          </motion.div>
        </motion.div>

        {/* Selector de Ubicación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="font-semibold text-gray-700 text-lg">
                  Selecciona tu ubicación:
                </span>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {Object.entries(numerosWhatsApp).map(([key, ubicacion]) => (
                  <button
                    key={key}
                    onClick={() => setUbicacionSeleccionada(key)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                      ubicacionSeleccionada === key
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {ubicacion.nombre}
                  </button>
                ))}
              </div>
            </div>

            {/* Mostrar número seleccionado */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">
                  Número de contacto para esta zona:
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.50.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                      </svg>
                      <span className="text-lg font-bold">
                        {numerosWhatsApp[ubicacionSeleccionada].display}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Todos los botones de contacto usarán este número
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Grid de planes - 8 planes en total */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {Object.entries(planesData).map(([key, plan], index) => {
            const color = colorClasses[plan.color];
            const isExpanded = expandedCards[key];
            const caracteristicasVisibles = isExpanded
              ? plan.caracteristicas
              : plan.caracteristicas.slice(0, 4);
            const esPlanTV = plan.soloTV;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "ring-2 ring-green-500/50 shadow-xl"
                    : "shadow-lg"
                } ${color.border} ${color.card}`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-5 -right-10 z-20 w-36 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-1.5 text-center text-xs font-bold shadow-lg"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    MÁS POPULAR
                  </motion.div>
                )}

                {/* Etiqueta de TV incluida para planes PRIME, MEGA, ULTRA, MAX */}
                {plan.incluyeTV && !plan.soloTV && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      📺 TV INCLUIDA
                    </span>
                  </div>
                )}

                {/* Preview de imagen con overlay */}
                <div
                  className={`relative h-32 cursor-pointer group bg-gradient-to-br ${color.bg} overflow-hidden`}
                  onClick={() => openModal(planImages[key])}
                >
                  {/* Imagen de fondo con overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${planImages[key]})`,
                      filter: "brightness(0.7)",
                    }}
                  />

                  {/* Overlay de gradiente */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-20`}
                  ></div>

                  {/* Contenido sobre la imagen */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{plan.icon}</span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm ${color.text} bg-white/70`}
                      >
                        {esPlanTV
                          ? plan.unidad
                          : plan.velocidad + " " + plan.unidad}
                      </span>
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md">
                        {plan.nombre}
                      </h3>

                      {/* Badge de hover para ver imagen */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                          <svg
                            className="w-3 h-3 text-white mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                          <span className="text-white text-xs font-semibold">
                            Ver Imagen
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-5">
                  {/* Precio y descripción */}
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {plan.precio
                          ? `$${plan.precio.toFixed(2)}`
                          : "Consultar"}
                      </span>
                      {plan.precio && (
                        <div className="flex items-center">
                          <span className="text-gray-500 text-sm ml-1">
                            /mes
                          </span>
                          <span className="ml-2 text-xs font-semibold bg-green-100 text-green-600 px-2 py-0.5 rounded">
                            Incluye IVA
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm mb-4 leading-tight text-gray-600">
                    {plan.descripcion}
                  </p>

                  {/* Lista de características con expansión */}
                  <ul className="space-y-2 mb-4">
                    {caracteristicasVisibles.map((caracteristica, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 + idx * 0.05 }}
                        className="flex items-start"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span
                          className={`text-gray-900 text-xs leading-tight ${
                            caracteristica.includes("TV")
                              ? "font-bold text-blue-600"
                              : ""
                          }`}
                        >
                          {caracteristica}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Botón para mostrar más/menos características */}
                  {plan.caracteristicas.length > 4 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleExpandCard(key)}
                      className="w-full mb-4 py-2 px-4 rounded-lg transition-all duration-300 text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {isExpanded ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                          Ver menos
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                          Ver {plan.caracteristicas.length - 4} más
                        </span>
                      )}
                    </motion.button>
                  )}

                  {/* Botón de acción */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full ${color.button} text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm`}
                      onClick={() => solicitarInformacion(key)}
                    >
                      {esPlanTV ? "Solicitar TV" : "Contratar Ahora"}
                    </motion.button>

                    {/* Información del número de contacto */}
                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                      <div className="text-center text-xs text-gray-500 mb-1">
                        Contacto para{" "}
                        {numerosWhatsApp[ubicacionSeleccionada].nombre}:
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <svg
                          className="w-3 h-3 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.50.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                        </svg>
                        <span className="text-xs font-semibold text-green-600">
                          {numerosWhatsApp[ubicacionSeleccionada].display}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sección de planes con TV incluida */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="rounded-2xl backdrop-blur-sm border shadow-xl p-6 mb-16 max-w-6xl mx-auto bg-gradient-to-r from-red-50 to-pink-50 border-red-200"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              📺 Planes que Incluyen Televisión
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["prime", "mega", "ultra", "max"].map((planKey, index) => {
              const plan = planesData[planKey];
              const color = colorClasses[plan.color];

              return (
                <motion.div
                  key={planKey}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${color.gradient} text-white`}
                    >
                      <span className="text-xl">{plan.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {plan.nombre}
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    ${plan.precio.toFixed(2)}
                    <span className="text-sm text-gray-500">/mes</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {plan.velocidad} {plan.unidad}
                  </p>
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-2">
                    <span className="text-red-600 text-xs font-bold">
                      TV DIGITAL INCLUIDA
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700 text-sm">
              Los planes{" "}
              <span className="font-bold text-red-600">
                PRIME, MEGA, ULTRA y MAX
              </span>{" "}
              incluyen televisión digital además de internet de alta velocidad.
            </p>
          </div>
        </motion.div>

        {/* ======================== SECCIÓN DE PLANES CORPORATIVOS ======================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="rounded-2xl backdrop-blur-sm border shadow-2xl p-8 mb-16 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700"
        >
          {/* Encabezado de Planes Corporativos */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold tracking-wide text-yellow-300 bg-yellow-900/30 rounded-full mb-4 backdrop-blur-sm border border-yellow-700/30">
              <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
              TELEVISIÓN INTERNET • FIBRA ÓPTICA
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                PLANES CORPORATIVOS
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 font-semibold"
            >
              Soluciones avanzadas para empresas
            </motion.p>
          </div>

          {/* Grid de 5 planes corporativos en una sola fila */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {planesCorporativos.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center p-5 rounded-xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-600">
                    <span className="text-2xl">{plan.icon}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.nombre}
                </h3>

                {/* Velocidad destacada */}
                <div className="mb-3">
                  <div className="text-3xl font-bold text-white">
                    {plan.velocidad}
                  </div>
                  <div className="text-sm text-gray-300">{plan.unidad}</div>
                </div>

                {/* Precio */}
                <div className="text-2xl font-bold text-white mb-3">
                  ${plan.precio.toFixed(2)}
                  <span className="text-sm text-gray-400">/mensual</span>
                </div>

                {/* Característica especial */}
                <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-lg p-2 mb-4 border border-blue-700/30">
                  <span className="text-blue-300 text-xs font-bold">
                    {plan.caracteristicaEspecial}
                  </span>
                </div>

                {/* Botón de acción */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => solicitarPlanCorporativo(plan)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Solicitar
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Información adicional de planes corporativos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-center mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                CARACTERÍSTICAS CORPORATIVAS
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-yellow-400 text-2xl mb-2">🔧</div>
                <h4 className="text-white font-bold text-sm mb-1">
                  CONFIGURACIONES PERSONALIZADAS
                </h4>
                <p className="text-gray-400 text-xs">A medida de tu empresa</p>
              </div>

              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-green-400 text-2xl mb-2">🌐</div>
                <h4 className="text-white font-bold text-sm mb-1">
                  ACCESOS A PUERTOS E IP PÚBLICA
                </h4>
                <p className="text-gray-400 text-xs">
                  Para servidores y aplicaciones
                </p>
              </div>

              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-blue-400 text-2xl mb-2">⚡</div>
                <h4 className="text-white font-bold text-sm mb-1">
                  SOPORTE INMEDIATO
                </h4>
                <p className="text-gray-400 text-xs">
                  Respuesta en menos de 15 minutos
                </p>
              </div>

              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-purple-400 text-2xl mb-2">💼</div>
                <h4 className="text-white font-bold text-sm mb-1">
                  INSTALACIÓN $50.00
                </h4>
                <p className="text-gray-400 text-xs">
                  Costo único de instalación
                </p>
              </div>
            </div>

            {/* Información de contacto corporativa */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700">
                <div className="text-green-400 text-lg mb-1">📞</div>
                <h4 className="text-white font-bold text-xs mb-1">
                  Call Center
                </h4>
                <p className="text-gray-300 text-sm">097 977 0078</p>
              </div>

              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700">
                <div className="text-blue-400 text-lg mb-1">🤖</div>
                <h4 className="text-white font-bold text-xs mb-1">Chatbot</h4>
                <p className="text-gray-300 text-sm">098 354 5946</p>
              </div>

              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700">
                <div className="text-yellow-400 text-lg mb-1">🔧</div>
                <h4 className="text-white font-bold text-xs mb-1">
                  Soporte Técnico
                </h4>
                <p className="text-gray-300 text-sm">098 967 2988</p>
              </div>

              <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700">
                <div className="text-purple-400 text-lg mb-1">🌐</div>
                <h4 className="text-white font-bold text-xs mb-1">Sitio web</h4>
                <p className="text-gray-300 text-sm">www.typlusec.net</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* ======================== FIN SECCIÓN PLANES CORPORATIVOS ======================== */}

        {/* Términos y condiciones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="rounded-2xl backdrop-blur-sm border shadow-xl p-6 mb-16 max-w-6xl mx-auto bg-white border-gray-200"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TÉRMINOS Y CONDICIONES – TVPLUS
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="p-1.5 bg-green-100 rounded mr-3">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm">
                  Precios incluyen IVA y son fijos
                </p>
              </div>
              <div className="flex items-start">
                <div className="p-1.5 bg-blue-100 rounded mr-3">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm">
                  25% de descuento al referir un nuevo usuario
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="p-1.5 bg-purple-100 rounded mr-3">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm">
                  Mayor velocidad en las noches (según disponibilidad)
                </p>
              </div>
              <div className="flex items-start">
                <div className="p-1.5 bg-orange-100 rounded mr-3">
                  <svg
                    className="w-4 h-4 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm">
                  Instalación gratuita. Servicio sujeto a cobertura y
                  disponibilidad técnica
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-8 text-white text-center mb-12 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">
              ¿Qué plan se adapta mejor a ti?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed text-sm">
              Contáctanos directamente por WhatsApp según tu ubicación y te
              ayudaremos a elegir el plan perfecto.
            </p>

            {/* Información del contacto seleccionado */}
            <div className="mb-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-center">
                  <div className="text-sm font-semibold mb-1">
                    Contacto para:
                  </div>
                  <div className="text-lg font-bold mb-2">
                    {numerosWhatsApp[ubicacionSeleccionada].nombre}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/30 px-4 py-2 rounded-lg">
                  <svg
                    className="w-6 h-6 text-green-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.50.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                  </svg>
                  <div>
                    <div className="text-sm">Número de WhatsApp</div>
                    <div className="text-xl font-bold">
                      {numerosWhatsApp[ubicacionSeleccionada].display}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={contactarWhatsApp}
              className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl text-sm"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.50.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
              </svg>
              Contactar por WhatsApp
            </motion.button>

            <p className="text-blue-200 text-xs mt-4">
              Haz clic para contactar directamente con el agente de{" "}
              {numerosWhatsApp[ubicacionSeleccionada].nombre}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanesTVPLUS;
