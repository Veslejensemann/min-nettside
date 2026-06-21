"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

type GalleryImage = { file: string; caption: string };

export default function GalleriContent({
  images,
}: {
  images: GalleryImage[];
}) {
  const { t } = useLanguage();
  const { galleri } = t;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);
  const showPrev = useCallback(
    () =>
      setSelectedIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );
  const showNext = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, close, showPrev, showNext]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        {galleri.title}
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">{galleri.intro}</p>

      {images.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-slate-500">{galleri.emptyTitle}</p>
          <p className="mt-2 text-sm text-slate-400">
            {galleri.emptyHintPrefix}
            <code className="rounded bg-slate-100 px-1.5 py-0.5">
              public/galleri
            </code>
            {galleri.emptyHintSuffix}
          </p>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image, i) => (
            <div key={image.file} className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedIndex(i)}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-slate-100"
              >
                <Image
                  src={`/galleri/${image.file}`}
                  alt={image.caption}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
              <p className="truncate text-xs text-slate-500">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      )}

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={galleri.closeLabel}
            className="absolute right-4 top-4 text-3xl font-light text-white/80 hover:text-white"
          >
            &times;
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label={galleri.prevLabel}
                className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/80 hover:text-white sm:left-6"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label={galleri.nextLabel}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/80 hover:text-white sm:right-6"
              >
                &#8250;
              </button>
            </>
          )}

          <div
            className="flex h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-1">
              <Image
                src={`/galleri/${images[selectedIndex].file}`}
                alt={images[selectedIndex].caption}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {images[selectedIndex].caption && (
              <p className="mt-3 max-w-full text-center text-sm text-white/80">
                {images[selectedIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
