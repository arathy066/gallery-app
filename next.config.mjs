/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/gallery-app',     // repo name
  assetPrefix: '/gallery-app/', // repo name
};

export default nextConfig;
