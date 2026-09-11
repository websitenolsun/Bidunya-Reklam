// Optional: Cloudflare Images / Resizing loader.
// Not used by default (next.config.ts currently sets images.unoptimized = true).
// To enable on-the-fly resizing + webp/avif conversion:
//   1) Enable "Image Resizing" (or Cloudflare Images) for your zone in the
//      Cloudflare dashboard.
//   2) In next.config.ts replace `unoptimized: true` with:
//        images: { loader: "custom", loaderFile: "./image-loader.ts" }
import type { ImageLoaderProps } from "next/image";

const normalizeSrc = (src: string) => (src.startsWith("/") ? src.slice(1) : src);

export default function cloudflareLoader({ src, width, quality }: ImageLoaderProps) {
  const params = [`width=${width}`, `quality=${quality ?? 75}`, "format=auto"];

  if (process.env.NODE_ENV === "development") {
    return `${src}?${params.join("&")}`;
  }

  return `/cdn-cgi/image/${params.join(",")}/${normalizeSrc(src)}`;
}
