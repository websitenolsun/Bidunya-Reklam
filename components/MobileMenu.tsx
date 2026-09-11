"use client";

import Link from "next/link";
import { useState } from "react";
import { corporateLinks, navigationItems } from "@/data/categories";
import { siteConfig } from "@/data/site";
import { tr } from "@/lib/turkish";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-ink/40 lg:hidden" aria-modal="true" role="dialog">
      <div className="ml-auto flex h-full w-[min(88vw,390px)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-ink" onClick={onClose}>
            {siteConfig.name}
          </Link>
          <button
            type="button"
            className="rounded-full border border-line px-3 py-1 text-sm font-semibold text-ink"
            onClick={onClose}
            aria-label="Menüyü kapat"
          >
            Kapat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {navigationItems.map((item) => {
            const isActive = activeGroup === item.slug;

            return (
              <div key={item.slug} className="border-b border-line py-2">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-base font-bold text-ink"
                      onClick={() => setActiveGroup(isActive ? null : item.slug)}
                      aria-expanded={isActive}
                      aria-controls={`mobile-${item.slug}`}
                    >
                      {tr(item.title)}
                      <span className="text-xl text-skybrand">{isActive ? "−" : "+"}</span>
                    </button>
                    {isActive ? (
                      <div id={`mobile-${item.slug}`} className="grid gap-1 pb-3 pl-2">
                        <Link
                          href={`/${item.slug}`}
                          className="rounded-lg px-3 py-2 text-sm font-semibold text-skybrand hover:bg-mist"
                          onClick={onClose}
                        >
                          Tüm {tr(item.title)}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.slug}
                            href={`/${child.slug}`}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-mist hover:text-ink"
                            onClick={onClose}
                          >
                            {tr(child.title)}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link href={`/${item.slug}`} className="block py-3 text-base font-bold text-ink" onClick={onClose}>
                    {tr(item.title)}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="pt-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Kurumsal</p>
            <div className="grid gap-1">
              {corporateLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={`/${link.slug}`}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-mist"
                  onClick={onClose}
                >
                  {tr(link.title)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-line p-5">
          <a href={siteConfig.phoneHref} className="rounded-md bg-ink px-4 py-3 text-center text-sm font-semibold text-white">
            Telefon
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            className="rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-slate-950"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
