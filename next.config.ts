import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/styles','./node_modules'],
  },
};

export default nextConfig;
