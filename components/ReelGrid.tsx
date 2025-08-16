// /components/ReelGrid.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SimpleVideo from "@/components/SimpleVideo";
import type { Reel } from "@/data/reels";

export default function ReelGrid({ reels }: { reels: Reel[] }) {
  const [open, setOpen] = useState<Reel | null>(null);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((r) => (
          <button
            key={r.slug}
            onClick={() => setOpen(r)}
            className="group text-left rounded-xl border overflow-hidden hover:shadow transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label={`Open ${r.title}`}
          >
            <div className="relative">
              {r.thumbnail ? (
                <div className="relative w-full aspect-video">
                  <Image
                    src={r.thumbnail}   // ✅ already base-pathed or external
                    alt={r.title}
                    fill
                    unoptimized
                    className="object-cover transition group-hover:scale-[1.02]"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video grid place-items-center text-xs opacity-70">
                  No thumbnail
                </div>
              )}
              <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/70 text-white">
                {Math.round(r.durationSec)}s • {r.genre}
              </div>
            </div>

            <div className="p-3">
              <div className="font-medium">{r.title}</div>
              <div className="text-sm opacity-70 line-clamp-2">{r.blurb}</div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="max-w-3xl w-full rounded-2xl bg-neutral-950 border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">{open.title}</h3>
              <button onClick={() => setOpen(null)} className="text-sm opacity-80 hover:opacity-100">
                Close
              </button>
            </div>

            <div className="p-4 space-y-4">
              <SimpleVideo url={open.url} />   {/* ✅ no extra prefixing */}
              <p className="text-sm opacity-80">{open.blurb}</p>
              <div className="text-xs opacity-70">
                Tools: {open.tools.join(" • ")} • {Math.round(open.durationSec)}s • {open.genre}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
