import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const STORAGE_KEY = "portfolio-lang";

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // localStorage indisponível
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage indisponível
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
