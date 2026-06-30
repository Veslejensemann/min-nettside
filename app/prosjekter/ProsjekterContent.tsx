"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type Project = {
  title: string;
  startYear: number;
  description: string | string[];
  tags: string[];
  href: string;
  video?: string;
};

function ProjectCard({
  project,
  projectLinkLabel,
  readMoreLabel,
  readLessLabel,
}: {
  project: Project;
  projectLinkLabel: string;
  readMoreLabel: string;
  readLessLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = Array.isArray(project.description)
    ? project.description
    : [project.description];
  const isLong = paragraphs.length > 1 || paragraphs[0].length > 200;

  return (
    <div className="flex flex-col rounded-2xl border border-dashed border-slate-300 p-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-slate-700">
          {project.title}
        </h2>
        <span className="flex-none text-sm text-slate-400">
          {project.startYear}
        </span>
      </div>
      {project.video && (
        <video
          className="mt-3 w-full rounded-lg"
          controls
          preload="metadata"
        >
          <source src={project.video} type="video/mp4" />
        </video>
      )}
      <div className="mt-2 text-sm leading-relaxed text-slate-500">
        {expanded
          ? paragraphs.map((avsnitt, k) => (
              <p key={k} className={k > 0 ? "mt-2" : ""}>
                {avsnitt}
              </p>
            ))
          : <p className="line-clamp-4">{paragraphs[0]}</p>}
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 self-start text-sm font-medium text-amber-700 hover:text-amber-800"
        >
          {expanded ? readLessLabel : readMoreLabel}
        </button>
      )}
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
          {projectLinkLabel}
        </a>
      )}
    </div>
  );
}

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
        {[...prosjekter.projects]
          .sort((a, b) => b.startYear - a.startYear)
          .map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              projectLinkLabel={prosjekter.projectLinkLabel}
              readMoreLabel={prosjekter.readMoreLabel}
              readLessLabel={prosjekter.readLessLabel}
            />
          ))}
      </div>
    </main>
  );
}
