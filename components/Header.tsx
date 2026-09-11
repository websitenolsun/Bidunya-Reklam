"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { corporateLinks, navigationItems } from "@/data/categories";
import { siteConfig } from "@/data/site";
import { tr } from "@/lib/turkish";

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/arama?q=${encodeURIComponent(value)}` : "/arama");
  }

  return (
    <>
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={siteConfig.phoneHref} className="font-semibold hover:text-champagne">
              {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref} className="hidden hover:text-champagne sm:inline">
              {siteConfig.email}
            </a>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            {siteConfig.socials.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-champagne">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex shrink-0 items-center gap-3 text-ink">
            <div className="flex h-11 w-11 items-center justify-center bg-white">
              <Image
                src={siteConfig.logoSrc}
                alt={siteConfig.logoAlt}
                width={44}
                height={44}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <span>
              <span className="block text-xl font-semibold tracking-tight">{siteConfig.name}</span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-skybrand">
                Katalog ve Teklif
              </span>
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Ana menü">
            {navigationItems.map((item) =>
              item.children ? (
                <div key={item.slug} className="group relative">
                  <Link
                    href={`/${item.slug}`}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    aria-haspopup="true"
                  >
                    {tr(item.title)}
                    <span aria-hidden className="text-xs text-skybrand">⌄</span>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 rounded-xl border border-line bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={`/${child.slug}`}
                        className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                      >
                        {tr(child.title)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                >
                  {tr(item.title)}
                </Link>
              ),
            )}

            <div className="group relative">
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-ink"
              >
                Kurumsal
              </button>
              <div className="invisible absolute right-0 top-full z-50 w-56 translate-y-2 rounded-xl border border-line bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {corporateLinks.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/${link.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-mist hover:text-ink"
                  >
                    {tr(link.title)}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <form onSubmit={onSearch} className="hidden min-w-64 max-w-sm flex-1 items-center rounded-md border border-line bg-mist/80 p-1 ring-1 ring-white lg:flex">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-slate-500"
              placeholder="Ürün kodu veya kategori ara"
              aria-label="Ürün ara"
            />
            <button type="submit" className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-royal">
              Ara
            </button>
          </form>

          <button
            type="button"
            className="ml-auto rounded-md border border-line px-4 py-2 text-sm font-bold text-ink lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Mobil menüyü aç"
          >
            Menü
          </button>
        </div>

        <form onSubmit={onSearch} className="border-t border-line bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center rounded-md border border-line bg-mist p-1">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-slate-500"
              placeholder="Ürün, kod veya kategori ara"
              aria-label="Mobil ürün ara"
            />
            <button type="submit" className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white">
              Ara
            </button>
          </div>
        </form>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
