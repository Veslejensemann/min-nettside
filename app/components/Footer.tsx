"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 py-10 text-center sm:px-10">
        <p className="text-sm font-medium text-slate-700">
          Jens Anders Andresen
        </p>
        <p className="text-xs text-slate-400">
          {t.footer.role} · © {year}
        </p>
      </div>
    </footer>
  );
}
