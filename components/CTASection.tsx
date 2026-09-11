import Link from "next/link";
import { siteConfig, whatsappHref } from "@/data/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  whatsappText?: string;
};

export function CTASection({
  title = "Sipariş ve teklif için bizimle iletişime geçin",
  description = "Ürün kodunu, adet bilgisini ve varsa logo/tasarım dosyanızı paylaşın; size hızlı ve net bir teklif hazırlayalım.",
  whatsappText = "Merhaba, ürünleriniz hakkında teklif almak istiyorum.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,167,232,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(214,164,48,0.18),transparent_28%)]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-champagne">Hızlı teklif</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">{description}</p>
        </div>
        <div className="relative grid gap-3 sm:grid-cols-3 lg:min-w-[520px]">
          <a
            href={siteConfig.phoneHref}
            className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 hover:shadow-gold"
          >
            Telefon
          </a>
          <a
            href={whatsappHref(whatsappText)}
            className="rounded-md bg-gold px-5 py-3 text-center text-sm font-semibold text-slate-950 hover:shadow-gold"
          >
            WhatsApp
          </a>
          <Link
            href="/iletisim"
            className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-ink hover:bg-champagne hover:shadow-gold"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  );
}
