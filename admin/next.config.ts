import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  // config option here
  reactCompiler: true,
  turbopack: {
    root: resolve(__dirname),
  },
};

export default nextConfig;
