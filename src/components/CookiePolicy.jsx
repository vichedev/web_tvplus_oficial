import { Link } from "react-router-dom";
import { openCookiePreferences } from "../utils/cookieConsent";

function CookiePolicy() {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-12 text-gray-800 sm:px-6">
      <p className="mb-2 text-sm font-semibold uppercase text-red-700">
        TVPLUS · Información de privacidad
      </p>
      <h1 className="mb-6 text-3xl font-bold text-gray-950">
        Política de Cookies
      </h1>
      <p className="mb-8 leading-7">
        Responsable del tratamiento: [COMPLETAR: razón social], RUC
        [COMPLETAR: RUC], con domicilio en [COMPLETAR: domicilio legal]. Puedes
        contactarnos en tvplusec@gmail.com. Responsable o delegado de protección
        de datos: [COMPLETAR: nombre del responsable o delegado]. Para ejercer
        derechos: [COMPLETAR: correo para ejercicio de derechos].
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={openCookiePreferences}
          className="rounded-md bg-blue-800 px-4 py-3 font-semibold text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          Configurar o revocar cookies
        </button>
        <Link
          to="/contactos"
          className="rounded-md border border-gray-400 px-4 py-3 font-semibold text-gray-800 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          Contacto
        </Link>
      </div>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold">1. Qué son las cookies</h2>
        <p className="leading-7">
          Las cookies son archivos o identificadores que un sitio puede guardar
          en el navegador. También pueden utilizarse tecnologías equivalentes,
          como localStorage, etiquetas y píxeles, que almacenan o consultan
          información en el dispositivo. Esta web guarda la decisión de
          consentimiento en localStorage; actualmente no incorpora píxeles ni
          herramientas de analítica o publicidad.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold">2. Consentimiento</h2>
        <p className="leading-7">
          Antes de activar tecnologías opcionales, solicitamos consentimiento
          previo, informado, específico y libre. Puedes aceptar, rechazar las no
          esenciales o elegir por categoría. Las tecnologías estrictamente
          necesarias para transmitir una comunicación, mantener la seguridad de
          la red o prestar un servicio expresamente solicitado por el abonado
          pueden utilizarse en la medida necesaria para esos fines, sin
          habilitar por ello analítica ni publicidad.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold">3. Categorías y conservación</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-3">Categoría</th>
                <th className="p-3">Finalidad y conservación</th>
                <th className="p-3">Titularidad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 align-top">
                <th className="p-3">Necesarias</th>
                <td className="p-3 leading-6">
                  Guardar preferencias y funciones esenciales. La clave de
                  consentimiento permanece hasta que se borre el almacenamiento
                  del navegador, se revoque o se actualice la versión de
                  consentimiento.
                </td>
                <td className="p-3">Propia de TVPLUS (localStorage).</td>
              </tr>
              <tr className="border-b border-gray-200 align-top">
                <th className="p-3">Analíticas y rendimiento</th>
                <td className="p-3 leading-6">
                  Medir el uso del sitio y mejorar su funcionamiento. Actualmente
                  no se instalan. Antes de incorporarlas se debe completar el
                  plazo de conservación: [COMPLETAR: plazo de analíticas].
                </td>
                <td className="p-3">
                  No hay proveedor actualmente; [COMPLETAR: titular y proveedor
                  cuando se incorporen].
                </td>
              </tr>
              <tr className="align-top">
                <th className="p-3">Marketing y publicidad</th>
                <td className="p-3 leading-6">
                  Medir campañas o personalizar publicidad. Actualmente no se
                  instalan. Antes de incorporarlas se debe completar el plazo de
                  conservación: [COMPLETAR: plazo de marketing].
                </td>
                <td className="p-3">
                  No hay proveedor actualmente; [COMPLETAR: titular y proveedor
                  cuando se incorporen].
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold">4. Cómo cambiar o revocar</h2>
        <p className="mb-3 leading-7">
          Puedes cambiar o revocar tu decisión en cualquier momento con el botón
          “Configurar o revocar cookies” de esta página o con “Configurar
          cookies” en el pie del sitio. La revocación no afecta al tratamiento
          realizado antes de ella. También puedes borrar los datos del sitio en
          tu navegador.
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer" className="text-blue-800 underline">Configuración de cookies en Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-firefox-escritorio" target="_blank" rel="noreferrer" className="text-blue-800 underline">Protección y cookies en Firefox</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer" className="text-blue-800 underline">Cookies en Microsoft Edge</a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-blue-800 underline">Cookies en Safari</a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold">5. Derechos del titular</h2>
        <p className="leading-7">
          Conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP),
          puedes ejercer los derechos de acceso, rectificación y actualización,
          eliminación, oposición, revocatoria del consentimiento y portabilidad,
          así como no ser objeto de decisiones basadas única o parcialmente en
          valoraciones automatizadas, en los términos previstos por la normativa.
          Dirige tu solicitud a [COMPLETAR: correo para ejercicio de derechos].
          También puedes presentar reclamaciones ante la autoridad competente.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold">6. Marco normativo</h2>
        <p className="leading-7">
          Esta política se aplica de conformidad con la LOPDP y su Reglamento
          General, la Ley Orgánica de Telecomunicaciones y la normativa de
          ARCOTEL aplicable sobre secreto de las comunicaciones y protección de
          los datos de los abonados.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold">7. Cambios a esta política</h2>
        <p className="leading-7">
          TVPLUS podrá actualizar esta política para reflejar cambios legales o
          técnicos. Si cambia una finalidad que requiera nuevo consentimiento,
          solicitaremos nuevamente tu decisión antes de activar las tecnologías
          opcionales. Publicación o última actualización: [COMPLETAR: fecha de
          publicación].
        </p>
      </section>
    </article>
  );
}

export default CookiePolicy;