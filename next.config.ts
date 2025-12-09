import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  images: {
    unoptimized: true,
  },

  basePath: "/client-pitch-demo",
  
  assetPrefix: "/client-pitch-demo/",
  
  trailingSlash: true,
};

export default nextConfig;