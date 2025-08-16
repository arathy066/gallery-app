// /next.config.mjs
/** @type {import('next').NextConfig} */
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();

const nextConfig = {
  output: "export",
  // only set these when base is non-empty (cleaner locally)
  ...(base && { basePath: base, assetPrefix: base }),
  images: { unoptimized: true }, // required for static export
};

export default nextConfig;
