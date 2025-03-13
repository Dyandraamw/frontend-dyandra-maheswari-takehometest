/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.BE_URL,
      },
    ];
  },
  env: {
    JWT: process.env.JWT_SECRET,
  },
};

export default nextConfig;
