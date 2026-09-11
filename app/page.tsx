import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { FeatureBox } from "@/components/FeatureBox";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductGrid } from "@/components/ProductGrid";
import { getCategoryBySlug } from "@/data/categories";
import { getBestSellerProduct, getFeaturedProducts, getProductByCode } from "@/data/products";
import { whatsappHref } from "@/data/site";
import { tr } from "@/lib/turkish";

export const metadata: Metadata = {
  title: "Kurumsal Kupa, Madalya ve Plaket Kataloğu",
  description:
    "BİDÜNYA REKLAM ile kupa, madalya, plaket, kristal ödül ve kurumsal reklam ürünleri için ürün koduyla hızlı teklif alın.",
};

const features = [
  {
    title: "Hızlı teslimat",
    description: "Stoklu modeller ve planlı üretim süreciyle etkinlik tarihinize uygun termin desteği.",
  },
  {
    title: "Özel tasarım",
    description: "Logo, isim, etkinlik tarihi ve kurumsal kimlik detayları ürüne uygun şekilde uygulanır.",
  },
  {
    title: "Kurumsal fatura",
    description: "Şirket, okul, dernek ve organizasyon alımları için düzenli teklif ve faturalama akışı.",
  },
  {
    title: "Toplu sipariş",
    description: "Adet, model ve uygulama bilgisine göre net, hızlı ve ihtiyaca uygun teklif hazırlanır.",
  },
  {
    title: "Türkiye geneli kargo",
    description: "Üretimi tamamlanan ürünler korumalı paketleme ile teslimata hazırlanır.",
  },
];

const popularCategorySlugs = [
  "madalyalar",
  "kupalar",
  "plaketler",
  "tabaklar",
  "isimlik",
  "rozetler",
];

const productionSteps = [
  { title: "Ürün seçimi", description: "Kataloğumuzdan ihtiyacınıza uygun modeli ürün koduyla belirleyin." },
  { title: "Logo/tasarım gönderimi", description: "Logo, isim ve tasarım dosyanızı bizimle paylaşın." },
  { title: "Onay", description: "Ölçü, renk ve uygulama detaylarını birlikte netleştirelim." },
  { title: "Üretim", description: "Onaylanan tasarım doğrultusunda üretime başlanır." },
  { title: "Teslimat", description: "Ürünleriniz korumalı paketleme ile size ulaştırılır." },
];
const customOptions = ["Logo baskı", "Lazer kazıma", "İsim/tarih ekleme", "Özel ölçü", "Renk seçenekleri", "Toplu sipariş"];
const useCases = ["Okullar", "Spor turnuvaları", "Şirket etkinlikleri", "Bayi toplantıları", "Dernekler", "Mezuniyet törenleri"];

export default function HomePage() {
  const featuredCategories = popularCategorySlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((category) => Boolean(category));
  const featuredProducts = getFeaturedProducts(12);
  const cupModelSeven = getProductByCode("KUP-007");
  const cupModelNine = getProductByCode("KUP-009");
  const flagModelFive = getProductByCode("BYR-005");
  const badgeModelThree = getProductByCode("ROZ-003");
  const nameBadgeModelOne = getProductByCode("YIS-001");

  if (cupModelSeven) {
    featuredProducts[0] = cupModelSeven;
  }

  if (flagModelFive) {
    featuredProducts[3] = flagModelFive;
  }

  if (badgeModelThree) {
    featuredProducts[6] = badgeModelThree;
  }

  if (nameBadgeModelOne) {
    featuredProducts[9] = nameBadgeModelOne;
  }

  if (cupModelNine) {
    featuredProducts[10] = cupModelNine;
  }
  const bestSeller = getProductByCode("ISL-002") ?? getBestSellerProduct();

  return (
    <>
      <HeroSlider />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-skybrand">Popüler kategoriler</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">En çok talep edilen ürün grupları</h2>
            </div>
            <Link href="/kupalar" className="text-sm font-extrabold text-skybrand hover:text-ink">
              Kataloğu incele
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {featuredCategories.map((category) => (
              <CategoryCard key={category!.slug} category={category!} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-skybrand">En çok talep edilen ürünler</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">Ürün Koduyla Hemen Teklif Alın.</h2>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#ffffff,#f4f8fb)] p-4 shadow-soft">
            <Image
              src={bestSeller.image}
              alt={bestSeller.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={78}
              className="object-contain p-5"
            />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-skybrand">En çok talep edilen ürün</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{tr(bestSeller.title)}</h2>
            <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">{bestSeller.code}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{tr(bestSeller.shortDescription)}</p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
              <span className="rounded-xl bg-mist px-4 py-3">Ürün kodu: {bestSeller.code}</span>
              <span className="rounded-xl bg-mist px-4 py-3">Kategori: {tr(bestSeller.title.split(" Modeli")[0])}</span>
              <span className="rounded-xl bg-mist px-4 py-3">Teklif: WhatsApp</span>
            </div>
            <a
              href={whatsappHref(bestSeller.whatsappText)}
              className="mt-7 inline-flex rounded-xl bg-ink px-6 py-4 text-sm font-extrabold text-white hover:bg-royal"
            >
              WhatsApp ile Teklif Al
            </a>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">Avantajlar</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              Teklif sürecini hızlandıran katalog altyapısı
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-6 lg:auto-rows-[10.5rem]">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={
                  index === 0
                    ? "lg:col-span-3 lg:row-span-2"
                    : index === 3
                      ? "lg:col-span-2"
                      : index === 4
                        ? "lg:col-span-4"
                        : "lg:col-span-3"
                }
              >
                <FeatureBox {...feature} index={index} large={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">Kurumsal üretim süreci</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Üretim
                <br />
                Akışı
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-600">
                Modelden teslimata kadar her adım net ve izlenebilir. Ürün kodunu paylaştığınız andan itibaren sürecin
                her aşamasında sizinle birlikteyiz.
              </p>
            </div>

            <div className="relative pl-2">
              <div className="absolute bottom-4 left-4 top-4 w-px bg-line" aria-hidden />
              <div className="space-y-10">
                {productionSteps.map((step, index) => (
                  <div key={step.title} className="relative flex items-start gap-6">
                    <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink font-display text-xs font-semibold text-champagne">
                      {index + 1}
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
