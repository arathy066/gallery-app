"use client";
import { useMemo } from "react";

export default function SimpleVideo({
  url,
  controls = true,
  className = "",
}: {
  url: string;
  controls?: boolean;
  className?: string;
}) {
  const src = useMemo(() => url.trim(), [url]);

  if (!src) {
    return (
      <div className="aspect-video grid place-items-center rounded-xl border text-sm opacity-70">
        Missing video URL
      </div>
    );
  }

  return (
    <div className={`aspect-video w-full overflow-hidden rounded-xl border ${className}`}>
      <video
        key={src}                 // re-mount on source change (prevents AbortError)
        src={src}
        controls={controls}
        playsInline
        preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
