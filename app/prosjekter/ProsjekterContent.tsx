"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function ProsjekterContent() {
  const { t } = useLanguage();
  const { prosjekter } = t;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        {prosjekter.title}
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">{prosjekter.intro}</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {prosjekter.projects.map((project, i) => (
          <div
            key={i}
            className="rounded-2xl border border-dashed border-slate-300 p-6"
          >
            <h2 className="text-lg font-semibold text-slate-700">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-800"
              >
                {prosjekter.projectLinkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
