/** @type {import('next').NextConfig} */

const ghpageURL = process.env.ghpageURL
  ? `/${process.env.ghpageURL}`
  : undefined;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: ghpageURL,
  basePath: ghpageURL,
  images: {
    unoptimized: true,
    domains: ['userjy.github.io, github.com, localhost'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
