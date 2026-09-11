import Link from "next/link";
import { quoteText, whatsappHref } from "@/data/site";

const hero = {
  title: "Kurumsal kupa, madalya ve plaket üretiminde hızlı teklif",
  description:
    "Turnuva, okul, şirket ve özel etkinlikler için kişiye özel ödül modellerini ürün koduyla kolayca talep edin.",
  href: "/kupalar",
  image: "/images/hero-oduller.png",
  mobileImage: "/images/hero-oduller-mobile.png",
  alt: "Kupa, plaket, madalya ve kurumsal ödül ürünleri",
};

export function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10">
        <picture>
          <source media="(max-width: 639px)" srcSet={hero.mobileImage} />
          <img
            src={hero.image}
            alt={hero.alt}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-x-0 top-0 h-[58%] bg-[linear-gradient(180deg,rgba(6,13,28,0.46)_0%,rgba(6,13,28,0.2)_72%,rgba(6,13,28,0)_100%)] sm:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-[60%] bg-[linear-gradient(90deg,rgba(15,23,42,0.86)_0%,rgba(15,23,42,0.7)_55%,rgba(15,23,42,0.28)_82%,rgba(15,23,42,0)_100%)] sm:block" />
      </div>

      <div className="flex min-h-[clamp(640px,176.65vw,760px)] items-start overflow-hidden px-5 pt-[clamp(32px,7vw,46px)] sm:min-h-[470px] sm:items-center sm:py-12 sm:pl-[clamp(32px,6vw,72px)] sm:pr-4 md:min-h-[560px] min-[992px]:pl-[clamp(40px,9vw,180px)]">
        <div className="w-full max-w-[21rem] sm:w-[55%] sm:max-w-[720px] min-[992px]:w-[48%]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne sm:text-xs sm:tracking-[0.24em]">
            BİDÜNYA REKLAM KATALOG
          </p>
          <div className="mt-3 h-px w-16 bg-gold sm:mt-5 sm:w-24" />
          <h1 className="mt-4 font-display text-[29px] font-semibold leading-[1.02] tracking-tight sm:mt-6 sm:text-[clamp(40px,4.25vw,52px)] sm:leading-none min-[1200px]:text-[clamp(48px,4vw,72px)]">
            <span className="sm:hidden">
              <span className="block">Kurumsal kupa,</span>
              <span className="block">madalya ve plaket</span>
              <span className="block">üretiminde</span>
              <span className="block text-champagne">hızlı teklif</span>
            </span>
            <span className="hidden sm:block">
              <span className="block min-[992px]:whitespace-nowrap">Kurumsal kupa, madalya</span>
              <span className="block min-[992px]:whitespace-nowrap">ve plaket üretiminde</span>
              <span className="block min-[992px]:whitespace-nowrap">hızlı teklif</span>
            </span>
          </h1>
          <p className="mt-4 max-w-[19.5rem] text-[13px] font-light leading-[1.65] text-slate-100 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
            <span className="sm:hidden">
              Turnuva, okul ve kurumsal etkinlikler için kişiye özel ödüllerde hızlı teklif alın.
            </span>
            <span className="hidden sm:inline">{hero.description}</span>
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-10 sm:flex sm:flex-row sm:gap-3">
            <Link
              href={hero.href}
              className="flex items-center justify-center rounded-md bg-gold px-2 py-3.5 text-center text-[12px] font-semibold text-slate-950 transition hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:px-6 sm:py-4 sm:text-sm"
            >
              Kataloğu İncele
            </Link>
            <a
              href={whatsappHref(quoteText(hero.title))}
              className="flex items-center justify-center rounded-md border border-champagne/40 bg-slate-950/50 px-2 py-3.5 text-center text-[12px] font-semibold text-white backdrop-blur transition hover:border-gold hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:bg-white/[0.08] sm:px-6 sm:py-4 sm:text-sm"
            >
              <span className="sm:hidden">WhatsApp Teklif</span>
              <span className="hidden sm:inline">WhatsApp ile Teklif Al</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
