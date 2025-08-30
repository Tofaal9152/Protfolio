const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb", // or '10mb', etc.
    },
  },
};

export default nextConfig;
