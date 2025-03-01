import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/styles','./node_modules'],
    
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
