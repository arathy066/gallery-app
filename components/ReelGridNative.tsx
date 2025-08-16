"use client";

import { useEffect, useState } from "react";
import type { Reel } from "@/data/reels";
import NativeVideo from "./NativeVideo";

/** For GitHub Pages: set NEXT_PUBLIC_BASE_PATH="/<repo>" in prod */
const BASE = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();
const withBase = (p: string) => (/^https?:\/\//i.test(p) ? p : `${BASE}${p}`);

export default function ReelGridNative({ reels }: { reels: Reel[] }) {
  const [open, setOpen] = useState<Reel | null>(null);

  // Esc to close modal
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((r) => (
          <button
            key={r.slug}
            onClick={() => setOpen(r)}
            className="group text-left rounded-xl border overflow-hidden hover:shadow transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label={`Open ${r.title}`}
          >
            {/* Use poster (thumbnail) directly via <video> for super-fast thumbs */}
            <NativeVideo
              src={withBase(r.url)}
              poster={withBase(r.thumbnail)}
              controls={false}
              className="group-hover:brightness-110"
            />
            <div className="p-3">
              <div className="font-medium">{r.title}</div>
              <div className="text-sm opacity-70 line-clamp-2">{r.blurb}</div>
              <div className="mt-2 text-xs opacity-60">
                {Math.round(r.durationSec)}s • {r.genre} • {r.tools.join(" • ")}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
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
              <button
                onClick={() => setOpen(null)}
                className="text-sm opacity-80 hover:opacity-100"
              >
                Close
              </button>
            </div>

            <div className="p-4 space-y-4">
              <NativeVideo
                src={withBase(open.url)}
                poster={withBase(open.thumbnail)}
                controls
              />
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
