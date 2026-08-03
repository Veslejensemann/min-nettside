"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const sectionIcons = {
  cv: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 7.5h16.5M3.75 7.5v10.5A1.5 1.5 0 0 0 5.25 19.5h13.5a1.5 1.5 0 0 0 1.5-1.5V7.5M3.75 7.5 8.5 4.5h7l4.75 3M9 11.25h6"
    />
  ),
  master: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 4.5 9 4.5-9 4.5-9-4.5 9-4.5Zm-6 6.4V16c0 .8 2.7 2.5 6 2.5s6-1.7 6-2.5v-5.1"
    />
  ),
  prosjekter: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.75c-3.45 0-6 2.55-6 5.7 0 2.1 1.05 3.3 1.95 4.2.6.6.9 1.05.9 1.8h6.3c0-.75.3-1.2.9-1.8.9-.9 1.95-2.1 1.95-4.2 0-3.15-2.55-5.7-6-5.7ZM9.75 18h4.5M10.5 20.25h3"
    />
  ),
  blogg: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 3.75 19.5 6.75 9 17.25l-4.5 1.5 1.5-4.5 10.5-10.5Z"
    />
  ),
  galleri: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h2.4l1.2-1.8h5.3l1.2 1.8h2.4a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5Zm8.25 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  ),
  kontakt: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  ),
};

const sectionHrefs = {
  cv: "/cv",
  master: "/master",
  prosjekter: "/prosjekter",
  blogg: "/kode",
  galleri: "/galleri",
  kontakt: "/kontakt",
} as const;

export default function Home() {
  const { t } = useLanguage();

  const sections = (
    Object.keys(sectionHrefs) as Array<keyof typeof sectionHrefs>
  ).map((key) => ({
    href: sectionHrefs[key],
    icon: sectionIcons[key],
    ...t.home.sections[key],
  }));

  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:px-10 sm:pt-24">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="relative h-32 w-32 flex-none overflow-hidden rounded-full shadow-md ring-4 ring-amber-100/70 sm:h-40 sm:w-40">
            <Image
              src="/profile.jpg"
              alt="Jens Anders Andresen"
              fill
              sizes="(min-width: 640px) 160px, 128px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Jens Anders Andresen
            </h1>
            <p className="mt-3 flex items-center gap-2 font-serif text-lg italic text-slate-500">
              <span aria-hidden="true" className="h-px w-6 bg-amber-400" />
              {t.home.heroSubtitle}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl space-y-4 border-l-2 border-amber-200 pl-6">
          <p className="text-lg leading-relaxed text-slate-600">
            {t.home.heroGreeting}
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.home.heroName}
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.home.heroParagraph}
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.home.heroParagraphTwo}
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.home.heroParagraphThree}
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.home.heroParagraphFour}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 sm:px-10">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
          {t.home.exploreHeading}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-7 w-7 text-amber-600"
              >
                {section.icon}
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-amber-700">
                {section.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
