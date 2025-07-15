const nextConfig = {
  images: {
    remotePatterns: [
      {
       protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
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
