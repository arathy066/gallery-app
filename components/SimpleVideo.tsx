// /components/SimpleVideo.tsx
"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type React from "react";

type RPProps = {
  url: string | string[];
  width?: string | number;
  height?: string | number;
  playing?: boolean;
  controls?: boolean;
  onReady?: () => void;
  onError?: (e: any) => void;
  config?: any;
};

const ReactPlayer = dynamic(
  () => import("react-player").then((m) => m.default as any),
  { ssr: false }
) as React.ComponentType<RPProps>;

export default function SimpleVideo({
  url,
  playing = false,
  controls = true,
}: {
  url: string;
  playing?: boolean;
  controls?: boolean;
}) {
  const [fallback, setFallback] = useState(false);
  const safeUrl = useMemo(() => (url?.trim() ? url.trim() : ""), [url]);

  if (!safeUrl) {
    return (
      <div className="aspect-video w-full rounded-xl border grid place-items-center text-sm opacity-70">
        Missing/invalid video URL
      </div>
    );
  }

  if (fallback) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border">
        <video
          key={safeUrl}
          src={safeUrl}
          controls={controls}
          playsInline
          preload="metadata"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border">
      <ReactPlayer
        key={safeUrl}
        url={safeUrl}
        width="100%"
        height="100%"
        playing={playing}
        controls={controls}
        onError={(e) => {
          console.warn("ReactPlayer error → fallback to <video>:", e);
          setFallback(true);
        }}
        config={{
          file: {
            forceVideo: true,
            attributes: {
              preload: "metadata",
              playsInline: true,
            },
          },
        }}
      />
    </div>
  );
}
