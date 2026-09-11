import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers can't run Next.js's built-in image optimizer.
    // Images are served as-is. To re-enable on-the-fly resizing/webp,
    // enable Cloudflare Images/Resizing on the zone and switch to a
    // custom loader (see /image-loader.ts) instead of `unoptimized`.
    unoptimized: true,
  },
};

export default nextConfig;
