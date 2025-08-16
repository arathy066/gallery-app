/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',     // ✅ tells Next.js to produce static files
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;