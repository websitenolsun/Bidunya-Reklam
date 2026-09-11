import Link from "next/link";
import type { Category } from "@/data/categories";
import { categories } from "@/data/categories";
import { tr } from "@/lib/turkish";

const parentUseCases: Record<string, string[]> = {
  madalyalar: ["Spor turnuvaları", "Okul yarışmaları", "Kurumsal etkinlikler", "Koşu ve maratonlar"],
  oduller: ["Şirket ödül törenleri", "Bayi toplantıları", "Spor organizasyonları", "Mezuniyet programları"],
  plaketler: ["Teşekkür sunumları", "Hizmet yılı törenleri", "Protokol hediyeleri", "Kurumsal takdir programları"],
  isimlik: ["Personel kimliklendirme", "Ofis ve resepsiyonlar", "Etkinlikler", "Kurumsal organizasyonlar"],
  bayraklar: ["Makam odaları", "Yönetici masaları", "Resmî kurumlar", "Kurumsal ofisler"],
  "diger-urunler": ["Personel kimliklendirme", "Promosyon çalışmaları", "Teknik etiketleme", "Yönlendirme uygulamaları"],
};

const customization = [
  "Logo baskı",
  "Lazer kazıma",
  "İsim ve tarih ekleme",
  "Özel ölçü",
  "Renk seçenekleri",
  "Toplu sipariş",
];

export function CategoryContentBlocks({ category, productCount }: { category: Category; productCount: number }) {
  const related = categories
    .filter((item) => item.parent === category.parent && item.slug !== category.slug)
    .slice(0, 4);
  const useCases = parentUseCases[category.parent] ?? parentUseCases["diger-urunler"];

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff,#f7fafc)] py-12">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="rounded-2xl border border-line bg-white p-6 shadow-sm lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-skybrand">Kategori rehberi</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
            Bu kategoride hangi ürünler hazırlanır?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {tr(category.bottomDescription)} {productCount <= 2
              ? "Aradığınız modele en yakın ürün kodunu gönderin, özel üretim seçeneklerini birlikte netleştirelim."
              : "Ürün kodunu paylaşarak ölçü, adet, teslim tarihi ve uygulama detayları için hızlı teklif alabilirsiniz."}
          </p>
        </article>

        <article className="rounded-2xl border border-amber-200/70 bg-amber-50/60 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Kullanım alanları</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {useCases.map((item) => (
              <span key={item} className="rounded-full border border-amber-200 bg-white px-3 py-2 text-xs font-semibold text-amber-900">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Özelleştirme seçenekleri</h2>
          <div className="mt-4 grid gap-2">
            {customization.map((item) => (
              <span key={item} className="rounded-xl bg-mist px-3 py-2 text-sm font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-line bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Sık sorulan sorular</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Teklif almak için ne göndermeliyim?", "Ürün kodu, adet, teslim tarihi ve varsa logo/tasarım dosyası yeterlidir."],
              ["Özel tasarım yapılabiliyor mu?", "Evet. Malzeme, ölçü, renk ve uygulama tekniği ihtiyaca göre netleştirilir."],
              ["Toplu siparişlerde süreç nasıl işler?", "Model seçimi sonrası tasarım onayı alınır, ardından üretim ve teslimat planlanır."],
              ["Fotoğraftaki modele yakın üretim yapılır mı?", "Benzer ürün kodunu paylaşmanız halinde uygun alternatifler birlikte belirlenir."],
            ].map(([question, answer]) => (
              <div key={question}>
                <h3 className="text-sm font-bold text-ink">{question}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-line bg-ink p-6 text-white shadow-sm lg:col-span-3">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">İlgili kategoriler</h2>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Benzer ürün gruplarını inceleyerek teklif talebinizi daha hızlı netleştirebilirsiniz.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                >
                  {tr(item.menuTitle ?? item.title)}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
