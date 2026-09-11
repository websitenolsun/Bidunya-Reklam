import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "BİDÜNYA REKLAM; kupa, madalya, plaket, kristal ödül ve kurumsal reklam ürünlerinde katalog odaklı teklif hizmeti sunar.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Hakkımızda" }]} />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Hakkımızda</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {siteConfig.legalName}; madalya, kupa, plaket, kristal ödül, yaka isimlik, rozet ve teknik etiket
            ürünlerinde kurumlara hızlı teklif ve planlı üretim desteği sağlayan katalog odaklı bir tedarik yapısıdır.
          </p>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {["Net teklif", "Özel uygulama", "Zamanında teslim"].map((title) => (
            <article key={title} className="rounded-xl border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Ürün kodu, adet ve tasarım ihtiyacına göre kurumsal alımı kolaylaştıran pratik bir süreç sunulur.
              </p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
