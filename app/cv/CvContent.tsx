"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const interestIcons: Record<string, React.ReactNode> = {
  golf: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21V4l7 2.5L7 9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h10" />
      <circle cx="16.5" cy="19.5" r="1.1" />
    </>
  ),
  tennis: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" d="M5.2 6c2.8 3.3 2.8 8.7 0 12" />
      <path strokeLinecap="round" d="M18.8 6c-2.8 3.3-2.8 8.7 0 12" />
    </>
  ),
  frisbeegolf: (
    <>
      <ellipse cx="13" cy="10" rx="7.5" ry="2.75" transform="rotate(-12 13 10)" />
      <path strokeLinecap="round" d="M3 15.5h3M2 18.5h4M5.5 12.5h2.5" />
    </>
  ),
  matlagning: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11a8 8 0 0 0 16 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 11h2M20 11h2" />
      <path strokeLinecap="round" d="M9 4c0 1-1 1-1 2s1 1 1 2M14 4c0 1-1 1-1 2s1 1 1 2" />
    </>
  ),
  styrketrening: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6M4 10.5v3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v6M20 10.5v3" />
    </>
  ),
  gaming: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8h9A4.5 4.5 0 0 1 21 12.5v3a2 2 0 0 1-3.6 1.2L16 15H8l-1.4 1.7A2 2 0 0 1 3 15.5v-3A4.5 4.5 0 0 1 7.5 8Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.75 11v3M6.25 12.5h3" />
      <circle cx="16.25" cy="11.25" r="0.6" fill="currentColor" />
      <circle cx="18.25" cy="13.25" r="0.6" fill="currentColor" />
    </>
  ),
  fotografering: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9a2 2 0 0 1 2-2h1.2a1 1 0 0 0 .8-.4l1-1.3a1 1 0 0 1 .8-.4h6.4a1 1 0 0 1 .8.4l1 1.3a1 1 0 0 0 .8.4H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
      />
      <circle cx="12" cy="13" r="3.25" />
    </>
  ),
};

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
            <li key={course.text}>
              <details className="group rounded-xl border border-slate-200 px-4 py-3 open:pb-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-slate-700 [&::-webkit-details-marker]:hidden">
                  {course.text}
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
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {course.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-amber-700 hover:text-amber-800"
                >
                  {cv.coursesDownloadLabel}
                </a>
              </details>
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
        <div className="mt-4 flex flex-wrap gap-3">
          {cv.interests.map((interest) => (
            <details
              key={interest.key}
              className="group rounded-xl border border-slate-200 px-3 py-2 open:border-amber-300 open:bg-amber-50/60"
            >
              <summary className="flex cursor-pointer list-none flex-col items-center gap-1 [&::-webkit-details-marker]:hidden">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-amber-600"
                >
                  {interestIcons[interest.key]}
                </svg>
                <span className="text-xs font-medium text-slate-600">
                  {interest.label}
                </span>
              </summary>
              <p className="mt-2 max-w-40 text-xs leading-relaxed text-slate-500">
                {interest.description}
              </p>
            </details>
          ))}
        </div>
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
