"use client";

import Hero from "@/components/Hero";
// If you switched to the native <video> grid I sent:
import ReelGridNative from "@/components/ReelGridNative";
// If you’re still using the ReactPlayer grid, replace the import above with:
// import ReelGrid from "@/components/ReelGrid";

import { reels } from "@/data/reels";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-[#0b0b0f] text-neutral-200">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
          <a href="#hero" className="font-semibold">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div className="ml-auto text-sm opacity-80">Cinematic Reel Showcase</div>
        </nav>
      </header>

      {/* Hero Section */}
      {/* Ensure your <section> in Hero has id="hero" OR wrap it here */}
      <div id="hero">
        <Hero />
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        {/* Use the grid you chose */}
        <ReelGridNative reels={reels} />
        {/* If using ReactPlayer version instead:
            <ReelGrid reels={reels} />
        */}
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 max-w-2xl opacity-80">
          I create short-form cinematic videos that blend natural light,
          handheld movement, and tight sound design. Tools I love: Sony A7IV,
          DJI RS4, DaVinci Resolve, and After Effects.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            className="rounded-lg border px-4 py-2 hover:bg-white/10"
            href="mailto:101611066@georgebrown.ca"
          >
            Email
          </a>
          <a
            className="rounded-lg border px-4 py-2 hover:bg-white/10"
            href="https://www.instagram.com/arathyy.r?igsh=MWtjejNveXM1NWoz"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
          <a
            className="rounded-lg border px-4 py-2 hover:bg-white/10"
            href="https://www.linkedin.com/in/arathy-rajesh-6940392b8/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm opacity-70">
          © {new Date().getFullYear()} Arathy Rajesh
        </div>
      </footer>
    </main>
  );
}
