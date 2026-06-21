"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import translations, { type Lang, type Translations } from "@/app/lib/translations";

type LanguageContextValue = {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
};

const STORAGE_KEY = "lang";
const CHANGE_EVENT = "lang-change";

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

function isLang(value: string | null): value is Lang {
  return value === "no" || value === "en";
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}

function getSnapshot(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : "no";
}

function getServerSnapshot(): Lang {
  return "no";
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    const next: Lang = lang === "no" ? "en" : "no";
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
