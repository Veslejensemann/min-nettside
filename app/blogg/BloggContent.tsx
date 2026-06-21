"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function BloggContent() {
  const { t } = useLanguage();
  const { blogg } = t;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        {blogg.title}
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">{blogg.intro}</p>

      <div className="mt-12 space-y-5">
        {blogg.posts.map((post, i) => (
          <article
            key={i}
            className="rounded-2xl border border-dashed border-slate-300 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-700">
                {post.title}
              </h2>
              <span className="text-sm text-slate-400">{post.date}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
