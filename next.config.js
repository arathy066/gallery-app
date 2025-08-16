// /next.config.cjs
/** @type {import('next').NextConfig} */
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();

const nextConfig = {
  output: "export",
  basePath: base,
  assetPrefix: base,
  images: { unoptimized: true },
};

module.exports = nextConfig;
