"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";

export default function NavBar() {
  const pathname = usePathname();
  const { t, toggleLang } = useLanguage();

  const links = [
    { href: "/", label: t.nav.hjem },
    { href: "/cv", label: t.nav.cv },
    { href: "/master", label: t.nav.master },
    { href: "/galleri", label: t.nav.galleri },
    { href: "/blogg", label: t.nav.blogg },
    { href: "/prosjekter", label: t.nav.prosjekter },
    { href: "/kontakt", label: t.nav.kontakt },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200 bg-amber-100 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Jens Anders Andresen
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.toggleAriaLabel}
            className="ml-1 rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900"
          >
            {t.nav.toggleLabel}
          </button>
        </nav>
      </div>
    </header>
  );
}
