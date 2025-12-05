import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logoAnimationStage, setLogoAnimationStage] = useState("initial");
  const canvasRef = useRef(null);

  const welcomeTexts = [
    "TV e Internet en un solo servicio",
    "La mejor combinación de entretenimiento y conectividad",
    "Televisión por cable e internet de alta velocidad",
    "Disfruta de todo el entretenimiento con la mejor conexión",
  ];

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Control de la línea de tiempo de la animación del logo
  useEffect(() => {
    if (isMobile) {
      setLogoAnimationStage("background");
      return;
    }

    const timer1 = setTimeout(() => {
      setLogoAnimationStage("center");

      const timer2 = setTimeout(() => {
        setLogoAnimationStage("background");
      }, 1500);

      return () => clearTimeout(timer2);
    }, 500);

    return () => clearTimeout(timer1);
  }, [isMobile]);

  // Animación de texto de bienvenida
  useEffect(() => {
    if (logoAnimationStage !== "background") return;

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % welcomeTexts.length);
    }, 3500);

    return () => clearInterval(textInterval);
  }, [welcomeTexts.length, logoAnimationStage]);

  const handlePlanesClick = () => {
    navigate("/planes-tvplus");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSpeedTestClick = () => {
    window.open("https://www.speedtest.net/", "_blank");
  };

  // Clases de estilo dinámicas basadas en isDarkMode - AJUSTADAS A ROJO/AZUL
  const bgGradient = isDarkMode
    ? "from-red-950 via-gray-950 to-blue-950"
    : "from-red-50 via-white to-blue-50";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const textMuted = isDarkMode ? "text-red-200" : "text-gray-600";
  const cardBorder = isDarkMode ? "border-red-700/30" : "border-red-200/50";
  const cardHover = isDarkMode
    ? "hover:border-red-400"
    : "hover:border-red-500";
  const overlay = isDarkMode
    ? "from-red-950/80 via-transparent to-blue-950/80"
    : "from-red-50/80 via-transparent to-blue-50/80";

  const cardBackgroundStyle = {
    background: isDarkMode
      ? "rgba(17, 24, 39, 0.8)"
      : "rgba(255, 255, 255, 0.95)",
  };

  // VARIANTS: Animación del logo de fondo
  const logoVariants = {
    initial: { opacity: 0, scale: 0.5 },
    center: {
      opacity: 1,
      scale: isMobile ? 0.01 : 1,
      transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.67] },
    },
    background: {
      opacity: isMobile ? 0.1 : 0.08,
      scale: isMobile ? 1.5 : 1.5,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // VARIANTS: Animación del contenido principal
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: isMobile ? 0 : 1.5,
      },
    },
  };

  // VARIANTS: Animación de las líneas
  const textLineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // VARIANTS: Animación de la línea del separador
  const separatorVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: isMobile ? 80 : 120,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // --- LÓGICA DE PARTÍCULAS CORREGIDA - AJUSTADA A ROJO/AZUL ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const particleCount = isMobile ? 40 : 100;
    const maxDistance = isMobile ? 80 : 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        // Colores ajustados a rojo/azul
        const colors = [
          `rgba(239, 68, 68, ${Math.random() * 0.5 + 0.2})`, // Rojo
          `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`, // Azul
          `rgba(220, 38, 38, ${Math.random() * 0.4 + 0.2})`, // Rojo intenso
          `rgba(37, 99, 235, ${Math.random() * 0.4 + 0.2})`, // Azul intenso
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 0;
        this.fadeSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        if (this.alpha < 1) {
          this.alpha += this.fadeSpeed;
        }
      }

      draw() {
        ctx.fillStyle = this.color.replace(/, [0-9.]+\)/, `, ${this.alpha})`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Dibujar conexiones entre partículas
      ctx.strokeStyle = `rgba(239, 68, 68, 0.05)`;
      ctx.lineWidth = 0.8;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const setup = () => {
      resizeCanvas();
      initParticles();
      animate();
    };

    setup();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDarkMode, isMobile]);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${bgGradient} transition-colors duration-1000 font-sans`}
    >
      {/* Canvas de partículas animadas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Toggle Button Día/Noche - AJUSTADO A ROJO/AZUL */}
      <motion.div
        variants={textLineVariants}
        className="absolute top-6 right-6 z-50"
      >
        <button
          onClick={toggleDarkMode}
          className={`relative w-16 h-8 rounded-full p-1 transition-all duration-500 ${
            isDarkMode
              ? "bg-gradient-to-r from-red-600 to-blue-700"
              : "bg-gradient-to-r from-red-400 to-blue-500"
          } shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75`}
        >
          <div
            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-500 ${
              isDarkMode ? "transform translate-x-0" : "transform translate-x-8"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {isDarkMode ? (
                <svg
                  className="w-3 h-3 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </button>
        <span
          className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white px-2 py-1 rounded-full backdrop-blur-sm shadow-md transition-colors duration-500 ${
            isDarkMode ? "bg-white/30 text-white" : "bg-black/30 text-white"
          }`}
        >
          {isDarkMode ? "Modo Noche" : "Modo Día"}
        </span>
      </motion.div>

      {/* LOGO DE FONDO (ANIMACIÓN INTRODUCTORIA) */}
      {!isMobile && (
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate={logoAnimationStage}
          className={`absolute inset-0 z-10 flex items-center justify-center`}
        >
          <img
            src="/img/tvplus_logo.png"
            alt="TV PLUS Background Logo"
            className={`w-2/3 max-w-6xl h-auto object-contain transition-all duration-1000 ease-in-out`}
          />
        </motion.div>
      )}

      {/* OVERLAY de gradiente */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: logoAnimationStage === "background" || isMobile ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: logoAnimationStage === "center" ? 1.2 : 0,
        }}
        className={`absolute inset-0 z-1 bg-gradient-to-br ${overlay} transition-all duration-1000`}
      />

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={
          logoAnimationStage === "background" || isMobile ? "visible" : "hidden"
        }
        className="relative z-30 max-w-7xl mx-auto px-6 py-20 sm:px-10 lg:px-10 
            flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
      >
        {/* Contenedor de texto */}
        <div className={`flex-1 max-w-2xl flex flex-col gap-6 ${textColor}`}>
          {/* Texto de bienvenida animado */}
          <motion.div
            variants={textLineVariants}
            className="overflow-hidden mb-2"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTextIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xl sm:text-2xl lg:text-3xl font-light text-red-400 tracking-wide"
              >
                {welcomeTexts[currentTextIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Título principal */}
          <div className="space-y-4">
            <motion.div variants={textLineVariants} className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-lg">
                <span
                  className={`block bg-gradient-to-r ${
                    isDarkMode
                      ? "from-white to-red-200"
                      : "from-gray-900 to-red-700"
                  } bg-clip-text text-transparent`}
                >
                  TV PLUS
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={{ ...textLineVariants, hidden: { opacity: 0, x: 50 } }}
              className="overflow-hidden"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-lg">
                <span
                  className={`block bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent`}
                >
                  Internet & Televisión por Fibra Óptica
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={separatorVariants}
              className={`h-1.5 bg-gradient-to-r from-red-400 to-blue-500 rounded-full shadow-md`}
            />
          </div>

          {/* Descripción */}
          <motion.div variants={textLineVariants}>
            <p
              className={`text-lg sm:text-xl lg:text-2xl leading-relaxed font-light ${textMuted} tracking-wide`}
            >
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                TV PLUS
              </span>{" "}
              te ofrece la mejor experiencia de entretenimiento y conectividad
              con televisión por cable de alta definición e internet de fibra
              óptica para hogares y negocios.
            </p>
          </motion.div>

          {/* Botón CTA */}
          <motion.div variants={textLineVariants}>
            <button
              onClick={handlePlanesClick}
              className="group relative px-9 py-4 rounded-xl bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-700 hover:to-blue-800 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            >
              <span className="relative z-10 flex items-center">
                Ver Planes de TV e Internet
                <svg
                  className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </motion.div>

          {/* Badges de características */}
          <motion.div
            variants={contentVariants}
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6`}
          >
            {[
              { icon: "📺", label: "TV HD", desc: "Canales Premium" },
              { icon: "⚡", label: "Alta Velocidad", desc: "Fibra óptica" },
              { icon: "🛡️", label: "Soporte", desc: "24/7 Disponible" },
            ].map((badge, index) => (
              <motion.div
                variants={textLineVariants}
                key={index}
                className={`group flex items-center bg-white/5 backdrop-blur-md px-4 py-3 rounded-2xl border ${cardBorder} ${cardHover} transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg`}
                style={
                  isDarkMode
                    ? { backgroundColor: "rgba(255, 255, 255, 0.05)" }
                    : { backgroundColor: "rgba(255, 255, 255, 0.7)" }
                }
              >
                <span className="text-2xl mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </span>
                <div className="flex flex-col">
                  <span className={`text-sm font-semibold ${textColor}`}>
                    {badge.label}
                  </span>
                  <span
                    className={`text-xs ${
                      isDarkMode ? "text-red-300" : "text-gray-500"
                    }`}
                  >
                    {badge.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* NUEVO DISEÑO DEL CUADRO DERECHO - TEMA ROJO/AZUL */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, delay: isMobile ? 0.5 : 2.5 },
            },
          }}
          className="flex-1 max-w-xl relative mt-12 lg:mt-0"
        >
          {/* Glow exterior dinámico - Rojo/Azul */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute inset-0 rounded-[2rem] blur-3xl transform -z-10 ${
              isDarkMode
                ? "bg-gradient-to-r from-red-500/40 via-purple-500/30 to-blue-600/40"
                : "bg-gradient-to-r from-red-400/50 via-purple-400/30 to-blue-500/50"
            }`}
          />

          {/* Contenedor principal - Diseño Moderno con Esquinas Tech */}
          <div
            className={`relative p-8 lg:p-10 rounded-3xl overflow-hidden border-2 ${cardBorder} shadow-2xl transition-all duration-500 hover:scale-[1.02] group`}
            style={{
              ...cardBackgroundStyle,
              backgroundImage: isDarkMode
                ? "radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)"
                : "radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            }}
          >
            {/* Patrón de Circuito en el fondo */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="circuit-pattern"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0,30 L60,30 M30,0 L30,60"
                      stroke={isDarkMode ? "#ef4444" : "#dc2626"}
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="3"
                      fill={isDarkMode ? "#3b82f6" : "#2563eb"}
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
              </svg>
            </div>

            {/* Contenedor del Logo con efecto especial */}
            <div className="relative z-10 p-6">
              {/* Efecto de halo detrás del logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-64 h-64 rounded-full blur-3xl opacity-30 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-red-500/50 to-blue-500/50"
                      : "bg-gradient-to-r from-red-400/50 to-blue-400/50"
                  }`}
                ></div>
              </div>

              {/* Logo Principal */}
              <div className="relative flex flex-col items-center justify-center">
                <img
                  src="/img/tvplus_logo.png"
                  alt="TV PLUS Logo"
                  className="w-full max-w-xs h-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Anillo decorativo animado */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-72 h-72 -z-10"
                >
                  <div
                    className={`absolute inset-0 rounded-full border-2 ${
                      isDarkMode ? "border-red-500/30" : "border-red-400/30"
                    }`}
                  ></div>
                </motion.div>
              </div>
            </div>

            {/* Tarjetas de características flotantes */}
            <div className="relative z-20 grid grid-cols-3 gap-4 mt-6">
              {[
                {
                  icon: "📡",
                  title: "COBERTURA",
                  desc: "Nacional",
                  color: "from-red-500 to-red-600",
                },
                {
                  icon: "⚡",
                  title: "VELOCIDAD",
                  desc: "Ultra Rápida",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: "⭐",
                  title: "CALIDAD",
                  desc: "Garantizada",
                  color: "from-red-500 to-blue-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: isMobile ? 0.1 + index * 0.1 : 2.8 + index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${item.color} text-white rounded-xl p-3 text-center shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="font-bold text-xs">{item.title}</div>
                  <div className="text-xs opacity-90">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Líneas de conexión animadas */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M20,20 L50,50 L150,20 L250,100"
                fill="none"
                stroke={
                  isDarkMode
                    ? "rgba(239, 68, 68, 0.3)"
                    : "rgba(239, 68, 68, 0.5)"
                }
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: isMobile ? 0 : 2.5 }}
              />
              <motion.path
                d="M300,150 L200,100 L100,150 L50,200"
                fill="none"
                stroke={
                  isDarkMode
                    ? "rgba(59, 130, 246, 0.3)"
                    : "rgba(59, 130, 246, 0.5)"
                }
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: isMobile ? 0.5 : 3 }}
              />
            </svg>
          </div>

          {/* Tarjeta flotante de Speedtest - Rojo/Azul */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20, y: -20 },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{ duration: 0.5, delay: isMobile ? 1 : 3 }}
            className="absolute -top-3 -right-3 bg-gradient-to-br from-red-500 to-blue-600 text-white p-3 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer group z-20"
            onClick={handleSpeedTestClick}
          >
            <div className="text-center">
              <div className="w-8 h-8 mb-1 mx-auto group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/img/speedtest.png"
                  alt="Speedtest Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs font-bold leading-tight">
                PRUEBA TU
                <br />
                VELOCIDAD!
              </div>
            </div>
          </motion.div>

          {/* Información adicional en la parte inferior */}
          <div
            className={`mt-8 p-4 rounded-xl border ${cardBorder} backdrop-blur-sm`}
            style={cardBackgroundStyle}
          >
            <div className="flex items-center justify-center space-x-6">
              {[
                { icon: "🎯", text: "100% Fibra Óptica" },
                { icon: "📶", text: "Estable" },
                { icon: "💯", text: "Garantía" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xl mb-1">{item.icon}</span>
                  <span className={`text-xs font-medium ${textColor}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Barra de progreso decorativa */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span className={textColor}>Cobertura de calidad!</span>
                <span className="font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                  95%
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1.5, delay: isMobile ? 0.5 : 3 }}
                  className="h-full bg-gradient-to-r from-red-500 to-blue-600 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
