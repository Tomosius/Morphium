import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
      images: { unoptimized: true }, // disables Next.js default image optimization

};

export default nextConfig;
