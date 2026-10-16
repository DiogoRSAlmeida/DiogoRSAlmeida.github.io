import { createContext, useContext } from "react";

export const LanguageContext = createContext({ lang: "pt", setLang: () => {} });

export const useLang = () => useContext(LanguageContext);
