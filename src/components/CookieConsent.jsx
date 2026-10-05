import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCookieBite, FaTimes } from "react-icons/fa";
import {
  getConsent,
  hasDecided,
  saveConsent,
  subscribeToConsentChanges,
  subscribeToPreferenceRequests,
} from "../utils/cookieConsent";
import "./CookieConsent.css";

const DEFAULT_PREFERENCES = {
  necessary: true,
  analiticas: false,
  marketing: false,
};

function savedPreferences() {
  const consent = getConsent();
  return consent && hasDecided()
    ? {
        necessary: true,
        analiticas: consent.analiticas,
        marketing: consent.marketing,
      }
    : DEFAULT_PREFERENCES;
}

function ConsentSwitch({ label, checked, disabled = false, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      className={`cookie-switch${checked ? " is-on" : ""}`}
      onClick={onChange}
    >
      <span className="cookie-switch-thumb" />
    </button>
  );
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [canClose, setCanClose] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!hasDecided()) setVisible(true);
    }, 800);

    const unsubscribePreferences = subscribeToPreferenceRequests(() => {
      setPreferences(savedPreferences());
      setShowPreferences(true);
      setCanClose(true);
      setVisible(true);
    });

    const unsubscribeConsent = subscribeToConsentChanges(() => {
      setVisible(!hasDecided());
    });

    return () => {
      window.clearTimeout(timer);
      unsubscribePreferences();
      unsubscribeConsent();
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.getElementById("cookie-consent-dialog")?.focus();
    }
  }, [visible, showPreferences]);

  const chooseAll = () => {
    saveConsent({ analiticas: true, marketing: true });
    setVisible(false);
  };

  const rejectOptional = () => {
    saveConsent({ analiticas: false, marketing: false });
    setVisible(false);
  };

  const savePreferences = () => {
    saveConsent(preferences);
    setVisible(false);
  };

  const openPreferences = () => {
    setPreferences(savedPreferences());
    setShowPreferences(true);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-layer">
      <section
        id="cookie-consent-dialog"
        className="cookie-consent-dialog"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-modal="false"
        tabIndex={-1}
        data-testid="cookie-consent"
      >
        <div className="cookie-consent-heading">
          <div className="cookie-consent-title-wrap">
            <FaCookieBite aria-hidden="true" className="cookie-consent-icon" />
            <div>
              <h2 id="cookie-consent-title">
                {showPreferences ? "Preferencias de cookies" : "Tu privacidad importa"}
              </h2>
              <p>
                Usamos almacenamiento necesario para el sitio. Las categorías
                opcionales solo se activan con tu consentimiento.
              </p>
            </div>
          </div>
          {canClose && (
            <button
              type="button"
              className="cookie-close-button"
              aria-label="Cerrar preferencias sin cambiar la decisión guardada"
              data-testid="cookie-close"
              onClick={() => setVisible(false)}
            >
              <FaTimes aria-hidden="true" />
            </button>
          )}
        </div>

        {showPreferences ? (
          <div className="cookie-preferences-list">
            <div className="cookie-preference-row">
              <div>
                <h3>Estrictamente necesarias</h3>
                <p>
                  Guardan la decisión de cookies y permiten funciones esenciales
                  solicitadas. Conservación: hasta borrar el almacenamiento del
                  navegador o actualizar esta política.
                </p>
              </div>
              <div className="cookie-switch-control">
                <span>Siempre activas</span>
                <ConsentSwitch
                  label="Cookies estrictamente necesarias, siempre activas"
                  checked
                  disabled
                />
              </div>
            </div>

            <div className="cookie-preference-row">
              <div>
                <h3>Analíticas y rendimiento</h3>
                <p>
                  Permitirían medir el uso y mejorar el servicio. Actualmente no
                  se carga ninguna herramienta de analítica. Conservación: la
                  [COMPLETAR: plazo del proveedor antes de activarlas].
                </p>
              </div>
              <ConsentSwitch
                label="Permitir cookies de analíticas y rendimiento"
                checked={preferences.analiticas}
                onChange={() =>
                  setPreferences((current) => ({
                    ...current,
                    analiticas: !current.analiticas,
                  }))
                }
              />
            </div>

            <div className="cookie-preference-row">
              <div>
                <h3>Marketing y publicidad</h3>
                <p>
                  Permitirían medir campañas o personalizar publicidad. Actualmente
                  no se carga ninguna herramienta publicitaria. Conservación: la
                  [COMPLETAR: plazo del proveedor antes de activarlas].
                </p>
              </div>
              <ConsentSwitch
                label="Permitir cookies de marketing y publicidad"
                checked={preferences.marketing}
                onChange={() =>
                  setPreferences((current) => ({
                    ...current,
                    marketing: !current.marketing,
                  }))
                }
              />
            </div>
          </div>
        ) : (
          <div className="cookie-category-summary">
            <p>
              <strong>Necesarias:</strong> recuerdan tu elección y sostienen
              funciones esenciales; se conservan hasta borrar los datos del
              navegador o actualizar la política.
            </p>
            <p>
              <strong>Analíticas:</strong> medición de uso, solo si se incorpora
              una herramienta; conservación: [COMPLETAR: plazo antes de
              activarlas].
            </p>
            <p>
              <strong>Marketing:</strong> medición de campañas, solo si se
              incorpora una herramienta; conservación: [COMPLETAR: plazo antes
              de activarlas].
            </p>
          </div>
        )}

        <div className="cookie-consent-footer">
          <Link to="/politica-de-cookies" className="cookie-policy-link">
            Política de Cookies
          </Link>
          <div className="cookie-consent-actions">
            {showPreferences ? (
              <button
                type="button"
                className="cookie-action cookie-action-primary"
                data-testid="cookie-save"
                onClick={savePreferences}
              >
                Guardar preferencias
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="cookie-action cookie-action-neutral"
                  data-testid="cookie-reject"
                  onClick={rejectOptional}
                >
                  Rechazar no esenciales
                </button>
                <button
                  type="button"
                  className="cookie-action cookie-action-neutral"
                  data-testid="cookie-customize"
                  onClick={openPreferences}
                >
                  Personalizar
                </button>
                <button
                  type="button"
                  className="cookie-action cookie-action-primary"
                  data-testid="cookie-accept"
                  onClick={chooseAll}
                >
                  Aceptar todas
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CookieConsent;