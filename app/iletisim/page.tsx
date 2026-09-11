import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { siteConfig, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Madalya, kupa, plaket ve kurumsal ödül ürünleri için telefon, e-posta veya WhatsApp üzerinden teklif alın.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "İletişim" }]} />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">İletişim</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Ürün kodu, adet, teslim tarihi ve varsa logo dosyanızı paylaşarak hızlı teklif alabilirsiniz.
          </p>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <a href={siteConfig.phoneHref} className="rounded-xl border border-line bg-white p-6 shadow-sm hover:shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-skybrand">Telefon</p>
            <p className="mt-3 text-xl font-black text-ink">{siteConfig.phone}</p>
          </a>
          <a href={whatsappHref("Merhaba, teklif almak istiyorum.")} className="rounded-xl border border-line bg-white p-6 shadow-sm hover:shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-skybrand">WhatsApp</p>
            <p className="mt-3 text-xl font-black text-ink">{siteConfig.whatsapp}</p>
          </a>
          <a href={siteConfig.emailHref} className="rounded-xl border border-line bg-white p-6 shadow-sm hover:shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-skybrand">E-posta</p>
            <p className="mt-3 text-xl font-black text-ink">{siteConfig.email}</p>
          </a>
        </div>
      </section>
      <CTASection />
    </>
  );
}
