// /data/reels.ts
export type Reel = {
  slug: string;
  title: string;
  url: string;          // Local: /videos/*.mp4
  thumbnail: string;    // Local: /thumbs/*.jpg
  genre: "travel" | "portrait" | "product";
  durationSec: number;
  tools: string[];
  blurb: string;
  featured?: boolean;
};

export const reels: Reel[] = [
  {
    slug: "video-1",
    title: "Portfolio – Landing Video",
    url: "/videos/video-1.mp4",
    thumbnail: "/thumbs/video-1.png",
    genre: "travel",
    durationSec: 30,
    tools: ["Camera", "Editing Software"],
    blurb: "A cinematic opening that sets the tone for a visual storytelling journey, blending soft motion with atmosphere.",
    featured: true,
  },
  {
    slug: "video-2",
    title: "Butterfly Park Travel Reel",
    url: "/videos/video-2.mp4",
    thumbnail: "/thumbs/video-2.jpg",
    genre: "portrait",
    durationSec: 45,
    tools: ["Camera", "Lighting Kit"],
    blurb: "A serene glimpse into a butterfly park, capturing the colors, stillness, and quiet beauty of nature.",
  },
  {
    slug: "video-3",
    title: "Luffy Playing Outside",
    url: "/videos/video-3.mp4",
    thumbnail: "/thumbs/video-3.png",
    genre: "product",
    durationSec: 28,
    tools: ["Camera", "Tripod"],
    blurb: "Playful moments as Luffy enjoys the outdoors, full of energy and curiosity.",
  },
  {
    slug: "video-4",
    title: "Travel Journey",
    url: "/videos/video-4.mp4",
    thumbnail: "/thumbs/video-4.png",
    genre: "travel",
    durationSec: 36,
    tools: ["Camera", "Gimbal"],
    blurb: "A travel snapshot that blends scenery, motion, and a sense of exploration.",
  },
  {
    slug: "video-5",
    title: "Evening Tea with Friends",
    url: "/videos/video-5.mov",
    thumbnail: "/thumbs/video-5.png",
    genre: "portrait",
    durationSec: 52,
    tools: ["Camera", "Prime Lens"],
    blurb: "A cozy evening shared over tea, with laughter and golden-hour warmth.",
  },
  {
    slug: "video-6",
    title: "PawSafe App Showcase",
    url: "/videos/video-6.mp4",
    thumbnail: "/thumbs/video-6.png",
    genre: "product",
    durationSec: 29,
    tools: ["Camera", "Macro Lens"],
    blurb: "A quick demo of PawSafe, a fast-scanning app designed to keep pets safe by identifying harmful items instantly.",
  },
];
