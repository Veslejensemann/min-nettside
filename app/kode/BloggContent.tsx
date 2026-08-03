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
            <h2 className="text-lg font-semibold text-slate-700">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {post.excerpt}
            </p>
            {"video" in post && post.video && (
              <video
                className="mt-3 w-full rounded-lg"
                controls
                preload="metadata"
              >
                <source src={post.video as string} type="video/mp4" />
              </video>
            )}
            {"tags" in post && Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {(post.tags as string[]).map((tag, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {post.href && (
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-800"
              >
                {blogg.downloadLabel}
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
