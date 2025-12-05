import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaUsers,
  FaFileAlt,
  FaShieldAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaStar,
} from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50 sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo alineado a la izquierda */}
        <Link to="/" className="flex items-center group" onClick={closeMenu}>
          <div className="relative">
            <img
              src="/img/tvplus_logo.png"
              alt="TV PLUS Logo"
              className="h-14 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="ml-3 flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              TV PLUS
            </span>
            <span className="text-xs text-gray-600 font-medium">
              TV & Internet Fibra Óptica
            </span>
          </div>
        </Link>

        {/* Menú e íconos a la derecha */}
        <div className="flex items-center">
          {/* Menú en pantallas grandes */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLinks closeMenu={closeMenu} />
          </div>

          {/* Botón hamburguesa en móviles */}
          <div className="md:hidden ml-4">
            <button
              onClick={toggleMenu}
              className={`
                p-3 rounded-2xl transition-all duration-300 transform hover:scale-110
                ${
                  isOpen
                    ? "bg-gradient-to-r from-red-500 to-blue-500 text-white shadow-lg"
                    : "bg-gradient-to-r from-blue-500 to-red-500 text-white hover:shadow-lg"
                }
              `}
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          <div className="flex flex-col space-y-3 py-2">
            <NavLinks closeMenu={closeMenu} isMobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Reutilizable para todos los enlaces del menú
const NavLinks = ({ closeMenu, isMobile = false }) => (
  <>
    {/* Enlace de Planes con diseño especial */}
    <CustomLink
      to="/planes-tvplus"
      label="Planes Internet"
      closeMenu={closeMenu}
      isHighlighted
      isMobile={isMobile}
    >
      <FaWifi className="w-4 h-4" />
    </CustomLink>

    <CustomLink
      to="/nosotros"
      label="Nosotros"
      closeMenu={closeMenu}
      isMobile={isMobile}
    >
      <FaUsers className="w-4 h-4" />
    </CustomLink>

    <CustomLink
      to="/documentos"
      label="Documentos"
      closeMenu={closeMenu}
      isMobile={isMobile}
    >
      <FaFileAlt className="w-4 h-4" />
    </CustomLink>

    <CustomLink
      to="/control-parental"
      label="Control Parental"
      closeMenu={closeMenu}
      isMobile={isMobile}
    >
      <FaShieldAlt className="w-4 h-4" />
    </CustomLink>

    <CustomLink
      to="/contactos"
      label="Contactos"
      closeMenu={closeMenu}
      isMobile={isMobile}
    >
      <FaEnvelope className="w-4 h-4" />
    </CustomLink>
  </>
);

const CustomLink = ({
  to,
  label,
  children,
  closeMenu,
  isHighlighted = false,
  isMobile = false,
}) => {
  if (isMobile) {
    return (
      <Link
        to={to}
        onClick={closeMenu}
        className={`
          group flex items-center p-4 rounded-2xl transition-all duration-300
          ${
            isHighlighted
              ? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg"
              : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-red-500/10 hover:text-gray-900"
          }
        `}
      >
        <div
          className={`
          flex items-center space-x-4 flex-1
          ${isHighlighted ? "transform scale-105" : ""}
        `}
        >
          <div
            className={`
            p-3 rounded-xl transition-all duration-300
            ${
              isHighlighted
                ? "bg-white/20 text-white"
                : "bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-red-100 group-hover:text-blue-600"
            }
          `}
          >
            {children}
          </div>
          <span className="font-semibold text-lg">{label}</span>
        </div>

        {isHighlighted && (
          <FaStar className="w-4 h-4 text-yellow-300 animate-pulse" />
        )}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      onClick={closeMenu}
      className={`
        group relative flex items-center px-5 py-3 rounded-2xl font-medium transition-all duration-300
        ${
          isHighlighted
            ? "bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/80"
        }
      `}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`
          transition-transform duration-300
          ${isHighlighted ? "transform scale-110" : "group-hover:scale-110"}
        `}
        >
          {children}
        </div>
        <span className="whitespace-nowrap font-semibold">{label}</span>
      </div>

      {isHighlighted && (
        <FaStar className="ml-2 w-3 h-3 text-yellow-300 animate-pulse" />
      )}

      {!isHighlighted && (
        <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      )}
    </Link>
  );
};

export default Nav;
