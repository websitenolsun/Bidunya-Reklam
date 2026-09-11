import Link from "next/link";
import { navigationGroups } from "@/data/categories";
import { siteConfig } from "@/data/site";
import { tr } from "@/lib/turkish";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-200">{siteConfig.description}</p>
          <div className="mt-5 grid gap-2 text-sm text-slate-200">
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>
            <span>{siteConfig.address}</span>
            <span>{siteConfig.workingHours}</span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {navigationGroups.map((group) => (
            <div key={group.slug}>
              <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-champagne">{tr(group.title)}</h2>
              <div className="mt-4 grid gap-2">
                {group.items.slice(0, 7).map((item) => (
                  <Link key={item.slug} href={`/${item.slug}`} className="text-sm text-slate-200 hover:text-white">
                    {tr(item.title)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
