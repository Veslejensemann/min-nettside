"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function MasterContent() {
  const { t } = useLanguage();
  const { master } = t;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        {master.title}
      </h1>
      <p className="mt-3 font-serif text-lg italic text-slate-500">
        {master.subtitle}
      </p>

      <p className="mt-8 max-w-2xl leading-relaxed text-slate-600">
        {master.paragraph}
      </p>
      {master.paragraphTwo && (
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          {master.paragraphTwo}
        </p>
      )}
      {master.paragraphThree && (
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          {master.paragraphThree}
        </p>
      )}
      {master.paragraphFour && (
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          {master.paragraphFour}
        </p>
      )}
      {master.paragraphFive && (
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          {master.paragraphFive}
        </p>
      )}

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {master.thesisHeading}
        </h2>
        <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-6">
          <h3 className="text-lg font-semibold text-slate-700">
            {master.thesisTitle}
          </h3>
          <p className="mt-3 text-sm text-slate-500">{master.thesisSummary}</p>
          <a
            href={master.thesisPdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-800"
          >
            {master.thesisPdfLabel}
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {master.dataHeading}
        </h2>
        <div className="mt-4 rounded-2xl border border-slate-200 p-6">
          <p className="text-sm leading-relaxed text-slate-500">
            {master.dataIntro}
          </p>
          <a
            href={master.dataHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-800"
          >
            {master.dataDownloadLabel}
          </a>
        </div>
      </section>
    </main>
  );
}
