"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function KontaktContent() {
  const { t } = useLanguage();
  const { kontakt } = t;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        {kontakt.title}
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">{kontakt.intro}</p>

      <div className="mt-12 space-y-4">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            {kontakt.emailLabel}
          </h2>
          <a
            href={`mailto:${kontakt.email}`}
            className="mt-2 inline-block text-slate-700 hover:text-amber-700"
          >
            {kontakt.email}
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            {kontakt.linkedinLabel}
          </h2>
          <a
            href={kontakt.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-slate-700 hover:text-amber-700"
          >
            {kontakt.linkedin}
          </a>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative h-32 w-32 flex-none overflow-hidden rounded-full shadow-md ring-4 ring-amber-100/70">
          <Image
            src="/profile.jpg"
            alt="Jens Anders Andresen"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
