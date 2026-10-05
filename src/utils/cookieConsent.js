export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "tvplus_cookie_consent";

const CONSENT_CHANGE_EVENT = "tvplus:cookie-consent-change";
const PREFERENCES_REQUEST_EVENT = "tvplus:cookie-preferences-request";
const listeners = new Set();
let storageListenerAttached = false;

function isValidConsent(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    value.consentVersion !== undefined &&
    typeof value.necessary === "boolean" &&
    value.necessary === true &&
    typeof value.analiticas === "boolean" &&
    typeof value.marketing === "boolean" &&
    typeof value.decidedAt === "string" &&
    !Number.isNaN(Date.parse(value.decidedAt))
  );
}

function notifyConsentChange(consent) {
  listeners.forEach((listener) => listener(consent));
}

function handleStorageChange(event) {
  if (event.key === CONSENT_STORAGE_KEY || event.key === null) {
    notifyConsentChange(getConsent());
  }
}

export function getConsent() {
  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedValue === null) return null;

    const parsedValue = JSON.parse(storedValue);
    if (!isValidConsent(parsedValue)) return null;

    return {
      consentVersion: parsedValue.consentVersion,
      necessary: true,
      analiticas: parsedValue.analiticas,
      marketing: parsedValue.marketing,
      decidedAt: parsedValue.decidedAt,
    };
  } catch {
    return null;
  }
}

export function hasDecided() {
  return getConsent()?.consentVersion === CONSENT_VERSION;
}

export function isAllowed(category) {
  if (category === "necesarias") return true;
  if (category !== "analiticas" && category !== "marketing") return false;
  if (!hasDecided()) return false;

  return getConsent()?.[category] === true;
}

export function saveConsent(preferences = {}) {
  const consent = {
    consentVersion: CONSENT_VERSION,
    necessary: true,
    analiticas: preferences.analiticas === true,
    marketing: preferences.marketing === true,
    decidedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    return null;
  }

  notifyConsentChange(consent);
  return consent;
}

export function revokeConsent() {
  return saveConsent({ analiticas: false, marketing: false });
}

export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PREFERENCES_REQUEST_EVENT));
  }
}

export function subscribeToConsentChanges(listener) {
  if (typeof window === "undefined" || typeof listener !== "function") {
    return () => {};
  }

  listeners.add(listener);
  if (!storageListenerAttached) {
    window.addEventListener("storage", handleStorageChange);
    storageListenerAttached = true;
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && storageListenerAttached) {
      window.removeEventListener("storage", handleStorageChange);
      storageListenerAttached = false;
    }
  };
}

export function subscribeToPreferenceRequests(listener) {
  if (typeof window === "undefined" || typeof listener !== "function") {
    return () => {};
  }

  window.addEventListener(PREFERENCES_REQUEST_EVENT, listener);
  return () => window.removeEventListener(PREFERENCES_REQUEST_EVENT, listener);
}

// No analytics or advertising tags currently load here. Add future tag loaders behind
// isAllowed("analiticas") / isAllowed("marketing") and subscribe to consent changes.