"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function CvContent() {
  const { t } = useLanguage();
  const { cv } = t;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        {cv.title}
      </h1>
      <p className="mt-3 text-slate-500">{cv.intro}</p>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cv.educationHeading}
        </h2>
        <div className="mt-4 space-y-4">
          {cv.education.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.degree}
                </h3>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{item.school}</p>
              <p className="mt-3 text-sm text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cv.experienceHeading}
        </h2>
        <div className="mt-4 space-y-4">
          {cv.experience.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-slate-300 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-700">
                  {item.role}
                </h3>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{item.company}</p>
              <p className="mt-3 text-sm text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cv.coursesHeading}
        </h2>
        <ul className="mt-4 space-y-2">
          {cv.courses.map((course) => (
            <li
              key={course.text}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600"
            >
              <span>{course.text}</span>
              <a
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none text-sm font-medium text-amber-700 hover:text-amber-800"
              >
                {cv.coursesDownloadLabel}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cv.languagesHeading}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {cv.languages.map((language) => (
            <span
              key={language}
              className="rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-700"
            >
              {language}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cv.interestsHeading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          {cv.interestsText}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cv.skillsHeading}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {cv.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          {cv.subjectsHeading}
        </h2>

        <details className="group mt-6 rounded-2xl border border-slate-200 px-4 py-4 open:pb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-700 [&::-webkit-details-marker]:hidden">
            {cv.subjectsMasterLabel}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4 flex-none text-slate-400 transition-transform group-open:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <ul className="mt-4 space-y-3">
            {cv.subjectsMaster.map((subject) => (
              <li
                key={subject.code}
                className="rounded-xl border border-slate-200 px-4 py-3"
              >
                <a
                  href={subject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                >
                  {subject.code}
                </a>
                <span className="ml-2 text-sm font-medium text-slate-900">
                  {subject.title}
                </span>
                <p className="mt-1 text-sm text-slate-500">
                  {subject.description}
                </p>
              </li>
            ))}
          </ul>
        </details>

        <details className="group mt-4 rounded-2xl border border-slate-200 px-4 py-4 open:pb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-700 [&::-webkit-details-marker]:hidden">
            {cv.subjectsBachelorLabel}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4 flex-none text-slate-400 transition-transform group-open:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <ul className="mt-4 space-y-3">
            {cv.subjectsBachelor.map((subject) => (
              <li
                key={subject.code}
                className="rounded-xl border border-slate-200 px-4 py-3"
              >
                <a
                  href={subject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                >
                  {subject.code}
                </a>
                <span className="ml-2 text-sm font-medium text-slate-900">
                  {subject.title}
                </span>
                <p className="mt-1 text-sm text-slate-500">
                  {subject.description}
                </p>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </main>
  );
}
