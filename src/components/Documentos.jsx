import React, { useState, useRef } from "react";
import {
  FaEye,
  FaDownload,
  FaFilePdf,
  FaSearch,
  FaFilter,
  FaTimes,
  FaCalendarAlt,
  FaTag,
  FaShieldAlt,
  FaUsers,
  FaTv,
  FaWifi,
  FaStar,
  FaBookOpen,
  FaFileAlt,
} from "react-icons/fa";
import documentosData from "../data/documents";

function Documentos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [hoveredDoc, setHoveredDoc] = useState(null);
  const documentosRef = useRef(null);

  // Categorías coloridas para TVPLUS
  const categories = {
    all: {
      name: "Todos",
      icon: FaBookOpen,
      bgColor: "bg-gradient-to-r from-gray-400 to-gray-600",
      textColor: "text-gray-100",
    },
    legal: {
      name: "Marco Legal",
      icon: FaFileAlt,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
      textColor: "text-blue-100",
    },
    quality: {
      name: "Calidad",
      icon: FaStar,
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-600",
      textColor: "text-green-100",
    },
    security: {
      name: "Seguridad",
      icon: FaShieldAlt,
      bgColor: "bg-gradient-to-r from-red-500 to-red-700",
      textColor: "text-red-100",
    },
    technical: {
      name: "Técnico",
      icon: FaWifi,
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
      textColor: "text-purple-100",
    },
    social: {
      name: "Social",
      icon: FaUsers,
      bgColor: "bg-gradient-to-r from-orange-500 to-orange-600",
      textColor: "text-orange-100",
    },
  };

  // Clasificar documentos por categoría (basado en tu lógica original)
  const categorizedDocuments = documentosData.map((doc) => {
    let category = "legal";

    if (
      doc.title.includes("Calidad") ||
      doc.title.includes("QOS") ||
      doc.title.includes("Parámetros")
    ) {
      category = "quality";
    } else if (
      doc.title.includes("Seguridad") ||
      doc.title.includes("Control Parental") ||
      doc.title.includes("Consejos")
    ) {
      category = "security";
    } else if (
      doc.title.includes("Saturación") ||
      doc.title.includes("Tercera") ||
      doc.description.includes("técnica")
    ) {
      category = "technical";
    } else if (
      doc.title.includes("Discapacidades") ||
      doc.title.includes("Adultos Mayores") ||
      doc.title.includes("Pública")
    ) {
      category = "social";
    }

    return { ...doc, category };
  });

  // Filtrar documentos
  const filteredDocuments = categorizedDocuments
    .filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.title.localeCompare(b.title);
        case "newest":
          return b.id - a.id;
        case "oldest":
          return a.id - b.id;
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("name");
  };

  const scrollToDocumentos = () => {
    clearFilters();
    if (documentosRef.current) {
      documentosRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      {/* Header Colorido */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20" />

        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-6 border border-white/50 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-red-500 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">
                BIBLIOTECA DIGITAL TVPLUS
              </span>
            </div>
            <FaTv className="text-red-500 w-4 h-4" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              Documentación
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Accede a toda la documentación legal, técnica y regulatoria de{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              TVPLUS
            </span>
          </p>
        </div>
      </div>

      {/* Panel de Control Colorido */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
          {/* Barra de Búsqueda Mejorada */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Buscar documentos por título o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-12 py-5 bg-white border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filtros y Categorías */}
          <div className="space-y-8">
            {/* Categorías */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <FaTag className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Categorías</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {Object.entries(categories).map(([key, cat]) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      onMouseEnter={() => setHoveredDoc(key)}
                      onMouseLeave={() => setHoveredDoc(null)}
                      className={`group relative overflow-hidden transition-all duration-300 ${
                        isSelected
                          ? `${cat.bgColor} text-white scale-105 shadow-lg`
                          : "bg-white text-gray-700 hover:scale-105"
                      } px-6 py-4 rounded-2xl border-2 border-transparent hover:border-gray-200 shadow-sm`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-5 h-5 ${
                            isSelected
                              ? "text-white"
                              : "text-gray-500 group-hover:text-gray-700"
                          }`}
                        />
                        <span className="font-semibold whitespace-nowrap">
                          {cat.name}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ordenar */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>Ordenar por</span>
                </label>
                <div className="flex gap-2">
                  {[
                    { value: "name", label: "Nombre", icon: "🔤" },
                    { value: "newest", label: "Nuevos", icon: "🆕" },
                    { value: "oldest", label: "Antiguos", icon: "📅" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 ${
                        sortBy === option.value
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span>{option.icon}</span>
                      <span className="text-sm font-medium">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Estadísticas */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <FaFilter className="w-4 h-4" />
                  <span>Estadísticas</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">
                      {documentosData.length}
                    </div>
                    <div className="text-sm text-blue-800 font-medium">
                      Total
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">
                      {filteredDocuments.length}
                    </div>
                    <div className="text-sm text-green-800 font-medium">
                      Mostrando
                    </div>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">
                  Acciones
                </label>
                <button
                  onClick={scrollToDocumentos}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <FaTimes className="w-4 h-4" />
                  Limpiar Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Documentos Colorido */}
      <div ref={documentosRef} className="container mx-auto px-4">
        {filteredDocuments.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl rounded-3xl p-12 max-w-md mx-auto shadow-2xl border border-white/50">
              <FaFilePdf className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-700 mb-3">
                No se encontraron documentos
              </h3>
              <p className="text-gray-600 mb-6">
                Prueba con otros términos de búsqueda o selecciona otra
                categoría
              </p>
              <button
                onClick={scrollToDocumentos}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Mostrar Todos
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocuments.map((doc) => {
              const category = categories[doc.category];
              const CategoryIcon = category.icon;

              return (
                <div
                  key={doc.id}
                  onMouseEnter={() => setHoveredDoc(doc.id)}
                  onMouseLeave={() => setHoveredDoc(null)}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 hover:border-gray-200/50"
                >
                  {/* Cabecera de la tarjeta */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 ${category.bgColor} opacity-90`}
                    />

                    {/* Logo TVPLUS animado */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/img/tvplus_logo.png"
                        alt="TVPLUS Logo"
                        className={`w-48 h-48 object-contain transition-all duration-700 ${
                          hoveredDoc === doc.id
                            ? "opacity-100 scale-110 rotate-2"
                            : "opacity-80 scale-100"
                        }`}
                      />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-bold">
                        <FaFilePdf className="w-3 h-3" />
                        <span>PDF</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${category.bgColor} ${category.textColor} px-3 py-2 rounded-full text-xs font-bold`}
                      >
                        <CategoryIcon className="w-3 h-3" />
                        <span>{category.name}</span>
                      </div>
                    </div>

                    {/* ID del documento */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      DOC-{doc.id.toString().padStart(3, "0")}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors line-clamp-2">
                      {doc.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                      {doc.description}
                    </p>

                    {/* Fecha y tamaño */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>Última actualización</span>
                      </div>
                      <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                        ~2.5 MB
                      </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex gap-3">
                      <a
                        href={doc.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/action"
                      >
                        <FaEye className="w-4 h-4 transform group-hover/action:scale-110 transition-transform" />
                        <span>Ver</span>
                      </a>
                      <a
                        href={doc.pdfUrl}
                        download
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/action"
                      >
                        <FaDownload className="w-4 h-4 transform group-hover/action:scale-110 transition-transform" />
                        <span>Descargar</span>
                      </a>
                    </div>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Informativo */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-10 border border-white/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Si no encuentras el documento que buscas o necesitas asistencia
              adicional, nuestro equipo de soporte está disponible para
              ayudarte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/593989090285"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FaUsers className="w-4 h-4" />
                Contactar Soporte
              </a>
              <button
                onClick={scrollToDocumentos}
                className="px-8 py-3 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 flex items-center gap-2"
              >
                <FaBookOpen className="w-4 h-4" />
                Ver Todos los Documentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentos;
