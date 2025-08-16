import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ---- Next.js (GitHub Pages) settings ----
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: '/gallery-app',   // repo name
    assetPrefix: '/gallery-app/',
};

// ---- Sentry plugin settings ----
const sentryWebpackPluginOptions = {
    silent: true,
    org: 'javascript-mastery',      // change to your Sentry org if you use it
    project: 'javascript-nextjs',   // change to your Sentry project if you use it
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
