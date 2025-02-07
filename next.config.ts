import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ["m.media-amazon.com"],
  // },
  images: {
    remotePatterns: [
      {
        hostname: "books.google.com",
      },
    ],
  },
};

export default nextConfig;
