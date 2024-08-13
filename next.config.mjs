/** @type {import('next').NextConfig} */
const nextConfig = {
  javascript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    runtime: "edge", // or 'nodejs' depending on your use case
  },
};

export default nextConfig;
