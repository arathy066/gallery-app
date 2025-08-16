// /components/Hero.tsx
"use client";

import Link from "next/link";
import SimpleVideo from "@/components/SimpleVideo";
import { reels } from "@/data/reels";

const Hero = () => {
  const featured = reels.find((r) => r.featured) ?? reels[0];

  return (
    <section id="hero" className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Featured Reel: {featured.title}
          </h1>
          <p className="opacity-80">
            Short cinematic reels crafted for fun, with a focus on mood, motion, and story.
          </p>
          <div className="flex gap-3">
            <a href="#gallery" className="btn btn-outline">Watch Gallery</a>
            <Link href="#contact" className="btn btn-solid">Book/Collaborate</Link>
          </div>
        </div>

        <SimpleVideo url={featured.url} />
      </div>
    </section>
  );
};

export default Hero;
