/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true, // ensures stable React hydration
  },
};

export default nextConfig;
