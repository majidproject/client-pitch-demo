import type { NextConfig } from "next";

const repo = "client-pitch-demo";

const nextConfig: NextConfig = {
  output: "export",
  
  images: {
    unoptimized: true,
  },

  basePath: `/${repo}`,
  
  assetPrefix: `/${repo}/`,
  
  trailingSlash: true,
};

export default nextConfig;