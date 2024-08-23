/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"], // Directories to lint
    ignoreDuringBuilds: false, // Set to false to fail the build on ESLint errors
  },
};

export default nextConfig;
