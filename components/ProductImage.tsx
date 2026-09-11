"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ProductImageProps = {
  src: string;
  alt: string;
  code: string;
  fit: "cover" | "contain";
};

export function ProductImage({ src, alt, code, fit }: ProductImageProps) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openLightbox = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setShown(false);
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => setOpen(false), 200);
  }, []);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setShown(true));
    return () => {
      cancelAnimationFrame(raf);
      setShown(false);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    };
  }, [open, closeLightbox]);

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        aria-label={`${alt} görselini büyüt`}
        className="relative block aspect-square w-full cursor-zoom-in bg-gradient-to-br from-[#fbfaf6] to-[#f4ead2] p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <span className="absolute left-5 top-5 z-10 rounded-sm bg-slate-950 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-champagne shadow-[0_8px_20px_rgba(15,23,42,0.18)]">
          {code}
        </span>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 18vw, (min-width: 768px) 42vw, 88vw"
          quality={74}
          className={`aspect-square transition duration-500 group-hover:scale-[1.035] ${
            fit === "contain" ? "object-contain p-3" : "object-cover"
          }`}
        />
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={closeLightbox}
              className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm transition-opacity duration-200 ${
                shown ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className={`relative h-[88vh] w-[92vw] transition-transform duration-200 sm:h-[90vh] ${
                  shown ? "scale-100" : "scale-95"
                }`}
              >
                <Image src={src} alt={alt} fill sizes="92vw" className="object-contain" />
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Görseli kapat"
                title="Kapat (Esc)"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}