// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import StandaloneNosotros from "./components/Nosotros";
import Documentos from "./components/Documentos";
import Contactos from "./components/Contactos";
import Footer from "./components/Footer";
// Cambia esta línea:
import PlanesTVPLUS from "./components/PlanesTVPLUS"; // ← Nuevo nombre
import ControlParental from "./components/ControlParental";
import ParametrosCalidad from "./components/ParametrosCalidad";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<StandaloneNosotros />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/contactos" element={<Contactos />} />
          {/* Cambia esta ruta también: */}
          <Route path="/planes-tvplus" element={<PlanesTVPLUS />} />
          <Route path="/control-parental" element={<ControlParental />} />
          <Route path="/parametros-calidad" element={<ParametrosCalidad />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
