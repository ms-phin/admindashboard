/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "edge", // Adjust according to your needs
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
export default nextConfig;
